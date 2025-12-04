<script lang="ts">
	import { urlForImage } from '$lib/sanity';

	interface Props {
		title: string;
		slug: string;
		mainImage?: any;
		publishedAt: string;
		author: {
			name: string;
		};
	}

	let { title, slug, mainImage, publishedAt, author }: Props = $props();

	const imageUrl = $derived(mainImage ? urlForImage(mainImage) : undefined);
	const formattedDate = $derived(new Date(publishedAt).toLocaleDateString('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric'
	}));
</script>

<a href="/blogs/{slug}" class="group block">
	<article class="flex h-full flex-col border border-[#DCDCDC] bg-white">
		<!-- Image Section -->
		<div class="h-[220px] w-full overflow-hidden bg-gray-200">
			{#if imageUrl}
				<img src={imageUrl} alt={title} class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
			{:else}
				<div class="flex h-full w-full items-center justify-center bg-gray-100">
					<span class="text-sm text-gray-400">No image</span>
				</div>
			{/if}
		</div>

		<!-- Content Section -->
		<div class="flex flex-1 flex-col justify-between border-t border-[#DCDCDC] p-6">
			<div>
				<h3 class="mb-4 text-2xl font-bold leading-7 text-[#1E1E1E]">
					{title}
				</h3>
			</div>

			<div class="flex items-center justify-between text-sm">
				<span class="text-[#1E1E1E] opacity-50">{formattedDate}</span>
				<span class="text-[#1E1E1E] opacity-50">{author.name}</span>
			</div>
		</div>

		<!-- Footer Section -->
		<div class="flex items-center justify-between border-t border-[#DCDCDC] px-6 py-[18px]">
			<span class="text-sm font-semibold text-[#1E1E1E]">Learn more</span>
			<div class="flex h-8 w-8 items-center justify-center rounded bg-[#1E1E1E]">
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M5.33333 3.33333L10.6667 8L5.33333 12.6667" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</div>
		</div>
	</article>
</a>
