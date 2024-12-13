<script lang="ts">
	import { page } from '$app/stores';
	import { toggleLang } from '$lib';
	import Head from '$lib/components/Head.svelte';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
</script>

<Head title="Sveltekit + Hygraph" description="is a Sveltekit + Hygraph" />

<button onclick={() => toggleLang(data.lang)}
	>Switch lang to {data.lang === 'en' ? 'fr' : 'en'}</button
>
<br />
<br />
Data: {JSON.stringify(data.data?.length)}
<br />
Lang: {data.lang}
<br />
<br />
{#if data.data}
	{#each data.data as product}
		{JSON.stringify(product)}
		<br />
		<a href="{$page.url.pathname}/{product.slug}">{product.name}</a>
		<br />
		<br />
	{/each}
{/if}
