<script>
</script>

<div class="spruchcard-copy-copied">kopiert</div>

<style lang="scss">
	.spruchcard-copy-copied {
		color: #fff;
		background-color: $main-color;
		padding: 1.5vw 1.6vw;
		border-radius: 20px;
		font-size: $font-card-mobile-small-text;
	}
	.spruchcard-copy-copied:after {
		content: '';
		position: absolute;
		border-left: 1vw solid transparent;
		border-right: 1vw solid transparent;
		border-top: 2vw solid $main-color;
		bottom: -1.9vw;
		right: 5vw;
	}

	@media screen and (min-width: 480px) and (max-width: 1024px) {
		.spruchcard-copy-copied {
			padding: 1.5vw 1.6vw;
			border-radius: 20px;
			font-size: $font-card-mobile-small-text;
		}
		.spruchcard-copy-copied:after {
			content: '';
			position: absolute;
			border-left: 1vw solid transparent;
			border-right: 1vw solid transparent;
			border-top: 2vw solid $main-color;
			bottom: -1.8vw;
			right: 4.9vw;
		}
	}

	@media screen and (min-width: 1025px) {
		.spruchcard-copy-copied {
			padding: 0.4vw 0.45vw;
			border-radius: 20px;
			font-size: 0.8vw;
			pointer-events: none;
		}
		.spruchcard-copy-copied:after {
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
	}

	@media screen and (min-width: 1921px) {
		.spruchcard-copy-copied {
			padding: 7.68px 8.64px;
			transform: translateY(7.68px);
			font-size: 15.36px;
		}
		.spruchcard-copy-copied:after {
			border-left: 6.01px solid transparent;
			border-right: 6.01px solid transparent;
			border-top: 12px solid $main-color;
			bottom: -10.003px;
			right: 24.96px;
		}
	}
</style>
