<script>
	import Lazymedia from '$lib/lazymedia/Lazymedia.svelte';

	export let isMobile;
	export let isTablet;
</script>

<div class="media-mobile-wrapper">
	{#if isTablet === true}
		<Lazymedia placeholder={106} start={true} source="mobileTablet" {isMobile} />
	{:else}
		<Lazymedia placeholder={106} start={true} source="mobileBanner" {isMobile} />
	{/if}
</div>

<style>
	.media-mobile-wrapper {
		position: fixed;
		width: 100%;
		background-color: rgba(255, 255, 255, 0.5);
		left: 0;
		bottom: 0;
		display: flex;
		justify-content: center;
		z-index: 999;
	}
</style>
