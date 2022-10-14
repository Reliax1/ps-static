<script></script>

<div class="footer-info-wrapper">
	<div class="footer-info">
		<div class="footer-Copyright">Copyright © 2022 Perfekterspruch.de</div>
		<div class="footer-hh6">
			<a class="footer-latest-intern-link" rel="nofollow" href="/impressum/"> Impressum </a>
		</div>
		<div class="footer-hh6">
			<a class="footer-latest-intern-link" rel="nofollow" href="/datenschutz/"> Datenschutz </a>
		</div>
		<div class="footer-hh6">
			<a class="footer-latest-intern-link" rel="nofollow" href="/kontakt/"> Kontakt </a>
		</div>
	</div>
</div>

<style lang="scss">
	.footer-info-wrapper {
		position: relative;
		width: 100%;
		height: 5vh;
		background-color: #00040b;
		color: #fff;
	}
	.footer-info {
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.footer-hh6 {
		margin: 0 1.778vh;
		transition-property: color;
		transition-duration: 0.15s;
		transition-timing-function: ease;

		&:hover {
			color: $main-color;
		}
	}
	.footer-Copyright {
		position: absolute;
		left: 0.356vh;
		font-size: 1.067vh;
		text-align: left;
		padding-left: 4.8vw;
	}
	.footer-latest-intern-link {
		// height: 25%;
		// width: 100%;
		font-size: 1.422vh;
	}
	@media (max-width: 1024px) {
		.footer-info-wrapper {
			position: relative;
			// bottom: 49px;
			// bottom: 0;
			width: 100%;
			height: 10vw;
			display: flex;
			justify-content: flex-start !important;
			align-items: center;
		}
		.footer-info {
			position: relative;
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: space-around;
			align-items: center;
		}
		.footer-hh6 {
			display: block;
			margin: 0;
			height: 25%;
			// width: 100%;
			// margin: 0 5vw;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.footer-Copyright {
			position: relative;
			padding-left: 0;
			// height: 100%;
			width: 25%;
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;
			// position: absolute;
			// width: 30%;
			// left: 1.778vh;
			font-size: 2.5vw;
		}
		.footer-latest-intern-link {
			font-size: 3vw;
		}
	}
</style>
