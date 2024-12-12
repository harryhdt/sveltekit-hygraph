<script lang="ts">
	interface Props {
		title: string;
		description?: string;
		thumbnail?: string;
	}
	let { title, description = '', thumbnail = '' }: Props = $props();

	function cleanMetaDescription(text: string) {
		let cleaned = text
			.replace(/(\\n|\n|⁠)+/g, ' ')
			.replace(/\s+/g, ' ')
			.trim();
		return cleaned.length > 160 ? cleaned.slice(0, 157) + '...' : cleaned;
	}

	description = cleanMetaDescription(description);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	<meta name="description" content={description} />

	<!-- Google / Search Engine Tags -->
	<meta itemprop="name" content={title} />
	<meta itemprop="description" content={description} />
	<meta itemprop="image" content={thumbnail} />

	<!-- Facebook Meta Tags -->
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={thumbnail} />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={thumbnail} />
</svelte:head>
