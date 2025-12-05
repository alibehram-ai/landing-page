<script lang="ts">
	import { SocialTwitter, IconArrowBackSimple, IconArrowForwardSimple, Image } from '$lib/assets';
	
	let currentSlide = $state(0);
	let touchStartX = $state(0);
	let touchEndX = $state(0);
	
	const reviews = [
		{
			name: "Dominik",
			image: Image,
			text: [
				"When I'm searching for products to brand or for",
				"small upcoming dropshipping brands, I turn to",
				"AfterLib. Its page library is highly effective.",
				"I use it since 2022."
			],
			twitter: "adv_ceo",
			badge: "8-figures seller"
		},
		{
			name: "Dominik",
			image: Image,
			text: [
				"When I'm searching for products to brand or for",
				"small upcoming dropshipping brands, I turn to",
				"AfterLib. Its page library is highly effective.",
				"I use it since 2022."
			],
			twitter: "adv_ceo",
			badge: "8-figures seller"
		}
	];
	
	function nextSlide() {
		currentSlide = (currentSlide + 1) % reviews.length;
	}
	
	function prevSlide() {
		currentSlide = (currentSlide - 1 + reviews.length) % reviews.length;
	}
	
	function handleTouchStart(e: TouchEvent) {
		touchStartX = e.touches[0].clientX;
	}
	
	function handleTouchMove(e: TouchEvent) {
		touchEndX = e.touches[0].clientX;
	}
	
	function handleTouchEnd() {
		if (touchStartX - touchEndX > 50) {
			nextSlide();
		}
		if (touchEndX - touchStartX > 50) {
			prevSlide();
		}
	}
</script>

<section id="affiliate" class="w-full max-w-[1510px] mx-auto px-5 sm:px-10 md:px-20 xl:px-[165px] py-8 sm:py-12 md:py-16">
	<!-- Heading Section -->
	<div class="max-w-[1180px] md:mx-auto mb-8 sm:mb-12 md:mb-16">
		<div class="flex flex-col items-start md:items-center gap-1  mb-8 sm:mb-12 md:mb-16 w-full">
			<h2 class="text-2xl sm:text-3xl md:text-[40px] leading-8 sm:leading-10 md:leading-12 font-bold text-[#1e1e1e] md:text-center  md:px-4">
				Trusted by professional <br/> marketers worldwide
			</h2>
			<div class="bg-[#02a758] px-0.5">
				<p class="text-xl sm:text-2xl md:text-[32px] leading-8 sm:leading-9 md:leading-10 font-bold text-white">Review score 4.9</p>
			</div>
		</div>

		<!-- Review Cards - Desktop -->
		<div class="hidden md:grid grid-cols-2 gap-8 lg:gap-16">
			{#each reviews as review}
				<!-- Review Card -->
				<div class="flex flex-col gap-0.5">
					<!-- User Header -->
					<div class="flex items-center gap-0">
						<img src={review.image} alt={review.name} class="w-8 h-8 bg-gray-300"/>
						<div class="bg-black px-2 py-1">
							<p class="text-lg leading-6 font-bold text-white">{review.name}</p>
						</div>
					</div>

					<!-- Review Content -->
					<div class="border border-black bg-white p-0.5">
						<div class="flex flex-col gap-0">
							{#each review.text as line}
								<p class="text-2xl leading-8 font-semibold text-[#1e1e1e] px-0.5 py-0.5">
									{line}
								</p>
							{/each}
						</div>
					</div>

					<!-- User Tags -->
					<div class="flex gap-0">
						<div class="bg-[#02a758] px-0.5 flex items-center gap-0.5">
							<img src={SocialTwitter} alt="Twitter" class="w-4 h-4" />
							<span class="text-lg leading-6 font-semibold text-white">{review.twitter}</span>
						</div>
						<div class="bg-black px-0.5">
							<span class="text-lg leading-6 font-semibold text-white">{review.badge}</span>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- Review Cards - Mobile Carousel -->
		<div class="md:hidden">
			<div 
				class="overflow-hidden"
				ontouchstart={handleTouchStart}
				ontouchmove={handleTouchMove}
				ontouchend={handleTouchEnd}
			>
				<div 
					class="flex transition-transform duration-300 ease-out"
					style="transform: translateX(-{currentSlide * 100}%)"
				>
					{#each reviews as review, index}
						<div class="w-full shrink-0 px-2">
							<!-- Review Card -->
							<div class="flex flex-col gap-0.5">
								<!-- User Header -->
								<div class="flex items-center gap-0">
									<img src={review.image} alt={review.name} class="w-8 h-8 bg-gray-300"/>
									<div class="bg-black px-2 py-1">
										<p class="text-base sm:text-lg leading-5 sm:leading-6 font-bold text-white">{review.name}</p>
									</div>
								</div>

								<!-- Review Content -->
								<div class="border border-black bg-white p-0.5">
									<div class="flex flex-col gap-0">
										{#each review.text as line}
											<p class="text-lg sm:text-xl leading-6 sm:leading-7 font-semibold text-[#1e1e1e] px-0.5 py-0.5">
												{line}
											</p>
										{/each}
									</div>
								</div>

								<!-- User Tags -->
								<div class="flex gap-0 flex-wrap">
									<div class="bg-[#02a758] px-0.5 flex items-center gap-0.5">
										<img src={SocialTwitter} alt="Twitter" class="w-4 h-4" />
										<span class="text-base sm:text-lg leading-5 sm:leading-6 font-semibold text-white">{review.twitter}</span>
									</div>
									<div class="bg-black px-0.5">
										<span class="text-base sm:text-lg leading-5 sm:leading-6 font-semibold text-white">{review.badge}</span>
									</div>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<!-- Mobile Progress Bar -->
			<div class="mt-6 px-2">
				<div class="h-1 bg-gray-200 overflow-hidden">
					<div 
						class="h-full bg-green-600 transition-all duration-300 ease-out"
						style="width: {((currentSlide + 1) / reviews.length) * 100}%"
					></div>
				</div>
			</div>
		</div>

		<!-- Carousel Controls -->
		<div class=" justify-center gap-px mt-8 sm:mt-12 md:mt-16 hidden md:flex">
			<button
				onclick={prevSlide}
				class="w-12 h-12 bg-white border border-[#c2c2c2] flex items-center justify-center hover:bg-gray-50 transition-colors"
				aria-label="Previous review"
			>
				<img src={IconArrowBackSimple} alt="Previous" class="w-6 h-6" />
			</button>
			<button
				onclick={nextSlide}
				class="w-12 h-12 bg-white border border-[#c2c2c2] flex items-center justify-center hover:bg-gray-50 transition-colors"
				aria-label="Next review"
			>
				<img src={IconArrowForwardSimple} alt="Next" class="w-6 h-6" />
			</button>
		</div>
	</div>
</section>
