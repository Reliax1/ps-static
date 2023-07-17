<script>
	export let isMobile;

	const yellowBaseUrl = 'https://images.arkunis.com/yellow/perfekt';

	const yellowSizes =
		'(max-width: 360px) 360px and (max-width: 1024px)) 304px, (min-width: 3840px) 417px, (min-width: 2560px) 423px, (min-width: 1920px) 427px, (min-width: 1025px) 304px, 100vw';
</script>

<div
	class:yellow-wrapper-mobile={isMobile === true}
	class:yellow-wrapper-desktop={isMobile === false}
>
	<a href="https://www.arkunis.de/" target="_blank">
		<picture>
			<source
				sizes={yellowSizes}
				srcSet="{yellowBaseUrl}/1366/avif/1.avif 304w, {yellowBaseUrl}/1920/avif/1.avif 427w, {yellowBaseUrl}/2560/avif/1.avif 423w, {yellowBaseUrl}/3840/avif/1.avif 417w, {yellowBaseUrl}/360/avif/1.avif 912w"
				type="image/avif"
			/>
			<source
				sizes={yellowSizes}
				srcSet="{yellowBaseUrl}/1366/webp/1.webp 304w, {yellowBaseUrl}/1920/webp/1.webp 427w, {yellowBaseUrl}/2560/webp/1.webp 423w, {yellowBaseUrl}/3840/webp/1.webp 417w, {yellowBaseUrl}/360/webp/1.webp 912w"
				type="image/webp"
			/>
			<img
				sizes={yellowSizes}
				src="{yellowBaseUrl}/1366/jpg/1.jpg"
				class:yellow-image-mobile={isMobile === true}
				class:yellow-image-desktop={isMobile === false}
				srcSet="{yellowBaseUrl}/1366/jpg/1.jpg 304w, {yellowBaseUrl}/1920/jpg/1.jpg 427w, {yellowBaseUrl}/2560/jpg/1.jpg 423w, {yellowBaseUrl}/3840/jpg/1.jpg 417w, {yellowBaseUrl}/360/jpg/1.jpg 912w"
				alt="yellow"
			/>
		</picture>
	</a>
</div>

<style lang="scss">
	a {
		width: 100%;
		height: 100%;
	}
	picture {
		display: flex;
		justify-content: center;
	}
	.yellow-wrapper-desktop {
		display: block !important;
		position: sticky;
		top: 10vh;
		height: 44.271vw;
		margin: 1vw 0;
	}
	.yellow-image-desktop {
		height: 100%;
		border: solid #fbcb4f 0.5vw;
		border-radius: 10px;
		box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3), -2px 2px 3px rgba(0, 0, 0, 0.3);
	}
	.yellow-wrapper-mobile {
		display: none !important;
		width: 100%;
		display: flex;
		justify-content: center;
		margin-bottom: 6vw;
	}
	.yellow-image-mobile {
		display: none !important;
		width: 90%;
		// padding: 5vw;
		border: solid #fbcb4f 3vw;
		border-radius: 10px;
		box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3), -2px 2px 3px rgba(0, 0, 0, 0.3);
	}

	@media (max-width: 1024px) {
		.yellow-wrapper-mobile {
			display: flex !important;
		}
		.yellow-image-mobile {
			display: flex !important;
		}
		.yellow-wrapper-desktop {
			display: none !important;
		}
		.yellow-image-desktop {
			display: none !important;
		}
	}

	@media (min-width: 1921px) {
		.yellow-wrapper-desktop {
			height: 850.003px;
			display: block !important;
		}
		.yellow-image-desktop {
			display: block !important;
		}
		.yellow-wrapper-mobile {
			display: none !important;
		}
		.yellow-image-mobile {
			display: none !important;
		}
	}
</style>
