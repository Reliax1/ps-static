<script>
	import { dev } from '$app/environment';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	import HelperStore from '../../stores/HelperStore';
	import ContentStore from '../../stores/ContentStore';

	import MobileLogo from '$lib/core/MobileLogo.svelte';

	let setUrl = dev ? 'http://localhost:5173' : 'https://perfekterspruch.de';

	let all_menus = [
		{
			menu: false
		},
		{
			menu: false
		},
		{
			menu: false
		},
		{
			menu: false
		},
		{
			menu: false
		},
		{
			menu: false
		},
		{
			menu: false
		},
		{
			menu: false
		},
		{
			menu: false
		},
		{
			menu: false
		}
	];

	const openMenu = (index) => {
		all_menus[index].menu = !all_menus[index].menu;
	};

	const closeMobileStore = () => {
		$HelperStore.mobileMenu = false;
	};

	$: if ($HelperStore.mobileMenu === false) {
		all_menus.forEach((element) => (element.menu = false));
	}
</script>

{#if $HelperStore.mobileMenu}
	<div
		transition:fly={{ duration: 500, x: -500, y: 0, opacity: 1, easing: quintOut }}
		class="menu-main-wrapper"
	>
		<MobileLogo />

		<nav class="menu-nav">
			<ul class="menu-ul">
				<li class="menu-li-top">
					<div class="manu-social-div">
						<a
							on:click={closeMobileStore}
							href="https://www.instagram.com/perfekterspruch.de/"
							target="_blank"
							><img
								class="spruchcard-share-svg"
								src="/svg/instagram.svg"
								alt="social media logo"
							/></a
						>
						<a
							on:click={closeMobileStore}
							href="https://www.pinterest.de/perfekterspruch/_created/"
							target="_blank"
							><img
								class="spruchcard-share-svg"
								src="/svg/pinterest.svg"
								alt="social media logo"
							/></a
						>
						<a
							on:click={closeMobileStore}
							href="https://www.facebook.com/perfekterspruch"
							target="_blank"
							><img
								class="spruchcard-share-svg"
								src="/svg/facebook.svg"
								alt="social media logo"
							/></a
						>
					</div>
				</li>
				{#each $ContentStore.all_header as header, index}
					<li class="menu-li-nonelink" on:click={() => openMenu(index)}>
						{header.headerName}
						<img class="tools-content-svg-right" src="/svg/header/angle-down.svg" alt="arrow" />
					</li>
				{/each}
				<li class="menu-li">
					<a on:click={closeMobileStore} href="{setUrl}/spruch-des-tages/">Spruch des Tages</a>
				</li>
				<li class="menu-li">
					<a on:click={closeMobileStore} href="{setUrl}/zitate-sprueche-generator/"
						>Zitate Sprueche Generator</a
					>
				</li>
			</ul>
		</nav>

		{#each $ContentStore.all_header as main, index}
			{#if all_menus[index].menu}
				<nav
					class="menu-nav-2"
					transition:fly={{ duration: 500, x: -500, y: 0, opacity: 1, easing: quintOut }}
				>
					<ul class="menu-ul-2">
						<li class="menu-li-top-2">
							<img
								class="tools-content-svg-left"
								src="/svg/mobile/arrow-left.svg"
								alt="arrow"
								on:click={() => openMenu(index)}
							/>
							<div class="placeholder"><span>{main.headerName}</span></div>
						</li>
						{#if index === 4}
							<li class="menu-li-nonelink" on:click={() => openMenu(8)}>
								Runder Geburtstage
								<img class="tools-content-svg-right" src="/svg/header/angle-down.svg" alt="arrow" />
							</li>
							<li class="menu-li-nonelink" on:click={() => openMenu(9)}>
								Sonstige Geburtstage
								<img class="tools-content-svg-right" src="/svg/header/angle-down.svg" alt="arrow" />
							</li>
						{/if}
						{#each main.data as item}
							<li class="menu-li">
								<a on:click={closeMobileStore} href="{setUrl}/{item.link}/">{item.name}</a>
							</li>
						{/each}
					</ul>
				</nav>
			{/if}
		{/each}
		{#if all_menus[8].menu}
			<nav
				class="menu-nav-2"
				transition:fly={{ duration: 500, x: -500, y: 0, opacity: 1, easing: quintOut }}
			>
				<ul class="menu-ul-2">
					<li class="menu-li-top-2">
						<img
							class="tools-content-svg-left"
							src="/svg/mobile/arrow-left.svg"
							alt="arrow"
							on:click={() => openMenu(8)}
						/>
						<div class="placeholder"><span>Runde Geburtstage</span></div>
					</li>
					{#each $ContentStore.all_header[4].runderGb as item}
						<li class="menu-li">
							<a on:click={closeMobileStore} href="{setUrl}/{item.link}/">{item.name}</a>
						</li>
					{/each}
				</ul>
			</nav>
		{/if}
		{#if all_menus[9].menu}
			<nav
				class="menu-nav-2"
				transition:fly={{ duration: 500, x: -500, y: 0, opacity: 1, easing: quintOut }}
			>
				<ul class="menu-ul-2">
					<li class="menu-li-top-2">
						<img
							class="tools-content-svg-left"
							src="/svg/mobile/arrow-left.svg"
							alt="arrow"
							on:click={() => openMenu(9)}
						/>
						<div class="placeholder"><span>Sonstige Geburtstage</span></div>
					</li>
					{#each $ContentStore.all_header[4].nichtRunderGb as item}
						<li class="menu-li">
							<a on:click={closeMobileStore} href="{setUrl}/{item.link}/">{item.name}</a>
						</li>
					{/each}
				</ul>
			</nav>
		{/if}
	</div>
{/if}

<style lang="scss">
	.menu-main-wrapper {
		position: fixed;
		// opacity: 0;
		// visibility: hidden;
		top: 0;
		width: 100%;
		height: 100vh;
		background-color: #fff;
		overflow-y: auto;
		overflow-x: hidden;
		transition: left 0.15s ease-in-out;
		box-shadow: 0 10px 0.75rem #666;
		left: 0;
		z-index: 99;
	}
	::-webkit-scrollbar {
		width: 0vh;
	}

	.menu-nav {
		padding: 0 4vw;
		height: 84.5vh;
		overflow-x: hidden;
		overflow-y: auto;
		margin-bottom: 49px;
	}

	.menu-nav-2 {
		// opacity: 0;
		// visibility: hidden;
		padding: 0 4vw;
		position: absolute;
		top: 14vw;
		background-color: #fff;
		width: 100%;
		height: 84.5vh;
		transition: left 0.15s ease-in-out;
		left: 0;
		overflow-x: hidden;
		overflow-y: auto;
	}
	.manu-social-div {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 11.5vh;
		width: 100%;
		// background-color: darkgoldenrod;
		border-bottom: 1px solid #e1dfdd;
	}
	.spruchcard-share-svg {
		height: 10vw;
		width: 10vw;
		margin: 0 5vw;
	}

	.placeholder {
		height: 12vh;
		width: 100%;
		// background-color: darkgoldenrod;
		border-bottom: 1px solid #e1dfdd;
	}
	.placeholder span {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 8vw;
	}
	.menu-li-top {
		margin-bottom: 4vw;
	}
	.menu-li-nonelink {
		font-size: 5.5vw;
		padding: 3.5vw 0;
		position: relative;
		border-bottom: 1px solid #e1dfdd;
	}
	.menu-li {
		font-size: 5.5vw;
		// font-weight: 500;
		// padding: 3.5vw 0;
		position: relative;
		border-bottom: 1px solid #e1dfdd;
	}
	.menu-li a {
		display: block;
		width: 100%;
		height: 100%;
		padding: 3.5vw 0;
	}

	.menu-li-top-2 {
		position: relative;
		margin-bottom: 4vw;
	}
	.tools-content-svg-left {
		position: absolute;
		top: 33%;
		width: 7vw;
		transform: rotate(90deg);
		transition: transform 0.15s ease;
		filter: $main-color-filter;
	}

	.tools-content-svg-right {
		position: absolute;
		width: 4.5vw;
		right: 0;
		top: 42%;
		transform: rotate(270deg);
		transition: transform 0.15s ease;
		filter: $main-color-filter;
	}

	@media screen and (min-width: 480px) and (max-width: 1024px) {
		.menu-li-nonelink {
			font-size: 4vw;
			padding: 3.5vw 0;
		}
		.menu-li {
			font-size: 4vw;
		}
		.tools-content-svg-right {
			width: 3vw;
			right: 1.5vw;
		}
		.placeholder span {
			font-size: 6vw;
		}
		.tools-content-svg-left {
			top: 37%;
			width: 5vw;
		}
		.menu-nav-2 {
			padding: 0 4vw;
			top: 10vw;
		}
		.spruchcard-share-svg {
			height: 8vw;
			width: 8vw;
			margin: 0 5vw;
		}
		.menu-li-top {
			margin-bottom: 0;
		}
		.manu-social-div {
			height: 10vh;
		}
	}
</style>
