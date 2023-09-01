<script>
	import { onMount } from 'svelte';
	import loader from '@beyonk/async-script-loader';
	// import { GoogleAnalytics } from '@beyonk/svelte-google-analytics';
	import DesktopHeader from '$lib/core/DesktopHeader.svelte';
	import MobileLogo from '$lib/core/MobileLogo.svelte';
	import MobileNav from '$lib/core/MobileNav.svelte';
	import MobileMenu from '$lib/core/MobileMenu.svelte';
	import TheFooter from '$lib/core/TheFooter.svelte';

	import '../styles/global.css';
	import '../styles/global.scss';

	const mainProperty = 'G-7PT3JH3660';
	let counter = 1;
	let coo_deleted = false;
	// let ga;

	function enableAnalytics() {
		// ga.init();

		// if (typeof gtag != undefined) {
		// 	console.log('CHECK');
		// 	gtag('consent', 'update', {
		// 		ad_storage: 'granted',
		// 		analytics_storage: 'granted'
		// 	});
		// }

		gtag('consent', 'update', {
			ad_storage: 'granted',
			analytics_storage: 'granted'
		});
	}

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

		// deleteAllCookies();
	}

	function test() {
		return Boolean(window.dataLayer).valueOf() && Array.isArray(window.dataLayer);
	}

	function gtag() {
		window.dataLayer.push(arguments);
	}

	function deleteAllCookies() {
		if (document.cookie.indexOf('_ga_7PT3JH3660') > -1 && document.cookie.indexOf('_ga') > -1) {
			console.log('CHECK');
			coo_deleted = true;

			setTimeout(() => {
				document.cookie.split(';').forEach(function (c) {
					document.cookie = c
						.replace(/^ +/, '')
						.replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/');
				});

				let cookies = document.cookie.split('; ');
				for (let c = 0; c < cookies.length; c++) {
					let d = window.location.hostname.split('.');
					while (d.length > 0) {
						let cookieBase =
							encodeURIComponent(cookies[c].split(';')[0].split('=')[0]) +
							'=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' +
							d.join('.') +
							' ;path=';
						let p = location.pathname.split('/');
						document.cookie = cookieBase + '/';
						while (p.length > 0) {
							document.cookie = cookieBase + p.join('/');
							p.pop();
						}
						d.shift();
					}
				}

				// gtag('consent', 'update', {
				// 	ad_storage: 'denied',
				// 	analytics_storage: 'denied'
				// });
			}, 750); // ????????????????
		} else if (coo_deleted === false && counter < 300) {
			counter++;

			console.log('not found');
			setTimeout(() => {
				deleteAllCookies();
			}, 200);
		}
	}

	function callback() {
		window.dataLayer = window.dataLayer || [];

		gtag('consent', 'default', {
			ad_storage: 'denied',
			analytics_storage: 'denied'
		});

		gtag('js', new Date());

		gtag('config', mainProperty);
	}

	onMount(async () => {
		setTimeout(() => {
			init();
		}, 100);
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
			margin-bottom: 55px; // delete or 50px ? calc(50px + 20vw)
		}
		.desktop-wrapper {
			display: none;
		}
		.mobile-wrapper {
			display: block;
		}
	}
</style>
