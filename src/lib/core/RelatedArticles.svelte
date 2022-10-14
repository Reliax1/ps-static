<script>
	export let imageArray;
</script>

<div class="relatedarticles-wrapper">
	<div class="relatedarticles-second">
		<span class="relatedarticles-header">Verwandte Themen</span>
		<div class="mobile-device">
			<ul class="tabbed-icons">
				{#each imageArray as image}
					<li class="tabbed-icon">
						<a href={image.slug}>
							<div class="relatedarticles-container">
								<div class="image-div">
									<img
										class="relatedarticles-image"
										src={`../sprueche/${image.image}.webp`}
										alt={image.image.replace(/-/g, ' ')}
									/>
								</div>
								<div class="text-div">
									<span class="text-span">{image.header}</span>
								</div>
							</div>
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>

<style lang="scss">
	.relatedarticles-header {
		font-size: 1.25rem;
		font-weight: bold;
		margin-left: 4vw;
	}
	.text-span {
		font-size: 4.5vw;
		word-break: break-word;
		// hyphens: auto;
	}
	.text-div {
		width: 55%;
		height: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	.relatedarticles-image {
		object-fit: cover;
		width: 100px;
		height: 100px;
		border-radius: $mobile-border-radius;
	}
	.image-div {
		width: 45%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.relatedarticles-container {
		height: 130px; // 142px;
		width: 250px; // 300px; 270px
		border-radius: $mobile-border-radius;
		display: flex;
		flex-wrap: wrap;
		// user-select: none;

		box-shadow: 0.156vw 0.208vw 0.26vw 0 rgb(0 0 0 / 30%),
			-0.156vw 0.208vw 0.26vw 0 rgb(0 0 0 / 30%);

		// border: 1px solid rgb(229, 231, 235);
	}
	.relatedarticles-wrapper {
		display: flex;
		flex-direction: column;
		margin: $mobile-p-margin 0;
		// overflow: hidden;
	}

	.mobile-device {
		margin-right: auto;
		margin-left: auto;
		width: 100vw;
		height: 135px;
		margin-top: 2.5vw;
	}

	// Overflow scroll technique
	.tabbed-icons {
		display: flex;
		justify-content: flex-start;
		flex-wrap: nowrap;
		overflow-x: scroll;
		-webkit-overflow-scrolling: touch;
		scroll-snap-type: x mandatory;
		padding-bottom: 5px;
		// margin-right: 5vw;

		&::-webkit-scrollbar {
			display: none;
		}
	}

	.tabbed-icons:first-child {
		margin-left: 1.75vw;
	}

	.tabbed-icons:last-child {
		margin-right: 5vw;
	}

	.tabbed-icon {
		// margin-left: 6vw;
		margin: 0 4vw;
		flex: 0 0 auto;
		scroll-snap-align: center;
		cursor: pointer;
	}
	.tabbed-icon a {
		display: block;
	}

	@media screen and (min-width: 480px) and (max-width: 1024px) {
		.relatedarticles-image {
			width: 200px;
			height: 200px;
		}
		.relatedarticles-container {
			height: 250px;
			width: 500px;
			padding: 2vw;
		}
		.mobile-device {
			height: 260px;
			margin-top: 2.5vw;
		}
		.text-span {
			font-size: 4vw;
			margin-left: 1.5vw;
		}
		.relatedarticles-header {
			font-size: 4.5vw;
		}
		.tabbed-icon a {
			display: block;
		}
	}

	@media (min-width: 1025px) {
		.relatedarticles-wrapper {
			margin: 1vw 0;
			width: 100%;
			// overflow: unset;
		}
		.relatedarticles-second {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;
			width: 100%;
			padding: 0 1vw;
			// width: 97.8%;
			margin: 0 auto;
		}
		.tabbed-icons {
			display: flex;
			flex-wrap: nowrap;
			overflow-x: unset;
			-webkit-overflow-scrolling: unset;
			scroll-snap-type: unset;
			padding-bottom: 0;
		}
		.relatedarticles-header {
			width: 100%;
			font-size: 1.5vw;
			margin-left: 1%;
			text-align: start;
		}
		.mobile-device {
			margin-top: 0.5vw;
			width: 100%;
			height: 14vh;
		}

		.tabbed-icon {
			padding: 0;
			flex: unset;
			scroll-snap-align: unset;
			margin-left: 0;
		}

		.tabbed-icons {
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-wrap: wrap;
		}

		.tabbed-icons:last-child {
			padding-right: 0;
		}

		.relatedarticles-image {
			object-fit: cover;
			width: 5.208vw;
			height: 5.208vw;
			border-radius: 0.521vw;
		}
		.relatedarticles-container {
			height: 13vh; // 15vh;
			width: 32vh; // 35vh;
			border-radius: 10px;
			will-change: transform;
			transition-property: transform, box-shadow;
			transition-duration: 0.15s;
			transition-timing-function: linear;

			box-shadow: 0.052vw 0.052vw 0.104vw rgba(0, 0, 0, 0.3),
				-0.052vw 0.052vw 0.104vw rgba(0, 0, 0, 0.3);
			// box-shadow: 0.104vw 0.156vw 0.208vw rgb(0 0 0 / 30%),
			// 	-0.104vw 0.156vw 0.208vw rgb(0 0 0 / 30%);
		}
		.relatedarticles-container:hover {
			transform: translateY(-0.1vw);
			box-shadow: 0.078vw 0.078vw 0.13vw rgba(0, 0, 0, 0.3),
				-0.078vw 0.078vw 0.13vw rgba(0, 0, 0, 0.3);
		}

		.text-span {
			font-size: 1.05vw;
		}

		.text-div {
			width: 60%;
		}

		.image-div {
			width: 40%;
		}
		.tabbed-icons:last-child {
			margin-right: 0;
		}
		.tabbed-icon {
			margin: 0;
		}
		.tabbed-icons:first-child {
			margin-left: 0;
			margin-left: 2vw;
		}
		.tabbed-icons:first-child {
			margin: 0;
		}
	}
	@media (min-width: 1920px) {
		.mobile-device {
			height: 135px; // 162px
		}
		.relatedarticles-container {
			height: 130px; // 158px
			width: 360px; // 380px
			border-radius: 10px;
			box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3), -1px 1px 2px rgba(0, 0, 0, 0.3);
		}
		.relatedarticles-container:hover {
			box-shadow: 1.5px 1.5px 2.5px rgba(0, 0, 0, 0.3), -1.5px 1.5px 2.5px rgba(0, 0, 0, 0.3);
		}
		.text-span {
			font-size: 21px;
		}
		.relatedarticles-image {
			width: 100px;
			height: 100px;
			border-radius: 10px;
		}
		.relatedarticles-header {
			font-size: 28.8px;
		}

		.text-div {
			width: 60%;
		}

		.image-div {
			width: 40%;
		}
		.tabbed-icons:last-child {
			margin-right: 0;
		}
		.tabbed-icon {
			margin: 0;
		}
		.tabbed-icons:first-child {
			margin-left: 0;
			margin-left: 2vw;
		}
		.tabbed-icons:first-child {
			margin: 0;
		}
	}
</style>
