<script>
	import { onMount } from 'svelte';
	import { dev } from '$app/environment';

	let offSetTracker = true;
	let scrollPosition = 0;

	let transitionOn = false;
	let transitionVision = false;

	let setUrl = dev ? 'http://127.0.0.1:5173' : 'https://perfekterspruch.de';
	// let setUrl = 'http://127.0.0.1:4173';

	$: if (scrollPosition <= 0) {
		offSetTracker = true;
	} else {
		offSetTracker = false;
	}

	const buttonclick = (buttonName) => {
		if (window.location.hostname.includes('perfekterspruch')) {
			fetch('https://8xfm8zzg6c.execute-api.eu-central-1.amazonaws.com/dev' + '/putbutton', {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					buttonname: 'mobile' + ' ' + buttonName
				})
			});
		}
	}; // https://perfekterspruch.vercel.app

	onMount(async () => {
		transitionOn = true;
		transitionVision = true;
	});
</script>

<svelte:window bind:scrollY={scrollPosition} />

<header class="header" class:addtransition={transitionOn} class:is-scrolled={!offSetTracker}>
	<div class="shell">
		<div class="header__inner">
			<a class="logo header__logo" href="{setUrl}/">
				<i class="icon-logo-co">Perfekterspruch.de</i>
			</a>
			<div class="header__content">
				<nav class="nav header__nav">
					<ul>
						<li class="has-dropdown">
							<span>Lebensweisheiten</span>

							<div class="dropdown" class:addVisableTransition={transitionVision}>
								<nav class="dropdown__nav">
									<ul>
										<li>
											<a href="{setUrl}/sprueche-zum-nachdenken/"> Sprüche zum Nachdenken </a>
										</li>

										<li>
											<a href="{setUrl}/weise-sprueche/"> Weise Sprüche </a>
										</li>

										<li>
											<a href="{setUrl}/kluge-sprueche/"> Kluge Sprüche </a>
										</li>

										<li>
											<a href="{setUrl}/positive-sprueche/"> Positive Sprüche </a>
										</li>
										<li>
											<a href="{setUrl}/erinnerungen-sprueche/"> Erinnerungen Sprüche </a>
										</li>
									</ul>
								</nav>
							</div>
						</li>

						<li class="has-dropdown">
							<span>Liebe</span>

							<div class="dropdown" class:addVisableTransition={transitionVision}>
								<nav class="dropdown__nav">
									<ul>
										<li>
											<a href="{setUrl}/beziehungssprueche/"> Beziehungssprüche </a>
										</li>

										<li>
											<a href="{setUrl}/suesse-sprueche/"> Süße Sprüche </a>
										</li>

										<li>
											<a href="{setUrl}/ich-liebe-dich-bilder/"> Ich liebe dich Bilder </a>
										</li>

										<li>
											<a href="{setUrl}/valentinstag-sprueche/"> Valentinstag Sprüche </a>
										</li>
									</ul>
								</nav>
							</div>
						</li>

						<li class="has-dropdown">
							<span>Interessant</span>

							<div class="dropdown" class:addVisableTransition={transitionVision}>
								<nav class="dropdown__nav">
									<ul>
										<li>
											<a href="{setUrl}/coole-sprueche/"> Coole Sprüche </a>
										</li>

										<li>
											<a href="{setUrl}/karma-sprueche/"> Karma Sprüche </a>
										</li>

										<li>
											<a href="{setUrl}/traurige-sprueche/"> Traurige Sprüche </a>
										</li>

										<li>
											<a href="{setUrl}/gute-sprueche/"> Gute Sprüche </a>
										</li>

										<li>
											<a href="{setUrl}/sprueche-zum-abschied/"> Abschiedssprüche </a>
										</li>

										<li>
											<a href="{setUrl}/lebensmotto/"> Lebensmotto </a>
										</li>
										<li>
											<a href="{setUrl}/karneval-sprueche/"> Karneval Sprüche </a>
										</li>
										<li>
											<a href="{setUrl}/enttaeuschung-sprueche/"> Enttäuschung Sprüche </a>
										</li>
										<li>
											<a href="{setUrl}/vertrauen-sprueche/"> Vertrauen Sprüche </a>
										</li>
										<li>
											<a href="{setUrl}/hoffnung-sprueche/"> Hoffnung Sprüche </a>
										</li>
										<li>
											<a href="{setUrl}/sarkastische-sprueche/"> Sarkastische Sprüche </a>
										</li>
										<li>
											<a href="{setUrl}/spruch-des-tages/"> Spruch des Tages </a>
										</li>

										<li>
											<a href="{setUrl}/zitate-sprueche-generator/"> Zitate & Sprüche Generator </a>
										</li>
									</ul>
								</nav>
							</div>
						</li>

						<li class="has-dropdown">
							<span>Tage</span>

							<div class="dropdown" class:addVisableTransition={transitionVision}>
								<nav class="dropdown__nav">
									<ul>
										<li>
											<a href="{setUrl}/gute-nacht-bilder/"> Gute Nacht Bilder </a>
										</li>

										<li>
											<a href="{setUrl}/schoenen-samstag/"> Schönen Samstag Sprüche </a>
										</li>

										<li>
											<a href="{setUrl}/schoenen-tag/"> Schönen Tag Sprüche </a>
										</li>

										<li>
											<a href="{setUrl}/mittwoch-bilder/"> Mittwoch Bilder </a>
										</li>

										<li>
											<a href="{setUrl}/schoenen-montag/"> Schönen Montag Sprüche </a>
										</li>

										<li>
											<a href="{setUrl}/schoenes-wochenende-bilder/"> Schönes Wochenende Bilder </a>
										</li>

										<li>
											<a href="{setUrl}/sonntagsgruesse/"> Sonntagsgrüße </a>
										</li>

										<li>
											<a href="{setUrl}/sonntag-lustig/"> Sonntag lustig </a>
										</li>

										<li>
											<a href="{setUrl}/montagsgruesse/"> Montagsgrüße </a>
										</li>
										<li>
											<a href="{setUrl}/dienstagsgruesse/"> Dienstagsgrüße </a>
										</li>
										<li>
											<a href="{setUrl}/mittwochsgruesse/"> Mittwochsgrüße </a>
										</li>
										<li>
											<a href="{setUrl}/donnerstagsgruesse/"> Donnerstagsgrüße </a>
										</li>
										<li>
											<a href="{setUrl}/freitagsgruesse/"> Freitagsgrüße </a>
										</li>
										<li>
											<a href="{setUrl}/samstagsgruesse/"> Samstagsgrüße </a>
										</li>
									</ul>
								</nav>
							</div>
						</li>

						<li class="has-dropdown">
							<span>Geburtstag</span>

							<div class="dropdown" class:addVisableTransition={transitionVision}>
								<nav class="dropdown__nav">
									<ul>
										<li class="subarrow-relative">
											<span class="subarrow"> Runder Geburtstag </span>
											<div class="sub-div" class:addVisableTransition={transitionVision}>
												<ul class="sub-ul">
													<li>
														<a href="{setUrl}/glueckwuensche-zum-18-geburtstag/">
															Glückwünsche zum 18. Geburtstag
														</a>
													</li>
													<li>
														<a href="{setUrl}/glueckwuensche-zum-20-geburtstag/">
															Glückwünsche zum 20. Geburtstag
														</a>
													</li>
													<li>
														<a href="{setUrl}/glueckwuensche-zum-30-geburtstag/">
															Glückwünsche zum 30. Geburtstag
														</a>
													</li>
													<li>
														<a href="{setUrl}/glueckwuensche-zum-40-geburtstag/">
															Glückwünsche zum 40. Geburtstag
														</a>
													</li>
													<li>
														<a href="{setUrl}/glueckwuensche-zum-50-geburtstag/">
															Glückwünsche zum 50. Geburtstag
														</a>
													</li>
													<li>
														<a href="{setUrl}/glueckwuensche-zum-60-geburtstag/">
															Glückwünsche zum 60. Geburtstag
														</a>
													</li>
													<li>
														<a href="{setUrl}/glueckwuensche-zum-70-geburtstag/">
															Glückwünsche zum 70. Geburtstag
														</a>
													</li>
												</ul>
											</div>
										</li>

										<li>
											<a href="{setUrl}/geburtstagsgruesse/"> Geburtstagsgrüße </a>
										</li>

										<li>
											<a href="{setUrl}/geburtstagswuensche/"> Geburtstagswünsche </a>
										</li>

										<li>
											<a href="{setUrl}/geburtstagssprueche/"> Geburtstagssprüche </a>
										</li>

										<li>
											<a href="{setUrl}/geburtstagswuensche-mann/">
												Geburtstagswünsche für Männer
											</a>
										</li>

										<li>
											<a href="{setUrl}/geburtstagswuensche-freundin/">
												Geburtstagswünsche Freundin
											</a>
										</li>

										<li>
											<a href="{setUrl}/geburtstagswuensche-fuer-frauen/">
												Geburtstagswünsche für Frauen
											</a>
										</li>

										<li>
											<a href="{setUrl}/geburtstagswuensche-nachtraeglich/">
												Geburtstagswünsche nachträglich
											</a>
										</li>

										<li>
											<a href="{setUrl}/geburtstagswuensche-fuer-kinder/">
												Geburtstagswuensche für Kinder
											</a>
										</li>

										<li>
											<a href="{setUrl}/geburtstagswuensche-kollegin/">
												Geburtstagswünsche Kollegin
											</a>
										</li>
									</ul>
								</nav>
							</div>
						</li>

						<li class="has-dropdown">
							<span>Wünsche</span>

							<div class="dropdown" class:addVisableTransition={transitionVision}>
								<nav class="dropdown__nav">
									<ul>
										<li>
											<a href="{setUrl}/gute-besserung-wuensche/"> Gute Besserung Wünsche </a>
										</li>

										<li>
											<a href="{setUrl}/glueckwuensche-zur-bestandenen-pruefung/">
												Glückwünsche zur bestandenen Prüfung
											</a>
										</li>

										<li>
											<a href="{setUrl}/frohe-weihnachten-bilder/"> Frohe Weihnachten Bilder </a>
										</li>

										<li>
											<a href="{setUrl}/ostergruesse-bilder/"> Ostergrüße Bilder </a>
										</li>

										<li>
											<a href="{setUrl}/neujahrswuensche/"> Neujahrswünsche </a>
										</li>

										<li>
											<a href="{setUrl}/glueckwuensche-zur-kommunion/">
												Glückwünsche zur Kommunion
											</a>
										</li>

										<li>
											<a href="{setUrl}/glueckwuensche-zur-konfirmation/">
												Glückwünsche zur Konfirmation
											</a>
										</li>

										<li>
											<a href="{setUrl}/glueckwuensche-zum-hochzeitstag/">
												Glückwünsche zum Hochzeitstag
											</a>
										</li>

										<li>
											<a href="{setUrl}/hoelzerne-hochzeit-glueckwuensche-sprueche/">
												Glückwünsche hölzerne Hochzeit
											</a>
										</li>

										<li>
											<a href="{setUrl}/glueckwuensche-zur-goldenen-hochzeit/">
												Glückwünsche zur goldenen Hochzeit
											</a>
										</li>

										<li>
											<a href="{setUrl}/jugendweihe-sprueche/"> Jugendweihe Sprüche </a>
										</li>
									</ul>
								</nav>
							</div>
						</li>

						<li class="has-dropdown">
							<span>Guten Morgen</span>

							<div class="dropdown" class:addVisableTransition={transitionVision}>
								<nav class="dropdown__nav">
									<ul>
										<li>
											<a href="{setUrl}/guten-morgen-montag/"> Montag </a>
										</li>

										<li>
											<a href="{setUrl}/guten-morgen-dienstag/"> Dienstag </a>
										</li>

										<li>
											<a href="{setUrl}/guten-morgen-mittwoch/"> Mittwoch </a>
										</li>

										<li>
											<a href="{setUrl}/guten-morgen-donnerstag/"> Donnerstag </a>
										</li>

										<li>
											<a href="{setUrl}/guten-morgen-freitag/"> Freitag </a>
										</li>

										<li>
											<a href="{setUrl}/guten-morgen-samstag/"> Samstag </a>
										</li>

										<li>
											<a href="{setUrl}/guten-morgen-sonntag/"> Sonntag </a>
										</li>

										<li>
											<a href="{setUrl}/guten-morgen-lustig/"> Lustige Sprüche </a>
										</li>
									</ul>
								</nav>
							</div>
						</li>
					</ul>
				</nav>

				<!-- <div class="header__actions">
					<a href="https://kitchen.co/login" class="btn btn--small btn--dark is-outline">
						Log in
					</a>

					<a href="https://kitchen.co/get-started" class="btn btn--small btn--dark">
						Try it FREE
					</a>
				</div> -->
			</div>
		</div>
	</div>
</header>

<style lang="scss">
	.sub-div {
		position: absolute;
		right: -100%;
		position: absolute;
		top: -25%;
		width: 100%;
		// min-width: 34.259vh;
		padding-left: 1vw;
		visibility: hidden;
		opacity: 0;
		// transition: opacity 0.2s, visibility 0.2s;
	}
	.sub-ul {
		background: #fff;
		box-shadow: 1.389vh 1.389vh 3.704vh rgb(0 0 0 / 8%);
		padding: 0.741vh 0 0.37vh;
		border: 0.093vh solid hsla(0deg, 0%, 79.6%, 0.7);
		border-radius: 0.463vh;
	}

	.sub-div::before,
	.sub-div::after {
		content: '';
		position: absolute;
		left: 0.25vw;
		top: 1.1vw;
		width: 0;
		height: 0;
		border-left: 0.926vh solid transparent;
		border-right: 0.926vh solid transparent;
		border-bottom: 0.926vh solid #cbcbcb;
		transform: rotate(270deg);
		border-bottom-color: #fff;
	}
	.sub-div::after {
		// top: 0.586vw;
		left: 0.21vw;
		// border-bottom-color: $light-nav;
	}

	.header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		padding: 3.33vh 0;
		background: #fff;
	}
	.addtransition {
		transition: padding 0.3s, height 0.3s;
	}
	.header.is-scrolled {
		padding: 1.389vh 0 1.574vh;
		// box-shadow: 0 2px 20px -16px rgb(0 0 0 / 50%);
		box-shadow: 0 0.185vh 1.852vh -1.481vh rgb(0 0 0 / 50%);
	}
	.shell {
		// max-width: 124.074vh;
		width: 80%;
		padding: 0 2.778vh;
		margin: 0 auto;
	}
	.header__inner {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
		min-height: 3.704vh;
	}
	.logo {
		display: block;
		width: 13.056vh;
	}
	.header__logo {
		position: absolute;
		top: -10px;
		align-self: flex-start;
		z-index: 2;
		width: 60px;
		height: 60px;
	}
	.icon-logo-co {
		background-image: url('/InstaLogoSmallTransparent.png');
		width: 5.56vh;
		height: 5.56vh;
	}
	[class*='icon-'],
	[class^='icon-'] {
		background-repeat: no-repeat;
		background-size: 100% 100%;
		background-position: 0 0;
		display: inline-block;
		font-size: 0;
		line-height: 0;
		text-transform: none;
		display: block;
	}
	.header__nav {
		position: absolute;
		top: 1.111vh;
		left: 0;
		right: 0;
		display: flex;
		justify-content: center;
	}

	.nav > ul {
		display: flex;
		align-items: center;
		font-size: 1.8vh; // 1.6vh
		color: #1d1c1d;
		font-weight: bold;
	}

	.nav .has-dropdown {
		position: relative;
		cursor: pointer;
	}

	.nav .has-dropdown > span {
		padding-right: 2.13vh;
	}

	.nav > ul > li > span {
		position: relative;
		text-decoration: none;
		color: inherit;
	}

	// .nav > ul > li > span::before {
	//     background-image: initial;
	//     background-color: currentcolor;
	// }

	.nav > ul > li > span:before {
		content: '';
		position: absolute;
		left: 0;
		bottom: -0.278vh;
		width: 0;
		height: 0.185vh;
		background: currentColor;
		transition: width 0.2s;
		filter: $main-color-filter-notBlack;
	}

	.nav .has-dropdown > span:after {
		display: block;
	}

	.subarrow {
		display: block;
		font-size: 1.6vh;
		font-weight: 400;
		text-decoration: none;
		color: inherit;
		padding: 0.741vh 2.222vh;
		transition: padding 0.2s;
	}

	.subarrow-relative {
		position: relative;
	}

	.subarrow::after {
		// display: none;
		content: '';
		position: absolute;
		left: 10vw;
		top: 50%;
		transform: translateY(-50%);
		width: 1.019vh;
		height: 0.556vh;
		background-image: url('/svg/header/angle-down.svg');
		background-size: contain;
		background-repeat: no-repeat;
		transition: transform 0.2s;
	}

	.nav > ul > li > span:after {
		display: none;
		content: '';
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
		width: 1.019vh;
		height: 0.556vh;
		background-image: url('/svg/header/angle-down.svg');
		background-size: contain;
		background-repeat: no-repeat;
		transition: transform 0.2s;
	}
	.nav > ul > li:hover > span:after {
		transform: translateY(-50%) rotate(180deg);
	}

	.subarrow-relative:hover .subarrow::after {
		transform: translateY(-50%) rotate(270deg);
	}
	.subarrow-relative:hover .sub-div {
		visibility: visible;
		opacity: 1;
	}

	.dropdown {
		position: absolute;
		left: -2.778vh;
		top: 100%;
		width: 100%;
		min-width: 34.259vh;
		padding-top: 1.574vh;
		visibility: hidden;
		opacity: 0;
		// transition: opacity 0.2s, visibility 0.2s;
	}

	.addVisableTransition {
		transition: opacity 0.2s, visibility 0.2s;
	}
	.nav .has-dropdown:hover .dropdown {
		visibility: visible;
		opacity: 1;
	}

	.dropdown__nav {
		padding: 0.741vh 0 0.37vh;
		background: #fff;
		border: 0.093vh solid hsla(0, 0%, 79.6%, 0.7);
		border-radius: 0.463vh;
		box-shadow: 1.389vh 1.389vh 3.704vh rgb(0 0 0 / 8%);
	}

	.nav .dropdown:before {
		z-index: 5;
	}

	.nav .dropdown:after,
	.nav .dropdown:before {
		content: '';
		position: absolute;
		left: 3.704vh;
		top: 0.648vh;
		width: 0;
		height: 0;
		border-left: 0.926vh solid transparent;
		border-right: 0.926vh solid transparent;
		border-bottom: 0.926vh solid #cbcbcb;
	}

	.nav .dropdown:after {
		z-index: 5;
		top: 0.741vh !important;
		border-bottom-color: #fff !important;
	}
	.nav .dropdown:after,
	.nav .dropdown:before {
		content: '';
		position: absolute;
		left: 3.704vh;
		top: 0.648vh;
		width: 0;
		height: 0;
		border-left: 0.926vh solid transparent;
		border-right: 0.926vh solid transparent;
		border-bottom: 0.926vh solid #cbcbcb;
	}

	.nav > ul > li > span:hover:before {
		width: 100%;
	}

	.dropdown__nav a {
		display: block;
		font-size: 1.6vh;
		font-weight: 400;
		text-decoration: none;
		color: inherit;
		padding: 0.741vh 2.222vh;
		transition: padding 0.2s;
	}
	.dropdown__nav a:hover {
		background: #f3f1ef;
		padding-left: 2.778vh;
	}

	.nav > ul > li + li {
		margin-left: 3.148vh;
	}
</style>
