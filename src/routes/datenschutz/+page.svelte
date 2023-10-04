<script>
	import { onMount } from 'svelte';
	import HelperStore from '../../../src/stores/HelperStore';
	import Datenschutz from '$lib/core/Datenschutz.svelte';

	const openCosent = () => {
		// $HelperStore.openconsent = true;
		window.googlefc.callbackQueue.push(googlefc.showRevocationMessage);
	};

	const initCockie = async () => {
		return new Promise(function (resolve, reject) {
			let s;
			s = document.createElement('script');
			s.src = 'https://consent.cookiebot.com/958b264b-d084-439a-a2f7-505f79d53549/cd.js';
			s.onload = resolve;
			s.onerror = reject;
			document.head.appendChild(s);
		});
	};

	onMount(async () => {
		// initCockie();
		console.log(window);

		window.addEventListener(
			'CookiebotOnAccept',
			function (e) {
				if (Cookiebot.consent.marketing) {
					console.log('Cookiebot.consent', Cookiebot.consent);
					console.log('Cookiebot', Cookiebot);
					console.log('WORKING', e);
				}
			},
			false
		);
	});
</script>

<svelte:head>
	<title>Datenschutz</title>
	<link rel="canonical" href="https://perfekterspruch.de/datenschutz/" />
	<meta name="robots" content="noindex" />

	<script
		id="Cookiebot"
		src="https://consent.cookiebot.com/uc.js"
		data-cbid="958b264b-d084-439a-a2f7-505f79d53549"
		data-blockingmode="auto"
		type="text/javascript"></script>
</svelte:head>

<div class="finger-wrapper">
	<button on:click={openCosent} class="finger-button">
		<img class="finger-image" src="/svg/fingerprint.svg" alt="fingerprint" />
		<span>Consent Einstellungen</span>
	</button>
</div>

<Datenschutz />

<style lang="scss">
	.finger-wrapper {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 4vw;
	}
	.finger-button {
		display: flex;
		gap: 4vw 0;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: $dark-first-font-color;
		border-radius: 10px;
		padding: 4vw;
		box-shadow: 1px 1px 1.5px rgba(0, 0, 0, 0.2), -1px 1px 1.5px rgba(0, 0, 0, 0.2);
	}
	.finger-image {
		width: 30px;
	}

	@media (min-width: 1025px) {
		div {
			margin-top: 2vh;
		}
		.finger-wrapper {
			position: absolute;
			top: 0;
			right: 10vw;
			width: 10vw;
			height: 10vw;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 0;
		}
		.finger-button {
			display: flex;
			gap: 0.5vw 0;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			background-color: $dark-first-font-color;
			border-radius: 10px;
			padding: 1vw;
			box-shadow: 1px 1px 1.5px rgba(0, 0, 0, 0.2), -1px 1px 1.5px rgba(0, 0, 0, 0.2);
		}
		.finger-image {
			width: 30px;
		}
	}
</style>
