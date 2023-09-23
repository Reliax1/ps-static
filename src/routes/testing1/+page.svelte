<script>
	import Lazy from '$lib/lazymedia/Lazy.svelte';
	let bar = '456';
</script>

<div class="testing-wrapper">
	<div style="background: darkgrey; height: 1000px;" />

	{bar}

	<Lazy this={() => import('../../lib/lazymedia/Component.svelte')}>
		<!-- <div slot="loading">Loading...</div> -->
		<svelte:fragment slot="component" let:Component>
			<Component foo="123" bind:bar />
		</svelte:fragment>
	</Lazy>
</div>

<style lang="scss">
	.testing-wrapper {
		height: 250vh;
		width: 100%;
		background-color: grey;
	}
</style>
