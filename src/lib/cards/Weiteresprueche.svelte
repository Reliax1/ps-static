<script>
	import { page } from '$app/stores';
	import { fade, fly } from 'svelte/transition';

	import Kopiert from '$lib/core/Kopiert.svelte';

	export let weiteredata;

	let active_copy = false;
	// const debug = () = {
	//   console.dir(this.weiteresprueche)
	// }
	const copyCardText = (index) => {
		// const button = document.getElementsByClassName('spruchcard-copy-copied-weitere')[index];
		const copyText = document.getElementsByClassName('ws-pp')[index].innerText;

		navigator.clipboard.writeText(copyText);
		// button.classList.add('activecopie');
		active_copy = true;
		setTimeout(function () {
			// button.classList.remove('activecopie');
			active_copy = false;
		}, 1000);
	};
</script>

<div class="ws-container">
	<div class="ws-second">
		{#if $page.routeId != 'zitate-sprueche-generator'}
			<div class="ws-h2">Weitere Sprüche</div>
		{:else}
			<div v-else class="ws-h2">Deine Sprüche</div>
		{/if}

		{#each weiteredata as spruch, index}
			<div class="ws-loop" class:ws-loop-padding={spruch.author} in:fade>
				<p class="ws-pp">{spruch.text}</p>
				{#if spruch.author != null}
					<span class="ws-span">{spruch.author}</span>
				{/if}
				<div class="spruchcard-copy-container" on:click={() => copyCardText(index)}>
					<button class="spruchcard-copy-button">
						<!-- <div class="spruchcard-copy-copied-weitere">kopiert</div> -->
						<!-- {#if active_copy && index === index}
							<div transition:fly={{ y: 10, duration: 1000 }} class="spruchcard-copy-animation">
								<Kopiert />
							</div>
						{/if} -->
						<img class="spruchcard-copy-svg" src="/svg/copy.svg" alt="copy" />
						<span class="spruchcard-copy-span">Kopieren</span>
					</button>
				</div>
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.ws-container {
		position: relative;
		//   height: 50vw;
		width: 100%;
		// padding: 0.5vw 2vw 5vw 2vw;
		// margin-top: 1.5vw;
		// padding-bottom: 5vw;
		// box-shadow: 1.5px 1.5px 2.5px rgba(0, 0, 0, 0.3);
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}
	.ws-second {
		width: 100%;
		padding: 0 1vw;
	}

	.spruchcard-copy-animation {
		position: absolute;
		top: -2.5vw;
		left: -0.25vw;
	}

	.ws-h2 {
		width: 100%;
		font-size: 1.7vw;
		font-weight: bold;
		text-align: start;
	}

	.ws-loop {
		width: 100%;
		min-height: 5vw;
		position: relative;
		margin: 1.2rem 0;
		border-radius: 10px;
		padding: 0.52vw;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		backface-visibility: hidden;
		will-change: transform;
		transition-property: transform, box-shadow;
		transition-duration: 0.15s;
		transition-timing-function: linear;
		box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3), -1px 1px 2px rgba(0, 0, 0, 0.3);
	}
	.ws-loop:hover {
		transform: translateY(-0.1vw);
		box-shadow: 1.5px 1.5px 2.5px rgba(0, 0, 0, 0.3), -1.5px 1.5px 2.5px rgba(0, 0, 0, 0.3);
	}
	.ws-loop-padding {
		padding-bottom: 1.5vw;
	}

	.ws-pp {
		width: 95%;
		font-size: 1.2vw;
		line-height: 1.45;
	}
	.ws-span {
		width: 99%;
		position: absolute;
		bottom: 0.1vw;
		font-size: 1vw;
		font-style: italic;
		text-align: center;
	}

	.spruchcard-copy-container {
		width: 5%;
		position: absolute;
		flex-direction: column;
		right: 0vw;
		bottom: 1vw;
		cursor: pointer;
		padding: 0.26vw;
		user-select: none;
		z-index: 10;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.spruchcard-copy-button {
		position: relative;
		background: none;
		color: inherit;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
		outline: inherit;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.spruchcard-copy-svg {
		width: 1.3vw;
		transition: width 0.1s ease;
		will-change: width;
	}

	.spruchcard-copy-span {
		padding-top: 0.1vw;
		font-size: 0.6vw;
	}

	.spruchcard-copy-copied-weitere {
		position: absolute;
		padding: 0.4vw 0.45vw;
		top: -2.4vw;
		background-color: $main-color;
		border-radius: 20px;
		font-size: 0.8vw;
		color: #fff;
		opacity: 0;
		transition-property: opacity, transform;
		transition-duration: 0.2s;
		transition-timing-function: ease-out;
		will-change: top;
		pointer-events: none;
		transform: translateY(0.4vw);
	}
	.spruchcard-copy-copied-weitere:after {
		content: '';
		position: absolute;
		width: 0;
		height: 0;
		border-left: 0.313vw solid transparent;
		border-right: 0.313vw solid transparent;
		border-top: 0.625vw solid $main-color;
		bottom: -0.521vw;
		right: 1.3vw;
	}

	.ws-h2 {
		font-size: 1.7vw;
		font-weight: bold;
		margin: 0;
		margin-top: 1vw;
	}

	:global(.activecopie) {
		opacity: 1 !important;
		transform: translateY(0) !important;
	}

	@media screen and (max-width: 1024px) {
		.ws-container {
			width: 100%;
			padding: 1vw 2vw;
			margin-top: 0vw;
			padding-bottom: 7vw;
			// box-shadow: 1.5px 1.5px 2.5px rgba(0, 0, 0, 0.3);
			display: flex;
			justify-content: flex-start;
			flex-direction: column;
			align-items: center;
		}

		.ws-second {
			padding: 0;
		}

		.spruchcard-copy-animation {
			top: -10vw;
			left: 1vw;
		}

		.ws-loop {
			width: 94%;
			min-height: 5vw;
			margin: 1.2rem auto;
			border-radius: 10px;
			padding: 2vw 1vw 2vw;
			padding-bottom: 12vw;
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-items: center;
			backface-visibility: unset;
			will-change: unset;
			transition-property: unset;
			transition-duration: unset;
			transition-timing-function: unset;
		}

		.ws-h2 {
			font-size: 6.5vw;
		}
		.ws-pp {
			height: 70%;
			font-size: 5vw;
			line-height: 1.45;
		}

		.ws-span {
			width: 100%;
			position: absolute;
			bottom: 0.5vw;
			font-size: 4vw;
			font-style: italic;
			text-align: center;
		}

		.ws-loop-padding {
			padding-bottom: 12vw;
		}

		.spruchcard-copy-container {
			position: absolute;
			// height: 30%;
			right: 6vw;
			bottom: 1vw;
			cursor: none;
			padding: 1vw;
			z-index: 10;
		}
		.spruchcard-copy-svg {
			width: 5vw;
			transition: width 0.1s ease;
			will-change: width;
		}

		.spruchcard-copy-span {
			padding-top: 0.1vw;
			font-size: $font-card-mobile-small-text;
		}

		.spruchcard-copy-copied-weitere {
			padding: 1.5vw 1.6vw;
			top: -8.5vw;
			border-radius: 20px;
			font-size: $font-card-mobile-small-text;
			opacity: 0;
			transform: translateY(2vw);
		}
		.spruchcard-copy-copied-weitere:after {
			border-left: 1vw solid transparent;
			border-right: 1vw solid transparent;
			border-top: 2vw solid $main-color;
			bottom: -1.8vw;
			right: 4.9vw;
		}

		.ws-h2 {
			font-size: 7vw;
			margin: 7vw 0 0 4.75vw;
		}
	}
	@media (min-width: 1920px) {
		.ws-pp {
			font-size: 23.04px;
		}
		.ws-span {
			font-size: 19.2px;
		}
		.ws-h2 {
			font-size: 32.64px;
		}
	}
</style>
