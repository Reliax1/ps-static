<script>
	import { onMount } from 'svelte';
	import loader from '@beyonk/async-script-loader';
	// import { GoogleAnalytics } from '@beyonk/svelte-google-analytics';
	import HelperStore from '../../src/stores/HelperStore';
	import DesktopHeader from '$lib/core/DesktopHeader.svelte';
	import MobileLogo from '$lib/core/MobileLogo.svelte';
	import MobileNav from '$lib/core/MobileNav.svelte';
	import MobileMenu from '$lib/core/MobileMenu.svelte';
	import TheFooter from '$lib/core/TheFooter.svelte';
	// import ConsentBanner from '$lib/core/ConsentBanner.svelte';

	import '../styles/global.css';
	import '../styles/global.scss';

	export let data;

	const mainProperty = 'G-7PT3JH3660';

	async function init() {
		await loader(
			[
				{
					type: 'script',
					url: `https://www.googletagmanager.com/gtag/js?id=${mainProperty}`
				}
			],
			test,
			callback
		);
	}

	function test() {
		return Boolean(window.dataLayer).valueOf() && Array.isArray(window.dataLayer);
	}

	function gtag() {
		window.dataLayer.push(arguments);
	}

	function callback() {
		window.dataLayer = window.dataLayer || [];

		// if (localStorage.consent != 'true') {
		// 	$HelperStore.mediaType = 'yellow';

		// 	gtag('consent', 'default', {
		// 		ad_storage: 'denied',
		// 		analytics_storage: 'denied'
		// 	});
		// } else if (localStorage.consent === 'true') {
		// 	$HelperStore.mediaType = 'google';
		// }

		gtag('js', new Date());

		gtag('config', mainProperty);
	}

	async function initBanner() {
		// function callback() {
		// 	(window.adsbygoogle = window.adsbygoogle || []).push({});
		// }

		return new Promise(function (resolve, reject) {
			let s;
			s = document.createElement('script');
			s.src =
				'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6800691774097678';
			s.onload = resolve;
			s.onerror = reject;
			document.head.appendChild(s);
		});
	}

	onMount(async () => {
		init();
		// initBanner();
		$HelperStore.isMobile = data.isMobile;
		$HelperStore.isTablet = data.isTablet;
	});
</script>

<svelte:head>
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

	<meta name="google-adsense-account" content="ca-pub-6800691774097678" />

	// consent check
	<!-- <script
		async
		src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6800691774097678"
		crossorigin="anonymous"></script> -->

	<!-- <script>
		(adsbygoogle = window.adsbygoogle || []).push({});
	</script> -->

	<!-- Google tag (gtag.js) -->
	<!-- <script async src="https://www.googletagmanager.com/gtag/js?id=G-7PT3JH3660"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('consent', 'default', {
			ad_storage: 'denied',
			analytics_storage: 'denied'
		});

		gtag('js', new Date());

		gtag('config', 'G-7PT3JH3660');
	</script> -->

	<!-- <GoogleAnalytics bind:this={ga} properties={['G-7PT3JH3660']} enabled={false} /> -->
</svelte:head>

<!-- <button on:click={enableAnalytics}>TEST</button> -->

<div class="desktop-wrapper">
	<DesktopHeader />
</div>

<div class="mobile-wrapper">
	<MobileLogo />
</div>

<main>
	<slot />
	<!-- <div class="the-footer"> -->
	<TheFooter />
	<!-- </div> -->
</main>

<!-- <ConsentBanner /> -->

<div class="mobile-wrapper">
	<MobileNav />
	<MobileMenu />
</div>

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

	// button {
	// 	position: absolute;
	// 	top: 0;
	// 	left: 0;
	// 	width: 5vw;
	// 	height: 5vw;
	// 	background-color: grey;
	// 	padding: 2vw;
	// 	z-index: 999;
	// }

	.the-footer {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
	}

	@media (max-width: 1024px) {
		main {
			grid-template-columns: 1fr;
			margin-top: 0;
			overflow-x: hidden;
			margin-bottom: 55px; // delete or 50px ? calc(50px + 20vw) // 55px
		}
		.desktop-wrapper {
			display: none;
		}
		.mobile-wrapper {
			display: block;
		}
	}
</style>
