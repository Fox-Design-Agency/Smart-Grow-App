<script lang="ts">
	import Button from '@smui/button';

	import type { IDevice } from '$lib/interfaces/device/device';

	let device: IDevice;
</script>

<h1 class="text-3xl font-bold underline">Hello world!</h1>

<Button on:click={() => alert('it worked!')}>Click ME!</Button>
<Button on:click={() => alert('it worked!')} color="secondary">Click ME!</Button>
