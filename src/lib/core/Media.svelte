<script>
	import { onMount } from 'svelte';

	export let isMobile;
	export let manuelMobile;
	export let source;

	onMount(() => {
		if (isMobile === manuelMobile) {
			(window.adsbygoogle = window.adsbygoogle || []).push({});
		}
	});
</script>

<div
	class:yellow-wrapper-mobile={source === 'normal' && manuelMobile === true}
	class:yellow-wrapper-desktop={source === 'normal' && manuelMobile === false}
>
	{#if source === 'normal' && isMobile === manuelMobile}
		<div class="goo">
			{#if manuelMobile === true}
				<ins
					class="adsbygoogle adslot_1"
					style="display:block"
					data-ad-client="ca-pub-6800691774097678"
					data-ad-slot="7607089982"
					data-ad-format="vertical"
					data-full-width-responsive="true"
				/>
			{:else}
				<ins
					class="adsbygoogle"
					style="display:inline-block;width:450px;height:850px"
					data-ad-client="ca-pub-6800691774097678"
					data-ad-slot="1438989650"
				/>
			{/if}
		</div>
	{/if}
</div>

{#if source === 'mobileBanner' && isMobile === true}
	<ins
		class="adsbygoogle"
		style="display:inline-block;width:360px;height:50px"
		data-ad-client="ca-pub-6800691774097678"
		data-ad-slot="1381512858"
	/>
{:else if source === 'desktopInline' && isMobile === false}
	<div class="desktop-inline-wrapper desktop-inline-active">
		<ins
			class="adsbygoogle"
			style="display:block"
			data-ad-client="ca-pub-6800691774097678"
			data-ad-slot="2188733030"
			data-ad-format="auto"
			data-full-width-responsive="true"
		/>
	</div>
{:else if source === 'mobileTablet' && isMobile === true}
	<ins
		class="adsbygoogle"
		style="display:inline-block;width:450px;height:60px"
		data-ad-client="ca-pub-6800691774097678"
		data-ad-slot="9764481470"
	/>
{/if}

<style lang="scss">
	.adslot_1 {
		display: none;
	}
	.desktop-inline-wrapper {
		display: none;
	}
	.desktop-inline-active {
		display: block;
		margin: 0 auto;
		width: 96%;
		height: 300px;
		// background-color: grey;
	}
	.anz-mobile {
		display: none;
	}
	.anz-desktop {
		position: absolute;
		width: 100%;
		text-align: center;
		font-size: 0.75vw;
		text-align: right;
		padding-right: 0.5vw;
		top: -1vw;
		left: 0;
	}
	.goo {
		// width: 24.5vw;
		width: 450px;
		height: 100%;
		// background-color: grey;
	}
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
		width: 100%;
		// height: 100%;
		// border: solid #fbcb4f 0.5vw;
		border-radius: 10px;
		box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3), -2px 2px 3px rgba(0, 0, 0, 0.3);
	}
	.yellow-wrapper-mobile {
		display: none !important;
		width: 100%;
		height: 80vw;
		// background-color: grey;
		display: flex;
		justify-content: center;
		margin-bottom: 7vw;
		margin-top: 1vw;
	}
	.yellow-image-mobile {
		display: none !important;
		margin: 0 auto;
		width: 90%;
		// padding: 5vw;
		// border: solid #fbcb4f 3vw;
		border-radius: 10px;
		box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3), -2px 2px 3px rgba(0, 0, 0, 0.3);
	}

	@media (max-width: 1024px) {
		.goo {
			width: 100%;
		}
		.anz-desktop {
			display: none;
		}
		.anz-mobile {
			display: block;
			width: 100%;
			text-align: center;
			// padding-left: 7vw;
			font-size: 3.5vw;
		}
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
		.anz-desktop {
			font-size: 14.4px;
			padding-right: 9.6px;
			top: -19.2px;
		}
		.anz-mobile {
			display: none;
		}
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

	@media (max-width: 480px) {
		.adslot_1 {
			display: block;
		}
	}
</style>
