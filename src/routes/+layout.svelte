<script lang="ts">
	import '../tailwind.css';
	import { onMount } from 'svelte';
	import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar';
	import IconButton, { Icon } from '@smui/icon-button';
	import { mdiMenu, mdiWeatherNight, mdiWeatherSunny } from '@mdi/js';
	import { Svg } from '@smui/common/elements';

	// should be type TopAppBarComponentDev, but throwing
	// console error currently, so leaving off
	let topAppBar;

	// TODO, moving to a user settings, leaving here for easy
	// switching and checking of styles
	let darkTheme: boolean | undefined = undefined;

	onMount(() => {
		darkTheme = window.matchMedia('(prefer-color-scheme: dark)').matches;
	});
</script>

<svelte:head>
	<!-- SMUI Styles -->
	{#if darkTheme === undefined}
		<link rel="stylesheet" href="/smui.css" media="(prefers-color-scheme: light)" />
		<link rel="stylesheet" href="/smui-dark.css" media="screen and (prefers-color-scheme: dark)" />
	{:else if darkTheme}
		<link rel="stylesheet" href="/smui.css" />
		<link rel="stylesheet" href="/smui-dark.css" media="screen" />
	{:else}
		<link rel="stylesheet" href="/smui.css" />
	{/if}
</svelte:head>

<TopAppBar bind:this={topAppBar} variant="standard">
	<Row>
		<Section>
			<IconButton>
				<Icon component={Svg} viewBox="0 0 24 24">
					<path fill="currentColor" d={mdiMenu} />
				</Icon>
			</IconButton>
		</Section>
		<Section align="end" toolbar>
			<!-- Theme switcher, remove in future version-->
			<IconButton on:click={() => (darkTheme = !darkTheme)}
				><Icon component={Svg} viewBox="0 0 24 24">
					<path fill="currentColor" d={darkTheme ? mdiWeatherSunny : mdiWeatherNight} />
				</Icon></IconButton
			>
		</Section>
	</Row>
</TopAppBar>

<AutoAdjust {topAppBar}>
	<slot />
</AutoAdjust>
