<script lang="ts">
  import Logo from '$lib/assets/logo-full@2x.webp';
</script>

<footer class="w-full border-t border-[#e0e0e0]">
  <!-- Main Footer Content -->
  <div class="max-w-[1180px] mx-auto px-4 py-16">
    <div class="flex flex-col lg:flex-row gap-16">
      <!-- Left Column: Logo and CTA -->
      <div class="lg:w-[372px]">
        <!-- Logo -->
        <div class="mb-10">
          <img src={Logo} alt="AfterLib" class="h-12" />
        </div>

        <!-- CTA Text -->
        <div class="mb-10">
          <h3 class="text-2xl font-bold text-[#1e1e1e] leading-7 mb-4">
            Ready to find winning ads<br />and outscale your competitors?
          </h3>
          <p class="text-lg text-[#1e1e1e] leading-6">
            Join thousands of marketers who trust<br />AfterLib for real ad intelligence.<br />No fake data. No hype. Just facts.
          </p>
        </div>

        <!-- CTA Button -->
        <button class="px-4 py-3.5 bg-[#02a758] text-white text-sm font-bold leading-4">
          Start winning
        </button>
      </div>

      <!-- Right Columns: Navigation Links -->
      <div class="flex-1 flex flex-col sm:flex-row gap-8 lg:gap-16 lg:ml-32">
        <!-- Main Column -->
        <div class="flex-1">
          <h4 class="text-sm text-[#3d3d3d] opacity-50 mb-5">Main</h4>
          <ul class="space-y-4">
            <li><a href="/join" class="text-sm font-semibold text-[#1e1e1e] leading-5 hover:underline">Become a member</a></li>
            <li><a href="/features" class="text-sm font-semibold text-[#1e1e1e] leading-5 hover:underline">Features</a></li>
            <li><a href="/pricing" class="text-sm font-semibold text-[#1e1e1e] leading-5 hover:underline">Pricing</a></li>
            <li><a href="/tutorial" class="text-sm font-semibold text-[#1e1e1e] leading-5 hover:underline">Tutorial</a></li>
            <li><a href="/blog" class="text-sm font-semibold text-[#1e1e1e] leading-5 hover:underline">Blog</a></li>
          </ul>
        </div>

        <!-- Resources Column -->
        <div class="flex-1">
          <h4 class="text-sm text-[#3d3d3d] opacity-50 mb-5">Resources</h4>
          <ul class="space-y-4">
            <li>
              <a href="/affiliate" class="text-sm font-semibold text-[#1e1e1e] leading-5 hover:underline flex items-center gap-1">
                <svg class="w-5 h-5" viewBox="0 0 20 20" fill="none">
                  <path d="M3.333 4.048c0-.736.596-1.333 1.333-1.333h10.667c.736 0 1.333.597 1.333 1.333v9.285c0 .737-.597 1.334-1.333 1.334H4.666c-.737 0-1.333-.597-1.333-1.334V4.048z" stroke="currentColor" stroke-width="1.5"/>
                </svg>
                Affiliate partnership
              </a>
            </li>
            <li>
              <a href="/support" class="text-sm font-semibold text-[#1e1e1e] leading-5 hover:underline flex items-center gap-1">
                <svg class="w-5 h-5" viewBox="0 0 20 20" fill="none">
                  <path d="M2.5 3.333c0-.92.746-1.666 1.667-1.666h11.666c.92 0 1.667.746 1.667 1.666v11.667c0 .92-.746 1.666-1.667 1.666H4.167c-.92 0-1.667-.746-1.667-1.666V3.333z" stroke="currentColor" stroke-width="1.5"/>
                </svg>
                Contact support
              </a>
            </li>
            <li>
              <a href="/reviews" class="text-sm font-semibold text-[#1e1e1e] leading-5 hover:underline flex items-center gap-1">
                <svg class="w-5 h-5" viewBox="0 0 20 20" fill="none">
                  <path d="M10 3l2.163 4.382 4.837.703-3.5 3.412.826 4.816L10 13.963l-4.326 2.35.826-4.816-3.5-3.412 4.837-.703L10 3z" fill="currentColor"/>
                </svg>
                Reviews
              </a>
            </li>
            <li>
              <a href="/faq" class="text-sm font-semibold text-[#1e1e1e] leading-5 hover:underline flex items-center gap-1">
                <svg class="w-5 h-5" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="7.5" stroke="currentColor" stroke-width="1.5"/>
                </svg>
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <!-- Legal Column -->
        <div class="flex-1">
          <h4 class="text-sm text-[#3d3d3d] opacity-50 mb-5">Legal</h4>
          <ul class="space-y-4">
            <li><a href="/terms" class="text-sm font-semibold text-[#1e1e1e] leading-5 hover:underline">Terms of service</a></li>
            <li><a href="/privacy" class="text-sm font-semibold text-[#1e1e1e] leading-5 hover:underline">Privacy policy</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <!-- Social Media Section -->
  <div class="border-t border-[#e0e0e0]">
    <div class="max-w-[1180px] mx-auto px-4 py-8">
      <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
        <p class="text-sm text-[#1e1e1e] leading-5">Copyright @ 2025</p>
        
        <div class="flex gap-2">
          <!-- Twitter Button -->
          <a href="https://twitter.com/afterlib" target="_blank" rel="noopener noreferrer" 
             class="w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition-colors">
            <svg class="w-5 h-5" viewBox="0 0 20 20" fill="none">
              <path d="M11.903 8.438L19.323 0h-1.757l-6.447 7.353L5.904 0H0l7.782 11.12L0 20h1.757l6.805-7.764L14.096 20H20l-8.097-11.562zm-2.41 2.75l-.789-1.112L2.39 1.3h2.7l5.063 7.142.788 1.112 6.584 9.29h-2.7l-5.332-7.517z" fill="currentColor"/>
            </svg>
          </a>
          
          <!-- Telegram Button -->
          <a href="https://t.me/afterlib" target="_blank" rel="noopener noreferrer"
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
    <div class="max-w-[1180px] mx-auto px-4 py-8">
      <p class="text-sm text-[#3d3d3d] leading-5">
        Please note that this site is an independent entity and is not affiliated with, sponsored by, or endorsed by Facebook INC, Meta Platforms Inc., Instagram, Shopify, or any of their respective affiliates or subsidiaries. The names Facebook, Meta, Instagram, and Shopify, as well as any associated logos and trademarks, are the exclusive property of their respective owners. All trademarks and logos appearing on this site are for informational purposes only and are acknowledged to be the property of their respective owners. Any references to these trademarks are used solely for descriptive purposes and do not imply any endorsement or association with their respective holders.
      </p>
    </div>
  </div>
</footer>
