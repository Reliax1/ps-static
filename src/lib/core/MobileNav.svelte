<script>
	// import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import HelperStore from '../../stores/HelperStore';
	// import Mainmedia from '$lib/lazymedia/Mainmedia.svelte';

	// let offSetTracker = true;
	// let scrollPosition = 0;

	// $: if (scrollPosition <= 0) {
	// 	offSetTracker = true;
	// } else {
	// 	offSetTracker = false;
	// }

	const clickopenmenu = () => {
		$HelperStore.mobileMenu = !$HelperStore.mobileMenu;
	};

	// onMount(() => {

	// });

	// class:is-scrolled={!offSetTracker && $HelperStore.mobileMenu === false}
</script>

<!-- <svelte:window bind:scrollY={scrollPosition} /> -->

<div
	class="navContainer"
	class:navContainer-down={$HelperStore.mediaType === 'google' && $HelperStore.mobileMenuDown}
>
	<nav class="mobilenav1">
		<div class="LogoSecond">
			<a class="intern-link" href="/">
				<span class="LogoName">P</span>erfekter<span class="LogoName">S</span>pruch<span
					class="LogoName">.</span
				>
			</a>
		</div>

		<div class="nav1">
			<div class="menu-div">
				<div
					class:menu-btn={!$HelperStore.mobileMenu}
					class:menu-btn-open={$HelperStore.mobileMenu}
					on:click={clickopenmenu}
				>
					<div class="menu-btn__burger" />
				</div>
			</div>
		</div>
	</nav>
</div>

<style lang="scss">
	// .is-scrolled {
	// 	box-shadow: 0 2px 4px -2px rgb(0 0 0 / 50%);
	// }

	.LogoSecond {
		font-size: 8vw;
		width: 80%;
		display: flex;
		justify-content: center;
		align-items: center;

		span {
			font-size: 10vw;
			font-weight: bold;
			color: $main-color;
		}
	}

	.menu-div {
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.menu-btn,
	.menu-btn-open {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 70%;
		transition: all 0.3s ease-out;
	}
	.menu-btn__burger {
		width: 22.4px; //50 28
		height: 2.688px; // 6
		background: #000;
		border-radius: 2.8px; //5
		transition: all 0.3s ease-out;
	}
	.menu-btn__burger::before,
	.menu-btn__burger::after {
		content: '';
		position: absolute;
		width: 22.4px;
		height: 2.688px;
		background: #000;
		border-radius: 2.24px;
		transition: all 0.3s ease-out;
	}
	.menu-btn__burger::before {
		transform: translateY(-7.2px); // 16
	}
	.menu-btn__burger::after {
		transform: translateY(7.2px);
	}

	/* ANIMATION */

	.menu-btn-open .menu-btn__burger {
		transform: translateX(22.4px);
		background: transparent;
		box-shadow: none;
	}

	.menu-btn-open .menu-btn__burger::before {
		transform: rotate(45deg) translate(-15.68px, 15.6px);
		background: $main-color;
	}
	.menu-btn-open .menu-btn__burger::after {
		transform: rotate(-45deg) translate(-15.6px, -15.6px);
		background: $main-color;
	}
	.navContainer {
		// position: fixed;
		position: absolute;
		top: 0;
		height: 55px; // 55px
		width: 100%;
		z-index: 900;
		transition: transform 0.5s ease;
	}
	.navContainer-down {
		transform: translateY(55px);
	}
	.mobilenav1 {
		position: relative;
		width: 100%;
		height: 55px;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 900;
		background-color: #fff;
	}
	@media screen and (min-width: 480px) and (max-width: 1024px) {
		.navContainer {
			position: fixed;
			top: 0;
			height: 60px;
			width: 100%;
			z-index: 900;
		}

		.mobilenav1 {
			width: 100%;
			height: 60px;
		}
		.navContainer-down {
			transform: translateY(60px);
		}
		.LogoSecond {
			font-size: 6vw !important;

			span {
				font-size: 8vw !important;
			}
		}
	}
</style>
