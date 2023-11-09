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
	{:then { default: Lazymedia }}
		<slot name="component" {Lazymedia} />
	{/await}
{/if}
