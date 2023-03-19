<script>
	import { onMount } from 'svelte';
	import { dev } from '$app/environment';

	import ContentStore from '../../stores/ContentStore';

	let offSetTracker = true;
	let scrollPosition = 0;

	let transitionOn = false;
	let transitionVision = false;

	let setUrl = dev ? 'http://127.0.0.1:5173' : 'https://perfekterspruch.de';

	$: if (scrollPosition <= 0) {
		offSetTracker = true;
	} else {
		offSetTracker = false;
	}

	const changeAngle = (index) => {
		let cssNumber;
		if (index === 0) {
			cssNumber = '4vw';
		} else if (index === 1) {
			cssNumber = '12.5vw';
		} else if (index === 2) {
			cssNumber = '18vw';
		} else if (index === 3) {
			cssNumber = '26vw';
		} else if (index === 4) {
			cssNumber = '32vw';
		} else if (index === 5) {
			cssNumber = '40vw';
		} else if (index === 6) {
			cssNumber = '48vw';
		}

		document.documentElement.style.setProperty('--angle', cssNumber);
	};

	onMount(async () => {
		transitionOn = true;
		transitionVision = true;
	});
</script>

<svelte:window bind:scrollY={scrollPosition} />

<header class="header" class:addtransition={transitionOn} class:is-scrolled={!offSetTracker}>
	<div class="shell">
		<div class="header__inner">
			<a class="logo header__logo" href="{setUrl}/">
				<i class="icon-logo-co">Perfekterspruch.de</i>
			</a>
			<div class="header__content">
				<nav class="nav header__nav">
					<ul class="ul-realative">
						{#each $ContentStore.all_header as header, index}
							<li
								class="has-dropdown"
								on:mouseover={() => changeAngle(index)}
								on:focus={() => changeAngle(index)}
							>
								<span>{header.headerName}</span>

								<div class="dropdown" class:addVisableTransition={transitionVision}>
									<nav class="dropdown__nav">
										<ul class="ul-items">
											{#each header.data as item}
												<li>
													<a class="item-a" href="{setUrl}/{item.link}/">{item.name}</a>
												</li>
											{/each}
											{#if index === 4}
												{#each header.runderGb as runderGb}
													<li>
														<a class="item-a" href="{setUrl}/{runderGb.link}/">{runderGb.name}</a>
													</li>
												{/each}
												{#each header.nichtRunderGb as nichtRunderGb}
													<li>
														<a class="item-a" href="{setUrl}/{nichtRunderGb.link}/"
															>{nichtRunderGb.name}</a
														>
													</li>
												{/each}
											{/if}
										</ul>
									</nav>
								</div>
							</li>
						{/each}
					</ul>
				</nav>
			</div>
		</div>
	</div>
</header>

<style lang="scss">
	.header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		padding: 3.33vh 0;
		background: #fff;
	}
	.addtransition {
		transition: padding 0.3s, height 0.3s;
	}
	.header.is-scrolled {
		padding: 1.389vh 0 1.574vh;
		// box-shadow: 0 2px 20px -16px rgb(0 0 0 / 50%);
		box-shadow: 0 0.185vh 1.852vh -1.481vh rgb(0 0 0 / 50%);
	}
	.shell {
		// max-width: 124.074vh;
		width: 80%;
		padding: 0 2.778vh;
		margin: 0 auto;
	}
	.header__inner {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
		min-height: 3.704vh;
	}
	.logo {
		display: block;
		width: 13.056vh;
	}
	.header__logo {
		position: absolute;
		top: -10px;
		align-self: flex-start;
		z-index: 2;
		width: 60px;
		height: 60px;
	}
	.icon-logo-co {
		background-image: url('/InstaLogoSmallTransparent.png');
		width: 5.56vh;
		height: 5.56vh;
	}
	[class*='icon-'],
	[class^='icon-'] {
		background-repeat: no-repeat;
		background-size: 100% 100%;
		background-position: 0 0;
		display: inline-block;
		font-size: 0;
		line-height: 0;
		text-transform: none;
		display: block;
	}
	.header__nav {
		position: absolute;
		top: 1.111vh;
		left: 0;
		right: 0;
		display: flex;
		justify-content: center;
	}

	.nav > ul {
		display: flex;
		align-items: center;
		font-size: 1.8vh; // 1.6vh
		color: #1d1c1d;
		font-weight: bold;
	}

	.nav .has-dropdown {
		cursor: pointer;
	}

	.nav .has-dropdown > span {
		padding-right: 2.13vh;
	}

	.nav > ul > li > span {
		position: relative;
		text-decoration: none;
		color: inherit;
	}

	// .nav > ul > li > span::before {
	//     background-image: initial;
	//     background-color: currentcolor;
	// }

	.nav > ul > li > span:before {
		content: '';
		position: absolute;
		left: 0;
		bottom: -0.278vh;
		width: 0;
		height: 0.185vh;
		background: currentColor;
		transition: width 0.2s;
		filter: $main-color-filter-notBlack;
	}

	.nav .has-dropdown > span:after {
		display: block;
	}

	.nav > ul > li > span:after {
		display: none;
		content: '';
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
		width: 1.019vh;
		height: 0.556vh;
		background-image: url('/svg/header/angle-down.svg');
		background-size: contain;
		background-repeat: no-repeat;
		transition: transform 0.2s;
	}
	.nav > ul > li:hover > span:after {
		transform: translateY(-50%) rotate(180deg);
	}
	.ul-realative {
		position: relative;
	}

	.dropdown {
		position: absolute;
		left: 0;
		top: 100%;
		width: 100%;
		min-width: 34.259vh;
		padding: 1.574vh 3vw;
		visibility: hidden;
		opacity: 0;
		left: 50%;
		transform: translate(-50%, 0);
		// transition: opacity 0.2s, visibility 0.2s;
	}
	.ul-items {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		padding: 1vw;
	}
	.item-a {
		display: inline;
		width: 15vw;
	}

	.addVisableTransition {
		transition: opacity 0.2s, visibility 0.2s;
	}
	.nav .has-dropdown:hover .dropdown {
		visibility: visible;
		opacity: 1;
	}

	.dropdown__nav {
		overflow: auto;
		max-height: 50vh;
		padding: 0.741vh 0 0.37vh;
		background: #fff;
		border: 0.093vh solid hsla(0, 0%, 79.6%, 0.7);
		border-radius: 0.463vh;
		box-shadow: 1.389vh 1.389vh 3.704vh rgb(0 0 0 / 8%);
	}

	.nav .dropdown:before {
		z-index: 5;
	}

	.nav .dropdown:after,
	.nav .dropdown:before {
		content: '';
		position: absolute;
		left: var(--angle);
		top: 0.648vh;
		width: 0;
		height: 0;
		border-left: 1vh solid transparent;
		border-right: 1vh solid transparent;
		border-bottom: 1vh solid #cbcbcb;
	}

	.nav .dropdown:after {
		z-index: 5;
		top: 0.741vh !important;
		border-bottom-color: #fff !important;
	}

	.nav > ul > li > span:hover:before {
		width: 100%;
	}

	.dropdown__nav a {
		display: block;
		font-size: 1.6vh;
		font-weight: 400;
		text-decoration: none;
		color: inherit;
		padding: 0.741vh 2.222vh;
		transition: padding 0.2s;
	}
	.dropdown__nav a:hover {
		background: #f3f1ef;
		padding-left: 2.778vh;
	}

	.nav > ul > li + li {
		margin-left: 3.148vh;
	}
</style>
