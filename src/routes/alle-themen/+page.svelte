<script>
	import { dev } from '$app/environment';
	import ContentStore from '../../stores/ContentStore';

	export let data;

	let setUrl = dev ? 'http://localhost:5173' : 'https://perfekterspruch.de';
</script>

<svelte:head>
	<title>Alle Themen - Perfekterspruch.de</title>
	<meta
		name="description"
		content="Hier findest du eine Übersicht über alle Themen auf Perfekterspruch.de"
	/>
	<link rel="canonical" href="https://perfekterspruch.de/alle-themen/" />
	<meta
		name="robots"
		content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
	/>

	<meta property="og:url" content="https://perfekterspruch.de/alle-themen/" />
	<meta property="og:title" content="Alle Themen - Perfekterspruch.de" />
	<meta
		property="og:description"
		content="Hier findest du eine Übersicht über alle Themen auf Perfekterspruch.de"
	/>

	<meta name="twitter:title" content="Alle Themen - Perfekterspruch.de" />
	<meta
		name="twitter:description"
		content="Hier findest du eine Übersicht über alle Themen auf Perfekterspruch.de"
	/>
</svelte:head>

<div class="alle-themen-wrapper">
	<h1>Alle Themen</h1>

	<ul>
		{#each data.final_array as data}
			<li>
				<a href="{setUrl}/{data.link}/">{data.name}</a>
			</li>
		{/each}
	</ul>
</div>

<style lang="scss">
	.alle-themen-wrapper {
		width: 90%;
		margin: 0 auto;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}
	h1 {
		margin: 4vw 0 6vw 0;
	}
	h2 {
		width: 100%;
		text-align: center;
		margin: 2vw 0;
		text-decoration: underline;
	}
	ul {
		display: flex;
		flex-wrap: wrap;
	}
	li {
		width: 100%;
		padding: 4vw 0;
		text-align: center;
	}

	@media (min-width: 1025px) {
		.alle-themen-wrapper {
			width: 90%;
		}
		h1 {
			margin: 1vw 0 1.5vw 0;
		}
		h2 {
			margin: 0.5vw 0;
		}
		li {
			width: auto;
			font-size: 1vw;
			padding: 1vw 1vw;
			margin: 0 0;
			border-radius: 10px;
			transition-property: background-color;
			transition-duration: 0.3s;
			transition-timing-function: ease;
			cursor: pointer;
		}
		li:hover {
			background-color: #e0e0e0;
		}
	}
</style>
