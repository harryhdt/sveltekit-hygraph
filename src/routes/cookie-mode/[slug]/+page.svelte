<script lang="ts">
	import { toggleLang } from '$lib';
	import Head from '$lib/components/Head.svelte';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
</script>

<Head title={data.data.name} description={data.data.description.text} />

<button onclick={() => toggleLang(data.lang)}
	>Switch lang to {data.lang === 'en' ? 'fr' : 'en'}</button
>
<br />
<br />
{JSON.stringify(data)}
