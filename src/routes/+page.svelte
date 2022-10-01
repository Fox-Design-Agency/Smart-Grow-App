<script lang="ts">
	import Button from '@smui/button';

	import type { IDevice } from '$lib/interfaces/device/device';

	import { PUBLIC_API_URL } from '$env/static/public';

	let device: IDevice;

	console.log(PUBLIC_API_URL);
</script>

<svelte:head>
	<title>Totaly Legit Grow Management</title>
</svelte:head>

<h1 class="text-3xl font-bold underline">Hello world!</h1>

<Button on:click={() => alert('it worked!')}>Click ME!</Button>
<Button on:click={() => alert('it worked!')} color="secondary">Click ME!</Button>
