<script>
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { onDestroy } from 'svelte';
	import { page } from '$app/stores';

	import Weiteresprueche from '$lib/cards/Weiteresprueche.svelte';

	let mobileOrNot = null;
	let animationRoundState = false;
	let zufall = true;
	let rangemax = null;
	let rangemin = null;
	let animationState = false;
	let openinhalt = false;
	let darkOverlayState = false;
	let usedNumbers = [];
	let randomSpruech0 = {
		spruch: '',
		auth: ''
	};
	let weiteredata = [];

	const roundAnimation = () => {
		animationRoundState = true;
		setTimeout(() => {
			animationRoundState = false;
		}, 280);
	};
	const warumUpFunc = () => {
		fetch(
			'https://8xfm8zzg6c.execute-api.eu-central-1.amazonaws.com/dev' + '/getspruchdb/' + 123003
		).then((response) => {
			return response.json();
		});
	};
	const getRandomInt = () => {
		let id222 = null;

		if (zufall === true) {
			getZufallNumber();
		}
		id222 = Math.floor(Math.random() * (rangemax - rangemin + 1)) + rangemin;

		if (usedNumbers.includes(id222)) {
			if (usedNumbers.length < rangemax - rangemin + 1) {
				return getRandomInt();
			} else {
				usedNumbers = [];
				return getRandomInt();
			}
		} else {
			usedNumbers.push(id222);

			if (usedNumbers.length > 1) {
				weiteredata.push({
					text: randomSpruech0.spruch,
					author: randomSpruech0.auth
				});
				weiteredata = weiteredata;
			}

			fetch(
				'https://8xfm8zzg6c.execute-api.eu-central-1.amazonaws.com/dev' + '/getspruchdb/' + id222
			)
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					randomSpruech0.spruch = data.spruch;
					randomSpruech0.auth = data.author;
				});
		}
	};

	const generatorAnimation = () => {
		animationState = true;
		setTimeout(() => {
			animationState = false;
		}, 501);
	};
	const copyCardText = () => {
		const copyText = document.getElementsByClassName('generator-text-ppp')[0].innerText;
		navigator.clipboard.writeText(copyText);
	};
	const openinhaltFunc = () => {
		openinhalt = true;
		darkOverlayState = true;

		document.body.classList.add('stopScrolling');
	};
	const nurCloseinhaltFunc = () => {
		openinhalt = false;
		darkOverlayState = false;

		document.body.classList.remove('stopScrolling');
	};
	const closeinhaltFunc = (min, max) => {
		zufall = false;
		rangemin = min;
		rangemax = max;

		getRandomInt();

		openinhalt = false;
		darkOverlayState = false;

		document.body.classList.remove('stopScrolling');
	};
	const removeNoScroll = () => {
		if (document.body.classList.contains('stopScrolling')) {
			document.body.classList.remove('stopScrolling');
		}
	};
	const getZufallNumber = () => {
		const zufallNumber = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

		if (zufallNumber === 1) {
			rangemin = 101001;
			rangemax = 101020;
		} else if (zufallNumber === 2) {
			rangemin = 102001;
			rangemax = 102100;
		} else if (zufallNumber === 3) {
			rangemin = 109001;
			rangemax = 109173;
		} else if (zufallNumber === 4) {
			rangemin = 113001;
			rangemax = 113136;
		} else if (zufallNumber === 5) {
			rangemin = 114001;
			rangemax = 114164;
		} else if (zufallNumber === 6) {
			rangemin = 116001;
			rangemax = 116136;
		} else if (zufallNumber === 7) {
			rangemin = 123001;
			rangemax = 123071;
		} else if (zufallNumber === 8) {
			rangemin = 124001;
			rangemax = 124120;
		} else if (zufallNumber === 9) {
			rangemin = 125001;
			rangemax = 125146;
		} else if (zufallNumber === 10) {
			rangemin = 126001;
			rangemax = 126121;
		}
	};
	const closeinhaltFuncZufall = () => {
		zufall = true;

		document.body.classList.remove('stopScrolling');

		getZufallNumber();

		getRandomInt();

		openinhalt = false;
		darkOverlayState = false;
	};
	const buttonclick = (buttonName) => {
		if (screen.width >= 1025 && !navigator.userAgent.includes('Mobile')) {
			mobileOrNot = 'desktop';
		} else {
			mobileOrNot = 'mobile';
		}

		if (window.location.hostname.includes('perfekterspruch')) {
			fetch('https://8xfm8zzg6c.execute-api.eu-central-1.amazonaws.com/dev' + '/putbutton', {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					buttonname: mobileOrNot + ' ' + buttonName
				})
			});
		}
	};

	onMount(async () => {
		warumUpFunc();
	});

	onDestroy(async () => {
		if (browser) {
			removeNoScroll();
		}
	});
</script>

<div class="generator-main">
	{#if darkOverlayState}
		<div class="darkOverlay" on:click={nurCloseinhaltFunc} />
	{/if}

	<div class="generator-second">
		<div class="generator-quotesOpen" />
		<div class="generator-text">
			{#if rangemax != null}
				<p class="generator-text-ppp">
					{randomSpruech0.spruch}
				</p>
			{:else}
				<p class="generator-text-ppp" on:click={openinhaltFunc}>
					<img class="generator-Thema-svg" src="/svg/topic.svg" alt="icon" />
					<span class="Thema-span">Thema</span>
				</p>
			{/if}

			<div class="generator-text-author">
				<p class="generator-text-author-ppp">{randomSpruech0.auth}</p>
			</div>
		</div>
		<button
			class="generator-newquote"
			on:click={getRandomInt}
			on:click={generatorAnimation}
			on:click={() => buttonclick('generator')}
		>
			<div class="generator-newquote22" class:generator-newquote22-animation={animationState} />
			{#if !zufall}
				<span>Neuer Spruch</span>
			{:else}
				<span>Zufälliger Spruch</span>
			{/if}
		</button>
		<div class="generator-other">
			<div class="generator-other-round" on:click={copyCardText} on:click={roundAnimation}>
				<img class="generator-other-round-svg" src="/svg/copy.svg" alt="icon" />
				<div class:generator-other-round-animation={animationRoundState} />
			</div>

			<div class="generator-other-round" on:click={openinhaltFunc}>
				<img class="generator-other-round-svg" src="/svg/topic.svg" alt="icon" />
			</div>
		</div>
	</div>

	{#if weiteredata.length && $page.routeId == 'zitate-sprueche-generator'}
		<Weiteresprueche {weiteredata} />
	{/if}

	<div class="sticky-table-mobile" class:sticky-table-mobile-active={openinhalt}>
		<span class="sticky-table-mobile-span">Themen</span>
		<ul>
			<li class="sticky-li" on:click={closeinhaltFuncZufall}>Zufall</li>
			<li class="sticky-li" on:click={() => closeinhaltFunc(101001, 101020)}>Beziehungssprüche</li>
			<li class="sticky-li" on:click={() => closeinhaltFunc(102001, 102100)}>Coole Sprüche</li>
			<li class="sticky-li" on:click={() => closeinhaltFunc(109001, 109173)}>Gute Sprüche</li>
			<li class="sticky-li" on:click={() => closeinhaltFunc(113001, 113136)}>Karma Sprüche</li>
			<li class="sticky-li" on:click={() => closeinhaltFunc(114001, 114164)}>Kluge Sprüche</li>
			<li class="sticky-li" on:click={() => closeinhaltFunc(116001, 116136)}>Positive Sprüche</li>
			<li class="sticky-li" on:click={() => closeinhaltFunc(123001, 123071)}>
				Sprüche zum Nachdenken
			</li>
			<li class="sticky-li" on:click={() => closeinhaltFunc(124001, 124120)}>Süße Sprüche</li>
			<li class="sticky-li" on:click={() => closeinhaltFunc(125001, 125146)}>Traurige Sprüche</li>
			<li class="sticky-li" on:click={() => closeinhaltFunc(126001, 126121)}>Weise Sprüche</li>
		</ul>
	</div>
</div>

<style lang="scss">
	:global(.stopScrolling) {
		overflow: hidden;
	}
	@media (max-width: 1024px) {
		.generator-main {
			width: 100%;
		}

		button {
			background: none;
			color: inherit;
			border: none;
			padding: 0;
			font: inherit;
			cursor: pointer;
			outline: inherit;
		}

		.generator-second {
			width: 90%;
			height: 67vh;
			// background: grey;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			flex-wrap: wrap;
			flex-direction: column;
			margin: 0 auto;
			margin-top: 0;
			margin-bottom: 3vh;
			border-radius: 10px;
			overflow: hidden;
			box-shadow: 1.5px 1.5px 2.5px rgba(0, 0, 0, 0.3), -1.5px 1.5px 2.5px rgba(0, 0, 0, 0.3);
		}
		.generator-quotesOpen {
			position: relative;
			height: 10vh;
			width: 100%;
			margin-bottom: 1vw;

			&::before {
				position: absolute;
				top: -3vw;
				font-size: 40vw;
				content: '\201C'; // closing: \201C
				left: 50%;
				transform: translate(-50%, 0);
			}
		}
		.generator-text {
			height: 33vh;
			min-width: 80%;
			margin-bottom: 2vw;
			// width: 90%;
			// background: darkgray;
			font-size: 5.5vw;
			text-align: center;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;
			z-index: 2;
		}
		.generator-text-ppp {
			height: 80%;
			min-width: 80%;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 2vw;
		}

		.generator-Thema-svg {
			width: 7vw;
			z-index: 3;
		}
		.Thema-span {
			margin-left: 2vw;
			font-size: 7vw;
			font-weight: bold;
		}
		.generator-text-author {
			position: relative;
			width: 100%;
			height: 20%;

			&::before {
				content: '';
				position: absolute;
				left: 50%;
				transform: translate(-50%, 0);
				width: 70vw;
				border-bottom: 2px solid $main-color;
			}
		}
		.generator-text-author-ppp {
			width: 100%;
			padding-top: 3vw;
			font-size: 4.5vw;
		}

		.generator-newquote {
			position: relative;
			width: 50%;
			height: 12%;
			background-color: $main-color;
			border-radius: 30px;
			margin-bottom: 3vw;
			font-size: 4.5vw;
			color: #fff;
			z-index: 2;

			&::before {
				content: '';
				position: absolute;
				height: 100%;
				width: 100%;
				background-color: $main-color;
				border-radius: 30px;
				z-index: 5;
				opacity: 0;
				top: 0;
				left: 0;
			}
		}

		.generator-newquote22 {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: $main-color;
			border-radius: 30px;
			margin-bottom: 3vw;
			font-size: 4.5vw;
			color: #fff;
			z-index: -1;
		}
		.generator-newquote22-animation {
			animation: pulse 500ms;
		}

		@keyframes pulse {
			0% {
				transform: scale(0.95);
				opacity: 0.75;
			}

			100% {
				transform: scale(1.15);
				opacity: 0;
			}
		}

		.generator-other {
			width: 100%;
			height: 16%;
			// background-color: darkslateblue;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 5vw;
		}
		.generator-other-round {
			position: relative;
			width: 16vw;
			height: 16vw;
			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			border: 2px solid $main-color;
			overflow: hidden;

			&::before {
				content: '';
				display: inline-block;
				padding-top: 100%;
			}
		}
		.generator-other-round-animation {
			position: absolute;
			width: 100%;
			height: 100%;
			border-radius: 50%;
			background-color: $main-color;
			animation: roundpulse 300ms;
		}

		@keyframes roundpulse {
			0% {
				transform: scale(0.3);
				opacity: 0.75;
			}

			100% {
				transform: scale(1.1);
				opacity: 0;
			}
		}

		.generator-other-round-svg {
			width: 7vw;
			z-index: 3;

			// &:active {
			//   filter: invert(11%) sepia(52%) saturate(5566%) hue-rotate(321deg)
			//     brightness(78%) contrast(102%);
			// }
		}

		.sticky-table-mobile-active {
			bottom: 50px !important;
		}

		.sticky-table-mobile {
			position: fixed;
			z-index: 15;
			height: auto;
			width: 100%;
			opacity: 1;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			flex-wrap: wrap;
			overflow: hidden;
			flex-direction: column;
			border-top-right-radius: 10px;
			border-top-left-radius: 10px;
			box-shadow: 0vw -0.073vw 0.22vw lighten($dark-nav, 5%);
			bottom: -105%;
			padding: 3vw 0;
			transition: bottom 0.15s ease-in-out;
			background-color: #fff;

			.sticky-table-mobile-span {
				width: 100%;
				font-size: 10vw;
				font-weight: bold;
				padding: 2vw 0;
				text-align: center;
			}

			.sticky-li {
				font-size: 6vw;
				text-align: center;
				margin: 3.5vw 0;
			}
		}

		.darkOverlay {
			position: fixed;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			/* -webkit-backdrop-filter: blur(5px); */
			backdrop-filter: blur(5px);
			background-color: rgba(0, 0, 0, 0.5);
			z-index: 11;
		}
	}

	@media (min-width: 1025px) {
		.generator-main {
			width: 100%;
		}

		button {
			background: none;
			color: inherit;
			border: none;
			padding: 0;
			font: inherit;
			cursor: pointer;
			outline: inherit;
		}

		.generator-second {
			width: 50vw;
			height: 55vh;
			// background: grey;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			flex-wrap: wrap;
			flex-direction: column;
			margin: 0 auto;
			margin-top: 3vh;
			margin-bottom: 3vh;
			border-radius: 10px;
			overflow: hidden;
			box-shadow: 0.104vw 0.104vw 0.156vw rgba(0, 0, 0, 0.3),
				-0.104vw 0.104vw 0.156vw rgba(0, 0, 0, 0.3);
		}
		.generator-quotesOpen {
			position: relative;
			height: 5vh;
			width: 100%;
			margin-bottom: 1vw;
			margin-top: 1vw;

			&::before {
				position: absolute;
				top: -2.5vw;
				font-size: 11vw;
				content: '\201C'; // closing: \201C
				left: 50%;
				transform: translate(-50%, 0);
			}
		}
		.generator-text {
			height: 29vh;
			min-width: 80%;
			margin-bottom: 1vw;
			// width: 90%;
			// background: darkgray;
			font-size: 1.9vw;
			text-align: center;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;
			z-index: 2;
		}
		.generator-text-ppp {
			height: 80%;
			min-width: 80%;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 2vw;
		}

		.generator-Thema-svg {
			width: 2.2vw;
			z-index: 3;
			cursor: pointer;
		}
		.Thema-span {
			margin-left: 2vw;
			font-size: 2.4vw;
			font-weight: bold;
			cursor: pointer;
		}
		.generator-text-author {
			position: relative;
			width: 100%;
			height: 20%;

			&::before {
				content: '';
				position: absolute;
				left: 50%;
				transform: translate(-50%, 0);
				width: 40vw;
				border-bottom: 0.22vw solid $main-color;
			}
		}
		.generator-text-author-ppp {
			width: 100%;
			padding-top: 1.3vw;
			font-size: 1.5vw;
		}

		.generator-newquote {
			position: relative;
			width: 16vw;
			height: 3.5vw;
			background-color: $main-color;
			border-radius: 30px;
			font-size: 1.8vw;
			color: #fff;
			z-index: 2;

			&::before {
				content: '';
				position: absolute;
				height: 100%;
				width: 100%;
				background-color: $main-color;
				border-radius: 30px;
				z-index: 5;
				opacity: 0;
				top: 0;
				left: 0;
			}
		}

		.generator-newquote22 {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: $main-color;
			border-radius: 30px;
			font-size: 3vw;
			color: #fff;
			z-index: -1;
		}
		.generator-newquote22-animation {
			animation: pulse 500ms;
		}

		@keyframes pulse {
			0% {
				transform: scale(0.95);
				opacity: 0.75;
			}

			100% {
				transform: scale(1.15);
				opacity: 0;
			}
		}

		.generator-other {
			width: 100%;
			height: 14%;
			// background-color: darkslateblue;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 3vw;
		}
		.generator-other-round {
			position: relative;
			width: 4vw;
			height: 4vw;
			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			border: 0.15vw solid $main-color;

			&::before {
				content: '';
				display: inline-block;
				padding-top: 100%;
			}
		}

		.generator-other-round-svg {
			width: 2.2vw;
			z-index: 3;

			// &:active {
			//   filter: invert(11%) sepia(52%) saturate(5566%) hue-rotate(321deg)
			//     brightness(78%) contrast(102%);
			// }
		}

		.sticky-table-mobile-active {
			left: 0 !important;
		}

		.sticky-table-mobile {
			position: fixed;
			z-index: 15;
			left: -110%;
			height: 60%;
			width: 22%;
			opacity: 1;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			flex-wrap: wrap;
			overflow: hidden;
			flex-direction: column;
			border-top-right-radius: 10px;
			border-bottom-right-radius: 10px;
			box-shadow: 0vw -0.073vw 0.22vw lighten($dark-nav, 5%);
			top: 50%;
			transform: translate(0%, -50%);
			transition: left 0.15s ease-in-out;
			background-color: #fff;

			.sticky-table-mobile-span {
				width: 100%;
				font-size: 2vw;
				font-weight: bold;
				padding: 1vw 0;
				text-align: center;
			}

			.sticky-li {
				font-size: 1.4vw;
				text-align: center;
				margin: 0.9vw 0;
				cursor: pointer;
				transition: padding 0.2s;

				&:hover {
					padding-left: 0.5vw;
					color: $main-color;
				}
			}
		}

		.darkOverlay {
			position: fixed;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			/* -webkit-backdrop-filter: blur(5px); */
			// backdrop-filter: blur(5px);
			background-color: rgba(0, 0, 0, 0.5);
			z-index: 11;
		}
	}
	@media screen and (min-width: 480px) and (max-width: 1024px) {
		.sticky-table-mobile {
			.sticky-table-mobile-span {
				font-size: 8vw;
			}
			.sticky-li {
				font-size: 4vw;
			}
		}
	}
</style>
