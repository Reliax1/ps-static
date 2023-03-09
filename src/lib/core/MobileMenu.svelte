<script>
	import { dev } from '$app/environment';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	import MobileStore from '../../stores/MobileStore';

	import MobileLogo from '$lib/core/MobileLogo.svelte';

	let setUrl = dev ? 'http://127.0.0.1:5173' : 'https://perfekterspruch.de';

	let menu1 = false;
	let menu2 = false;
	let menu3 = false;
	let menu4 = false;
	let menu5 = false;
	let menu6 = false;
	let menu7 = false;
	let menu8 = false;

	const openMenu1 = () => {
		menu1 = !menu1;
	};
	const openmenu2 = () => {
		menu2 = !menu2;
	};
	const openmenu3 = () => {
		menu3 = !menu3;
	};
	const openmenu4 = () => {
		menu4 = !menu4;
	};
	const openmenu5 = () => {
		menu5 = !menu5;
	};
	const openmenu6 = () => {
		menu6 = !menu6;
	};
	const openmenu7 = () => {
		menu7 = !menu7;
	};
	const openmenu8 = () => {
		menu8 = !menu8;
	};

	const closeMobileStore = () => {
		$MobileStore.mobileMenu = false;
	};

	$: if ($MobileStore.mobileMenu === false) {
		menu1 = false;
		menu2 = false;
		menu3 = false;
		menu4 = false;
		menu5 = false;
		menu6 = false;
		menu7 = false;
		menu8 = false;
	}
</script>

{#if $MobileStore.mobileMenu}
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
				<li class="menu-li-nonelink" on:click={openMenu1}>
					Lebensweisheiten
					<img class="tools-content-svg-right" src="/svg/header/angle-down.svg" alt="arrow" />
				</li>
				<li class="menu-li-nonelink" on:click={openmenu2}>
					Liebe
					<img class="tools-content-svg-right" src="/svg/header/angle-down.svg" alt="arrow" />
				</li>
				<li class="menu-li-nonelink" on:click={openmenu3}>
					Interessant
					<img class="tools-content-svg-right" src="/svg/header/angle-down.svg" alt="arrow" />
				</li>
				<li class="menu-li-nonelink" on:click={openmenu4}>
					Tage
					<img class="tools-content-svg-right" src="/svg/header/angle-down.svg" alt="arrow" />
				</li>
				<li class="menu-li-nonelink" on:click={openmenu5}>
					Geburtstag
					<img class="tools-content-svg-right" src="/svg/header/angle-down.svg" alt="arrow" />
				</li>
				<li class="menu-li-nonelink" on:click={openmenu6}>
					Wünsche
					<img class="tools-content-svg-right" src="/svg/header/angle-down.svg" alt="arrow" />
				</li>
				<li class="menu-li-nonelink" on:click={openmenu7}>
					Guten Morgen
					<img class="tools-content-svg-right" src="/svg/header/angle-down.svg" alt="arrow" />
				</li>
				<li class="menu-li">
					<a on:click={closeMobileStore} href="{setUrl}/spruch-des-tages/">Spruch des Tages</a>
				</li>
				<li class="menu-li">
					<a on:click={closeMobileStore} href="{setUrl}/zitate-sprueche-generator/"
						>Zitate Sprueche Generator</a
					>
				</li>
				<!-- <li class="menu-li-newsletter">
					 <div class="newsletter-placeholder" />
				 </li> -->
			</ul>
		</nav>

		{#if menu1}
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
							on:click={openMenu1}
						/>
						<div class="placeholder"><span>Lebensweisheiten</span></div>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/sprueche-zum-nachdenken/"
							>Sprüche zum Nachdenken</a
						>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/weise-sprueche/">Weise Sprüche</a>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/kluge-sprueche/">Kluge Sprüche</a>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/positive-sprueche/">Positive Sprüche</a>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/erinnerungen-sprueche/"
							>Erinnerungen Sprüche</a
						>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/falsche-menschen-sprueche/"
							>Falsche Menschen Sprüche</a
						>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/loyalitaet-sprueche/">Loyalität Sprüche</a
						>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/schicksal-sprueche/">Schicksal Sprüche</a>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/falsche-freunde-sprueche/"
							>Falsche Freunde Sprüche</a
						>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/einsamkeit-sprueche/"
							>Einsamkeit Sprüche</a
						>
					</li>
					<!-- <li class="menu-li-newsletter">
				<div class="newsletter-placeholder" />
			</li> -->
				</ul>
			</nav>
		{/if}
		{#if menu2}
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
							on:click={openmenu2}
						/>
						<div class="placeholder"><span>Liebe</span></div>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/beziehungssprueche/">Beziehungssprüche</a>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/suesse-sprueche/">Süße Sprüche</a>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/ich-liebe-dich-bilder/"
							>Ich liebe dich Bilder</a
						>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/valentinstag-sprueche/"
							>Valentinstag Sprüche</a
						>
					</li>
					<!-- <li class="menu-li-newsletter">
				<div class="newsletter-placeholder" />
			</li> -->
				</ul>
			</nav>
		{/if}
		{#if menu3}
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
							on:click={openmenu3}
						/>
						<div class="placeholder"><span>Interessant</span></div>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/coole-sprueche/">Coole Sprüche</a>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/karma-sprueche/">Karma Sprüche</a>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/traurige-sprueche/">Traurige Sprüche</a>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/gute-sprueche/">Gute Sprüche</a>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/sprueche-zum-abschied/"
							>Abschiedssprüche</a
						>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/lebensmotto/">Lebensmotto</a>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/karneval-sprueche/">Karneval Sprüche</a>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/enttaeuschung-sprueche/"
							>Enttäuschung Sprüche</a
						>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/vertrauen-sprueche/">Vertrauen Sprüche</a>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/hoffnung-sprueche/">Hoffnung Sprüche</a>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/sarkastische-sprueche/"
							>Sarkastische Sprüche</a
						>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/gute-laune-sprueche/"
							>Gute Laune Sprüche</a
						>
					</li>
					<!-- <li class="menu-li-newsletter">
				<div class="newsletter-placeholder" />
			</li> -->
				</ul>
			</nav>
		{/if}
		{#if menu4}
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
							on:click={openmenu4}
						/>
						<div class="placeholder"><span>Tage</span></div>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/gute-nacht-bilder/">Gute Nacht Bilder</a>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/schoenen-abend-bilder/"
							>Schönen Abend Bilder</a
						>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/schoenen-samstag/"
							>Schönen Samstag Sprüche</a
						>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/schoenen-tag/">Schönen Tag Sprüche</a>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/schoenen-montag/"
							>Schönen Montag Sprüche</a
						>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/schoenes-wochenende-bilder/"
							>Schönes Wochenende Bilder</a
						>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/sonntagsgruesse/">Sonntagsgrüße</a>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/sonntag-lustig/">Sonntag lustig</a>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/montagsgruesse/">Montagsgrüße</a>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/dienstagsgruesse/">Dienstagsgrüße</a>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/mittwochsgruesse/">Mittwochsgrüße</a>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/donnerstagsgruesse/">Donnerstagsgrüße</a>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/freitagsgruesse/">Freitagsgrüße</a>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/samstagsgruesse/">Samstagsgrüße</a>
					</li>

					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/montag-bilder/">Montag Bilder</a>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/dienstag-bilder/">Dienstag Bilder</a>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/mittwoch-bilder/">Mittwoch Bilder</a>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/donnerstag-bilder/">Donnerstag Bilder</a>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/freitag-bilder/">Freitag Bilder</a>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/samstag-bilder/">Samstag Bilder</a>
					</li>
					<!-- <li class="menu-li-newsletter">
				<div class="newsletter-placeholder" />
			</li> -->
				</ul>
			</nav>
		{/if}
		{#if menu5}
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
							on:click={openmenu5}
						/>
						<div class="placeholder"><span>Geburtstag</span></div>
					</li>
					<li class="menu-li-nonelink" on:click={openmenu8}>
						<span>Runder Geburtstag</span>
						<img class="tools-content-svg-right" src="/svg/header/angle-down.svg" alt="arrow" />
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/geburtstagsgruesse/">Geburtstagsgrüße</a>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/geburtstagswuensche/"
							>Geburtstagswünsche</a
						>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/geburtstagssprueche/"
							>Geburtstagssprüche</a
						>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/geburtstagswuensche-mann/"
							>Geburtstagswünsche für Männer</a
						>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/geburtstagswuensche-freundin/"
							>Geburtstagswünsche Freundin</a
						>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/geburtstagswuensche-fuer-frauen/"
							>Geburtstagswünsche für Frauen</a
						>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/geburtstagswuensche-nachtraeglich/"
							>Geburtstagswünsche nachträglich</a
						>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/geburtstagswuensche-fuer-kinder/"
							>Geburtstagswuensche für Kinder</a
						>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/geburtstagswuensche-kollegin/"
							>Geburtstagswünsche Kollegin</a
						>
					</li>

					<!-- <li class="menu-li-newsletter">
				<div class="newsletter-placeholder" />
			</li> -->
				</ul>
			</nav>
		{/if}
		{#if menu6}
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
							on:click={openmenu6}
						/>
						<div class="placeholder"><span>Wünsche</span></div>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/gute-besserung-wuensche/"
							>Gute Besserung Wünsche</a
						>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/glueckwuensche-zur-bestandenen-pruefung/"
							>Glückwünsche zur bestandenen Prüfung</a
						>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/frohe-weihnachten-bilder/"
							>Frohe Weihnachten Bilder</a
						>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/ostergruesse-bilder/">Ostergrüße Bilder</a
						>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/neujahrswuensche/">Neujahrswünsche</a>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/glueckwuensche-zur-kommunion/"
							>Glückwünsche zur Kommunion</a
						>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/glueckwuensche-zur-konfirmation/"
							>Glückwünsche zur Konfirmation</a
						>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/glueckwuensche-zum-hochzeitstag/"
							>Glückwünsche zum Hochzeitstag</a
						>
					</li>
					<li class="menu-li">
						<a
							on:click={closeMobileStore}
							href="{setUrl}/hoelzerne-hochzeit-glueckwuensche-sprueche/"
							>Glückwünsche hölzerne Hochzeit</a
						>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/glueckwuensche-zur-goldenen-hochzeit/"
							>Glückwünsche zur goldenen Hochzeit</a
						>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/jugendweihe-sprueche/"
							>Jugendweihe Sprüche</a
						>
					</li>
					<!-- <li class="menu-li-newsletter">
				<div class="newsletter-placeholder" />
			</li> -->
				</ul>
			</nav>
		{/if}
		{#if menu7}
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
							on:click={openmenu7}
						/>
						<div class="placeholder"><span>Guten Morgen</span></div>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/guten-morgen-montag/">Montag</a>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/guten-morgen-dienstag/">Dienstag</a>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/guten-morgen-mittwoch/">Mittwoch</a>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/guten-morgen-donnerstag/">Donnerstag</a>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/guten-morgen-freitag/">Freitag</a>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/guten-morgen-samstag/">Samstag</a>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/guten-morgen-sonntag/">Sonntag</a>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/guten-morgen-lustig/">Lustige Sprüche</a>
					</li>
					<!-- <li class="menu-li-newsletter">
				<div class="newsletter-placeholder" />
			</li> -->
				</ul>
			</nav>
		{/if}
		{#if menu8}
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
							on:click={openmenu8}
						/>
						<div class="placeholder"><span>Runder Geburtstag</span></div>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/glueckwuensche-zum-18-geburtstag/"
							>Glückwünsche zum 18. Geburtstag</a
						>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/glueckwuensche-zum-20-geburtstag/"
							>Glückwünsche zum 20. Geburtstag</a
						>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/glueckwuensche-zum-30-geburtstag/"
							>Glückwünsche zum 30. Geburtstag</a
						>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/glueckwuensche-zum-40-geburtstag/"
							>Glückwünsche zum 40. Geburtstag</a
						>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/glueckwuensche-zum-50-geburtstag/"
							>Glückwünsche zum 50. Geburtstag</a
						>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/glueckwuensche-zum-60-geburtstag/"
							>Glückwünsche zum 60. Geburtstag</a
						>
					</li>
					<li class="menu-li">
						<a on:click={closeMobileStore} href="{setUrl}/glueckwuensche-zum-70-geburtstag/"
							>Glückwünsche zum 70. Geburtstag</a
						>
					</li>

					<!-- <li class="menu-li-newsletter">
				<div class="newsletter-placeholder" />
			</li> -->
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
	// .menu-li-newsletter {
	// 	margin-top: 4vh;
	// }
	// .newsletter-placeholder {
	// 	height: 12vh;
	// 	width: 100%;
	// 	background-color: darkgoldenrod;
	// 	border-bottom: 1px solid #e1dfdd;
	// 	border-bottom: 1px solid #e1dfdd;
	// }

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
	// .no-border {
	// 	border-bottom: unset;
	// }
</style>
