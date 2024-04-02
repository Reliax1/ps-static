<script>
	import { page } from '$app/stores';
	import { dev } from '$app/environment';
	import { onMount } from 'svelte';
	import HelperStore from '../../src/stores/HelperStore';
	import DesktopHeader from '$lib/core/DesktopHeader.svelte';
	import MobileNav from '$lib/core/MobileNav.svelte';
	import MobileMenu from '$lib/core/MobileMenu.svelte';
	import TheFooter from '$lib/core/TheFooter.svelte';
	import MobileSticky from '$lib/lazymedia/MobileSticky.svelte';

	import '../styles/global.css';
	import '../styles/global.scss';

	export let data;

	// const mainProperty = 'G-7PT3JH3660';

	// function gtag() {
	// 	window.dataLayer.push(arguments);
	// }

	// function callback() {
	// 	window.dataLayer = window.dataLayer || [];

	// 	// gtag('consent', 'default', {
	// 	// 	ad_storage: 'denied',
	// 	// 	analytics_storage: 'denied'
	// 	// });

	// 	gtag('js', new Date());

	// 	gtag('config', mainProperty);
	// }

	// const GoogleInit = async () => {
	// 	return new Promise(function (resolve, reject) {
	// 		let s;
	// 		s = document.createElement('script');
	// 		s.src = `https://www.googletagmanager.com/gtag/js?id=${mainProperty}`;
	// 		s.onload = resolve;
	// 		s.onerror = reject;
	// 		document.head.appendChild(s);
	// 	}).then(callback);
	// };

	onMount(async () => {
		// if (dev === false) {

		// }

		$HelperStore.isMobile = data.isMobile;
		$HelperStore.isTablet = data.isTablet;
	});
</script>

<svelte:head>
	<script
		async
		src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6800691774097678"
		crossorigin="anonymous"></script>

	<meta property="fb:app_id" content="4683318608362940" />
	<meta property="og:site_name" content="PerfekterSpruch" />
	<meta property="og:type" content="website" />

	<meta property="og:image" content="https://perfekterspruch.de/png/metalogobig.jpg" />
	<meta property="og:image:type" content="image/jpeg" />
	<meta property="og:image:width" content="1200px" />
	<meta property="og:image:height" content="630px" />
	<meta property="og:image:alt" content="Perfekterspruch Facebook Bild" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@PerfekterSpruch" />
	<meta name="twitter:image" content="https://perfekterspruch.de/png/metalogobig.jpg" />
</svelte:head>

<div class="desktop-wrapper">
	<DesktopHeader />
</div>

<main>
	<slot />

	<TheFooter />
</main>

<div class="mobile-wrapper">
	<MobileNav />
	<MobileMenu />
</div>

{#if $HelperStore.isMobile === true && $HelperStore.mediaType === 'google' && ($page.routeId === '[slug]' || $page.url.pathname === '/')}
	<MobileSticky isMobile={data.isMobile} isTablet={data.isTablet} />
{/if}

<style lang="scss">
	main {
		position: relative;
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		justify-items: center;
		width: 100%;
		margin-top: 11.5vh;
		min-height: 100vh;
	}
	.desktop-wrapper {
		display: block;
	}
	.mobile-wrapper {
		display: none;
	}

	@media (max-width: 1024px) {
		main {
			grid-template-columns: 1fr;
			margin-top: 0;
			overflow-x: hidden;
			margin-top: 55px; // delete or 50px ? calc(50px + 20vw) // 55px
		}
		.desktop-wrapper {
			display: none;
		}
		.mobile-wrapper {
			display: block;
		}
	}
</style>
