<script lang="ts">
	import { navigating } from '$app/stores';
	import { AppStore } from '$lib/stores/app.svelte';

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

{#if showLoader || AppStore.showLoading}
	<div
		style="position: fixed; inset: 0;background:#ffffff77;cursor: wait;backdrop-filter: blur(4px);"
	>
		Loading...
	</div>
{/if}

{@render children()}
