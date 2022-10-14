<script>
	import Spruchcard from '$lib/cards/Spruchcard.svelte';
	import MobileStore from '../../stores/MobileStore';

	export let data;

	let index = 1;

	let beliebtData = [
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
		}
	];
</script>

<svelte:head>
	<title>Spruch des Tages mit schönem Bild zum runterladen & kopieren</title>
	<meta
		name="description"
		content="Täglich ein neuer Spruch mit einem schönen Bild ✓ Kostenlose Bilder ✓ Zum Herunterladen & Kopieren ✓ Kein langes Suchen ✓ Finde deinen perfekten Spruch ✓"
	/>
	<link rel="canonical" href="https://perfekterspruch.de/spruch-des-tages/" />
	<meta
		name="robots"
		content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
	/>

	<meta property="og:url" content="https://perfekterspruch.de/spruch-des-tages/" />
	<meta
		property="og:title"
		content="Spruch des Tages mit schönem Bild zum runterladen & kopieren"
	/>
	<meta
		property="og:description"
		content="Täglich ein neuer Spruch mit einem schönen Bild ✓ Kostenlose Bilder ✓ Zum Herunterladen & Kopieren ✓ Kein langes Suchen ✓ Finde deinen perfekten Spruch ✓"
	/>

	<meta
		name="twitter:title"
		content="Spruch des Tages mit schönem Bild zum runterladen & kopieren"
	/>
	<meta
		name="twitter:description"
		content="Täglich ein neuer Spruch mit einem schönen Bild ✓ Kostenlose Bilder ✓ Zum Herunterladen & Kopieren ✓ Kein langes Suchen ✓ Finde deinen perfekten Spruch ✓"
	/>
</svelte:head>

<div class="sdt-main">
	<h1 class="sdt-h11">Spruch des Tages</h1>

	<Spruchcard card={data.derspruch} {index} userIsMobile={$MobileStore.userIsMobile} />
	<div class="home-beliebt">
		<h2 class="homebeliebt-h22">Hier ist eine Übersicht über unsere beliebtesten Themen:</h2>
		{#each beliebtData as beliebt (beliebt.id)}
			<div class="home-beliebt-loop">
				<a class="home-beliebt-link" href={beliebt.slug}>
					<span class="home-beliebt-text">{beliebt.thema}</span>
				</a>
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.sdt-main {
		width: 100%;
		min-height: 90.5vh;
		padding-bottom: 4vw;
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

	.homebeliebt-h22 {
		margin-bottom: 1vw;
		font-size: 1.75vw;
		text-align: center;
		width: 100%;
	}

	.home-beliebt {
		margin-top: 2vw;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
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
		}
	}

	@media (max-width: 480px) {
		.sdt-main {
			width: 100%;
			padding-bottom: 10vw;
			// border-bottom-right-radius: 10px;
			// border-bottom-left-radius: 10px;
		}

		.sdt-h11 {
			font-size: 7vw;
			padding: 15px 0px;
			margin-bottom: 4vw;
			margin-top: unset;
		}

		.sdt-h11:before {
			height: 4px;
		}
		.sdt-h11:after {
			height: 4px;
		}

		.homebeliebt-h22 {
			margin-bottom: 4vw;
			text-align: center;
			font-size: 7vw;
		}

		.home-beliebt {
			height: auto;
			width: 100%;
			margin-top: 10vw;
		}
		.home-beliebt-loop {
			margin: 2vw 1vw;
		}
		.home-beliebt-text {
			padding: 2vw;
			font-size: $font-text-mobile;
			box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3), -1px 1px 2px rgba(0, 0, 0, 0.3);
		}
	}
	@media screen and (min-width: 480px) and (max-width: 1024px) {
		.sdt-main {
			width: 100%;
			padding-bottom: 5vw;
		}

		.sdt-h11 {
			font-size: 6vw;
			padding: 15px 0px;
			margin-bottom: 4vw;
			margin-top: unset;
		}

		.sdt-h11:before {
			height: 5.5px;
		}
		.sdt-h11:after {
			height: 5.5px;
		}

		.homebeliebt-h22 {
			margin-bottom: 4vw;
			text-align: center;
			font-size: 7vw;
		}

		.home-beliebt {
			height: auto;
			width: 100%;
			margin-top: 10vw;
		}
		.home-beliebt-loop {
			margin: 2vw 1vw;
		}
		.home-beliebt-text {
			padding: 2vw;
			font-size: $font-text-mobile;
		}
	}
</style>
