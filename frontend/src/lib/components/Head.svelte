<script lang="ts">
	import Logo from '$lib/assets/logo-full.webp';
</script>

<header class="w-full h-20 flex justify-between items-center px-6 md:px-20 xl:px-[165px] bg-[#fafaf5]">
	<div class="flex items-center gap-2">
		<div class="flex items-center gap-1.5">
			<img src={Logo} alt="AfterLib" class="h-6" />
		</div>
		<div class="px-0.5 py-0.5 bg-black rounded-sm ml-2">
			<span class="text-xs font-semibold leading-4 text-white px-0.5">v3.0 released</span>
		</div>
	</div>

	<nav class="hidden sm:flex items-center gap-3">
		<button class="px-2 py-2 bg-[#fafaf5] border border-[#c2c2c2] text-xs font-semibold leading-4 text-[#1e1e1e] hover:bg-[#f0f0eb] transition-all duration-200 cursor-pointer">
			Pricing
		</button>
		<button class="px-2 py-2 bg-[#fafaf5] border border-[#c2c2c2] text-xs font-semibold leading-4 text-[#1e1e1e] hover:bg-[#f0f0eb] transition-all duration-200 cursor-pointer">
			Features
		</button>
		<button class="px-2 py-2 bg-[#fafaf5] border border-[#c2c2c2] text-xs font-semibold leading-4 text-[#1e1e1e] hover:bg-[#f0f0eb] transition-all duration-200 cursor-pointer">
			Affiliate
		</button>
		<button class="px-2 py-2 bg-[#fafaf5] border border-[#c2c2c2] text-xs font-semibold leading-4 text-[#1e1e1e] hover:bg-[#f0f0eb] transition-all duration-200 cursor-pointer">
			Blog
		</button>
		<button class="px-2 py-2 bg-[#02a758] text-xs font-semibold leading-4 text-white hover:bg-[#028f4c] transition-all duration-200 cursor-pointer shadow-[0px_0.5px_0.8px_rgba(10,19,53,0.08),0px_0px_0.5px_rgba(0,0,0,0.4),0px_0px_0.5px_rgba(0,0,0,0.64)]">
			Join AfterLib
		</button>
	</nav>
</header>
