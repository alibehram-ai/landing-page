<script lang="ts">
	import BlogCard from '$lib/components/BlogCard.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<div class="min-h-screen bg-[#F5F5F0]">
	<div class="mx-auto max-w-[1200px] px-6 py-20">
		<!-- Header Section -->
		<div class="mb-16">
			<h1 class="mb-4 text-[48px] font-bold leading-tight text-[#1E1E1E]">
				News, insights, and more
			</h1>
			<p class="max-w-[600px] text-[18px] leading-7 text-[#1E1E1E]">
				Learn how AfterLib approaches ad intelligence — helping marketers and brands research
				winning products and high-performing campaigns.
			</p>
		</div>

		<!-- Blog Grid -->
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each data.posts as post}
				<BlogCard
					title={post.title}
					slug={post.slug.current}
					mainImage={post.mainImage}
					publishedAt={post.publishedAt}
					author={post.author}
				/>
			{/each}
		</div>

		{#if data.posts.length === 0}
			<div class="py-16 text-center">
				<p class="text-lg text-[#1E1E1E] opacity-50">
					No blog posts yet. Check back soon!
				</p>
			</div>
		{/if}

		<!-- Pagination -->
		{#if data.posts.length > 0}
			<div class="mt-12 flex items-center justify-center gap-4">
				<button
					class="rounded border border-[#DCDCDC] bg-white px-4 py-2 text-sm text-[#1E1E1E] hover:bg-gray-50 disabled:opacity-50"
					disabled
				>
					Previous
				</button>
				<button
					class="rounded border border-[#DCDCDC] bg-white px-6 py-2 text-sm text-[#1E1E1E] hover:bg-gray-50"
				>
					Show more
				</button>
				<button
					class="rounded border border-[#DCDCDC] bg-white px-4 py-2 text-sm text-[#1E1E1E] hover:bg-gray-50"
				>
					Next
				</button>
			</div>
		{/if}

		<!-- CTA Section -->
		
	</div>
    <section class="my-20 bg-[#02a758] px-8 py-16 sm:px-12 md:px-20 lg:px-32">
			<div class="mx-auto max-w-[800px]">
				<h2 class="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
					Discover winning ads, simply.
				</h2>
				<p class="mb-8 text-2xl leading-relaxed text-white sm:text-3xl">
					Uncover standout products and high-converting campaigns before anyone else
				</p>
				<a
					href="/#join"
					class="inline-block w-full max-w-sm md:max-w-54  bg-[#fafaf5] px-8 py-4 text-lg font-bold text-[#1e1e1e] shadow-[0_0.5px_0.8px_rgba(10,19,53,0.08),0_0_0.5px_rgba(0,0,0,0.4),0_0_0.5px_rgba(0,0,0,0.64)] transition-colors hover:bg-[#f0f0eb]"
				>
					Unlock AfterLib
				</a>
			</div>
		</section>
</div>
