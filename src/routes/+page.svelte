<script>
	import { dev } from '$app/environment';
	import Spruchcard from '$lib/cards/Spruchcard.svelte';
	import SZGenerator from '$lib/cards/SZGenerator.svelte';
	import HelperStore from '../../src/stores/HelperStore';
	import Mainmedia from '$lib/lazymedia/Mainmedia.svelte';

	export let data;

	let setUrl = dev ? 'http://localhost:5173' : 'https://perfekterspruch.de';

	let index = 0;

	let oldPosition = 0;
	let scrollPosition = 0;

	const beliebtData = [
		{
			id: '1',
			thema: 'Sprüche zum Nachdenken',
			slug: '/sprueche-zum-nachdenken/'
		},
		{
			id: '2',
			thema: 'Beziehungssprüche',
			slug: '/beziehungssprueche/'
		},
		{
			id: '3',
			thema: 'Karma Sprüche',
			slug: '/karma-sprueche/'
		},
		{
			id: '4',
			thema: 'Süße Sprüche',
			slug: '/suesse-sprueche/'
		},
		{
			id: '5',
			thema: 'Positive Sprüche',
			slug: '/positive-sprueche/'
		},
		{
			id: '6',
			thema: 'Gute Sprüche',
			slug: '/gute-sprueche/'
		},
		{
			id: '7',
			thema: 'Kluge Sprüche',
			slug: '/kluge-sprueche/'
		},
		{
			id: '8',
			thema: 'Coole Sprüche',
			slug: '/coole-sprueche/'
		},
		{
			id: '9',
			thema: 'Traurige Sprüche',
			slug: '/traurige-sprueche/'
		},
		{
			id: '10',
			thema: 'Weise Sprüche',
			slug: '/weise-sprueche/'
		},
		{
			id: '11',
			thema: 'Lebensmotto',
			slug: '/lebensmotto/'
		},
		{
			id: '22',
			thema: 'Geburtstagsgrüße',
			slug: '/geburtstagsgruesse/'
		},
		{
			id: '12',
			thema: 'Gute Nacht Bilder',
			slug: '/gute-nacht-bilder/'
		},
		{
			id: '13',
			thema: 'Guten Morgen Montag',
			slug: '/guten-morgen-montag/'
		},
		{
			id: '14',
			thema: 'Guten Morgen Dienstag',
			slug: '/guten-morgen-dienstag/'
		},
		{
			id: '15',
			thema: 'Guten Morgen Mittwoch',
			slug: '/guten-morgen-mittwoch/'
		},
		{
			id: '16',
			thema: 'Guten Morgen Donnerstag',
			slug: '/guten-morgen-donnerstag/'
		},
		{
			id: '17',
			thema: 'Guten Morgen Freitag',
			slug: '/guten-morgen-freitag/'
		},
		{
			id: '18',
			thema: 'Guten Morgen Samstag',
			slug: '/guten-morgen-samstag/'
		},
		{
			id: '19',
			thema: 'Guten Morgen Sonntag',
			slug: '/guten-morgen-sonntag/'
		},
		{
			id: '20',
			thema: 'Schönes Wochenende Bilder',
			slug: '/schoenes-wochenende-bilder/'
		},
		{
			id: '21',
			thema: 'Sonntagsgrüße',
			slug: '/sonntagsgruesse/'
		},
		{
			id: '23',
			thema: 'Alle Themen',
			slug: '/alle-themen/'
		}
	];

	$: scrollFunc(scrollPosition);

	const scrollFunc = (scrollPosition) => {
		if (oldPosition < scrollPosition) {
			$HelperStore.mobileMenuDown = true;
		} else {
			$HelperStore.mobileMenuDown = false;
		}

		oldPosition = scrollPosition;
	};

	const buttonclick = (buttonName) => {
		if (window.location.hostname.includes('perfekterspruch')) {
			if (screen.width >= 1025 && !navigator.userAgent.includes('Mobile')) {
				isItMobile = 'desktop';
			} else {
				isItMobile = 'mobile';
			}

			fetch('https://8xfm8zzg6c.execute-api.eu-central-1.amazonaws.com/dev' + '/putbutton', {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					buttonname: isItMobile + ' ' + buttonName
				})
			});
		}
	};
</script>

<svelte:head>
	<title>PerfekterSpruch.de - Dein perfekter Spruch für jeden Anlass</title>
	<meta
		name="description"
		content="Auf PerfekterSpruch.de findest du einen perfekten Spruch für jeden Anlass und für jede Stimmung. Dein perfekter Spruch wartet bereits auf dich."
	/>
	<link rel="canonical" href="https://perfekterspruch.de/" />
	<meta
		name="robots"
		content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
	/>

	<meta property="og:url" content="https://perfekterspruch.de/" />
	<meta property="og:title" content="PerfekterSpruch.de - Dein perfekter Spruch für jeden Anlass" />
	<meta
		property="og:description"
		content="Auf PerfekterSpruch.de findest du einen perfekten Spruch für jeden Anlass und für jede Stimmung. Dein perfekter Spruch wartet bereits auf dich."
	/>

	<meta
		name="twitter:title"
		content="PerfekterSpruch.de - Dein perfekter Spruch für jeden Anlass"
	/>
	<meta
		name="twitter:description"
		content="Auf PerfekterSpruch.de findest du einen perfekten Spruch für jeden Anlass und für jede Stimmung. Dein perfekter Spruch wartet bereits auf dich."
	/>
</svelte:head>

<svelte:window bind:scrollY={scrollPosition} />

<div class="main-container22">
	<div class="home-top">
		<h1 class="home-h11">Herzlich Willkommen auf PerfekterSpruch.de!</h1>
		<p class="home-pp home-pp-margin">
			Es gibt viele Anlässe, bei denen man seiner Familie, Freunden und Bekannten Wünsche, Grüße
			oder einfach einen lustigen Spruch zukommen lassen möchte. Oftmals findet man aber nicht
			direkt die richtigen Worte. Deswegen möchten wir dir dabei helfen, deinen perfekten Spruch zu
			finden. Und getreu dem Motto „Ein Bild sagt mehr als tausend Worte“ kommen viele Sprüche,
			Zitate, Wünsche und Grüße mit einem ansprechenden Bild. Dieses Bild lässt sich ganz bequem
			herunterladen und in WhatsApp, Facebook, Instagram oder Pinterest teilen.
		</p>

		<div class="home-beliebt">
			<h2 class="homebeliebt-h22">Beliebte Seiten</h2>
			<div class="home-beliebt-loop">
				{#each beliebtData as beliebt (beliebt.id)}
					<a class="home-beliebt-link" href="{setUrl}{beliebt.slug}">
						<span class="home-beliebt-text">{beliebt.thema}</span>
					</a>
				{/each}
			</div>
		</div>

		<Mainmedia placeholder={130} start={true} source="mobile-inline" isMobile={data.isMobile} />

		<h2 class="homebeliebt-h22">Unsere Besonderheiten</h2>

		<p class="home-pp desktop-margin">
			Bei uns findest du täglich einen neuen
			<a
				class="intern-link-generator"
				href="/spruch-des-tages/"
				on:click={() => buttonclick('GeneratorLink')}>Spruch des Tages</a
			>, der selbstverständlich mit einem ansprechenden Bild kommt. Dieser soll dir jedes Mal, wenn
			du unsere Webseite besuchst, eine kleine Freude bereiten.<br />

			Wir haben auch einen eigenen
			<a
				class="intern-link-generator"
				href="/zitate-sprueche-generator/"
				on:click={() => buttonclick('GeneratorLink')}>Sprüche und Zitate Generator</a
			>
			entworfen. Dieser hat viele verschieden Themen und über 2000 Sprüche & Zitate zur Auswahl. Du kannst
			ihn gerne weiter unten ausprobieren.<br />

			Aktuell befindet sich die Seite im Aufbau und es kommen täglich viele neue Sprüche und Themen
			hinzu. Es lohnt sich also regelmäßig vorbeizuschauen.
		</p>

		<Mainmedia placeholder={131} start={true} source="desktopInline" isMobile={data.isMobile} />

		<div class="sdt-div">
			<h2 class="sdt-h11">Spruch des Tages</h2>

			<Spruchcard card={data.derspruch} {index} userIsMobile={data.isMobile} />
		</div>
		<h2 class="homebeliebt-h22">Themen-Menü Übersicht</h2>
		<p class="home-pp">
			Wir sind bemüht, die Webseite möglichst übersichtlich zu gestallten. Um dir eine kleine
			Übersicht zu verschaffen, möchten wir dir an dieser Stelle unser Themen-Menü vorstellen. Unter
			dem ersten Menüpunkt
			<strong>„Lebensweisheiten“</strong> findest du viele Sprüche und Zitate, die einen zum
			Nachdenken anregen. Vielleicht ist hier ja auch dein neuer Statusspruch in WhatsApp dabei.
			Unter dem Menüpunkt
			<strong>„Liebe“</strong> kannst du deiner Liebsten oder deinem Liebsten einige besondere Worte
			zukommen lassen und ihn/ihr zu wissen geben, wie viel sie dir bedeuten. Unter dem Menüpunkt
			<strong>„Interessant“</strong> findet sich eine vielfältige Sammlung an interessanten Themen,
			die für etwas Abwechslung sorgen soll. Unter
			<strong>„Tage“</strong> findest du allerlei an Sprüchen zu den Wochentagen. Dies sind schöne
			und lustige Sprüche und Zitate, mit denen du deinen Freunden und Bekannten eine Freude
			bereiten kannst. Unter dem Punk <strong>„Geburtstag“</strong> kannst du deinen perfekten
			Geburtstagswunsch raussuchen und mit einem ansprechenden Bild an das Geburtstagskind schicken.
			Unter dem Menüpunkt
			<strong>„Wünsche“</strong> findest du Glückwünsche zu traditionellen Anlässen wie Konfirmation
			und Hochzeit und vielen weiteren Feiertagen. Unter unserem letzten Menüpunkt
			<strong>„Guten Morgen“</strong> findest du Sprüche, mit denen du deiner Familie, Freunden und Bekannten
			eine Freude direkt am Morgen bereiten kannst.
		</p>
		<h2 class="sdt-h11">Sprüche und Zitate Generator</h2>

		<SZGenerator />
	</div>

	<div class="main-right">
		<Mainmedia placeholder={142} start={true} source="desktopsticky" isMobile={data.isMobile} />
	</div>
</div>

<style lang="scss">
	.main-container22 {
		position: relative;
		display: grid;
		gap: 0 2vw;
		grid-template-columns: 80% 20%;
		width: 80%;
		height: auto;
		margin-top: -2vh;
	}
	.desktop-margin {
		margin-bottom: 2vw;
	}
	.home-top {
		padding: 1.5vw 0;
		margin-bottom: 3.5vw;
	}
	.home-h11 {
		font-size: $font-h2-slug;
		text-align: center;
	}
	.home-pp {
		font-size: $font-text;
		line-height: $line-height;
		margin: 1.5vw 0;
	}
	.home-pp-margin {
		margin-bottom: 0;
	}
	.home-beliebt {
		// height: 23vw;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		flex-wrap: wrap;
	}
	.home-beliebt-loop {
		margin: 0.3vw 0;
	}
	.home-beliebt-link {
		position: relative;
		text-decoration: none;
		color: inherit;
		padding: 0.5vw;
	}
	.home-beliebt-text {
		display: inline-block;
		padding: 0.6vw;
		margin: 0.3vw 0;
		font-size: $font-text;
		font-size: 1vw;
		// background-color: $main-color;
		border-radius: 20px;
		font-weight: bold;
		white-space: nowrap;
		transition-property: background-color, transform;
		transition-duration: 0.15s;
		transition-timing-function: linear;
		will-change: transform;
		backface-visibility: hidden;
		box-shadow: 0.104vw 0.104vw 0.156vw rgba(0, 0, 0, 0.3),
			-0.104vw 0.104vw 0.156vw rgba(0, 0, 0, 0.3);

		&:hover {
			transform: scale(1.02);
			background-color: $light-onhover;
		}
	}

	.intern-link-generator {
		position: relative;
		text-decoration: underline;
		color: inherit;
		color: $main-color;
	}

	.homebeliebt-h22 {
		font-size: 1.75vw;
		text-align: center;
		width: 100%;
		margin: 1vw 0 1vw 0;
	}

	.sdt-div {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}

	.sdt-h11 {
		width: 100%;
		display: block;
		position: relative;
		font-size: 1.75vw;
		line-height: 1;
		font-weight: 600;
		text-transform: uppercase;
		padding: 0.781vw 1.302vw;
		text-align: center;
		margin-bottom: 1vw;
	}

	.sdt-h11:before {
		background-color: $main-color;
		content: '';
		display: block;
		height: 0.234vw;
		width: 50%;
		position: absolute;
		left: 0;
		top: 0;
	}
	.sdt-h11:after {
		background-color: $main-color;
		content: '';
		display: block;
		position: absolute;
		height: 0.234vw;
		width: 50%;
		right: 0;
		bottom: 0;
	}

	@media screen and (max-width: 1024px) {
		.homebeliebt-h22 {
			margin: 6vw 0 4vw 0;
			text-align: center;
			font-size: 7vw;
			width: 100%;
		}
		.desktop-margin {
			margin-bottom: 0vw;
		}

		.home-beliebt {
			margin-bottom: 8vw;
		}

		.sdt-div {
			width: 100%;
			margin-top: 5vw;
		}

		.main-container22 {
			width: 100%;
			margin-top: 0;
			display: block;
			gap: unset;
			grid-template-columns: unset;
			// padding: 2vh 0;
		}
		.home-top {
			padding: 2vw 0;
			margin-bottom: 20vw;
		}
		.home-h11 {
			font-size: 7vw;
			text-align: center;
		}
		.home-pp {
			margin: 4.5vw 0;
			font-size: $font-text-mobile;
			padding: 0 3vw;
		}
		.home-pp-margin {
			margin-bottom: 0;
		}

		.home-beliebt {
			height: auto;
			width: 100%;
		}
		.home-beliebt-loop {
			margin: 2vw 1vw;
		}
		.home-beliebt-text {
			padding: 2vw;
			font-size: $font-text-mobile;
		}
		.sdt-h11 {
			font-size: 7vw;
			padding: 15px 0px;
			margin-bottom: 3.5vw;
		}

		.sdt-h11:before {
			height: 4px;
		}
		.sdt-h11:after {
			height: 4px;
		}
	}

	@media screen and (min-width: 480px) and (max-width: 1024px) {
		.sdt-h11 {
			font-size: 5vw;
			padding: 2vw 0px;
			margin: 4vw 0;
		}

		.sdt-h11:before {
			height: 5.5px;
		}
		.sdt-h11:after {
			height: 5.5px;
		}
		.home-pp {
			font-size: 3.5vw;
			margin: 1.5vw 0;
		}
		.home-h11 {
			font-size: 5vw;
		}
		.homebeliebt-h22 {
			font-size: 5vw;
			margin: 1vw 0 1vw 0;
		}
		.home-beliebt-text {
			// padding: 0.6vw;
			// margin: 0.3vw 0;
			font-size: 3vw;
			// border-radius: 20px;
		}
	}
</style>
