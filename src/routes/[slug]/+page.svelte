<script>
	import { onMount } from 'svelte';
	import MobileStore from '../../stores/MobileStore';

	import Spruchcard from '$lib/cards/Spruchcard.svelte';
	import Weiteresprueche from '$lib/cards/Weiteresprueche.svelte';
	import Headerh1 from '$lib/cards/Headerh1.svelte';
	import RelatedArticles from '$lib/core/RelatedArticles.svelte';
	import { page } from '$app/stores';
	// import { onMount } from 'svelte';

	export let data;

	let showScrollToTop = false;

	let scrollPosition = 0;

	$: if (scrollPosition > 800 && !data.isMobile) {
		showScrollToTop = true;
	} else {
		showScrollToTop = false;
	}

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		});
	};

	onMount(() => {
		console.log('data', data.isMobile);
	});
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

		<div class="sprueche-card">
			<!-- <div class="sprueche-card-mobile">
				{#if data.isMobile}
					{#each data.spruchData.spruchcarddata as spruch, index}
						{#if index <= 1}
							<Spruchcard card={spruch} {index} userIsMobile={data.isMobile} />
						{/if}
					{/each}

					<RelatedArticles imageArray={data.spruchData.othersites} />

					{#each data.spruchData.spruchcarddata as spruch, index}
						{#if index > 1}
							<Spruchcard card={spruch} {index} userIsMobile={data.isMobile} />
						{/if}
					{/each}
				{/if}
			</div> -->

			<!-- {#if !data.isMobile} -->
			{#each data.spruchData.spruchcarddata as spruch, index}
				<Spruchcard card={spruch} {index} userIsMobile={data.isMobile} />

				{#if data.isMobile && index === 1}
					<div class="sprueche-card-mobile">
						<RelatedArticles imageArray={data.spruchData.othersites} />
					</div>
				{:else if !data.isMobile && index === 3}
					<div class="sprueche-card-desktop">
						<RelatedArticles imageArray={data.spruchData.othersites} />
					</div>
				{/if}
			{/each}
			<!-- {/if} -->

			<RelatedArticles imageArray={data.spruchData.othersites.reverse()} />

			{#if data.spruchData.weiteredata}
				<Weiteresprueche weiteredata={data.spruchData.weiteredata} />

				<RelatedArticles imageArray={data.spruchData.othersites.reverse()} />
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
		display: block;
	}
	.sprueche-card-mobile {
		display: none;
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
	.sprueche-card {
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		flex-wrap: wrap;
		width: 91.9%;
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
		.sprueche-card-desktop {
			display: none;
		}
		.sprueche-card-mobile {
			display: block;
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
		.sprueche-card-desktop {
			display: none;
		}
		.sprueche-card-mobile {
			display: block;
		}
		.sprueche-main {
			width: 100%;
			margin-top: 0;
		}

		.sprueche-card {
			justify-content: flex-start;
			align-items: center;
			flex-wrap: wrap;
			flex-direction: column;
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
