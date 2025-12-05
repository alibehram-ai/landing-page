<script lang="ts">
	// Feature tabs with their respective content
	const features = [
		{
			id: 'categories',
			label: 'Smart categories',
			title: 'Smart categories',
			description:
				'Understand your market at every layer.',
			descriptionDetail:
				'Filter ads by product categories and customer pain points to find what actually converts.',
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
			descriptionDetail: '',
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
			descriptionDetail: '',
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
			descriptionDetail: '',
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
	let expandedMobile = $state<string | null>('categories');
	import {OnDemand, SmartControl, SmartCategories, PageInsights} from '$lib/assets';
	
	// Get active feature
	let activeFeature = $derived(features.find((f) => f.id === activeTab) || features[0]);
	
	function toggleMobileAccordion(id: string) {
		expandedMobile = expandedMobile === id ? null : id;
	}
</script>

<section class=" py-12 md:py-16">
	<div class="mx-auto sm:max-w-sm md:max-w-[1180px] px-5 sm:px-10 md:px-20 xl:px-0">
		<!-- Section Header -->
		<h2
			class="text-2xl hidden md:flex sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8 md:mb-12 text-left md:text-center"
		>
			A glimpse of what's waiting for you
		</h2>
		<h2
			class="text-2xl flex md:hidden sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8 md:mb-12 text-left md:text-center"
		>
			A glimpse of what's <br/> waiting for you
		</h2>

	<!-- Desktop Tab Navigation -->
	<div class="hidden md:block bg-[#F5F5F0] border border-[#dcdcdc] mb-8 md:mb-12">
		<div class="flex">
			{#each features as feature}
				<button
					type="button"
					class="flex-1 px-4 md:px-6 py-3 md:py-4 text-xs md:text-lg font-bold transition-all whitespace-nowrap border-r border-[#dcdcdc] last:border-r-0
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
			<p class="text-lg md:text-2xl text-[#1e1e1e] leading-relaxed">
				{activeFeature.description}
			</p>
			{#if activeFeature.descriptionDetail}
				<p class="text-lg md:text-2xl text-[#1e1e1e] leading-relaxed mt-4">
					{activeFeature.descriptionDetail}
				</p>
			{/if}
		</div>

		<!-- Right: Visual Demo -->
		<div class="bg-[#F5F5F0] border border-[#dcdcdc]">
			{#if activeFeature.id === 'categories'}
				<!-- Category Filter Demo -->
				<img src={SmartCategories} alt="Smart Categories Demo" class="w-full h-full object-cover" />
			{:else}
				<img src={SmartCategories} alt="Smart Categories Demo" class="w-full h-full object-cover" />
			{/if}
		</div>
	</div>
	</div>

	<!-- Mobile Accordion -->
	<div class="md:hidden mb-8 flex flex-col gap-5">
		{#each features as feature, index}
			<div class="">
				<!-- Accordion Header -->
				<button
					type="button"
					class="w-full bg-white border-b border-[#dcdcdc] p-6 text-left flex items-center justify-between"
					onclick={() => toggleMobileAccordion(feature.id)}
				>
					<h3 class="text-xl font-bold text-[#1e1e1e]">
						{feature.title}
					</h3>
					<span class="text-2xl text-[#1e1e1e] transition-transform {expandedMobile === feature.id ? 'rotate-180' : ''}">
						{expandedMobile === feature.id ? '−' : '+'}
					</span>
				</button>

				<!-- Accordion Content -->
				{#if expandedMobile === feature.id}
					<div class="bg-white">
						<div class="p-6 border-b border-[#dcdcdc]">
							<p class="text-lg text-[#1e1e1e] leading-relaxed">
								{feature.description}
							</p>
							{#if feature.descriptionDetail}
								<p class="text-lg text-[#1e1e1e] leading-relaxed mt-4">
									{feature.descriptionDetail}
								</p>
							{/if}
						</div>
						<div class="bg-[#F5F5F0]">
							{#if feature.id === 'categories'}
								<img src={SmartCategories} alt="Smart Categories Demo" class="w-full" />
							{:else}
								<img src={SmartCategories} alt="{feature.title} Demo" class="w-full" />
							{/if}
						</div>
					</div>
				{/if}
			</div>
		{/each}
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
		<div class="bg-white border border-[#e0e0e0] pb-10">
			<div class="mb-6 md:mb-12">
				<!-- Illustration placeholder -->
				<img src={PageInsights} alt="page insights" class="bg-[#fafaf5] border border-[#dcdcdc]  w-full mb-6"/>
			</div>
			<div class="px-8">
				<h3 class="text-xl md:text-[32px] font-bold text-[#1e1e1e] mb-3 md:mb-4">Page insights</h3>
			<p class="text-base md:text-2xl text-[#1e1e1e] leading-relaxed">
				See total page reach, creatives, and performance signals to instantly understand what's
				working.
			</p>
			</div>
			
		</div>

		<!-- Card 2: On-demand Page Tracking -->
		<div class="bg-white border border-[#e0e0e0] pb-10">
			<div class="mb-6 md:mb-12">
				<!-- Illustration placeholder -->
				<img src={OnDemand} alt="on-demand" class="bg-[#fafaf5] border border-[#dcdcdc]  w-full mb-6"/>
			</div>
			<div class="px-8">
				<h3 class="text-xl md:text-[32px] font-bold text-[#1e1e1e] mb-3 md:mb-4">
				On-demand page tracking
			</h3>
			<p class="text-base md:text-2xl text-[#1e1e1e] leading-relaxed">
				Import any page and track every creative, launch, and growth signal across e-commerce, lead
				gen, affiliate, and more.
			</p>
			</div>
			
		</div>
        <div class="bg-white border border-[#e0e0e0] pb-10">
			<div class="mb-6 md:mb-12">
				<!-- Illustration placeholder -->
				<img src={OnDemand} alt="page insights" class="bg-[#fafaf5] border border-[#dcdcdc] w-full mb-6"/>
			</div>
			<div class="px-8">
				<h3 class="text-xl md:text-[32px] font-bold text-[#1e1e1e] mb-3 md:mb-4">Smart Notifications</h3>
			<p class="text-base md:text-2xl text-[#1e1e1e] leading-relaxed">
				Get instant alerts on your phone when ads scale, pages launch, or new winners appear. Stay ahead without manual checks.
			</p>
			</div>
			
		</div>

		<!-- Card 2: On-demand Page Tracking -->
		<div class="bg-white border border-[#e0e0e0] pb-10">
			<div class="mb-6 md:mb-12">
				<!-- Illustration placeholder -->
					<img src={SmartControl} alt="page insights" class="bg-[#fafaf5] border border-[#dcdcdc] w-full mb-6"/>
			</div>
			<div class="px-8">
<h3 class="text-xl md:text-[32px] font-bold text-[#1e1e1e] mb-3 md:mb-4">
				Smart controls and flows
			</h3>
			<p class="text-base md:text-2xl text-[#1e1e1e] leading-relaxed">
				Import Sheets, bulk analyze, and organize competitors and ads at scale to save hours every week for you and your team.
			</p>
			</div>
			
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
