<script>
	import { dev } from '$app/environment';
	import ContentStore from '../../stores/ContentStore';

	let setUrl = dev ? 'http://127.0.0.1:5173' : 'https://perfekterspruch.de';
</script>

<div class="alle-themen-wrapper">
	<h1>Alle Themen</h1>

	{#each $ContentStore.all_header as header, index}
		<h2>{header.headerName}</h2>
		<ul>
			{#each header.data as data}
				<li>
					<a href="{setUrl}/{data.link}/">{data.name}</a>
				</li>
			{/each}
			{#if index === 4}
				{#each header.runderGb as runderGb}
					<li>
						<a href="{setUrl}/{runderGb.link}/">{runderGb.name}</a>
					</li>
				{/each}
				{#each header.nichtRunderGb as nichtRunderGb}
					<li>
						<a href="{setUrl}/{nichtRunderGb.link}/">{nichtRunderGb.name}</a>
					</li>
				{/each}
			{/if}
		</ul>
	{/each}
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
