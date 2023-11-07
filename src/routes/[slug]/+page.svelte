<script>
	import { dev } from '$app/environment';
	import { navigating } from '$app/stores';
	// import { onMount } from 'svelte';
	import HelperStore from '../../../src/stores/HelperStore';
	import Spruchcard from '$lib/cards/Spruchcard.svelte';
	import Weiteresprueche from '$lib/cards/Weiteresprueche.svelte';
	import Headerh1 from '$lib/cards/Headerh1.svelte';
	import RelatedArticles from '$lib/core/RelatedArticles.svelte';
	// import YellowImage from '$lib/core/YellowImage.svelte';
	// import Media from '$lib/core/Media.svelte';
	import Lazy from '$lib/lazymedia/Lazy.svelte';
	import Mainmedia from '$lib/lazymedia/Mainmedia.svelte';
	import { page } from '$app/stores';

	export let data;

	$HelperStore.isMobile = data.isMobile;

	let showScrollToTop = false;

	let oldPosition = 0;
	let scrollPosition = 0;

	// $: scrollFunc(scrollPosition);

	// $: if ($navigating) refreshEzoic();

	const scrollFunc = (scrollPosition) => {
		if (oldPosition < scrollPosition) {
			$HelperStore.mobileMenuDown = true;
		} else {
			$HelperStore.mobileMenuDown = false;
		}

		oldPosition = scrollPosition;

		if (scrollPosition > 800 && !data.isMobile) {
			showScrollToTop = true;
		} else {
			showScrollToTop = false;
		}
	};

	const refreshEzoic = () => {
		if (dev === false) {
			// if (data.isMobile === true && data.isTablet === false) {
			// 	$HelperStore.placeholder.define1 = $HelperStore.placeholder.mobile_inline;
			// 	$HelperStore.placeholder.define2 = $HelperStore.placeholder.mobileBanner;
			// } else if (data.isMobile === false) {
			// 	$HelperStore.placeholder.define1 = $HelperStore.placeholder.desktopsticky;
			// 	$HelperStore.placeholder.define2 = $HelperStore.placeholder.desktopInline;
			// } else if (data.isMobile === true && data.isTablet === true) {
			// 	$HelperStore.placeholder.define1 = $HelperStore.placeholder.mobileBanner;
			// 	$HelperStore.placeholder.define2 = $HelperStore.placeholder.tablet;
			// }

			// window.ezstandalone = window.ezstandalone || {};
			// ezstandalone.cmd = ezstandalone.cmd || [];
			// ezstandalone.cmd.push(function () {
			window.ezstandalone.cmd.push(function () {
				// console.log('CHECK');
				ezstandalone.destroyAll();

				// ezstandalone.define($HelperStore.placeholder.define1, $HelperStore.placeholder.define2);
				// ezstandalone.refresh();
				// ezstandalone.display();

				// ezstandalone.destroyPlaceholders(
				// 	$HelperStore.placeholder.define1,
				// 	$HelperStore.placeholder.define2
				// );

				setTimeout(() => {
					ezstandalone.displayMore(
						$HelperStore.placeholder.define1,
						$HelperStore.placeholder.define2
					);
				}, 500);

				// ezstandalone.define($HelperStore.placeholder.define1, $HelperStore.placeholder.define2);
				// ezstandalone.display();
			});
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		});
	};

	// onMount(() => {
	// 	console.log('TEST');
	// });
</script>

<svelte:window bind:scrollY={scrollPosition} />

<svelte:head>
	<link
		rel="preload"
		as="image"
		imagesizes="(max-width: 1024px) 972px, 
		(min-width: 1920px) 400px, 
		(min-width: 1366px) 285px,
			100vw"
		imagesrcset="https://bilder.perfekterspruch.de/avif/1366/{data.spruchData.spruchcarddata[0]
			.image}.avif 285w, https://bilder.perfekterspruch.de/avif/1920/{data.spruchData
			.spruchcarddata[0].image}.avif 400w, https://bilder.perfekterspruch.de/avif/360/{data
			.spruchData.spruchcarddata[0].image}.avif 972w"
	/>

	<title>{data.spruchData.metatitel}</title>
	<meta name="description" content={data.spruchData.metacontent} />
	<link rel="canonical" href="https://perfekterspruch.de/{$page.params.slug}/" />
	<meta
		name="robots"
		content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
	/>

	<meta property="og:url" content="https://perfekterspruch.de/{$page.params.slug}/" />
	<meta property="og:title" content={data.spruchData.metatitel} />
	<meta property="og:description" content={data.spruchData.metacontent} />

	<meta name="twitter:title" content={data.spruchData.metatitel} />
	<meta name="twitter:description" content={data.spruchData.metacontent} />
</svelte:head>

<div class="sprueche-main">
	{#key $page.params.slug}
		<Headerh1 h1title={data.spruchData.h1title} />

		<div class="sprueche-grid">
			<div class="sprueche-card">
				{#each data.spruchData.spruchcarddata as spruch, index}
					<Spruchcard card={spruch} {index} userIsMobile={data.isMobile} />

					{#if index === 0}
						<div class="sprueche-card-mobile">
							<Mainmedia
								placeholder={130}
								start={true}
								source="mobile-inline"
								isMobile={data.isMobile}
							/>
						</div>
					{/if}

					{#if data.isMobile && index === 1}
						<div class="sprueche-card-mobile">
							<RelatedArticles imageArray={data.spruchData.othersites} />
						</div>
					{/if}

					{#if data.isMobile === true && data.isTablet === false}
						{#if index === 2}
							<Lazy this={() => import('../../lib/lazymedia/Mainmedia.svelte')}>
								<svelte:fragment slot="component" let:Component>
									<Mainmedia
										placeholder={index}
										start={true}
										source="mobile-inline"
										isMobile={data.isMobile}
									/>
								</svelte:fragment>
							</Lazy>
						{/if}
						{#if index === 5 || index === 8 || index === 11 || index === 14 || index === 17 || index === 20 || index === 23 || index === 26 || index === 29 || index === 32 || index === 35 || index === 38}
							<Lazy this={() => import('../../lib/lazymedia/Mainmedia.svelte')}>
								<svelte:fragment slot="component" let:Component>
									<Mainmedia
										placeholder={index}
										start={true}
										source="mobile-inline"
										isMobile={data.isMobile}
									/>
								</svelte:fragment>
							</Lazy>
						{/if}
					{:else if data.isTablet === true && data.isMobile === true}
						{#if index === 3}
							<Mainmedia placeholder={141} start={true} source="tablet" isMobile={data.isMobile} />
						{/if}
						{#if index === 11}
							<Lazy this={() => import('../../lib/lazymedia/Mainmedia.svelte')}>
								<svelte:fragment slot="component" let:Component>
									<Mainmedia
										placeholder={12}
										start={true}
										source="tablet"
										isMobile={data.isMobile}
									/>
								</svelte:fragment>
							</Lazy>
						{/if}
						{#if index === 7 || index === 15 || index === 19 || index === 23 || index === 27 || index === 31}
							<Lazy this={() => import('../../lib/lazymedia/Mainmedia.svelte')}>
								<svelte:fragment slot="component" let:Component>
									<Mainmedia
										placeholder={index}
										start={true}
										source="tablet"
										isMobile={data.isMobile}
									/>
								</svelte:fragment>
							</Lazy>
						{/if}
					{:else}
						{#if data.isMobile === false && index === 2}
							<div class="sprueche-card-desktop">
								<RelatedArticles imageArray={data.spruchData.othersites} />
							</div>
						{/if}

						{#if data.isMobile === false && index === 5}
							<Mainmedia
								placeholder={131}
								start={true}
								source="desktopInline"
								isMobile={data.isMobile}
							/>
						{/if}

						{#if data.isMobile === false && index === 11}
							<Lazy this={() => import('../../lib/lazymedia/Mainmedia.svelte')}>
								<svelte:fragment slot="component" let:Component>
									<Mainmedia
										placeholder={132}
										start={true}
										source="desktopInline"
										isMobile={data.isMobile}
									/>
								</svelte:fragment>
							</Lazy>
						{/if}
						{#if data.isMobile === false && index === 17}
							<Lazy this={() => import('../../lib/lazymedia/Mainmedia.svelte')}>
								<svelte:fragment slot="component" let:Component>
									<Mainmedia
										placeholder={133}
										start={true}
										source="desktopInline"
										isMobile={data.isMobile}
									/>
								</svelte:fragment>
							</Lazy>
						{/if}
						{#if data.isMobile === false && index === 23}
							<Lazy this={() => import('../../lib/lazymedia/Mainmedia.svelte')}>
								<svelte:fragment slot="component" let:Component>
									<Mainmedia
										placeholder={134}
										start={true}
										source="desktopInline"
										isMobile={data.isMobile}
									/>
								</svelte:fragment>
							</Lazy>
						{/if}
						{#if data.isMobile === false && index === 29}
							<Lazy this={() => import('../../lib/lazymedia/Mainmedia.svelte')}>
								<svelte:fragment slot="component" let:Component>
									<Mainmedia
										placeholder={135}
										start={true}
										source="desktopInline"
										isMobile={data.isMobile}
									/>
								</svelte:fragment>
							</Lazy>
						{/if}
						{#if data.isMobile === false && index === 35}
							<Lazy this={() => import('../../lib/lazymedia/Mainmedia.svelte')}>
								<svelte:fragment slot="component" let:Component>
									<Mainmedia
										placeholder={136}
										start={true}
										source="desktopInline"
										isMobile={data.isMobile}
									/>
								</svelte:fragment>
							</Lazy>
						{/if}
						{#if data.isMobile === false && index === 41}
							<Lazy this={() => import('../../lib/lazymedia/Mainmedia.svelte')}>
								<svelte:fragment slot="component" let:Component>
									<Mainmedia
										placeholder={137}
										start={true}
										source="desktopInline"
										isMobile={data.isMobile}
									/>
								</svelte:fragment>
							</Lazy>
						{/if}
						{#if data.isMobile === false && index === 47}
							<Lazy this={() => import('../../lib/lazymedia/Mainmedia.svelte')}>
								<svelte:fragment slot="component" let:Component>
									<Mainmedia
										placeholder={138}
										start={true}
										source="desktopInline"
										isMobile={data.isMobile}
									/>
								</svelte:fragment>
							</Lazy>
						{/if}
					{/if}
				{/each}

				<RelatedArticles imageArray={data.spruchData.othersites.reverse()} />

				{#if data.spruchData.weiteredata}
					<Weiteresprueche weiteredata={data.spruchData.weiteredata} />

					<RelatedArticles imageArray={data.spruchData.othersites.reverse()} />
				{/if}
			</div>

			{#if data.isMobile === false}
				<!-- <Mainmedia placeholder={103} start={true} source="desktopsticky" isMobile={data.isMobile} /> -->
				<div class="yellow-wrapper-desktop">
					<div class="anz-desktop">
						<!-- <div id="ezoic-pub-ad-placeholder-103" /> -->
					</div>
				</div>
			{/if}
		</div>

		<!-- {#if !data.isMobile}
			<div class="scrollToTop" class:scrollToTop-opacity={showScrollToTop} on:click={scrollToTop}>
				<img class="arrowPng" src="/svg/uparrow.svg" alt="uparrow" />
			</div>
		{/if} -->
	{/key}
</div>

<style lang="scss">
	.yellow-wrapper-desktop {
		display: block !important;
		position: sticky;
		top: 10vh;
		// height: 44.271vw;
		height: 600px;
		width: 100%;
		margin: 1vw 0;
	}
	.anz-desktop {
		display: block;
		position: absolute;
		width: 300px;
		height: 600px;
		left: 50%;
		transform: translate(-50%, 0);
	}
	.sprueche-card-desktop {
		display: block !important;
		// width: 92%; // no media
	}
	.sprueche-card-mobile {
		display: none !important;
	}
	.sprueche-main {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: wrap;
		flex-direction: column;

		width: 100%;
		min-height: 100vh;
		padding-bottom: 2vw;
		margin-top: 0.5vw;
	}
	.sprueche-grid {
		display: grid;
		grid-template-columns: 3fr 1fr; // media
		// grid-template-columns: auto; // no media
		justify-items: center;
		width: 97%;
	}

	.sprueche-card {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		flex-wrap: wrap;
		width: 96%; // media
		// width: 100%;
	}

	@media (min-width: 1025px) {
		.scrollToTop {
			opacity: 0;
			position: fixed;
			z-index: 13;
			height: 5vh;
			width: 5vh;
			bottom: 2vw;
			right: 2vw;
			background-color: transparent;
			border-radius: 50%;
			cursor: pointer;
			pointer-events: none;
			will-change: transform;
			transition: opacity 0.6s ease-out;

			.arrowPng {
				height: 100%;
				width: 100%;
				transition: transform 0.15s linear;
			}
			.arrowPng:hover {
				transform: scale(1.03);
			}
		}
		.scrollToTop-opacity {
			opacity: 1;
			pointer-events: all;
		}
	}

	@media (max-width: 480px) {
		.yellow-wrapper-desktop {
			display: none !important;
		}
		.anz-desktop {
			display: none;
		}
		.sprueche-grid {
			display: block !important;
			width: 100%;
		}

		.sprueche-card-desktop {
			display: none !important;
		}
		.sprueche-card-mobile {
			display: block !important;
			width: 100%;
		}
		.sprueche-main {
			width: 100%;
			margin-top: 0;
			padding-bottom: 100px;
		}

		.sprueche-card {
			justify-content: flex-start;
			align-items: center;
			flex-wrap: wrap;
			flex-direction: column;
			width: 100%;
		}
	}
	@media screen and (min-width: 480px) and (max-width: 1024px) {
		.yellow-wrapper-desktop {
			display: none !important;
		}
		.anz-desktop {
			display: none;
		}
		.sprueche-grid {
			display: block !important;
			width: 100%;
		}

		.sprueche-card-desktop {
			display: none !important;
		}
		.sprueche-card-mobile {
			display: block !important;
			width: 100%;
		}
		.sprueche-main {
			width: 100%;
			margin-top: 0;
		}

		.sprueche-card {
			justify-content: space-around;
			align-items: flex-start;
			flex-wrap: wrap;
			flex-direction: row;
			width: 100%;
		}
	}
	@media (min-width: 1921px) {
		.yellow-wrapper-desktop {
			height: 850.003px;
			display: block !important;
		}
		.anz-desktop {
			font-size: 14.4px;
			padding-right: 9.6px;
			top: -19.2px;
		}
		.sprueche-main {
			width: 1920px;
		}

		.sprueche-card {
			width: 100%;
		}
	}
</style>
