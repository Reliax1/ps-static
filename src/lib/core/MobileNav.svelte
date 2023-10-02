<script>
	// import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';
	import HelperStore from '../../stores/HelperStore';
	import Media from '$lib/core/Media.svelte';

	// let openInhalt = false;
	let openmenu2 = false; // not defined

	const buttonclick = (buttonName) => {
		if (window.location.hostname.includes('perfekterspruch')) {
			fetch('https://8xfm8zzg6c.execute-api.eu-central-1.amazonaws.com/dev' + '/putbutton', {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					buttonname: 'mobile' + ' ' + buttonName
				})
			});
		}
	};
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		});
	};
	const clickCloseMenuHome = () => {
		if ($HelperStore.mobileMenu) {
			$HelperStore.mobileMenu = false;
		}
	};
	const clickopenmenu = () => {
		$HelperStore.mobileMenu = !$HelperStore.mobileMenu;
	};

	// onMount(() => {
	// 	setTimeout(() => {
	// 		console.log('$page.routeId', $page.routeId);
	// 		console.log('$page.url.pathname  ', $page.url.pathname);
	// 	}, 500);
	// });
</script>

<!-- <div class="navContainer" class:navContainer-active={false} class:navContainer-down={false}> -->
<div
	class="navContainer"
	class:navContainer-active={$HelperStore.isMobile === true &&
		$HelperStore.mediaType === 'google' &&
		($page.routeId === '[slug]' || $page.url.pathname === '/')}
	class:navContainer-down={$HelperStore.mediaType === 'google' && $HelperStore.mobileMenuDown}
>
	{#if $HelperStore.isMobile === true && $HelperStore.mediaType === 'google' && ($page.routeId === '[slug]' || $page.url.pathname === '/')}
		<div class="media-mobile-wrapper">
			<div class="media-mobile" aria-hidden="true">
				{#if $HelperStore.isTablet === true}
					<Media source="mobileTablet" manuelMobile={true} isMobile={$HelperStore.isMobile} />
				{:else}
					<Media source="mobileBanner" manuelMobile={true} isMobile={$HelperStore.isMobile} />
				{/if}
			</div>
		</div>
	{/if}

	<nav class="mobilenav1">
		<div class="nav1" on:click={clickCloseMenuHome} on:click={buttonclick}>
			<a class="nav-link" href="https://perfekterspruch.de/">
				<img
					class="nav-svg"
					class:navgreen={$page.routeId == ''}
					src="/svg/core/home.svg"
					alt="home bild"
				/>
				<p class="nav1-pp">Home</p>
			</a>
		</div>
		<div class="nav1" on:click={clickCloseMenuHome} on:click={() => buttonclick('Generator')}>
			<a class="nav-link" href="https://perfekterspruch.de/zitate-sprueche-generator/">
				<img
					class="nav-svg"
					class:navgreen={$page.routeId == 'zitate-sprueche-generator'}
					src="/svg/core/generator.svg"
					alt="generator"
				/>
				<p class="nav1-pp">Generator</p>
			</a>
		</div>

		<div class="nav1" on:click={scrollToTop} on:click={() => buttonclick('Scroll')}>
			<img
				class="nav-svg nav-svg-active"
				src="/svg/core/scrolltopmobile.svg"
				alt="scrolltopmobile"
			/>
			<p class="nav1-pp">Scroll</p>
		</div>
		<div class="nav1" on:click={clickCloseMenuHome} on:click={() => buttonclick('SpruchDesTages')}>
			<a class="nav-link" href="https://perfekterspruch.de/spruch-des-tages/">
				<img
					class="nav-svg"
					class:navgreen={$page.routeId == 'spruch-des-tages'}
					src="/svg/core/day.svg"
					alt="Spruch des Tages"
				/>
				<p>Spruch</p>
			</a>
		</div>
		<div class="nav1" on:click={() => buttonclick('Menu' + openmenu2.toString())}>
			<div class="menu-div">
				<div
					class:menu-btn={!$HelperStore.mobileMenu}
					class:menu-btn-open={$HelperStore.mobileMenu}
					on:click={clickopenmenu}
				>
					<div class="menu-btn__burger" />
				</div>
				<p class="menu-text">Menu</p>
			</div>
		</div>
	</nav>
</div>

<style lang="scss">
	.nav-link {
		position: relative;
		text-decoration: none;
		color: inherit;
		border: 0;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	}

	.nav-svg {
		height: 20px;
		filter: $filter-white;
	}
	.nav-svg-active:active {
		filter: $main-color-filter-notBlack !important;
	}

	.navgreen {
		filter: $main-color-filter-notBlack !important;
	}
	.menu-div {
		height: 100%;
		width: 100%;

		p {
			width: 100%;
			height: 30%;
			font-size: 0.7rem;
			letter-spacing: 0px;
			display: flex;
			justify-content: center;
			text-align: center;
			align-items: center;
			color: #ffffff;
		}
	}

	.menu-btn,
	.menu-btn-open {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 70%;
		// cursor: pointer;
		transition: all 0.3s ease-out;
		padding-bottom: 7px;
	}
	.menu-btn__burger {
		width: 22.4px; //50 28
		height: 2.688px; // 6
		background: #fff;
		border-radius: 2.8px; //5
		// box-shadow: 0 2px 5px rgba(255,101,47,.2);
		transition: all 0.3s ease-out;
	}
	.menu-btn__burger::before,
	.menu-btn__burger::after {
		content: '';
		position: absolute;
		width: 22.4px;
		height: 2.688px;
		background: #fff;
		border-radius: 2.24px;
		// box-shadow: 0 2px 5px rgba(255,101,47,.2);
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
	.menu-text {
		transform: translateY(-2.5px);
		user-select: none;
	}
	.nav1-pp {
		user-select: none;
	}

	.navContainer {
		position: fixed;
		bottom: 0;
		height: 55px; // 55px
		width: 100%;
		// background-color: $dark-nav;
		z-index: 900;
		transition: transform 0.5s ease;
	}
	.navContainer-active {
		height: 105px; // 55px
	}
	.navContainer-down {
		transform: translateY(55px);
	}

	.media-mobile-wrapper {
		width: 100%;
		height: 50px;
		z-index: 900;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: transparent;
	}
	.media-mobile {
		width: 360px;
		height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		// // background-color: grey;
	}

	.mobilenav1 {
		position: relative;
		width: 100%;
		height: 55px;
		padding-top: 10.5px;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 900;
		background-color: $dark-nav;

		.nav1 {
			width: 20%;
			height: 100%;
			position: relative;
			background-color: $dark-nav;
			display: flex;
			justify-content: center;
			align-items: space-between;
			flex-wrap: wrap;

			a {
				display: flex;
				justify-content: center;
				align-items: center;
				flex-wrap: wrap;
			}

			p {
				width: 100%;
				font-size: 0.7rem;
				display: flex;
				justify-content: center;
				text-align: center;
				align-items: center;
				color: #ffffff;
			}

			img {
				width: 1.4rem;
			}
		}
	}
	@media screen and (min-width: 480px) and (max-width: 1024px) {
		.navContainer {
			position: fixed;
			bottom: 0;
			height: 60px;
			width: 100%;
			// background-color: $dark-nav;
			z-index: 900;
		}

		.mobilenav1 {
			width: 100%;
			height: 60px;
			padding-top: 10.5px;

			.nav1 {
				width: 20%;
				height: 100%;

				p {
					font-size: 1rem;
				}

				// .InhaltsverzeichnisDiv {
				//   font-size: 1rem;
				// }

				img {
					width: 30px;
				}
			}
		}
		.nav-svg {
			height: 25px;
		}
		.navContainer-active {
			height: 120px;
		}
		.navContainer-down {
			transform: translateY(60px);
		}
		.media-mobile-wrapper {
			width: 100%;
			height: 60px;
		}
		.media-mobile {
			width: 450px;
			height: 60px;
		}
	}
</style>
