
<script lang="ts">
	import { PUBLIC_DEMO_VIDEO_ID } from '$env/static/public';
	import {TutorialImage} from '$lib/assets';
	let isPlaying = $state(false);
	
	function playVideo() {
		isPlaying = true;
	}
</script>

<section id="tutorial" class="w-full max-w-[1510px] bg-[#F5F5F0] mx-auto px-5 py-8 sm:py-12 md:py-16 md:px-20 xl:px-[165px]">
	<!-- Subtitle Badge -->
	<p class="md:text-center text-base sm:text-lg leading-6 text-[#1e1e1e] mb-8 sm:mb-12 md:mb-14">
		The trusted standard since 2022
	</p>

	<!-- Headline and Description -->
	<div class="max-w-[700px]   mb-8 sm:mb-12 md:mb-14">
		<h1 class="text-2xl text-left md:text-center sm:text-3xl md:text-[40px] leading-8 sm:leading-10 md:leading-12 font-bold text-[#1e1e1e] mb-4 sm:mb-6 md:mb-7">
			See what's scaling <br> and what's about to take off
		</h1>
		<p class="text-base text-left md:text-center sm:text-xl md:text-2xl leading-6 sm:leading-7 md:leading-8  text-[#1e1e1e]">
			500K+ new ads added daily. Verified reach, smart filters,<br> growth signals. Real data. No hype.
		</p>
	</div>

	<!-- CTA Button -->
	<div id="join" class="flex justify-center mb-8 sm:mb-12 md:mb-16 px-4 sm:px-0">
		<button 
			class="w-full sm:w-auto bg-[#02a758] text-white font-bold text-base sm:text-lg leading-6 px-8 sm:px-6 py-3 sm:py-4 shadow-[0_0.5px_0.8px_rgba(10,19,53,0.08),0_0_0.5px_rgba(0,0,0,0.4),0_0_0.5px_rgba(0,0,0,0.64)] hover:bg-[#028f4c] transition-colors"
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
				{#if isPlaying}
					<!-- YouTube Video Embed -->
					<div class="w-full aspect-1180/634">
						<iframe
							class="w-full h-full"
							src="https://www.youtube.com/embed/{PUBLIC_DEMO_VIDEO_ID}?autoplay=1&si=-ALck4LaNRHzQXdV"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerpolicy="strict-origin-when-cross-origin"
							allowfullscreen
						></iframe>
					</div>
				{:else}
					<!-- Placeholder for interface image -->
					<div class="w-full aspect-1180/634">
						<img src={TutorialImage} alt="AfterLib interface preview" class="w-full h-full object-cover" />
					</div>
				{/if}
			</div>

			<!-- Gradient Overlay (hidden when playing) -->
			{#if !isPlaying}
				<div 
					class="absolute inset-0 pointer-events-none"
					style="background: linear-gradient(180deg, rgba(250, 250, 245, 0) 0%, rgba(250, 250, 245, 1) 100%);"
				></div>
			{/if}

			<!-- Play Button Controls (hidden when playing) -->
			{#if !isPlaying}
				<div class="absolute -top-5 left-1/2 -translate-x-1/2 w-full sm:w-auto flex justify-center px-4 sm:px-0">
					<div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-0.5 w-full sm:w-auto">
						<!-- Play Button -->
						<button 
							onclick={playVideo}
							class="bg-[#1e1e1e] text-white flex items-center justify-center sm:justify-start gap-3 px-4 sm:px-3 py-3 hover:bg-[#2e2e2e] transition-colors w-full sm:w-auto"
						>
							<svg class="w-4 h-4 shrink-0" viewBox="0 0 16 16" fill="none">
								<path 
									d="M2.667 1.246L13.465 8L2.667 14.754V1.246Z" 
									fill="currentColor"
								/>
							</svg>
							<span class="text-base sm:text-lg leading-6 font-semibold">Watch AfterLib demo</span>
						</button>

						<!-- Time Display -->
						<div class="hidden sm:flex bg-[#1e1e1e] text-white px-3 py-3 items-center justify-center">
							<span class="text-lg leading-6 font-semibold">01:25</span>
						</div>
					</div>
				</div>
			{/if}
		</div>
	</div>
</section>
