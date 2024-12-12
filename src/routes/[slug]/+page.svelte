<script lang="ts">
	import Head from '$lib/components/Head.svelte';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
</script>

<Head title={data.data.name} description={data.data.description.text} />

{JSON.stringify(data)}
