<script>
	import { onMount } from 'svelte';
	import Datenschutz from '$lib/core/Datenschutz.svelte';

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

	const openCosent = () => {
		// window.googlefc.callbackQueue.push(googlefc.showRevocationMessage);
		// window.Cookiebot.show();

		// console.log('window.ezCMP', window.ezCMP);
		// window.ezCMP.generateCMPFromPrivacyCenter();
		deleteAllCookies();

		window.location.href = 'https://perfekterspruch.de/datenschutz/?ez_force_cookie_consent=1';
	};

	onMount(() => {
		deleteAllCookies();
	});
</script>

<svelte:head>
	<title>Datenschutz</title>
	<link rel="canonical" href="https://perfekterspruch.de/datenschutz/" />
	<meta name="robots" content="noindex" />
</svelte:head>

<div class="finger-wrapper">
	<!-- <a class="finger-button" href="https://perfekterspruch.de/datenschutz/?ez_force_cookie_consent=1">
		<img class="finger-image" src="/svg/fingerprint.svg" alt="fingerprint" />
		<span>Consent Einstellungen</span>
	</a> -->
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
