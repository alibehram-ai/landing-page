<script lang="ts">
	import '../app.css';
	import Head from '$lib/components/Head.svelte';
	import Footer from '$lib/components/Footer.svelte';
	
	let { children } = $props();
</script>

<Head />
{@render children()}
<Footer />
