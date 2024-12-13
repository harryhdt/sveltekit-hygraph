<script lang="ts">
	import { page } from '$app/stores';
	import Head from '$lib/components/Head.svelte';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
</script>

<Head title="Sveltekit + Hygraph" description="is a Sveltekit + Hygraph" />

<a href="/url-mode">English</a> - <a href="/url-mode/fr">French</a>
<br /><br />
Data: {JSON.stringify(data.data?.length)}
<br />
Lang: {data.lang}
<br />
<br />
{#if data.data}
	{#each data.data as product}
		{JSON.stringify(product)}
		<br />
		<a href="/url-mode{data.lang !== 'en' ? `/${data.lang}` : ''}/p/{product.slug}"
			>{product.name}</a
		>
		<br />
		<br />
	{/each}
{/if}
