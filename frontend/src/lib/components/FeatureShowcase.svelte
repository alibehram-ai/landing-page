<script lang="ts">
	// Use case tabs with their respective cards
	const useCases = [
		{
			id: 'dropshipping',
			label: 'Dropshipping',
			cards: [
				{
					title: 'AfterLib for dropshipping',
					description:
						"Find winning products before they saturate. Filter by category, funnel type, reach growth, and pixel setups. Track what's scaling right now and replicate it fast.",
					image: ''
				},
				{
					title: 'Product research made simple',
					description:
						"Discover trending products across all major platforms. See what's working in real-time with detailed metrics on engagement, reach, and conversion indicators.",
					image: ''
				},
				{
					title: 'Scale faster with data',
					description:
						'Identify winning creatives and ad angles before your competitors. Track performance patterns and replicate success with confidence.',
					image: ''
				}
			]
		},
		{
			id: 'agency',
			label: 'Agency',
			cards: [
				{
					title: 'AfterLib for agencies',
					description:
						'Give clients an edge with real insights. Analyze competitors, track brand activity, and uncover top-performing funnels. Save hours with smart filters, collections, and alerts.',
					image: ''
				},
				{
					title: 'Client reporting simplified',
					description:
						'Build comprehensive competitor reports in minutes. Track campaign performance, ad spend trends, and creative strategies across multiple brands.',
					image: ''
				},
				{
					title: 'Stay ahead of trends',
					description:
						'Monitor industry movements and emerging patterns. Get alerts when competitors launch new campaigns or shift their strategies.',
					image: ''
				}
			]
		},
		{
			id: 'brand',
			label: 'Brand owner',
			cards: [
				{
					title: 'AfterLib for brand owners',
					description:
						'Protect your brand and monitor competitors. Track unauthorized sellers, analyze market trends, and discover what messaging resonates with your audience.',
					image: ''
				},
				{
					title: 'Protect your brand identity',
					description:
						'Monitor unauthorized sellers and counterfeit products. Track where and how your brand appears across advertising platforms.',
					image: ''
				},
				{
					title: 'Understand your market',
					description:
						'See what messaging works in your category. Analyze competitor positioning and discover gaps in the market you can own.',
					image: ''
				}
			]
		}
	];

	let activeTab = $state('dropshipping');
	
	// Get cards for the active tab
	let activeCards = $derived(useCases.find(uc => uc.id === activeTab)?.cards || []);
</script>

<section class="mx-auto max-w-[1180px] bg-[#F5F5F0] px-5 sm:px-10 md:px-20 xl:px-0 py-12 md:py-16">
	<!-- Section Header -->
	<div class="text-center mb-8 md:mb-12">
		<h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6 md:mb-8">
			Use cases for your needs
		</h2>

		<!-- Tab Navigation -->
		<div class="inline-flex bg-[#f2f2f2] border border-[#dcdcdc] overflow-hidden">
			{#each useCases as useCase}
				<button
					class="shrink-0 px-6 sm:px-8 md:px-12 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-bold transition-all whitespace-nowrap
						{activeTab === useCase.id
							? 'bg-white text-[#1e1e1e] shadow-[0_0_0.5px_0_rgba(0,0,0,0.5),0_3px_4px_0_rgba(41,44,44,0.16)]'
							: 'bg-[#f2f2f2] text-[#1e1e1e] hover:bg-[#e8e8e8]'}"
					onclick={() => (activeTab = useCase.id)}
				>
					{useCase.label}
				</button>
			{/each}
		</div>
	</div>

	<!-- Use Case Cards Container - Swipeable -->
	<div class="overflow-x-auto overflow-y-hidden pb-4">
		<div class="flex gap-4 sm:gap-6 px-5 sm:px-10 md:px-20 xl:px-0 w-max">
			{#each activeCards as card, index}
				<div class="shrink-0 w-[calc(100vw-2.5rem)] sm:w-[calc(100vw-5rem)] md:w-[704px] bg-white border border-[#e0e0e0]">
					<!-- Card Content -->
					<div class="p-4 sm:p-6 md:p-8">
						<h3 class="text-xl sm:text-2xl md:text-[32px] font-bold text-[#1e1e1e] leading-tight sm:leading-9 md:leading-10 mb-4 sm:mb-5 md:mb-6">
							{card.title}
						</h3>
						<p class="text-base sm:text-lg md:text-2xl text-[#1e1e1e] leading-6 sm:leading-7 md:leading-8">
							{card.description}
						</p>
					</div>

					<!-- Interface Preview -->
					<div class="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8">
						<div class="w-full aspect-640/343 bg-[#fafaf5] border border-[#dcdcdc] flex items-center justify-center">
							<!-- Placeholder for interface screenshot -->
							<span class="text-gray-400 text-sm">Interface Preview {index + 1}</span>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
