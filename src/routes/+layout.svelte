<script lang="ts">
	import '../tailwind.css';
	import { onMount } from 'svelte';
	import TopAppBar, { Row, Section, AutoAdjust } from '@smui/top-app-bar';
	import type { TopAppBarComponentDev } from '@smui/top-app-bar';
	import IconButton, { Icon } from '@smui/icon-button';
	import { mdiMenu, mdiWeatherNight, mdiWeatherSunny } from '@mdi/js';
	import { Svg } from '@smui/common/elements';
	import Drawer, { AppContent, Content, Header, Title, Subtitle, Scrim } from '@smui/drawer';
	import Button, { Label } from '@smui/button';
	import List, { Item, Text, Graphic, Separator, Subheader } from '@smui/list';
	import { H6 } from '@smui/common/elements';

	let topAppBar: TopAppBarComponentDev;

	// TODO, moving to a user settings, leaving here for easy
	// switching and checking of styles
	let darkTheme: boolean | undefined = undefined;

	onMount(() => {
		darkTheme = window.matchMedia('(prefer-color-scheme: dark)').matches;
	});

	let open = false;
	let active = 'Menu';

	function setActive(value: string) {
		active = value;
		open = false;
	}
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

<!-- HEADER -->
<TopAppBar bind:this={topAppBar} variant="standard">
	<Row>
		<Section>
			<IconButton on:click={() => (open = !open)}>
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

<!-- DRAWER -->
<div class="drawer-container">
	<!-- Don't include fixed={false} if this is a page wide drawer.
		  It adds a style for absolute positioning. -->
	<Drawer variant="modal" fixed={false} bind:open>
		<Header>
			<a href="/" on:click={() => setActive('')}><Title>Totally Legit Grow Management App</Title></a
			>
			<Subtitle>It's pretty legit.</Subtitle>
		</Header>
		<Content>
			<List>
				<!-- MAIN NAV LIST -->
				<Item
					href="/grow-mediums"
					on:click={() => setActive('GrowMediums')}
					activated={active === 'GrowMediums'}
				>
					<Text>Grow Mediums</Text>
				</Item>
				<Item
					href="/nutrients"
					on:click={() => setActive('Nutrients')}
					activated={active === 'Nutrients'}
				>
					<Text>Nutrients</Text>
				</Item>
				<Item
					href="/organizations"
					on:click={() => setActive('Organizations')}
					activated={active === 'Organizations'}
				>
					<Text>Organizations</Text>
				</Item>
				<Item
					href="/plant-categories"
					on:click={() => setActive('PlantCategories')}
					activated={active === 'PlantCategories'}
				>
					<Text>Plant Categories</Text>
				</Item>
				<Item
					href="/plant-lifecycles"
					on:click={() => setActive('PlantLifecycles')}
					activated={active === 'PlantLifecycles'}
				>
					<Text>Plant Lifecycles</Text>
				</Item>
				<Item
					href="/plant-stages"
					on:click={() => setActive('PlantStages')}
					activated={active === 'PlantStages'}
				>
					<Text>Plant Stages</Text>
				</Item>
				<Item
					href="/products"
					on:click={() => setActive('Products')}
					activated={active === 'Products'}
				>
					<Text>Products</Text>
				</Item>
				<Item href="/seeds" on:click={() => setActive('Seeds')} activated={active === 'Seeds'}>
					<Text>Seeds</Text>
				</Item>

				<Separator />
				<!-- MEMBER SPECIFIC NAV LIST -->
				<Subheader component={H6}>Member Name</Subheader>
				<Item href="/tasks" on:click={() => setActive('Tasks')} activated={active === 'Tasks'}>
					<Text>Tasks</Text>
				</Item>
				<Item
					href="/settings"
					on:click={() => setActive('Settings')}
					activated={active === 'Settings'}
				>
					<Text>Settings</Text>
				</Item>
			</List>
			<div class="flex flex-col m-2">
				<Button on:click={() => alert('TODO: Logout')} class="mt-32 " color="secondary">
					<Label>Logout</Label>
				</Button>
				<p class="text-xs mt-2">
					Copyright 2022 Fox Design Agency. All rights reserved. Use of this application is governed
					by a MIT-style license.
				</p>
			</div>
		</Content>
	</Drawer>
	<Scrim fixed={false} />
	<AutoAdjust {topAppBar}>
		<slot />
	</AutoAdjust>
</div>
