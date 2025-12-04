<script lang="ts">
	import SocialProofSection from '$lib/components/SocialProofSection.svelte';
</script>

<section id="tutorial" class="w-full max-w-[1510px] mx-auto px-5 py-16 md:px-20 xl:px-[165px]">
	<!-- Subtitle Badge -->
	<p class="text-center text-lg leading-6 text-[#1e1e1e] mb-14">
		The trusted standard since 2022
	</p>

	<!-- Headline and Description -->
	<div class="max-w-[700px] mx-auto mb-14">
		<h1 class="text-[40px] leading-12 font-bold text-center text-[#1e1e1e] mb-7">
			See what's scaling  and what's about to take off
		</h1>
		<p class="text-2xl leading-8 text-center text-[#1e1e1e]">
			500K+ new ads added daily. Verified reach, smart filters, growth signals. Real data. No hype.
		</p>
	</div>

	<!-- CTA Button -->
	<div class="flex justify-center mb-16">
		<button 
			class="bg-[#02a758] text-white font-bold text-lg leading-6 px-6 py-4 shadow-[0_0.5px_0.8px_rgba(10,19,53,0.08),0_0_0.5px_rgba(0,0,0,0.4),0_0_0.5px_rgba(0,0,0,0.64)]"
		>
			Join AfterLib
		</button>
	</div>

	<!-- Video Demo Interface -->
	<div class="relative max-w-[1212px] mx-auto">
		<!-- Interface Container with Gradient Overlay -->
		<div class="relative">
			<!-- Interface Box -->
			<div class="border-2 border-[#dcdcdc] bg-[#fafaf5]">
				<!-- Placeholder for interface image -->
				<div class="w-full aspect-1180/634 bg-gray-100"></div>
			</div>

			<!-- Gradient Overlay -->
			<div 
				class="absolute inset-0 pointer-events-none"
				style="background: linear-gradient(180deg, rgba(250, 250, 245, 0) 0%, rgba(250, 250, 245, 1) 100%);"
			></div>

			<!-- Play Button Controls -->
			<div class="absolute top-0 left-1/2 -translate-x-1/2 flex items-center gap-0.5">
				<!-- Play Button -->
				<button class="bg-[#1e1e1e] text-white flex items-center gap-3 px-3 py-3">
					<svg class="w-4 h-4" viewBox="0 0 16 16" fill="none">
						<path 
							d="M2.667 1.246L13.465 8L2.667 14.754V1.246Z" 
							fill="currentColor"
						/>
					</svg>
					<span class="text-lg leading-6 font-semibold">Watch AfterLib demo</span>
				</button>

				<!-- Time Display -->
				<div class="bg-[#1e1e1e] text-white px-3 py-3">
					<span class="text-lg leading-6 font-semibold">01:25</span>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Social Proof Section -->
<SocialProofSection />
