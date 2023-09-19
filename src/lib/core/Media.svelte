<script>
	import { onMount } from 'svelte';
	import loader from '@beyonk/async-script-loader';
	import HelperStore from '../../../src/stores/HelperStore';

	export let isMobile;
	export let manuelMobile;

	let imageNumber = '2-1';

	const yellowBaseUrl = 'https://images.arkunis.com/yellow/perfekt';

	const yellowSizes =
		'(max-width: 360px) 360px and (max-width: 1024px)) 304px, (min-width: 3840px) 417px, (min-width: 2560px) 423px, (min-width: 1920px) 427px, (min-width: 1025px) 304px, 100vw';

	async function init() {
		function callback() {
			(window.adsbygoogle = window.adsbygoogle || []).push({});
		}

		return new Promise(function (resolve, reject) {
			let s;
			s = document.createElement('script');
			s.src =
				'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6800691774097678';
			s.onload = resolve;
			s.onerror = reject;
			document.head.appendChild(s);
		}).then(callback);
	}

	onMount(() => {
		setTimeout(() => {
			if (isMobile === manuelMobile && $HelperStore.mediaType === 'google') {
				init();
			}
		}, 500);
	});
</script>

<div class="anz-mobile">Anzeige</div>
<div
	class:yellow-wrapper-mobile={manuelMobile === true}
	class:yellow-wrapper-desktop={manuelMobile === false}
>
	{#if isMobile === manuelMobile && localStorage.consent != undefined}
		{#if $HelperStore.mediaType === 'yellow'}
			<a href="https://www.arkunis.de/konfigurator" target="_blank">
				<div class="anz-desktop">Anzeige</div>
				<picture>
					<source
						sizes={yellowSizes}
						srcSet="{yellowBaseUrl}/1366/avif/{imageNumber}.avif 304w, {yellowBaseUrl}/1920/avif/{imageNumber}.avif 427w, {yellowBaseUrl}/2560/avif/{imageNumber}.avif 423w, {yellowBaseUrl}/3840/avif/{imageNumber}.avif 417w, {yellowBaseUrl}/360/avif/{imageNumber}.avif 912w"
						type="image/avif"
					/>
					<source
						sizes={yellowSizes}
						srcSet="{yellowBaseUrl}/1366/webp/{imageNumber}.webp 304w, {yellowBaseUrl}/1920/webp/{imageNumber}.webp 427w, {yellowBaseUrl}/2560/webp/{imageNumber}.webp 423w, {yellowBaseUrl}/3840/webp/{imageNumber}.webp 417w, {yellowBaseUrl}/360/webp/{imageNumber}.webp 912w"
						type="image/webp"
					/>
					<img
						sizes={yellowSizes}
						src="{yellowBaseUrl}/1366/jpg/{imageNumber}.jpg"
						class:yellow-image-mobile={manuelMobile === true}
						class:yellow-image-desktop={manuelMobile === false}
						srcSet="{yellowBaseUrl}/1366/jpg/{imageNumber}.jpg 304w, {yellowBaseUrl}/1920/jpg/{imageNumber}.jpg 427w, {yellowBaseUrl}/2560/jpg/{imageNumber}.jpg 423w, {yellowBaseUrl}/3840/jpg/{imageNumber}.jpg 417w, {yellowBaseUrl}/360/jpg/{imageNumber}.jpg 912w"
						alt="yellow"
					/>
				</picture>
			</a>
		{:else if $HelperStore.mediaType === 'google'}
			<div class="goo">
				{#if isMobile === true && manuelMobile === true}
					<ins
						class="adsbygoogle"
						style="display:block"
						data-ad-client="ca-pub-6800691774097678"
						data-ad-slot="7607089982"
						data-ad-format="vertical"
						data-full-width-responsive="true"
					/>
				{:else}
					<ins
						class="adsbygoogle"
						style="display:inline-block;width:450px;height:850px"
						data-ad-client="ca-pub-6800691774097678"
						data-ad-slot="1438989650"
					/>
				{/if}
			</div>
		{/if}
	{/if}
</div>

<style lang="scss">
	.anz-mobile {
		display: none;
	}
	.anz-desktop {
		position: absolute;
		width: 100%;
		text-align: center;
		font-size: 0.75vw;
		text-align: right;
		padding-right: 0.5vw;
		top: -1vw;
		left: 0;
	}
	.goo {
		width: 24.5vw;
		height: 100%;
		background-color: grey;
	}
	a {
		width: 100%;
		height: 100%;
	}
	picture {
		display: flex;
		justify-content: center;
	}
	.yellow-wrapper-desktop {
		display: block !important;
		position: sticky;
		top: 10vh;
		height: 44.271vw;
		margin: 1vw 0;
	}
	.yellow-image-desktop {
		width: 100%;
		// height: 100%;
		// border: solid #fbcb4f 0.5vw;
		border-radius: 10px;
		box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3), -2px 2px 3px rgba(0, 0, 0, 0.3);
	}
	.yellow-wrapper-mobile {
		display: none !important;
		width: 100%;
		height: 113vw;
		// background-color: grey;
		display: flex;
		justify-content: center;
		margin-bottom: 6vw;
	}
	.yellow-image-mobile {
		display: none !important;
		margin: 0 auto;
		width: 90%;
		// padding: 5vw;
		// border: solid #fbcb4f 3vw;
		border-radius: 10px;
		box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3), -2px 2px 3px rgba(0, 0, 0, 0.3);
	}

	@media (max-width: 1024px) {
		.goo {
			width: 100%;
		}
		.anz-desktop {
			display: none;
		}
		.anz-mobile {
			display: block;
			width: 100%;
			text-align: center;
			// padding-left: 7vw;
			font-size: 3.5vw;
		}
		.yellow-wrapper-mobile {
			display: flex !important;
		}
		.yellow-image-mobile {
			display: flex !important;
		}
		.yellow-wrapper-desktop {
			display: none !important;
		}
		.yellow-image-desktop {
			display: none !important;
		}
	}

	@media (min-width: 1921px) {
		.anz-desktop {
			font-size: 14.4px;
			padding-right: 9.6px;
			top: -19.2px;
		}
		.anz-mobile {
			display: none;
		}
		.yellow-wrapper-desktop {
			height: 850.003px;
			display: block !important;
		}
		.yellow-image-desktop {
			display: block !important;
		}
		.yellow-wrapper-mobile {
			display: none !important;
		}
		.yellow-image-mobile {
			display: none !important;
		}
	}
</style>
