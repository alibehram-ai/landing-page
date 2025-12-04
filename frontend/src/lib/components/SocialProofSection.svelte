<script lang="ts">
	import { SocialTwitter, IconArrowBackSimple, IconArrowForwardSimple } from '$lib/assets';
</script>

<section class="w-full max-w-[1510px] mx-auto px-[165px] py-16">
	<!-- Heading Section -->
	<div class="max-w-[1180px] mx-auto mb-16">
		<div class="flex flex-col items-center gap-6 mb-16">
			<h2 class="text-[40px] leading-12 font-bold text-[#1e1e1e] text-center max-w-[464px]">
				Trusted by professional marketers worldwide
			</h2>
			<div class="bg-[#02a758] px-0.5">
				<p class="text-[32px] leading-10 font-bold text-white">Review score 4.9</p>
			</div>
		</div>

		<!-- Review Cards -->
		<div class="grid grid-cols-2 gap-16">
			<!-- Review Card 1 -->
			<div class="flex flex-col gap-0.5">
				<!-- User Header -->
				<div class="flex items-center gap-0">
					<div class="w-8 h-8 bg-gray-300 rounded-full"></div>
					<div class="bg-black px-2 py-1">
						<p class="text-lg leading-6 font-bold text-white">Dominik</p>
					</div>
				</div>

				<!-- Review Content -->
				<div class="border border-black bg-white p-0.5">
					<div class="flex flex-col gap-0">
						<p class="text-2xl leading-8 font-semibold text-[#1e1e1e] px-0.5 py-0.5">
							When I'm searching for products to brand or for
						</p>
						<p class="text-2xl leading-8 font-semibold text-[#1e1e1e] px-0.5 py-0.5">
							small upcoming dropshipping brands, I turn to
						</p>
						<p class="text-2xl leading-8 font-semibold text-[#1e1e1e] px-0.5 py-0.5">
							AfterLib. Its page library is highly effective.
						</p>
						<p class="text-2xl leading-8 font-semibold text-[#1e1e1e] px-0.5 py-0.5">
							I use it since 2022.
						</p>
					</div>
				</div>

				<!-- User Tags -->
				<div class="flex gap-0">
					<div class="bg-[#02a758] px-0.5 flex items-center gap-0.5">
						<img src={SocialTwitter} alt="Twitter" class="w-4 h-4" />
						<span class="text-lg leading-6 font-semibold text-white">adv_ceo</span>
					</div>
					<div class="bg-black px-0.5">
						<span class="text-lg leading-6 font-semibold text-white">8-figures seller</span>
					</div>
				</div>
			</div>

			<!-- Review Card 2 -->
			<div class="flex flex-col gap-0.5">
				<!-- User Header -->
				<div class="flex items-center gap-0">
					<div class="w-8 h-8 bg-gray-300 rounded-full"></div>
					<div class="bg-black px-2 py-1">
						<p class="text-lg leading-6 font-bold text-white">Dominik</p>
					</div>
				</div>

				<!-- Review Content -->
				<div class="border border-black bg-white p-0.5">
					<div class="flex flex-col gap-0">
						<p class="text-2xl leading-8 font-semibold text-[#1e1e1e] px-0.5 py-0.5">
							When I'm searching for products to brand or for
						</p>
						<p class="text-2xl leading-8 font-semibold text-[#1e1e1e] px-0.5 py-0.5">
							small upcoming dropshipping brands, I turn to
						</p>
						<p class="text-2xl leading-8 font-semibold text-[#1e1e1e] px-0.5 py-0.5">
							AfterLib. Its page library is highly effective.
						</p>
						<p class="text-2xl leading-8 font-semibold text-[#1e1e1e] px-0.5 py-0.5">
							I use it since 2022.
						</p>
					</div>
				</div>

				<!-- User Tags -->
				<div class="flex gap-0">
					<div class="bg-[#02a758] px-0.5 flex items-center gap-0.5">
						<img src={SocialTwitter} alt="Twitter" class="w-4 h-4" />
						<span class="text-lg leading-6 font-semibold text-white">adv_ceo</span>
					</div>
					<div class="bg-black px-0.5">
						<span class="text-lg leading-6 font-semibold text-white">8-figures seller</span>
					</div>
				</div>
			</div>
		</div>

		<!-- Carousel Controls -->
		<div class="flex justify-center gap-px mt-16">
			<button
				class="w-12 h-12 bg-white border border-[#c2c2c2] flex items-center justify-center hover:bg-gray-50"
			>
				<img src={IconArrowBackSimple} alt="Previous" class="w-6 h-6" />
			</button>
			<button
				class="w-12 h-12 bg-white border border-[#c2c2c2] flex items-center justify-center hover:bg-gray-50"
			>
				<img src={IconArrowForwardSimple} alt="Next" class="w-6 h-6" />
			</button>
		</div>
	</div>
</section>
