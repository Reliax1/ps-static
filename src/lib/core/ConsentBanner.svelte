<script>
	import { onMount } from 'svelte';
	import { fade, slide, fly } from 'svelte/transition';
	import HelperStore from '../../../src/stores/HelperStore';
	import Datenschutz from '$lib/core/Datenschutz.svelte';

	// let openconsent = false;
	let height_open = false; // false
	let datenschutz_open = false;
	let einstellungen_open = false; // false

	let required_opened = false; // false
	let optinale_opened = false;

	let required_opened_coo = false; // false
	let optinale_opened_coo = false;

	let consent_given = false;

	const optionale_array = [
		{
			name: '_ga',
			anbieter: 'google.com',
			domain: 'perfekterspruch.de',
			weg: '/',
			typ: 'First-party',
			ablauf: '2 Jahre',
			zweck:
				'Enthält eine zufallsgenerierte User-ID. Anhand dieser ID kann Google Analytics wiederkehrende User auf dieser Website wiedererkennen und die Daten von früheren Besuchen zusammenführen.'
		},
		{
			name: '_ga_7PT3JH3660',
			anbieter: 'google.com',
			domain: 'perfekterspruch.de',
			weg: '/',
			typ: 'First-party',
			ablauf: '2 Jahre',
			zweck:
				'Enthält eine zufallsgenerierte User-ID. Anhand dieser ID kann Google Analytics wiederkehrende User auf dieser Website wiedererkennen und die Daten von früheren Besuchen zusammenführen.'
		}
		// {
		// 	name: 'test',
		// 	anbieter: 'test',
		// 	domain: 'test',
		// 	weg: 'test',
		// 	typ: 'test',
		// 	ablauf: 'test',
		// 	zweck: 'test'
		// }
	];

	function gtag() {
		// @ts-ignore: Unreachable code error
		window.dataLayer.push(arguments);
	}

	const openConsentFunc = () => {
		if (localStorage.consent === undefined) {
			$HelperStore.openconsent = true;
		} else if (localStorage.consent.startsWith('false')) {
			const old_month = localStorage.consent.split('-')[1];

			const date = new Date();
			let month = date.getMonth();
			if (old_month != month) {
				$HelperStore.openconsent = true;
			}
		}
	};

	function fadeSlide(node, options) {
		const slideTrans = slide(node, options);
		return {
			duration: options.duration,
			css: (t) => `
				${slideTrans.css(t, null)}
				opacity: ${t};
			`
		};
	}

	const acceptConsent = () => {
		if (typeof gtag != undefined) {
			// @ts-ignore: Unreachable code error
			gtag('consent', 'update', {
				ad_storage: 'granted',
				analytics_storage: 'granted'
			});
		}

		localStorage.consent = true;

		// close consent banner !!!!!!!!!!!!!!!!
		$HelperStore.openconsent = false;
		document.body.classList.remove('stopScroll');

		setTimeout(() => {
			height_open = false;
			datenschutz_open = false;
			einstellungen_open = false;
			required_opened = false;
			optinale_opened = false;
			required_opened_coo = false;
			optinale_opened_coo = false;
		}, 400);
	};

	const NOTacceptConsent = () => {
		deleteAllCookies();
		document.cookie = '_ga=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
		document.cookie = '_ga_7PT3JH3660=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
		if (typeof gtag != undefined) {
			// @ts-ignore: Unreachable code error
			gtag('consent', 'default', {
				ad_storage: 'denied',
				analytics_storage: 'denied'
			});
		}

		const date = new Date();
		let month = date.getMonth();

		localStorage.consent = `false-${month}`;
		$HelperStore.openconsent = false;
		document.body.classList.remove('stopScroll');

		setTimeout(() => {
			height_open = false;
			datenschutz_open = false;
			einstellungen_open = false;
			required_opened = false;
			optinale_opened = false;
			required_opened_coo = false;
			optinale_opened_coo = false;
		}, 400);
	};

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

	const openDatenschutz = () => {
		if (datenschutz_open === false) {
			height_open = true;
			datenschutz_open = true;
			einstellungen_open = false;
			document.body.classList.add('stopScroll');
		} else {
			height_open = false;
			datenschutz_open = false;
			document.body.classList.remove('stopScroll');
		}
	};
	const closeDatenschutz = () => {
		datenschutz_open = false;

		if (einstellungen_open === false) {
			height_open = false;
			document.body.classList.remove('stopScroll');
		}
	};
	const openEinstellungen = () => {
		if (einstellungen_open === false) {
			einstellungen_open = true;

			if (datenschutz_open === true) {
				datenschutz_open = false;
			}

			height_open = true;
			einstellungen_open = true;
			document.body.classList.add('stopScroll');
		} else {
			if (consent_given === true) {
				acceptConsent();
			} else {
				NOTacceptConsent();
			}
		}
	};
	const openCoo = (number) => {
		if (number === 1) {
			required_opened = !required_opened;
			required_opened_coo = false;
		} else if (number === 2) {
			optinale_opened = !optinale_opened;
			optinale_opened_coo = false;
		} else if (number === 3) {
			required_opened_coo = !required_opened_coo;
		} else if (number === 4) {
			optinale_opened_coo = !optinale_opened_coo;
		}
	};

	onMount(() => {
		openConsentFunc();
	});
</script>

{#if $HelperStore.openconsent === true}
	<div in:fade={{ duration: 1000 }} out:fade={{ duration: 300 }} class="desktop-dark" />
	<div
		in:fly={{ y: 250, duration: 1000, opacity: 1 }}
		out:fade={{ duration: 300 }}
		class="consent-wrapper"
		class:consent-wrapper-open={height_open}
	>
		{#if einstellungen_open}
			<div in:fade={{ duration: 500, delay: 100 }} class="consent-einstellungen">
				<div class="einstellungen-h2">Deine Cookies, deine Entscheidung</div>
				<p class="einstellungen-p">
					Wir nutzen Cookies, um die Website-Funktionalität zu verbessern, die Leistung zu
					analysieren und dir eine persönlichere Erfahrung zu bieten. Oder einfach gesagt: Dank der
					Cookies wird dein Einkauf bei uns noch angenehmer. An dieser Stelle hast du die
					Möglichkeit, die Cookies nach deinen Wünschen einstellen.
				</p>
				<div class="einstellungen-coo-wrapper">
					<div class="einstellungen-coo">
						<div class="einstellungen-coo-top">
							<button on:click={() => openCoo(2)} class="arrow-text">
								<span class="arrow-span">
									<img
										class="arrow"
										class:arrow-rotate={optinale_opened}
										src="/svg/arrow-left.svg"
										alt="arrow"
									/>
								</span>
								<!-- <div class="coo-text">Performance-Cookies</div> -->
								<div class="coo-text">Optionale-Cookies</div>
							</button>
							<div class="switch-container">
								<label class="switch">
									<input class="checkbox" type="checkbox" bind:checked={consent_given} />
									<span class="slider" />
								</label>
							</div>
						</div>

						{#if optinale_opened}
							<div transition:fadeSlide={{ duration: 500 }} class="coo-second-wrapper">
								<div class="coo-second">
									Bei den optionalen Cookies handelt es sich um Performance- und Targeting-Cookies.
									Diese helfen uns dabei, Besuche zu zählen, Verkehrsquellen zu identifizieren und
									dir relevante Werbung anzuzeigen. Damit können wir deinen Besuch auf unserer
									Website noch angenehmer gestalten.
								</div>
								<button on:click={() => openCoo(4)} class="coo-second-link">Cookie-Details</button>
							</div>
						{/if}

						{#if optinale_opened_coo}
							<div in:fade={{ duration: 400 }} class="coo-second-wrapper">
								{#each optionale_array as item}
									<div class="main-coo-wrapper">
										<div class="coo-second-wrap">
											<div class="main-coo-left">Name</div>
											<div class="main-coo-right">
												{item.name}
											</div>
										</div>
										<div class="coo-second-wrap">
											<div class="main-coo-left">Anbieter</div>
											<div class="main-coo-right">
												{item.anbieter}
											</div>
										</div>
										<div class="coo-second-wrap">
											<div class="main-coo-left">Domain</div>
											<div class="main-coo-right">
												{item.domain}
											</div>
										</div>
										<div class="coo-second-wrap">
											<div class="main-coo-left">Weg</div>
											<div class="main-coo-right">
												{item.weg}
											</div>
										</div>
										<div class="coo-second-wrap">
											<div class="main-coo-left">Typ</div>
											<div class="main-coo-right">
												{item.typ}
											</div>
										</div>
										<div class="coo-second-wrap">
											<div class="main-coo-left">Ablauf</div>
											<div class="main-coo-right">
												{item.ablauf}
											</div>
										</div>
										<div class="coo-second-wrap">
											<div class="main-coo-left">Zweck</div>
											<div class="main-coo-right">
												{item.zweck}
											</div>
										</div>
									</div>
								{/each}
							</div>
						{/if}
					</div>
				</div>
			</div>
		{/if}
		{#if datenschutz_open}
			<div in:fade={{ duration: 500, delay: 100 }} class="datenschutz-wrapper">
				<!-- <div class="datenschutz-wrapper"> -->
				<div class="close-datenschutz">
					<button on:click={closeDatenschutz} class="close-button">
						<img class="close-datenschutz-image" src="/svg/xx.svg" alt="x" />
					</button>
				</div>
				<div class="datenschutz-main">
					<Datenschutz />
				</div>
			</div>
		{/if}
		<div class="consent-content">
			<div class="consent-text1">
				Auch wir machen diese Sache mit den Cookies. Sie helfen uns dabei, unsere Seite noch besser
				zu machen. Ist das für dich in Ordnung? <button
					on:click={openDatenschutz}
					class="consent-link">Ich will mehr wissen.</button
				>
			</div>

			<button on:click={openEinstellungen} class="consent-button2"
				>{#if einstellungen_open}
					<span in:fade={{ duration: 300 }}>Speichern</span>
				{:else}
					<span in:fade={{ duration: 300 }}>Einstellungen</span>
				{/if}</button
			>
			<button on:click={acceptConsent} class="consent-button1"
				>{#if einstellungen_open}
					<span in:fade={{ duration: 300 }}>Alle akzeptieren</span>
				{:else}
					<span in:fade={{ duration: 300 }}>Ok</span>
				{/if}</button
			>
		</div>
	</div>
{/if}

<style lang="scss">
	.desktop-dark {
		display: block;
		position: fixed;
		height: 100vh;
		width: 100vw;
		left: 0;
		top: 0;
		background-color: rgba(0, 0, 0, 0.2);
		z-index: 898;
	}
	.main-coo-wrapper {
		width: 100%;
		background-color: #ebebeb;
		display: flex;
		flex-direction: column;
		border-bottom: solid 1px #aaa;
		padding: 2vw;
		font-size: 3vw;
	}
	.coo-second-wrap {
		display: flex;
		padding: 0.25vw 0;
	}
	.main-coo-left {
		width: 50%;
	}
	.main-coo-right {
		width: 50%;
	}

	.arrow-text {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.arrow-span {
		position: relative;
		width: 4vw;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 2vw;
	}

	.arrow {
		width: 100%;
		transform: rotate(180deg);
		transition: transform 0.2s ease;
		filter: invert(70%) sepia(9%) saturate(0%) hue-rotate(273deg) brightness(98%) contrast(82%);
	}
	.arrow-rotate {
		transform: rotate(270deg);
		// filter: $main-color-filter;
	}

	.coo-text {
		display: flex;
		justify-content: center;
		align-items: center;
		text-transform: uppercase;
	}
	.switch-text {
		color: #aaa;
		// font-size: 3.5vw;
		font-size: 13px;
		text-align: end;
		line-height: 1.1;
	}
	.switch-container {
		display: grid;
		place-items: center;
	}

	.switch {
		display: block;
		width: 16vw;
		height: 7vw;
		position: relative;
	}

	.checkbox {
		opacity: 0;
		height: 0;
		width: 0;
	}

	.slider {
		position: absolute;
		inset: 0;
		background-color: #aaa;
		border-radius: 50px;
		cursor: pointer;
		transition: all 0.5s ease-out;
	}

	.slider::before {
		position: absolute;
		content: '';
		top: 1vw;
		left: 5px;
		width: 5vw;
		height: 5vw;
		border-radius: 50%;
		background-color: #fff;
		transform: translateX(0);
		transition: all 0.5s ease-out;
	}

	.checkbox:checked + .slider {
		background-color: #0e0e0e;
	}

	.checkbox:checked + .slider::before {
		transform: translateX(8vw);
	}

	.consent-wrapper {
		position: fixed;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		// justify-content: space-between;
		bottom: 55px;
		width: 100%;
		// height: 215px;
		// min-height: 215px;
		background-color: #fff;
		z-index: 899;
		padding: 18px 12px;
		box-shadow: 0px -1px 5px rgba(0, 0, 0, 0.2);
		border-top-right-radius: 10px;
		border-top-left-radius: 10px;
		transition: height 1s ease;
		// overflow: hidden;
		will-change: transform;
	}
	.consent-wrapper-open {
		height: calc(100vh - 55px);
		max-height: 100vh;
		border-top-right-radius: 0;
		border-top-left-radius: 0;
	}

	.consent-einstellungen {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		position: relative;
		overflow-y: scroll;
		width: 100%;
	}
	.einstellungen-h2 {
		// height: 6%;
		font-size: 5vw;
		width: 100%;
		text-align: center;
		font-weight: bold;
		margin-bottom: 4vw;
	}
	.einstellungen-p {
		// height: 30%;
		// font-size: 3.5vw;
		font-size: 13px;
		margin-bottom: 4vw;
	}
	.einstellungen-coo-wrapper {
		// height: calc(100vh - 215px - 55px - 33vh);
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		overflow-y: auto;
		padding: 0vw 2vw 2vw 2vw;
		max-height: 1000px;
		min-height: 180px !important;
	}
	.einstellungen-coo {
		display: flex;
		flex-direction: column;
		border-bottom: solid 1px rgb(230, 230, 230);
	}
	.einstellungen-coo-top {
		display: flex;
		justify-content: space-between;
		padding: 4vw 0;
		// border-bottom: solid 1px rgb(230, 230, 230);
		text-transform: uppercase;
	}
	.coo-second-wrapper {
		// font-size: 3.5vw;
		font-size: 13px;
		padding: 0vw 4vw 4vw 4vw;
	}
	.coo-second-link {
		text-decoration: underline;
		margin-top: 2vw;
	}
	.consent-text1 {
		// font-size: 3.5vw;
		font-size: 13px;
		// margin-bottom: 10px;
		text-align: center;
	}
	.consent-link {
		text-decoration: underline;
	}
	.consent-button1 {
		color: #fff;
		width: 100%;
		background-color: $dark-nav;
		height: 50px;
		// font-weight: bold;
		border-radius: 10px;
		box-shadow: 0px 0px 5px rgba(1, 1, 1, 0.1), 1px 2px 3px rgba(1, 1, 1, 0.15);
	}
	.consent-button2 {
		width: 100%;
		height: 50px;
	}

	.datenschutz-wrapper {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		height: 50%;
		// height: calc(100vh - 215px - 55px - 6vw);
		// font-size: 3.5vw;
		font-size: 13px;
		margin-bottom: 15px;
		box-shadow: $mobile-shadow;
		border-radius: 10px;
		padding: 1vw;
	}

	.datenschutz-main {
		height: 95%;
		overflow-y: scroll;
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
	.datenschutz-main::-webkit-scrollbar {
		display: none;
	}
	.close-datenschutz {
		width: 100%;
		height: 5%;
		display: flex;
		justify-content: flex-end;
	}
	.close-button {
		display: flex;
		justify-content: flex-end;
		width: 6%;
	}
	.close-datenschutz-image {
		width: 100%;
	}
	.consent-content {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		transition: unset;
	}

	@media (min-width: $media-desktop) {
		.main-coo-wrapper {
			width: 100%;
			background-color: #ebebeb;
			border-bottom: solid 1px #aaa;
			padding: 0.5vw;
			font-size: 0.7vw;
		}
		.coo-second-wrap {
			display: flex;
			padding: 0.25vw 0;
		}
		.main-coo-left {
			width: 50%;
		}
		.main-coo-right {
			width: 50%;
		}

		.arrow-span {
			width: 1vw;
			margin-right: 2vw;
		}

		.arrow {
			width: 100%;
			transform: rotate(180deg);
			transition: transform 0.2s ease;
			filter: invert(70%) sepia(9%) saturate(0%) hue-rotate(273deg) brightness(98%) contrast(82%);
		}
		.arrow-rotate {
			transform: rotate(270deg);
		}

		.coo-text {
			font-size: 0.8vw;
		}
		.switch-text {
			font-size: 0.8vw;
		}

		.switch {
			width: 3vw;
			height: 1.31vw;
		}

		.slider {
			border-radius: 50px;
		}

		.slider::before {
			position: absolute;
			content: '';
			top: 0.125vw;
			left: 0.2vw;
			width: 1.05vw;
			height: 1.05vw;
			border-radius: 50%;
			background-color: #fff;
			transform: translateX(0);
			transition: all 0.5s ease-out;
		}

		.checkbox:checked + .slider::before {
			transform: translateX(1.5vw);
		}

		.consent-wrapper {
			// position: fixed;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			left: 50%;
			transform: translate(-50%, 0);
			width: 33vw;
			// height: 21.5vh;
			padding: 1.5vw 1.5vw;
			box-shadow: 0px -1px 5px rgba(0, 0, 0, 0.2);
			border-radius: 10px;
			min-height: unset;
		}
		.consent-einstellungen {
			width: 100%;
			// height: 52vh;
			margin-bottom: 1vw;
		}
		.einstellungen-h2 {
			font-size: 1.3vw;
			width: 100%;
			margin-bottom: 1vw;
		}
		.einstellungen-p {
			font-size: 0.8vw;
			margin-bottom: 1vw;
		}
		.einstellungen-coo-wrapper {
			height: 33vh;
			overflow-y: auto;
			padding: 0vw 1vw 1vw 1vw;
			max-height: 1000px;
			min-height: 180px !important;
		}
		.einstellungen-coo-top {
			padding: 1vw 0;
		}
		.coo-second-wrapper {
			font-size: 0.8vw;
			padding: 0vw 1vw 1vw 1vw;
		}
		.coo-second-link {
			margin-top: 0.5vw;
		}

		.consent-wrapper-open {
			height: 75vh;
			max-height: unset;
		}
		.consent-text1 {
			font-size: 0.8vw;
			margin-bottom: 10px;
		}
		.consent-button1 {
			width: 90%;
			height: 2.5vw;
			border-radius: 10px;
			box-shadow: 0px 0px 5px rgba(1, 1, 1, 0.1), 1px 2px 3px rgba(1, 1, 1, 0.15);
			transition: background-color 0.3s ease;
			font-size: 0.9vw;

			&:hover {
				background-color: lighten($dark-nav, 8%);
			}
		}
		.consent-button2 {
			width: 90%;
			height: 2.5vw;
			transition: text-decoration 0.3s ease;
			font-size: 0.8vw;

			&:hover {
				text-decoration: underline;
			}
		}

		.datenschutz-wrapper {
			// height: 52vh;
			font-size: 0.8vw;
			margin-bottom: 15px;
			box-shadow: $mobile-shadow;
			border-radius: 10px;
			padding: 0.5vw;
		}

		.datenschutz-main {
			height: 95%;
		}
		.close-datenschutz {
			width: 100%;
			height: 5%;
		}
		.close-button {
			width: 4%;
		}
		.consent-content {
			align-items: center;
		}
	}
</style>
