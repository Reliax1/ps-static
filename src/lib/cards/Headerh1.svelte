<script>
	export let h1title;
</script>

<div class="wrapper">
	<div class="swipe">
		<h1 class="h111">{h1title}</h1>
	</div>
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		flex-direction: column;
		width: 100%;
		justify-content: center;
		align-items: center;
		// height: 6vh;
		// margin-top: 1vw;
	}

	.swipe {
		position: relative;
		width: fit-content;
		&::after {
			display: block;
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			right: 100%;
			width: 0%;
			height: 100%;
			background-color: $main-color;
			// animation: swipe 1s ease-out 0.25s forwards;
			// will-change: width;
		}
	}

	.h111 {
		display: block;
		font-size: 1.75vw;
		line-height: 1;
		font-weight: 600;
		text-transform: uppercase;
		padding: 0.781vw 1.302vw;
		opacity: 1; // 0
		// animation: fade 0.01s ease-out 1.75s forwards;
		// animation: fade 0.01s ease-out 0.75s forwards;
	}
	.h111:before {
		background-color: $main-color;
		content: '';
		display: block;
		height: 0.234vw;
		width: 50%;
		position: absolute;
		left: 0;
		top: 0;
	}
	.h111:after {
		background-color: $main-color;
		content: '';
		display: block;
		position: absolute;
		height: 0.234vw;
		width: 50%;
		right: 0;
		bottom: 0;
	}

	// @keyframes fade {
	// 	from {
	// 		opacity: 0;
	// 	}
	// 	to {
	// 		opacity: 1;
	// 	}
	// }

	// @keyframes swipe {
	// 	0% {
	// 		right: 100%;
	// 		left: 0;
	// 		width: 0%;
	// 	}
	// 	50% {
	// 		right: 0;
	// 		left: 0;
	// 		width: 100%;
	// 	}
	// 	100% {
	// 		right: 0;
	// 		left: 100%;
	// 		width: 0%;
	// 	}
	// }
	@media (max-width: 1024px) {
		.wrapper {
			min-height: 15vw;
			margin: 4vw 0;
		}

		.swipe {
			position: relative;
			left: 0;
			transform: unset;
			margin-top: 0;
		}

		.h111 {
			font-size: 7vw;
			line-height: 1;
			text-transform: uppercase;
			padding: 4vw 0px;
			text-align: center;
		}

		.h111:before {
			height: 4px;
		}
		.h111:after {
			height: 4px;
		}
	}

	@media screen and (min-width: 480px) and (max-width: 1024px) {
		.wrapper {
			min-height: 9vw;
			margin: 3vw 0;
		}
		.h111 {
			font-size: 5vw;
			padding: 2vw 0px;
		}
		.h111:before {
			height: 6px;
		}
		.h111:after {
			height: 6px;
		}
	}
</style>
