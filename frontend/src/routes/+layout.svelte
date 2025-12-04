<script lang="ts">
	import '../app.css';
	import Head from '$lib/components/Head.svelte';
	import Footer from '$lib/components/Footer.svelte';
	
	let { children } = $props();
</script>

<Head />
<div class="min-h-screen bg-[#F5F5F0]">
{@render children()}
</div>

<Footer />
