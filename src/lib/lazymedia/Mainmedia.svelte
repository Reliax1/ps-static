<script>
	import { onMount } from 'svelte';
	// import { dev } from '$app/environment';
	import HelperStore from '../../stores/HelperStore';

	export let isMobile;
	export let source;
	export let start;

	export let placeholder;

	const EzoicCallback = () => {
		// let getMore = null;

		// if ($HelperStore.isMobile === true && $HelperStore.isTablet === false) {
		// 	getMore = $HelperStore.placeholder.mobile_inline;
		// } else if ($HelperStore.isMobile === false) {
		// 	getMore = $HelperStore.placeholder.desktopInline;
		// } else if ($HelperStore.isMobile === true && $HelperStore.isTablet === true) {
		// 	getMore = $HelperStore.placeholder.tablet;
		// }

		// dynamic
		window.ezstandalone = window.ezstandalone || {};
		ezstandalone.cmd = ezstandalone.cmd || [];
		ezstandalone.cmd.push(function () {
			// call new placeholders
			ezstandalone.displayMore(placeholder);
			// ezstandalone.refresh();
		});
	};

	const setId = async (placeholder_id) => {
		const all_placeholders = [
			{
				index: 2,
				placeholder: 140
			},
			{
				index: 5,
				placeholder: 111
			},
			{
				index: 8,
				placeholder: 112
			},
			{
				index: 11,
				placeholder: 113
			},
			{
				index: 14,
				placeholder: 114
			},
			{
				index: 17,
				placeholder: 115
			},
			{
				index: 20,
				placeholder: 116
			},
			{
				index: 23,
				placeholder: 117
			},
			{
				index: 26,
				placeholder: 118
			},
			{
				index: 29,
				placeholder: 119
			},
			{
				index: 32,
				placeholder: 120
			},
			{
				index: 35,
				placeholder: 121
			},
			{
				index: 38,
				placeholder: 122
			},
			{
				index: 7,
				placeholder: 123
			},
			{
				index: 12,
				placeholder: 124
			},
			{
				index: 15,
				placeholder: 125
			},
			{
				index: 19,
				placeholder: 126
			},
			{
				index: 23,
				placeholder: 127
			},
			{
				index: 27,
				placeholder: 128
			},
			{
				index: 31,
				placeholder: 129
			},
			{
				index: 132,
				placeholder: 132
			},
			{
				index: 133,
				placeholder: 133
			},
			{
				index: 134,
				placeholder: 134
			},
			{
				index: 135,
				placeholder: 135
			},
			{
				index: 136,
				placeholder: 136
			},
			{
				index: 137,
				placeholder: 137
			},
			{
				index: 138,
				placeholder: 138
			}
		];

		for (let i = 0; i < all_placeholders.length; i++) {
			const element = all_placeholders[i];
			if (element.index === placeholder_id) {
				return element.placeholder;
			}
		}
	};

	onMount(async () => {
		// if (start === false) {
		// 	placeholder = await setId(placeholder);
		// 	EzoicCallback();
		// }
	});
</script>

{#if source === 'mobile-inline' && isMobile === true}
	<div class="yellow-wrapper-mobile">
		<div id="ezoic-pub-ad-placeholder-{placeholder}" />
	</div>
{:else if source === 'desktopsticky' && isMobile === false}
	<div class="yellow-wrapper-desktop">
		<div class="anz-desktop">
			<div id="ezoic-pub-ad-placeholder-{placeholder}" />
		</div>
	</div>
{:else if source === 'mobileBanner' && isMobile === true}
	<!-- <div class="media-mobile"> -->
	<div id="ezoic-pub-ad-placeholder-{placeholder}" />
	<!-- </div> -->
{:else if source === 'desktopInline' && isMobile === false}
	<div class="desktop-inline-wrapper">
		<div id="ezoic-pub-ad-placeholder-{placeholder}" />
	</div>
{:else if source === 'tablet' && isMobile === true}
	<div class="tablet-inline-wrapper">
		<div id="ezoic-pub-ad-placeholder-{placeholder}" />
	</div>
{/if}

<style lang="scss">
	.desktop-inline-wrapper {
		display: block;
		margin: 0 auto;
		width: 96%;
		height: 300px;
	}
	.tablet-inline-wrapper {
		display: none;
	}
	.anz-mobile {
		display: none;
	}
	.anz-desktop {
		width: 300px;
		height: 600px;
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
		// height: 44.271vw;
		height: 600px;
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
		// height: 113vw;
		height: 300px;
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

	.media-mobile {
		width: 100%;
		height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		// // background-color: grey;
	}

	@media (max-width: 1024px) {
		.desktop-inline-wrapper {
			display: none;
		}
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

	@media screen and (min-width: 480px) and (max-width: 1024px) {
		.tablet-inline-wrapper {
			display: block;
			width: 100%;
			margin: 3vh auto;
			height: 300px;
		}

		.media-mobile {
			width: 100%;
			height: 60px;
		}
	}
	@media (min-width: 361px) and (max-width: 480px) {
		.yellow-wrapper-mobile {
			height: 343px;
		}
	}
</style>
