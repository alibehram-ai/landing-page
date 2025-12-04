<script lang="ts">
	// Feature tabs with their respective content
	const features = [
		{
			id: 'categories',
			label: 'Smart categories',
			title: 'Smart categories',
			description:
				'Understand your market at every layer.\nFilter ads by product categories and customer pain points to find what actually converts.',
			categories: ['Pets', 'Clothing', 'Furniture', 'Beauty', 'For Kids'],
			selectedCategory: 2, // Furniture selected
			sampleAds: [
				{ brand: 'IKEA', avatar: '', image: '' },
				{ brand: 'Walmart', avatar: '', image: '' }
			]
		},
		{
			id: 'filters',
			label: 'Smart filters',
			title: 'Smart filters',
			description:
				'Advanced filtering capabilities to narrow down your search and find the most relevant ads for your needs.',
			categories: [],
			selectedCategory: -1,
			sampleAds: []
		},
		{
			id: 'transparency',
			label: 'Reach & spend transparency',
			title: 'Reach & spend transparency',
			description:
				"See verified reach data and spending estimates to understand what's actually working in your market.",
			categories: [],
			selectedCategory: -1,
			sampleAds: []
		},
		{
			id: 'scores',
			label: 'Performance scores',
			title: 'Performance scores',
			description:
				'AI-driven performance scoring helps you identify winning ads and understand what makes them successful.',
			categories: [],
			selectedCategory: -1,
			sampleAds: []
		}
	];

	const stats = [
		{
			title: '40+ AI-driven categories',
			description: 'For a smarter, more refined search.'
		},
		{
			title: 'Advanced filtering',
			description: 'Find hidden winners others miss.'
		},
		{
			title: '100M+ ads',
			description: 'Constantly updated and verified.'
		},
		{
			title: 'Growth signals',
			description: 'Track ads with data-proven momentum.'
		}
	];

	let activeTab = $state('categories');

	// Get active feature
	let activeFeature = $derived(features.find((f) => f.id === activeTab) || features[0]);
</script>

<section class=" py-12 md:py-16">
	<div class="mx-auto max-w-[1180px] px-5 sm:px-10 md:px-20 xl:px-0">
		<!-- Section Header -->
		<h2
			class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8 md:mb-12 text-left md:text-center"
		>
			A glimpse of what's waiting for you
		</h2>

	<!-- Tab Navigation -->
	<div class="bg-[#f2f2f2] border border-[#dcdcdc] overflow-x-auto mb-8 md:mb-12">
		<div class="flex min-w-max md:min-w-0">
			{#each features as feature}
				<button
					class="shrink-0 px-4 md:px-6 py-3 md:py-4 text-xs md:text-lg font-bold transition-all whitespace-nowrap border-r border-[#dcdcdc] last:border-r-0
						{activeTab === feature.id
							? 'bg-white text-[#1e1e1e] border border-[#e0e0e0] shadow-[0_0_0.5px_0_rgba(0,0,0,0.5),0_3px_4px_0_rgba(41,44,44,0.16)]'
							: 'bg-[#f2f2f2] text-[#1e1e1e] hover:bg-[#e8e8e8]'}"
					onclick={() => (activeTab = feature.id)}
				>
					{feature.label}
				</button>
			{/each}
		</div>
        <div class="grid md:grid-cols-2 mb-0">
		<!-- Left: Feature Description -->
		<div class="bg-white border border-[#dcdcdc] p-6 md:p-8">
			<h3 class="text-2xl md:text-[32px] font-bold text-[#1e1e1e] leading-tight mb-4 md:mb-6">
				{activeFeature.title}
			</h3>
			<p class="text-lg md:text-2xl text-[#1e1e1e] leading-relaxed whitespace-pre-line">
				{activeFeature.description}
			</p>
		</div>

		<!-- Right: Visual Demo -->
		<div class="bg-[#fafaf5] border border-[#dcdcdc]">
			{#if activeFeature.id === 'categories'}
				<!-- Category Filter Demo -->
				<div class="p-6 md:p-12 flex gap-4 md:gap-8 h-full">
					<!-- Category Dropdown -->
					<div class="bg-white shadow-[0_0_4px_0_rgba(41,44,44,0.08)]">
						<div class="flex flex-col">
							{#each activeFeature.categories as category, index}
								<div
									class="px-2 md:px-3 py-3 cursor-pointer text-sm font-semibold transition-colors
										{index === activeFeature.selectedCategory
											? 'bg-[#02a758] text-white'
											: 'bg-white text-[#1e1e1e] hover:bg-gray-50'}"
								>
									{category}
								</div>
							{/each}
						</div>
					</div>

					<!-- Ad Cards Preview -->
					<div class="flex gap-2 md:gap-4 overflow-x-auto flex-1">
						{#each activeFeature.sampleAds as ad}
							<div class="shrink-0 w-32 md:w-[200px] bg-white border border-[#e0e0e0]">
								<!-- Card Header -->
								<div class="p-1.5 border-b border-[#e0e0e0]">
									<div class="flex items-center gap-2">
										<!-- Avatar -->
										<div class="w-6 md:w-8 h-6 md:h-8 rounded-full bg-gray-200 border border-[#e0e0e0] shrink-0"></div>
										<!-- Brand Name -->
										<span class="text-xs md:text-sm font-semibold text-[#1e1e1e]">{ad.brand}</span>
									</div>
								</div>
								<!-- Card Image -->
								<div class="w-full aspect-square bg-gray-100"></div>
							</div>
						{/each}
						<!-- Partial card preview -->
						<div class="shrink-0 w-3 md:w-4 bg-white border border-[#e0e0e0]">
							<div class="p-1.5 border-b border-[#e0e0e0] h-9 md:h-11">
								<div class="w-2 md:w-3 h-6 md:h-8 rounded-full bg-gray-200 border border-[#e0e0e0]"></div>
							</div>
							<div class="w-3 md:w-4 aspect-square bg-gray-100"></div>
						</div>
					</div>
				</div>
			{:else}
				<!-- Placeholder for other tabs -->
				<div class="p-6 md:p-12 h-full flex items-center justify-center">
					<span class="text-gray-400">Feature Demo: {activeFeature.label}</span>
				</div>
			{/if}
		</div>
	</div>
	</div>
<!-- Feature Stats Grid -->
	<div class="grid grid-cols-2 md:grid-cols-4 border-t-0">
		{#each stats as stat}
			<div class="bg-white border border-[#dcdcdc] p-4 md:p-8">
				<h4 class="text-sm md:text-lg font-semibold text-[#1e1e1e] mb-2 md:mb-4">
					{stat.title}
				</h4>
				<p class="text-sm md:text-lg text-[#1e1e1e] leading-relaxed">
					{stat.description}
				</p>
			</div>
		{/each}
	</div>
	<!-- Feature Content -->
	

	<!-- Feature Showcase Cards Grid (2 rows of 2 cards each on desktop, 1 per row on mobile) -->
	<div class="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
		<!-- Card 1: Page Insights -->
		<div class="bg-white border border-[#e0e0e0] p-6 md:p-8">
			<div class="mb-6 md:mb-12">
				<!-- Illustration placeholder -->
				<div class="bg-[#fafaf5] border border-[#dcdcdc] h-48 md:h-64 mb-6"></div>
			</div>
			<h3 class="text-xl md:text-[32px] font-bold text-[#1e1e1e] mb-3 md:mb-4">Page insights</h3>
			<p class="text-base md:text-2xl text-[#1e1e1e] leading-relaxed">
				See total page reach, creatives, and performance signals to instantly understand what's
				working.
			</p>
		</div>

		<!-- Card 2: On-demand Page Tracking -->
		<div class="bg-white border border-[#e0e0e0] p-6 md:p-8">
			<div class="mb-6 md:mb-12">
				<!-- Illustration placeholder -->
				<div class="bg-[#fafaf5] border border-[#dcdcdc] h-48 md:h-64 mb-6"></div>
			</div>
			<h3 class="text-xl md:text-[32px] font-bold text-[#1e1e1e] mb-3 md:mb-4">
				On-demand page tracking
			</h3>
			<p class="text-base md:text-2xl text-[#1e1e1e] leading-relaxed">
				Import any page and track every creative, launch, and growth signal across e-commerce, lead
				gen, affiliate, and more.
			</p>
		</div>
        <div class="bg-white border border-[#e0e0e0] p-6 md:p-8">
			<div class="mb-6 md:mb-12">
				<!-- Illustration placeholder -->
				<div class="bg-[#fafaf5] border border-[#dcdcdc] h-48 md:h-64 mb-6"></div>
			</div>
			<h3 class="text-xl md:text-[32px] font-bold text-[#1e1e1e] mb-3 md:mb-4">Page insights</h3>
			<p class="text-base md:text-2xl text-[#1e1e1e] leading-relaxed">
				See total page reach, creatives, and performance signals to instantly understand what's
				working.
			</p>
		</div>

		<!-- Card 2: On-demand Page Tracking -->
		<div class="bg-white border border-[#e0e0e0] p-6 md:p-8">
			<div class="mb-6 md:mb-12">
				<!-- Illustration placeholder -->
				<div class="bg-[#fafaf5] border border-[#dcdcdc] h-48 md:h-64 mb-6"></div>
			</div>
			<h3 class="text-xl md:text-[32px] font-bold text-[#1e1e1e] mb-3 md:mb-4">
				On-demand page tracking
			</h3>
			<p class="text-base md:text-2xl text-[#1e1e1e] leading-relaxed">
				Import any page and track every creative, launch, and growth signal across e-commerce, lead
				gen, affiliate, and more.
			</p>
		</div>
	</div>
<div class="grid grid-cols-2 md:grid-cols-4 border-t-0">
		{#each stats as stat}
			<div class="bg-white border border-[#dcdcdc] p-4 md:p-8">
				<h4 class="text-sm md:text-lg font-semibold text-[#1e1e1e] mb-2 md:mb-4">
					{stat.title}
				</h4>
				<p class="text-sm md:text-lg text-[#1e1e1e] leading-relaxed">
					{stat.description}
				</p>
			</div>
		{/each}
	</div>
	
	</div>
</section>
