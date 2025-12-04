<script lang="ts">
	import { page } from '$app/state';
  import { LogoFull2x, IconLeaves, IconLeaves2, IconHelp11, IconChatEmpty } from '$lib/assets/index';
const isBlogPage = $derived(page.url.pathname.startsWith('/blogs')); 
</script>
<div class="bg-[#F5F5F0]">
<footer class="w-full border-t  border-[#e0e0e0] max-w-5xl mx-auto">
  <!-- Main Footer Content -->
  <div class="max-w-[1180px] mx-auto px-6 py-8 sm:py-12 lg:py-16">
    <div class="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16">
      <!-- Left Column: Logo and CTA -->
      <div class="lg:w-[372px]">
        <!-- Logo -->
        <div class="mb-6 sm:mb-8 lg:mb-10">
          <img src={LogoFull2x} alt="AfterLib" class="h-8 sm:h-10 lg:h-12" />
        </div>

        <!-- CTA Text -->
        <div class="mb-6 sm:mb-8 lg:mb-10">
          <h3 class="text-xl sm:text-2xl font-bold text-[#1e1e1e] leading-6 sm:leading-7 mb-3 sm:mb-4">
            Ready to find winning ads and outscale your competitors?
          </h3>
          <p class="text-base sm:text-lg text-[#1e1e1e] leading-5 sm:leading-6">
            Join thousands of marketers who trust AfterLib for real ad intelligence. No fake data. No hype. Just facts.
          </p>
        </div>

        <!-- CTA Button -->
        <button class="w-full sm:w-auto px-6 py-3 sm:px-4 sm:py-3.5 bg-[#02a758] text-white text-sm font-bold leading-4 hover:bg-[#028f4c] transition-colors">
          Start winning
        </button>
      </div>

      <!-- Right Columns: Navigation Links -->
      <div class="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-16 lg:ml-32">
        <!-- Main Column -->
        <div>
          <h4 class="text-xs sm:text-sm text-[#3d3d3d] opacity-50 mb-3 sm:mb-5">Main</h4>
          <ul class="space-y-3 sm:space-y-4">
            <li><a href={isBlogPage ? "/#join" : "#join"} class="text-sm font-semibold text-[#1e1e1e] leading-5 hover:underline">Become a member</a></li>
            <li><a href={isBlogPage ? "/#features" : "#features"} class="text-sm font-semibold text-[#1e1e1e] leading-5 hover:underline">Features</a></li>
            <li><a href={isBlogPage ? "/#pricing" : "#pricing"} class="text-sm font-semibold text-[#1e1e1e] leading-5 hover:underline">Pricing</a></li>
            <li><a href={isBlogPage ? "/#tutorial" : "#tutorial"} class="text-sm font-semibold text-[#1e1e1e] leading-5 hover:underline">Tutorial</a></li>
            <li><a href="/blogs" class="text-sm font-semibold text-[#1e1e1e] leading-5 hover:underline">Blog</a></li>
          </ul>
        </div>

        <!-- Resources Column -->
        <div>
          <h4 class="text-xs sm:text-sm text-[#3d3d3d] opacity-50 mb-3 sm:mb-5">Resources</h4>
          <ul class="space-y-3 sm:space-y-4">
            <li>
              <a href={isBlogPage ? "/#affiliate" : "#affiliate"} class="text-sm font-semibold text-[#1e1e1e] leading-5 hover:underline flex items-center gap-1">
                <img class="w-5 h-5 shrink-0" src={IconLeaves} alt="Affiliate" />
                Affiliate partnership
              </a>
            </li>
            <li>
              <a href={isBlogPage ? "/#support" : "#support"} class="text-sm font-semibold text-[#1e1e1e] leading-5 hover:underline flex items-center gap-1">
                <img class="w-5 h-5 shrink-0" src={IconChatEmpty} alt="Support" />
                Contact support
              </a>
            </li>
            <li>
              <a href={isBlogPage ? "/#reviews" : "#reviews"} class="text-sm font-semibold text-[#1e1e1e] leading-5 hover:underline flex items-center gap-1">
                <img class="w-5 h-5 shrink-0" src={IconLeaves2} alt="Reviews" />
                Reviews
              </a>
            </li>
            <li>
              <a href={isBlogPage ? "/#faq" : "#faq"} class="text-sm font-semibold text-[#1e1e1e] leading-5 hover:underline flex items-center gap-1">
                <img class="w-5 h-5 shrink-0" src={IconHelp11} alt="FAQ" />
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <!-- Legal Column -->
        <div>
          <h4 class="text-xs sm:text-sm text-[#3d3d3d] opacity-50 mb-3 sm:mb-5">Legal</h4>
          <ul class="space-y-3 sm:space-y-4">
            <li><a href="#privacy" class="text-sm font-semibold text-[#1e1e1e] leading-5 hover:underline">Terms of service</a></li>
            <li><a href="#terms" class="text-sm font-semibold text-[#1e1e1e] leading-5 hover:underline">Privacy policy</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <!-- Social Media Section -->
  <div class="border-t border-[#e0e0e0]">
    <div class="max-w-[1180px] mx-auto px-6 py-6 sm:py-8">
      <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
        <p class="text-sm text-[#1e1e1e] leading-5">Copyright @ 2025</p>
        
        <div class="flex gap-2">
          <!-- Twitter Button -->
          <a href="https://twitter.com/afterlib" target="_blank" rel="noopener noreferrer" 
             aria-label="Follow us on Twitter"
             class="w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition-colors">
            <svg class="w-5 h-5" viewBox="0 0 20 20" fill="none">
              <path d="M11.903 8.438L19.323 0h-1.757l-6.447 7.353L5.904 0H0l7.782 11.12L0 20h1.757l6.805-7.764L14.096 20H20l-8.097-11.562zm-2.41 2.75l-.789-1.112L2.39 1.3h2.7l5.063 7.142.788 1.112 6.584 9.29h-2.7l-5.332-7.517z" fill="currentColor"/>
            </svg>
          </a>
          
          <!-- Telegram Button -->
          <a href="https://t.me/afterlib" target="_blank" rel="noopener noreferrer"
             aria-label="Join us on Telegram"
             class="w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition-colors">
            <svg class="w-5 h-5" viewBox="0 0 20 20" fill="none">
              <path d="M20 1.667L0 9.167l6.667 2.5L17.5 4.167 8.75 13.334l8.75 5L20 1.667z" fill="currentColor"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Legal Disclaimer -->
  <div class="border-t border-[#e0e0e0]">
    <div class="max-w-[1180px] mx-auto px-6 py-6 sm:py-8">
      <p class="text-xs sm:text-sm text-[#3d3d3d] leading-5">
        Please note that this site is an independent entity and is not affiliated with, sponsored by, or endorsed by Facebook INC, Meta Platforms Inc., Instagram, Shopify, or any of their respective affiliates or subsidiaries. The names Facebook, Meta, Instagram, and Shopify, as well as any associated logos and trademarks, are the exclusive property of their respective owners. All trademarks and logos appearing on this site are for informational purposes only and are acknowledged to be the property of their respective owners. Any references to these trademarks are used solely for descriptive purposes and do not imply any endorsement or association with their respective holders.
      </p>
    </div>
  </div>
</footer>
</div>

