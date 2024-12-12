<script lang="ts">
	import { navigating } from '$app/stores';

	let showLoader = $state(false);

	$effect(() => {
		if ($navigating) {
			const interval = setInterval(() => {
				showLoader = true;
			}, 300);

			return () => {
				showLoader = false;
				clearInterval(interval);
			};
		}
	});

	const { children } = $props();
</script>

{#if showLoader}
	<div>Loading...</div>
{/if}

{@render children()}
