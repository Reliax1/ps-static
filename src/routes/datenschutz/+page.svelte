<script>
	import Datenschutz from '$lib/core/Datenschutz.svelte';

	// const openCosent = () => {
	// 	// window.googlefc.callbackQueue.push(googlefc.showRevocationMessage);
	// 	// window.Cookiebot.show();
	// 	console.log('window.ezCMP', window.ezCMP);
	// 	window.ezCMP.generateCMPFromPrivacyCenter();
	// };
</script>

<svelte:head>
	<title>Datenschutz</title>
	<link rel="canonical" href="https://perfekterspruch.de/datenschutz/" />
	<meta name="robots" content="noindex" />
</svelte:head>

<div class="finger-wrapper">
	<a class="finger-button" href="https://perfekterspruch.de/datenschutz/?ez_force_cookie_consent=1">
		<img class="finger-image" src="/svg/fingerprint.svg" alt="fingerprint" />
		<span>Consent Einstellungen</span>
	</a>
	<!-- <button on:click={openCosent} class="finger-button">
		<img class="finger-image" src="/svg/fingerprint.svg" alt="fingerprint" />
		<span>Consent Einstellungen</span>
	</button> -->
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
