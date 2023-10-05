<script>
	import viewport from './useViewportAction';

	let loadComponent;
	export { loadComponent as this };

	let isShowingComponent = false;
	let componentPromise;
</script>

{#if !isShowingComponent}
	<div
		use:viewport
		on:enterViewport={() => {
			componentPromise = loadComponent();
			isShowingComponent = true;
		}}
	/>
{:else}
	{#await componentPromise}
		<!-- <slot name="loading">Loading...</slot> -->
	{:then { default: Mainmedia }}
		<slot name="component" {Mainmedia} />
	{/await}
{/if}
