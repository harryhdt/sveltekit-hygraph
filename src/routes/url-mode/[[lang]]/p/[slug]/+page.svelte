<script lang="ts">
	import Head from '$lib/components/Head.svelte';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
</script>

<Head title={data.data.name} description={data.data.description.text} />

<a href="/url-mode/p/{data.data.slug}">English</a> -
<a href="/url-mode/fr/p/{data.data.slug}">French</a>
<br /><br />
{JSON.stringify(data)}
