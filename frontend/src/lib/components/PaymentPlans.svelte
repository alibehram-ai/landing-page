<script>
  let isAnnual = true;
  
  // Helper to toggle billing cycle
  const toggleBilling = () => {
    isAnnual = !isAnnual;
  };
</script>

<div id="pricing" class="w-full bg-[#00a854] font-sans my-20 text-[#1a1a1a] pb-12">
  <div class="max-w-[1400px] mx-auto px-4 py-16 md:py-24">
    
    <!-- Header -->
    <div class="text-center mb-16 text-white max-w-4xl mx-auto">
      <h2 class="text-3xl md:text-5xl font-bold mb-6">
        Simple & transparent pricing
      </h2>
      <p class="text-lg md:text-xl opacity-90 leading-relaxed">
        AfterLib replaces multiple tools and saves you weeks of research,<br class="hidden md:block">
        all for less than you'd spend testing one ad.
      </p>
    </div>

    <!-- Pricing Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      
      <!-- Starter Card -->
      <div class="bg-white flex flex-col h-full relative group">
        <div class="p-6 grow">
          <h3 class="text-2xl font-bold mb-1">Starter</h3>
          <div class="text-2xl font-bold mb-4">$49</div>
          <p class="text-sm text-gray-600 mb-6 min-h-10">
            For beginners who want to learn about market research.
          </p>
          
          <!-- Toggle -->
          <button 
            type="button"
            class="flex items-center gap-3 mb-6 cursor-pointer bg-transparent border-0 p-0 text-left w-full" 
            on:click={toggleBilling}
          >
            <div class="w-10 h-6 bg-gray-200 rounded-full relative transition-colors duration-200">
              <div class="w-4 h-4 bg-white rounded-full shadow absolute top-1 transition-all duration-200 {isAnnual ? 'left-1' : 'left-5'}"></div>
            </div>
            <span class="text-sm font-medium">Yearly billing (save $147)</span>
          </button>
          
          <hr class="border-gray-100 mb-6">
          
          <ul class="space-y-3 text-sm">
            <li class="flex items-start gap-2">
              <svg class="w-4 h-4 text-black mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
              <span>5 000 credits <span class="text-gray-400 border border-gray-400 rounded-full w-3.5 h-3.5 inline-flex items-center justify-center text-[10px] ml-1">?</span></span>
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-4 h-4 text-black mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
              Basic filters
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-4 h-4 text-black mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
              Categories
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-4 h-4 text-black mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
              Notifications
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-4 h-4 text-black mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
              Collections
            </li>
          </ul>
        </div>
        <button class="w-full bg-[#1a1a1a] text-white font-medium py-4 mt-auto hover:bg-black transition-colors">
          Continue
        </button>
      </div>

      <!-- Basic Card -->
      <div class="bg-white flex flex-col h-full relative group">
        <div class="p-6 grow">
          <h3 class="text-2xl font-bold mb-1">Basic</h3>
          <div class="text-2xl font-bold mb-4">$89</div>
          <p class="text-sm text-gray-600 mb-6 min-h-10">
            For entrepreneurs who do light research a few times a week.
          </p>
          
         <button 
            type="button"
            class="flex items-center gap-3 mb-6 cursor-pointer bg-transparent border-0 p-0 text-left w-full" 
            on:click={toggleBilling}
          >
            <div class="w-10 h-6 bg-gray-200 rounded-full relative transition-colors duration-200">
              <div class="w-4 h-4 bg-white rounded-full shadow absolute top-1 transition-all duration-200 {isAnnual ? 'left-1' : 'left-5'}"></div>
            </div>
            <span class="text-sm font-medium">Yearly billing (save $147)</span>
          </button>
          
          <hr class="border-gray-100 mb-6">
          
          <ul class="space-y-3 text-sm">
            <li class="flex items-start gap-2">
              <svg class="w-4 h-4 text-black mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
              <span>10 000 credits <span class="text-gray-400 border border-gray-400 rounded-full w-3.5 h-3.5 inline-flex items-center justify-center text-[10px] ml-1">?</span></span>
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-4 h-4 text-black mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
              Basic filters
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-4 h-4 text-black mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
              Categories
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-4 h-4 text-black mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
              Notifications
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-4 h-4 text-black mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
              Collections
            </li>
          </ul>
        </div>
        <button class="w-full bg-[#1a1a1a] text-white font-medium py-4 mt-auto hover:bg-black transition-colors">
          Continue
        </button>
      </div>

      <!-- Pro Card -->
      <div class="bg-white flex flex-col h-full relative group shadow-2xl z-10">
        <!-- Best Seller Badge -->
        <div class="absolute -top-3 -right-3 bg-[#00a854] text-white text-xs font-bold px-3 py-1 uppercase tracking-wide">
          Best seller
        </div>

        <div class="p-6 grow">
          <h3 class="text-2xl font-bold mb-1">Pro</h3>
          <div class="text-2xl font-bold mb-4">$119</div>
          <p class="text-sm text-gray-600 mb-6 min-h-10">
            For professionals who want full control, or use it daily.
          </p>
          
         <button 
            type="button"
            class="flex items-center gap-3 mb-6 cursor-pointer bg-transparent border-0 p-0 text-left w-full" 
            on:click={toggleBilling}
          >
            <div class="w-10 h-6 bg-gray-200 rounded-full relative transition-colors duration-200">
              <div class="w-4 h-4 bg-white rounded-full shadow absolute top-1 transition-all duration-200 {isAnnual ? 'left-1' : 'left-5'}"></div>
            </div>
            <span class="text-sm font-medium">Yearly billing (save $147)</span>
          </button>
          
          <hr class="border-gray-100 mb-6">
          
          <ul class="space-y-3 text-sm">
            <li class="flex items-start gap-2">
              <div class="bg-[#00a854] rounded-full p-0.5 mt-0.5 shrink-0">
                 <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <span>Unlimited credits <span class="text-gray-400 border border-gray-400 rounded-full w-3.5 h-3.5 inline-flex items-center justify-center text-[10px] ml-1">?</span></span>
            </li>
            <li class="flex items-start gap-2">
              <div class="bg-[#00a854] rounded-full p-0.5 mt-0.5 shrink-0">
                 <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <span>Filters Pro+ <span class="text-gray-400 border border-gray-400 rounded-full w-3.5 h-3.5 inline-flex items-center justify-center text-[10px] ml-1">?</span></span>
            </li>
            <li class="flex items-start gap-2">
              <div class="bg-[#00a854] rounded-full p-0.5 mt-0.5 shrink-0">
                 <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <span>Categories Pro+ <span class="text-gray-400 border border-gray-400 rounded-full w-3.5 h-3.5 inline-flex items-center justify-center text-[10px] ml-1">?</span></span>
            </li>
            <li class="flex items-start gap-2">
              <div class="bg-[#00a854] rounded-full p-0.5 mt-0.5 shrink-0">
                 <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <span>Notifications Pro+ <span class="text-gray-400 border border-gray-400 rounded-full w-3.5 h-3.5 inline-flex items-center justify-center text-[10px] ml-1">?</span></span>
            </li>
             <li class="flex items-start gap-2">
              <div class="bg-[#00a854] rounded-full p-0.5 mt-0.5 shrink-0">
                 <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path></svg>
              </div>
              Collections
            </li>
            <li class="flex items-start gap-2">
              <div class="bg-[#00a854] rounded-full p-0.5 mt-0.5 shrink-0">
                 <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path></svg>
              </div>
              1 free team slots
            </li>
          </ul>
        </div>
        <button class="w-full bg-[#1a1a1a] text-white font-medium py-4 mt-auto hover:bg-black transition-colors">
          Continue
        </button>
      </div>

      <!-- Team Card -->
      <div class="bg-white flex flex-col h-full relative group">
        <div class="p-6 grow">
          <h3 class="text-2xl font-bold mb-1">Team</h3>
          <div class="text-2xl font-bold mb-4">$299</div>
          <p class="text-sm text-gray-600 mb-6 min-h-10">
            For teams and organizations ready to elevate their game.
          </p>
          
          <!-- Toggle -->
         <button 
            type="button"
            class="flex items-center gap-3 mb-6 cursor-pointer bg-transparent border-0 p-0 text-left w-full" 
            on:click={toggleBilling}
          >
            <div class="w-10 h-6 bg-gray-200 rounded-full relative transition-colors duration-200">
              <div class="w-4 h-4 bg-white rounded-full shadow absolute top-1 transition-all duration-200 {isAnnual ? 'left-1' : 'left-5'}"></div>
            </div>
            <span class="text-sm font-medium">Yearly billing (save $147)</span>
          </button>
          
          <hr class="border-gray-100 mb-6">
          
          <ul class="space-y-3 text-sm">
             <li class="flex items-start gap-2">
              <svg class="w-4 h-4 text-black mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
              <span>Unlimited credits <span class="text-gray-400 border border-gray-400 rounded-full w-3.5 h-3.5 inline-flex items-center justify-center text-[10px] ml-1">?</span></span>
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-4 h-4 text-black mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
              <span>Filters Pro+ <span class="text-gray-400 border border-gray-400 rounded-full w-3.5 h-3.5 inline-flex items-center justify-center text-[10px] ml-1">?</span></span>
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-4 h-4 text-black mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
              <span>Categories Pro+ <span class="text-gray-400 border border-gray-400 rounded-full w-3.5 h-3.5 inline-flex items-center justify-center text-[10px] ml-1">?</span></span>
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-4 h-4 text-black mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
              <span>Notifications Pro+ <span class="text-gray-400 border border-gray-400 rounded-full w-3.5 h-3.5 inline-flex items-center justify-center text-[10px] ml-1">?</span></span>
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-4 h-4 text-black mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
              Collections
            </li>
             <li class="flex items-start gap-2">
              <svg class="w-4 h-4 text-black mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
              Collections for team
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-4 h-4 text-black mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
              Threads for team
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-4 h-4 text-black mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
              <span>3 free team slots</span>
            </li>
            <li class="flex items-start gap-2 pl-6 text-gray-500">
              Additional spot $39/month
            </li>
          </ul>
        </div>
        <button class="w-full bg-[#1a1a1a] text-white font-medium py-4 mt-auto hover:bg-black transition-colors">
          Continue
        </button>
      </div>

    </div>

    <!-- Footer Icons & Security -->
    <div class="mt-16 text-center text-white">
      <div class="flex justify-center items-center space-x-4 mb-4">
        <!-- Apple Pay -->
        <div class="flex items-center space-x-1">
          <svg class="h-6 w-auto" viewBox="0 0 32 32" fill="white"><path d="M11.7,11.8c0.6-2.9,2.9-4.8,5.4-4.8c0.2,2.8-2.6,5.3-5.4,4.8z M18.1,12.3c-1.3,0-2.3,0.7-3.6,0.7 c-1.3,0-2.6-0.7-3.5-0.7c-2.4,0.1-4.7,2.1-4.7,5.5c0,3.9,2.5,9.2,5.2,9.2c1.1,0,1.5-0.7,2.8-0.7c1.4,0,1.7,0.7,2.9,0.7 c3,0,5.1-5,5.1-5.1c-0.1,0-2.9-1.6-2.9-5C19.3,13.8,21.3,12.4,18.1,12.3z"/></svg>
          <span class="font-bold">Pay</span>
        </div>
        <!-- VISA -->
        <span class="font-bold text-xl italic text-[#1a1f71] bg-white/20 px-1 rounded">VISA</span>
        <!-- Mastercard -->
        <div class="flex -space-x-1">
          <div class="w-4 h-4 rounded-full bg-red-500 opacity-90"></div>
          <div class="w-4 h-4 rounded-full bg-yellow-500 opacity-90"></div>
        </div>
        <!-- AMEX -->
        <span class="font-bold text-xs bg-blue-600 text-white px-1 py-0.5 rounded">AMEX</span>
        <!-- G Pay -->
        <div class="flex items-center gap-1">
          <span class="font-bold">G</span> Pay
        </div>
      </div>
      
      <div class="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-sm md:text-base font-medium">
        <div class="flex items-center gap-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
          Secured payment
        </div>
        <div class="flex items-center gap-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
          Cancel anytime
        </div>
      </div>
    </div>
    
  </div>

  <!-- Bottom White Banner -->
  <div class="bg-white py-4 px-4 text-center mt-8 md:mt-16 w-fit mx-auto shadow-sm">
    <p class="text-[#1a1a1a] font-medium text-sm md:text-base">
      Trusted by your competitors and thousands of marketers worldwide.
    </p>
  </div>
</div>