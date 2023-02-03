<script>
	import DesktopHeader from '$lib/core/DesktopHeader.svelte';
	import MobileLogo from '$lib/core/MobileLogo.svelte';
	import MobileNav from '$lib/core/MobileNav.svelte';
	import MobileMenu from '$lib/core/MobileMenu.svelte';
	import TheFooter from '$lib/core/TheFooter.svelte';

	import '../styles/global.css';
	import '../styles/global.scss';
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
</svelte:head>

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
	// .the-footer {
	// 	position: absolute;
	// 	bottom: 0;
	// 	left: 0;
	// 	width: 100%;
	// }

	@media (max-width: 1024px) {
		main {
			grid-template-columns: 1fr;
			margin-top: 0;
			overflow-x: hidden;
			margin-bottom: 100px; // delete or 50px ? calc(50px + 20vw)
		}
		.desktop-wrapper {
			display: none;
		}
		.mobile-wrapper {
			display: block;
		}
	}
</style>
