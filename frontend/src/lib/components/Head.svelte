<script lang="ts">
	import {LogoFull} from '$lib/assets/';
	import { page } from '$app/state';
	let isMobileMenuOpen = $state(false);
	
	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}
	
	function closeMobileMenu() {
		isMobileMenuOpen = false;
	}
	const isBlogPage = $derived(page.url.pathname.startsWith('/blogs')); 
</script>

<header class="w-full h-20 flex justify-between items-center px-6 md:px-20 xl:px-[165px] bg-[#F5F5F0] relative">
	<div class="flex items-center gap-2">
		<div class="flex items-center gap-1.5">
			<img src={LogoFull} alt="AfterLib" class="h-6" />
		</div>
		<div class="px-0.5 py-0.5 bg-black rounded-sm ml-2">
			<span class="text-xs font-semibold leading-4 text-white px-0.5">v3.0 released</span>
		</div>
	</div>

	<!-- Desktop Navigation -->
	<nav class="hidden sm:flex items-center gap-3">
		<a href={isBlogPage ? "/#pricing" : "#pricing"} class="px-2 py-2 bg-[#fafaf5] border border-[#c2c2c2] text-xs font-semibold leading-4 text-[#1e1e1e] hover:bg-[#f0f0eb] transition-all duration-200 cursor-pointer inline-block">
			Pricing
		</a>
		<a href={isBlogPage ? "/#feature" : "#pricing"}  class="px-2 py-2 bg-[#fafaf5] border border-[#c2c2c2] text-xs font-semibold leading-4 text-[#1e1e1e] hover:bg-[#f0f0eb] transition-all duration-200 cursor-pointer inline-block">
			Features
		</a>
		<a href={isBlogPage ? "/#pricing" : "#pricing"}  class="px-2 py-2 bg-[#fafaf5] border border-[#c2c2c2] text-xs font-semibold leading-4 text-[#1e1e1e] hover:bg-[#f0f0eb] transition-all duration-200 cursor-pointer inline-block">
			Affiliate
		</a>
		<a href="/blogs" class="px-2 py-2 bg-[#fafaf5] border border-[#c2c2c2] text-xs font-semibold leading-4 text-[#1e1e1e] hover:bg-[#f0f0eb] transition-all duration-200 cursor-pointer inline-block">
			Blog
		</a>
		<a href={isBlogPage ? "/#join" : "#join"} class="px-2 py-2 bg-[#02a758] text-xs font-semibold leading-4 text-white hover:bg-[#028f4c] transition-all duration-200 cursor-pointer inline-block shadow-[0px_0.5px_0.8px_rgba(10,19,53,0.08),0px_0px_0.5px_rgba(0,0,0,0.4),0px_0px_0.5px_rgba(0,0,0,0.64)]">
			Join AfterLib
		</a>
	</nav>

	<!-- Mobile Hamburger Button -->
	<button 
		onclick={toggleMobileMenu}
		class="sm:hidden flex flex-col gap-1.5 w-6 h-6 justify-center items-center cursor-pointer"
		aria-label="Toggle menu"
	>
		<span class="w-5 h-0.5 bg-[#1e1e1e] transition-all duration-300" class:rotate-45={isMobileMenuOpen} class:translate-y-2={isMobileMenuOpen}></span>
		<span class="w-5 h-0.5 bg-[#1e1e1e] transition-all duration-300" class:opacity-0={isMobileMenuOpen}></span>
		<span class="w-5 h-0.5 bg-[#1e1e1e] transition-all duration-300" class:-rotate-45={isMobileMenuOpen} class:-translate-y-2={isMobileMenuOpen}></span>
	</button>

	<!-- Mobile Menu Dropdown -->
	{#if isMobileMenuOpen}
		<nav class="absolute top-20 left-0 right-0 bg-[#fafaf5] border-t border-[#c2c2c2] shadow-lg sm:hidden z-50">
			<div class="flex flex-col p-4 gap-2">
				<a 
					href="#pricing" 
					onclick={closeMobileMenu}
					class="px-4 py-3 bg-[#fafaf5] border border-[#c2c2c2] text-sm font-semibold text-[#1e1e1e] hover:bg-[#f0f0eb] transition-all duration-200 cursor-pointer"
				>
					Pricing
				</a>
				<a 
					href="#features" 
					onclick={closeMobileMenu}
					class="px-4 py-3 bg-[#fafaf5] border border-[#c2c2c2] text-sm font-semibold text-[#1e1e1e] hover:bg-[#f0f0eb] transition-all duration-200 cursor-pointer"
				>
					Features
				</a>
				<a 
					href="#affiliate" 
					onclick={closeMobileMenu}
					class="px-4 py-3 bg-[#fafaf5] border border-[#c2c2c2] text-sm font-semibold text-[#1e1e1e] hover:bg-[#f0f0eb] transition-all duration-200 cursor-pointer"
				>
					Affiliate
				</a>
				<a 
					href="/blogs" 
					onclick={closeMobileMenu}
					class="px-4 py-3 bg-[#fafaf5] border border-[#c2c2c2] text-sm font-semibold text-[#1e1e1e] hover:bg-[#f0f0eb] transition-all duration-200 cursor-pointer"
				>
					Blog
				</a>
				<a 
					href="#join" 
					onclick={closeMobileMenu}
					class="px-4 py-3 bg-[#02a758] text-sm font-semibold text-white hover:bg-[#028f4c] transition-all duration-200 cursor-pointer shadow-[0px_0.5px_0.8px_rgba(10,19,53,0.08),0px_0px_0.5px_rgba(0,0,0,0.4),0px_0px_0.5px_rgba(0,0,0,0.64)]"
				>
					Join AfterLib
				</a>
			</div>
		</nav>
	{/if}
</header>
