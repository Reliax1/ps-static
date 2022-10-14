<script>
	import SZGenerator from '$lib/cards/SZGenerator.svelte';
</script>

<svelte:head>
	<title>Zitate & Sprüche Generator mit vielen verschiedenen Themen</title>
	<meta
		name="description"
		content="2000+ Zitate & Sprüche ✓ Viele verschiedene Themen ✓ Kein langes Suchen ✓  Zum Kopieren & Teilen ✓ Finde deinen perfekten Spruch ✓"
	/>
	<link rel="canonical" href="https://perfekterspruch.de/zitate-sprueche-generator/" />
	<meta
		name="robots"
		content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
	/>

	<meta property="og:url" content="https://perfekterspruch.de/zitate-sprueche-generator/" />
	<meta property="og:title" content="Zitate & Sprüche Generator mit vielen verschiedenen Themen" />
	<meta
		property="og:description"
		content="2000+ Zitate & Sprüche ✓ Viele verschiedene Themen ✓ Kein langes Suchen ✓  Zum Kopieren & Teilen ✓ Finde deinen perfekten Spruch ✓"
	/>

	<meta name="twitter:title" content="Zitate & Sprüche Generator mit vielen verschiedenen Themen" />
	<meta
		name="twitter:description"
		content="2000+ Zitate & Sprüche ✓ Viele verschiedene Themen ✓ Kein langes Suchen ✓  Zum Kopieren & Teilen ✓ Finde deinen perfekten Spruch ✓"
	/>
</svelte:head>

<div class="generator-page-main">
	<h1 class="generator-h11">Zitate & Sprüche Generator</h1>

	<SZGenerator />
</div>

<style lang="scss">
	@media (max-width: 1024px) {
		.generator-page-main {
			width: 100%;
		}

		.generator-h11 {
			display: block;
			position: relative;
			font-size: 7vw;
			padding: 15px 0px;
			line-height: 1;
			font-weight: 600;
			text-transform: uppercase;
			text-align: center;
			margin-bottom: 4vw;
		}

		.generator-h11:before {
			background-color: $main-color;
			content: '';
			display: block;
			height: 4px;
			width: 50%;
			position: absolute;
			left: 0;
			top: 0;
		}
		.generator-h11:after {
			background-color: $main-color;
			content: '';
			display: block;
			position: absolute;
			height: 4px;
			width: 50%;
			right: 0;
			bottom: 0;
		}
	}

	@media (min-width: 1025px) {
		.generator-page-main {
			width: 100%;
			min-height: 100vh;
		}

		.generator-h11 {
			display: block;
			position: relative;
			font-size: 1.75vw;
			line-height: 1;
			font-weight: 600;
			text-transform: uppercase;
			padding: 0.781vw 1.302vw;
			text-align: center;
			margin-bottom: 2.5vw;
			margin-top: 1.5vw;
		}

		.generator-h11:before {
			background-color: $main-color;
			content: '';
			display: block;
			height: 0.234vw;
			width: 50%;
			position: absolute;
			left: 0;
			top: 0;
		}
		.generator-h11:after {
			background-color: $main-color;
			content: '';
			display: block;
			position: absolute;
			height: 0.234vw;
			width: 50%;
			right: 0;
			bottom: 0;
		}
	}
</style>
