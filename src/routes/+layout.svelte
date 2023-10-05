<script>
	import { onMount } from 'svelte';
	import HelperStore from '../../src/stores/HelperStore';
	import DesktopHeader from '$lib/core/DesktopHeader.svelte';
	import MobileLogo from '$lib/core/MobileLogo.svelte';
	import MobileNav from '$lib/core/MobileNav.svelte';
	import MobileMenu from '$lib/core/MobileMenu.svelte';
	import TheFooter from '$lib/core/TheFooter.svelte';

	import '../styles/global.css';
	import '../styles/global.scss';

	export let data;

	const mainProperty = 'G-7PT3JH3660';

	function gtag() {
		window.dataLayer.push(arguments);
	}

	function callback() {
		window.dataLayer = window.dataLayer || [];

		// gtag('consent', 'default', {
		// 	ad_storage: 'denied',
		// 	analytics_storage: 'denied'
		// });

		gtag('js', new Date());

		gtag('config', mainProperty);
	}

	// async function initGoogleads() {
	// 	return new Promise(function (resolve, reject) {
	// 		let s;
	// 		s = document.createElement('script');
	// 		s.src =
	// 			'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6800691774097678';
	// 		s.onload = resolve;
	// 		s.onerror = reject;
	// 		document.head.appendChild(s);
	// 	});
	// }

	// const getCookie = (n) => {
	// 	let a = `; ${document.cookie}`.match(`;\\s*${n}=([^;]+)`);
	// 	return a ? a[1] : null;
	// };

	function deleteAllCookies() {
		document.cookie.split(';').forEach(function (c) {
			document.cookie = c
				.replace(/^ +/, '')
				.replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/');
		});

		let cookies = document.cookie.split('; ');
		for (let c = 0; c < cookies.length; c++) {
			let d = window.location.hostname.split('.');
			// console.log('d', d);
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
	}

	// const handleConsent = () => {
	// 	window.googlefc = window.googlefc || {};
	// 	window.googlefc.ccpa = window.googlefc.ccpa || {};
	// 	window.googlefc.callbackQueue = window.googlefc.callbackQueue || [];
	// 	// wait for consent
	// 	googlefc.callbackQueue.push({
	// 		CONSENT_DATA_READY: () => {
	// 			window.__tcfapi('getTCData', 2.0, (data, success) => {
	// 				const consent = data.purpose.consents['1'];

	// 				if (consent === true) {
	// 					gtag('consent', 'update', {
	// 						ad_storage: 'granted',
	// 						analytics_storage: 'granted'
	// 					});
	// 				} else {
	// 					deleteAllCookies();
	// 				}
	// 			});
	// 		}
	// 	});
	// };

	const GoogleInit = async () => {
		return new Promise(function (resolve, reject) {
			let s;
			s = document.createElement('script');
			s.src = `https://www.googletagmanager.com/gtag/js?id=${mainProperty}`;
			s.onload = resolve;
			s.onerror = reject;
			document.head.appendChild(s);
		}).then(callback);
	};

	const initCockie = async () => {
		// https://manage.cookiebot.com/de/manage#
		// https://www.cookiebot.com/de/developer/
		// https://support.cookiebot.com/hc/en-us/articles/360007652694-Cookiebot-and-the-IAB-Consent-Framework
		return new Promise(function (resolve, reject) {
			let s;
			s = document.createElement('script');
			s.src =
				'https://consent.cookiebot.com/uc.js?cbid=958b264b-d084-439a-a2f7-505f79d53549&framework=TCFv2.2';
			s.onload = resolve;
			s.onerror = reject;
			document.head.appendChild(s);
		}).then(cockieEvent);
	};

	const cockieEvent = () => {
		window.addEventListener(
			'CookiebotOnAccept',
			function () {
				// CookiebotCallback_OnAccept();
				if (Cookiebot.consent.marketing) {
					initEzoic();
					$HelperStore.marketing_consent = true;
				}
				if (Cookiebot.consent.statistics) {
					GoogleInit();
				}
			},
			false
		);

		window.addEventListener(
			'CookiebotOnDecline',
			function () {
				// CookiebotCallback_OnDecline();
				deleteAllCookies();
			},
			false
		);
	};

	async function initEzoic() {
		return new Promise(function (resolve, reject) {
			let s;
			s = document.createElement('script');
			s.src = 'https://www.ezojs.com/ezoic/sa.min.js';
			s.onload = resolve;
			s.onerror = reject;
			document.head.appendChild(s);
		}).then(EzoicCallback);
	}

	const EzoicCallback = () => {
		if (data.isMobile === true && data.isTablet === false) {
			$HelperStore.placeholder.define1 = $HelperStore.placeholder.mobile_inline;
			$HelperStore.placeholder.define2 = $HelperStore.placeholder.mobileBanner;
		} else if (data.isMobile === false) {
			$HelperStore.placeholder.define1 = $HelperStore.placeholder.desktopsticky;
			$HelperStore.placeholder.define2 = $HelperStore.placeholder.desktopInline;
		} else if (data.isMobile === true && data.isTablet === true) {
			$HelperStore.placeholder.define1 = $HelperStore.placeholder.mobileBanner;
			$HelperStore.placeholder.define2 = $HelperStore.placeholder.tablet;
		}

		window.ezstandalone = window.ezstandalone || {};
		ezstandalone.cmd = ezstandalone.cmd || [];
		ezstandalone.cmd.push(function () {
			ezstandalone.enableConsent();
			ezstandalone.define($HelperStore.placeholder.define1, $HelperStore.placeholder.define2);
			ezstandalone.enable();
			ezstandalone.display();
		});
	};

	// function CookiebotCallback_OnAccept() {
	// 	console.log(window)
	// 	if (typeof ezConsentCategories == 'object' && typeof __ezconsent == 'object') {
	// 		//jede der Zustimmungsoptionen der Benutzer festlegen
	// 		window.ezConsentCategories.preferences = Cookiebot.consent.preferences;
	// 		window.ezConsentCategories.statistics = Cookiebot.consent.statistics;
	// 		window.ezConsentCategories.marketing = Cookiebot.consent.marketing;

	// 		//Aufruf zur Aktualisierung von ezoic der Consent Entscheidungen
	// 		__ezconsent.setEzoicConsentSettings(window.ezConsentCategories);
	// 		console.log('window.ezConsentCategories.marketing', window.ezConsentCategories.marketing);
	// 	}
	// }

	// function CookiebotCallback_OnDecline() {
	// 	if (typeof ezConsentCategories == 'object' && typeof __ezconsent == 'object') {
	// 		//jede der Zustimmungsoptionen der Benutzer festlegen
	// 		window.ezConsentCategories.preferences = false;
	// 		window.ezConsentCategories.statistics = false;
	// 		window.ezConsentCategories.marketing = false;

	// 		//Aufruf zur Aktualisierung von ezoic der Consent Entscheidungen
	// 		__ezconsent.setEzoicConsentSettings(window.ezConsentCategories);
	// 	}
	// }

	async function ezoicCMP() {
		return new Promise(function (resolve, reject) {
			let s;
			s = document.createElement('script');
			s.src = 'https://the.gatekeeperconsent.com/cmp.min.js';
			s.onload = resolve;
			s.onerror = reject;
			document.head.appendChild(s);
		}).then(EzConsentCallback);
	}

	function EzConsentCallback() {
		window.addEventListener(
			'EzConsentCallback',
			function (e) {
				console.log('EVENT', e);
			},
			false
		);
		// console.log('TEST', consent);
		// enthält die notwendigen, Präferenzen, Statistiken und Marketingeigenschaften mit booleschen Werten.
		// if (consent.marketing) {
		// 	initEzoic();
		// }
		// if (consent.statistics) {
		// 	GoogleInit();
		// }
	}

	onMount(async () => {
		ezoicCMP();
		// initCockie();
		// cockieEvent();
		console.log('window', window);

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

	<!-- <script
		id="Cookiebot"
		src="https://consent.cookiebot.com/uc.js"
		data-cbid="958b264b-d084-439a-a2f7-505f79d53549"
		data-blockingmode="auto"
		data-framework="IAB"
		type="text/javascript"></script> -->

	<!-- <script src="https://the.gatekeeperconsent.com/cmp.min.js" data-cfasync="false"></script>

	<script>
		function EzConsentCallback(consent) {
			console.log('TEST', consent);
			// enthält die notwendigen, Präferenzen, Statistiken und Marketingeigenschaften mit booleschen Werten.
			// if (consent.marketing) {
			// 	initEzoic();
			// }
			// if (consent.statistics) {
			// 	GoogleInit();
			// }
		}
	</script> -->
</svelte:head>

<div class="desktop-wrapper">
	<DesktopHeader />
</div>

<div class="mobile-wrapper">
	<MobileLogo />
</div>

<main>
	<slot />

	<TheFooter />
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
