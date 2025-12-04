<script lang="ts">
  import { slide } from 'svelte/transition';

  // FAQ Data extracted from the screenshot
  const faqs = [
    {
      question: "Is there a free trial available?",
      answer: "We don't offer a free trial, but you can explore our limited free version to get a feel for the platform. For full access to premium features and data, a subscription is required."
    },
    {
      question: "How do credits work and what happens when I run out?",
      answer: "Credits are used to unlock specific ad details or perform advanced searches. If you run out, you can easily top up your balance from your dashboard or upgrade to a higher tier plan for more monthly credits."
    },
    {
      question: "What’s the difference between Regular and Pro+ filters?",
      answer: "Regular filters allow you to search by basic metrics like date and format. Pro+ filters give you deeper insights, letting you filter by specific technologies, platform placements, and advanced engagement metrics."
    },
    {
      question: "Can I switch between plans?",
      answer: "Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes will take effect immediately or at the start of the next billing cycle, depending on the switch."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Absolutely. There are no long-term contracts. You can cancel your subscription directly from your dashboard, and you will retain access until the end of your current billing period."
    },
    {
      question: "Do you offer discounts for teams or agencies?",
      answer: "Yes! Our Team plan is designed specifically for agencies and includes multiple seats at a discounted rate. Contact our sales team for custom enterprise solutions."
    },
    {
      question: "Can I pay in Euro or other currencies?",
      answer: "We accept payments in USD, EUR, and several other major currencies. The conversion is handled automatically by our payment processor at the current exchange rate."
    },
    {
      question: "What is your refund policy?",
      answer: "We offer a 7-day money-back guarantee for all new subscriptions. If you're not satisfied with the tool, simply reach out to support within the first week for a full refund."
    },
    {
      question: "Do I need experience with ads to use AfterLib?",
      answer: "Not at all. AfterLib is built to be intuitive for beginners while offering powerful data for pros. Our onboarding flow guides you through the basics of finding winning ads."
    },
    {
      question: "How can I use AfterLib to get the best results?",
      answer: "We recommend starting by analyzing ads in your specific niche that have been running for longer than a week. Use our 'Sort by Duration' feature to find proven winners quickly."
    },
    {
      question: "How does the Reach filter and estimated ad spend feature work?",
      answer: "Our algorithms estimate reach and ad spend based on impression data and average CPMs in your target region. While these are estimates, they provide a strong indicator of an ad's scale."
    },
    {
      question: "Do you track Shopify sales or show store sales estimates?",
      answer: "We focus on ad intelligence rather than store revenue tracking. However, seeing an ad run for a long time is usually the best indicator that the store is making consistent sales from it."
    },
    {
      question: "Why choose AfterLib over other spy tools?",
      answer: "AfterLib offers the most accurate, real-time data with unique filtering capabilities that others lack. We don't just scrape ads; we provide actionable insights to help you profit."
    },
    {
      question: "Do you show the engagement on ads?",
      answer: "Yes, we track likes, comments, shares, and views for every ad in our database, allowing you to gauge user engagement and viral potential instantly."
    }
  ];

  let openIndex: number |null = null;

  const toggle = (index: number) => {
    openIndex = openIndex === index ? null : index;
  };
</script>

<div class="w-full bg-[#fdfdfc] font-sans py-20 px-4">
  <div class="max-w-[800px] mx-auto">
    
    <!-- Header -->
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
        Frequently Asked Questions
      </h2>
      <p class="text-gray-600 text-lg">
        Everything you need to know about AfterLib and ad intelligence.
      </p>
    </div>

    <!-- Accordion -->
    <div class="border border-gray-200 rounded-sm bg-white shadow-sm divide-y divide-gray-200">
      {#each faqs as faq, i}
        <div class="group">
          <button 
            class="w-full flex items-center justify-between p-6 text-left focus:outline-none bg-white hover:bg-gray-50 transition-colors duration-200"
            on:click={() => toggle(i)}
          >
            <span class="text-[17px] font-medium text-[#1a1a1a] pr-8 leading-snug">
              {faq.question}
            </span>
            <!-- Chevron Icon -->
            <div class="flex-shrink-0 ml-4 transition-transform duration-300 {openIndex === i ? 'rotate-180' : ''}">
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
          
          {#if openIndex === i}
            <div transition:slide={{ duration: 300, axis: 'y' }} class="bg-white">
              <div class="px-6 pb-6 pt-0 text-gray-600 leading-relaxed text-[16px]">
                {faq.answer}
              </div>
            </div>
          {/if}
        </div>
      {/each}
    </div>

    <!-- Bottom Contact Section -->
    <div class="text-center mt-20">
      <p class="text-lg text-gray-800 mb-2">
        Have a question? We're here for you!
      </p>
      <p class="text-lg text-gray-800 mb-8">
        Our support team is ready to assist you
      </p>
      
      <button class="inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded bg-white text-sm font-bold text-gray-800 hover:bg-gray-50 transition-colors duration-200 shadow-sm gap-2">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
        Contact support
      </button>
    </div>

  </div>
</div>