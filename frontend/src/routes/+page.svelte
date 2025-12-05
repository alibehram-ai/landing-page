<script lang="ts">
	import SocialProofSection from '$lib/components/SocialProofSection.svelte';
	import Tutorial from '$lib/components/Tutorial.svelte';
	import PricingFeatureBadges from '$lib/components/PricingFeatureBadges.svelte';
    import FeatureShowcase from '$lib/components/FeatureShowcase.svelte';
    import SmartFeatures from '$lib/components/SmartFeatures.svelte';
    import CTASection from '$lib/components/CTASection.svelte';
    import PaymentPlans from '$lib/components/PaymentPlans.svelte';
    import Faq from '$lib/components/Faq.svelte';
</script>

<Tutorial />
<!-- Social Proof Section -->
<SocialProofSection />
<!-- Comparison Section -->
<PricingFeatureBadges />

<!-- Feature Showcase Section -->
<!-- <FeatureShowcase /> -->

<SmartFeatures/>

<!-- Call to Action Section -->
<CTASection />

<!-- Payment Plans Section -->  
<PaymentPlans />

<!-- FAQ Section -->
<Faq />