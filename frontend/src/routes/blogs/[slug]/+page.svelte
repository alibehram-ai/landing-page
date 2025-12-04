<script lang="ts">
	import { urlForImage } from '$lib/sanity';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const post = $derived(data.post);
	const imageUrl = $derived(post?.mainImage ? urlForImage(post.mainImage) : undefined);
	const formattedDate = $derived(
		post?.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', {
			month: 'long',
			day: 'numeric',
			year: 'numeric'
		}) : ''
	);

	// Helper function to render block content
	function renderBlockContent(blocks: any[]) {
		if (!blocks) return '';
		return blocks
			.map((block) => {
				if (block._type === 'block') {
					const children = block.children
						?.map((child: any) => {
							let text = child.text;
							if (child.marks?.includes('strong')) text = `<strong>${text}</strong>`;
							if (child.marks?.includes('em')) text = `<em>${text}</em>`;
							return text;
						})
						.join('');

					switch (block.style) {
						case 'h1':
							return `<h1 class="mb-6 mt-8 text-4xl font-bold">${children}</h1>`;
						case 'h2':
							return `<h2 class="mb-4 mt-8 text-3xl font-bold">${children}</h2>`;
						case 'h3':
							return `<h3 class="mb-4 mt-6 text-2xl font-bold">${children}</h3>`;
						case 'h4':
							return `<h4 class="mb-3 mt-6 text-xl font-bold">${children}</h4>`;
						case 'blockquote':
							return `<blockquote class="my-6 border-l-4 border-gray-300 pl-4 italic">${children}</blockquote>`;
						default:
							return `<p class="mb-4 leading-7">${children}</p>`;
					}
				} else if (block._type === 'image') {
					const imgUrl = urlForImage(block);
					return imgUrl
						? `<img src="${imgUrl}" alt="${block.alt || ''}" class="my-8 w-full rounded-lg" />`
						: '';
				}
				return '';
			})
			.join('');
	}

	const bodyHtml = $derived(post.body ? renderBlockContent(post.body) : '');
</script>

<svelte:head>
	<title>{post.title}</title>
	<meta name="description" content={post.title} />
</svelte:head>

<article class="min-h-screen bg-[#F5F5F0]">
	<div class="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
		<!-- Header -->
		<header class="mb-12">
			<a
				href="/blogs"
				class="mb-8 inline-flex items-center text-sm font-semibold text-[#1E1E1E] hover:opacity-70"
			>
				<svg
					class="mr-2 h-4 w-4"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"
					></path>
				</svg>
				Back to Blog
			</a>

			{#if post.categories && post.categories.length > 0}
				<div class="mb-4 flex flex-wrap gap-2">
					{#each post.categories as category}
						<span class="rounded-full bg-gray-100 px-3 py-1 text-sm text-[#1E1E1E]">
							{category.title}
						</span>
					{/each}
				</div>
			{/if}

			<h1 class="mb-4 text-5xl font-bold leading-tight text-[#1E1E1E]">
				{post.title}
			</h1>

			<div class="flex items-center gap-4 text-sm text-[#1E1E1E] opacity-70">
				<span>{formattedDate}</span>
				{#if post.author}
					<span>•</span>
					<span>By {post.author.name}</span>
				{/if}
			</div>
		</header>

		<!-- Featured Image -->
		{#if imageUrl}
			<div class="mb-12 overflow-hidden rounded-lg">
				<img src={imageUrl} alt={post.title} class="h-auto w-full" />
			</div>
		{/if}

		<!-- Body Content -->
		<div class="prose prose-lg max-w-none">
			{@html bodyHtml}
		</div>

		<!-- Author Bio -->
		{#if post.author?.bio}
			<div class="mt-12 border-t border-gray-200 pt-8">
				<div class="flex items-start gap-4">
					{#if post.author.image}
						<img
							src={urlForImage(post.author.image)}
							alt={post.author.name}
							class="h-16 w-16 rounded-full"
						/>
					{/if}
					<div>
						<h3 class="text-lg font-bold text-[#1E1E1E]">
							{post.author.name}
						</h3>
						<div class="mt-2 text-sm text-[#1E1E1E] opacity-70">
							{@html renderBlockContent(post.author.bio)}
						</div>
					</div>
				</div>
			</div>
		{/if}
	</div>
</article>
