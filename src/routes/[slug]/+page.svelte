<script>
	// import { onMount } from 'svelte';
	import HelperStore from '../../../src/stores/HelperStore';
	import Spruchcard from '$lib/cards/Spruchcard.svelte';
	import Weiteresprueche from '$lib/cards/Weiteresprueche.svelte';
	import Headerh1 from '$lib/cards/Headerh1.svelte';
	import RelatedArticles from '$lib/core/RelatedArticles.svelte';
	// import YellowImage from '$lib/core/YellowImage.svelte';
	import Media from '$lib/core/Media.svelte';
	import Lazy from '$lib/lazymedia/Lazy.svelte';
	import { page } from '$app/stores';

	export let data;

	$HelperStore.isMobile = data.isMobile;

	let showScrollToTop = false;

	let oldPosition = 0;
	let scrollPosition = 0;

	$: scrollFunc(scrollPosition);

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

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		});
	};

	// onMount(() => {
	// 	console.log('data.isTablet ', data.isTablet);
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
							<Media source="normal" manuelMobile={true} isMobile={data.isMobile} />
						</div>
					{/if}

					{#if data.isMobile && $HelperStore.mediaType === 'google'}
						<!-- {#if data.isTablet === false && index === 0}
							<Media source="normal" manuelMobile={true} isMobile={data.isMobile} />
						{/if} -->

						{#if data.isTablet}
							{#if index === 3 || index === 7 || index === 11 || index === 15 || index === 19 || index === 23 || index === 27 || index === 31}
								<Lazy this={() => import('../../lib/lazymedia/Component.svelte')}>
									<svelte:fragment slot="component" let:Component>
										<Component source="tablet" manuelMobile={true} isMobile={data.isMobile} />
									</svelte:fragment>
								</Lazy>
							{/if}
						{:else if index === 2 || index === 5 || index === 8 || index === 11 || index === 14 || index === 17 || index === 20 || index === 23 || index === 26 || index === 29 || index === 32 || index === 35 || index === 38}
							<Lazy this={() => import('../../lib/lazymedia/Component.svelte')}>
								<svelte:fragment slot="component" let:Component>
									<Component source="normal" manuelMobile={true} isMobile={data.isMobile} />
								</svelte:fragment>
							</Lazy>
						{/if}
					{/if}

					{#if data.isMobile && index === 1}
						<div class="sprueche-card-mobile">
							<RelatedArticles imageArray={data.spruchData.othersites} />
						</div>
					{/if}

					{#if data.isMobile === false && index === 2}
						<div class="sprueche-card-desktop">
							<RelatedArticles imageArray={data.spruchData.othersites} />
						</div>
					{/if}

					<!-- {#if data.isMobile === false && $HelperStore.mediaType === 'google' && index === 5}
						<Media source="desktopInline" manuelMobile={false} isMobile={data.isMobile} />
					{/if} -->
					{#if data.isMobile === false && $HelperStore.mediaType === 'google' && index === 5}
						<Lazy this={() => import('../../lib/lazymedia/Component.svelte')}>
							<svelte:fragment slot="component" let:Component>
								<Component source="desktopInline" manuelMobile={false} isMobile={data.isMobile} />
							</svelte:fragment>
						</Lazy>
					{/if}

					{#if data.isMobile === false && $HelperStore.mediaType === 'google' && index === 11}
						<Lazy this={() => import('../../lib/lazymedia/Component.svelte')}>
							<svelte:fragment slot="component" let:Component>
								<Component source="desktopInline" manuelMobile={false} isMobile={data.isMobile} />
							</svelte:fragment>
						</Lazy>
					{/if}
					{#if data.isMobile === false && $HelperStore.mediaType === 'google' && index === 17}
						<Lazy this={() => import('../../lib/lazymedia/Component.svelte')}>
							<svelte:fragment slot="component" let:Component>
								<Component source="desktopInline" manuelMobile={false} isMobile={data.isMobile} />
							</svelte:fragment>
						</Lazy>
					{/if}
					{#if data.isMobile === false && $HelperStore.mediaType === 'google' && index === 23}
						<Lazy this={() => import('../../lib/lazymedia/Component.svelte')}>
							<svelte:fragment slot="component" let:Component>
								<Component source="desktopInline" manuelMobile={false} isMobile={data.isMobile} />
							</svelte:fragment>
						</Lazy>
					{/if}
					{#if data.isMobile === false && $HelperStore.mediaType === 'google' && index === 29}
						<Lazy this={() => import('../../lib/lazymedia/Component.svelte')}>
							<svelte:fragment slot="component" let:Component>
								<Component source="desktopInline" manuelMobile={false} isMobile={data.isMobile} />
							</svelte:fragment>
						</Lazy>
					{/if}
					{#if data.isMobile === false && $HelperStore.mediaType === 'google' && index === 35}
						<Lazy this={() => import('../../lib/lazymedia/Component.svelte')}>
							<svelte:fragment slot="component" let:Component>
								<Component source="desktopInline" manuelMobile={false} isMobile={data.isMobile} />
							</svelte:fragment>
						</Lazy>
					{/if}
					{#if data.isMobile === false && $HelperStore.mediaType === 'google' && index === 41}
						<Lazy this={() => import('../../lib/lazymedia/Component.svelte')}>
							<svelte:fragment slot="component" let:Component>
								<Component source="desktopInline" manuelMobile={false} isMobile={data.isMobile} />
							</svelte:fragment>
						</Lazy>
					{/if}
					{#if data.isMobile === false && $HelperStore.mediaType === 'google' && index === 47}
						<Lazy this={() => import('../../lib/lazymedia/Component.svelte')}>
							<svelte:fragment slot="component" let:Component>
								<Component source="desktopInline" manuelMobile={false} isMobile={data.isMobile} />
							</svelte:fragment>
						</Lazy>
					{/if}
				{/each}

				<RelatedArticles imageArray={data.spruchData.othersites.reverse()} />

				{#if data.spruchData.weiteredata}
					<Weiteresprueche weiteredata={data.spruchData.weiteredata} />

					<RelatedArticles imageArray={data.spruchData.othersites.reverse()} />
				{/if}
			</div>

			{#if data.isMobile === false && $HelperStore.mediaType === 'google'}
				<Media source="normal" manuelMobile={false} isMobile={data.isMobile} />
			{/if}
		</div>

		{#if !data.isMobile}
			<div class="scrollToTop" class:scrollToTop-opacity={showScrollToTop} on:click={scrollToTop}>
				<img class="arrowPng" src="/svg/uparrow.svg" alt="uparrow" />
			</div>
		{/if}
	{/key}
</div>

<style lang="scss">
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
		.sprueche-main {
			width: 1920px;
		}

		.sprueche-card {
			width: 100%;
		}
	}
</style>
