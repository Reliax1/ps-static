<script>
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	import 'lazysizes';
	import Kopiert from '$lib/core/Kopiert.svelte';

	export let userIsMobile;
	export let card;
	export let index;

	let shareOpen = false;
	let activeIndex = undefined;
	let hideCopy = false;
	let active_copy = false;

	const changeTextSize = () => {
		if (
			$page.params.slug == 'geburtstagswuensche-freundin' ||
			$page.params.slug == 'geburtstagswuensche-fuer-frauen'
		) {
			const spruchcardText = document.getElementsByClassName('spruchcard-text')[index];
			const spruchcardtextcontainer = document.getElementsByClassName('main-text')[index];
			if (spruchcardtextcontainer.scrollHeight > spruchcardtextcontainer.clientHeight) {
				spruchcardText.style.fontSize = '1vw';
			}
		}
	};

	const copyCardText = (index) => {
		// const button = document.getElementsByClassName('spruchcard-copy-copied')[index];
		const copyText = document.getElementsByClassName('spruchcard-text')[index].innerText;

		navigator.clipboard.writeText(copyText);

		// button.classList.add('activecopie');
		active_copy = true;
		setTimeout(function () {
			active_copy = false;
		}, 1000);
	};

	async function openShare(index, text, image, id) {
		// https://benkaiser.dev/sharing-images-using-the-web-share-api/
		// const response = await fetch(
		// 	`https://res.cloudinary.com/dd79nq7sg/image/upload/f_webp%2Cq_auto%2Cw_972/psimages/${image}.jpg`
		// );

		const cardTitle = window.document.title;
		const cardUrl = window.document.location.href + '#' + id;
		const cardText = text;

		const response = await fetch(`https://bilder.perfekterspruch.de/download/${image}.jpg`);
		const blob = await response.blob();
		const filesArray = new File([blob], `PerferkterSpruch${id}.jpg`, { type: blob.type });

		const shareData = {
			title: cardTitle,
			url: cardUrl,
			text: cardText,
			files: [filesArray]
		};

		if (userIsMobile && navigator.canShare(shareData)) {
			try {
				await navigator.share(shareData);
			} catch (err) {
				if (err.name !== 'AbortError') {
					console.error('testest', err.name, err.message);
				}
			}
		} else {
			hideCopy = !hideCopy;
			setTimeout(() => {
				if (!shareOpen) {
					shareOpen = true;
					activeIndex = index;
				} else if (shareOpen && activeIndex != index) {
					activeIndex = index;
					shareOpen = true;
				} else {
					shareOpen = false;
					activeIndex = undefined;
				}
			}, 1);
		}
	}
	const cardDrucken = (url) => {
		const popup = window.open();
		popup.document.write(`<img src='${url}'/>`);
		popup.document.close();
		popup.focus();
		setTimeout(() => {
			popup.print();
			popup.close();
		}, 200);
	};
	const sharePopup = (link) => {
		if (userIsMobile) {
			window.open(link, '_blank');
			return false;
		} else {
			window.open(
				link,
				'targetWindow',
				`toolbar=no,
				location=no,
				status=no,
				menubar=no,
				scrollbars=yes,
				resizable=yes,
				width=800,
				height=800`
			);
			return false;
		}
		shareOpen = false;
	};

	const downloadImage = (url, name) => {
		// const url = `https://bilder.perfekterspruch.de/download/${card.image}.jpg`;
		// const name = `PerferkterSpruch ${card.id}.jpg`;

		fetch(url)
			.then((resp) => resp.blob())
			.then((blob) => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				// the filename you want
				a.download = name;
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			});
	};

	onMount(async () => {
		if (!userIsMobile) {
			changeTextSize();
		}
	});
</script>

<div id={card.id} class="spruchcard-maindiv">
	<div class="spruchcard-firstcard">
		<div class="spruchcard-image-container">
			{#if index <= 3}
				<picture>
					<source
						sizes="(max-width: 1024px) 972px, 
					(min-width: 1920px) 400px, 
					(min-width: 1366px) 285px,
						100vw"
						srcSet="https://bilder.perfekterspruch.de/avif/1366/{card.image}.avif 285w, https://bilder.perfekterspruch.de/avif/1920/{card.image}.avif 400w, https://bilder.perfekterspruch.de/avif/360/{card.image}.avif 972w"
						type="image/avif"
					/>
					<source
						sizes="(max-width: 1024px) 972px, 
					(min-width: 1920px) 400px, 
					(min-width: 1366px) 285px,
						100vw"
						srcSet="https://bilder.perfekterspruch.de/webp/1366/{card.image}.webp 285w, https://bilder.perfekterspruch.de/webp/1920/{card.image}.webp 400w, https://bilder.perfekterspruch.de/webp/360/{card.image}.webp 972w"
						type="image/webp"
					/>
					<img
						sizes="(max-width: 1024px) 972px, 
					(min-width: 1920px) 400px, 
					(min-width: 1366px) 285px,
						100vw"
						src="https://bilder.perfekterspruch.de/jpg/360/{card.image}.jpg"
						class="spruchcard-image"
						srcSet="https://bilder.perfekterspruch.de/jpg/1366/{card.image}.jpg 285w, https://bilder.perfekterspruch.de/jpg/1920/{card.image}.jpg 400w, https://bilder.perfekterspruch.de/jpg/360/{card.image}.jpg 972w"
						alt={card.image.split('/')[1].replace(/-/g, ' ')}
					/>
				</picture>
			{:else}
				<picture>
					<source
						sizes="(max-width: 1024px) 972px, 
					(min-width: 1920px) 400px, 
					(min-width: 1366px) 285px,
						100vw"
						srcSet="https://bilder.perfekterspruch.de/avif/placeholder/{card.image}.avif"
						data-srcSet="https://bilder.perfekterspruch.de/avif/1366/{card.image}.avif 285w, https://bilder.perfekterspruch.de/avif/1920/{card.image}.avif 400w, https://bilder.perfekterspruch.de/avif/360/{card.image}.avif 972w"
						type="image/avif"
					/>
					<source
						sizes="(max-width: 1024px) 972px, 
					(min-width: 1920px) 400px, 
					(min-width: 1366px) 285px,
						100vw"
						srcSet="https://bilder.perfekterspruch.de/webp/placeholder/{card.image}.webp"
						data-srcSet="https://bilder.perfekterspruch.de/webp/1366/{card.image}.webp 285w, https://bilder.perfekterspruch.de/webp/1920/{card.image}.webp 400w, https://bilder.perfekterspruch.de/webp/360/{card.image}.webp 972w"
						type="image/webp"
					/>
					<img
						sizes="(max-width: 1024px) 972px, 
					(min-width: 1920px) 400px, 
					(min-width: 1366px) 285px,
						100vw"
						class="spruchcard-image lazyload"
						src="https://bilder.perfekterspruch.de/jpg/360/{card.image}.jpg"
						srcSet="https://bilder.perfekterspruch.de/jpg/placeholder/{card.image}.jpg"
						data-srcSet="https://bilder.perfekterspruch.de/jpg/1366/{card.image}.jpg 285w, https://bilder.perfekterspruch.de/jpg/1920/{card.image}.jpg 400w, https://bilder.perfekterspruch.de/jpg/360/{card.image}.jpg 972w"
						alt={card.image.split('/')[1].replace(/-/g, ' ')}
					/>
				</picture>
			{/if}
		</div>

		<div class="spruchcard-text-container">
			<div class="main-text" class:text-center={!card.author}>
				<p class="spruchcard-text" class:text-100={!card.author}>
					{card.text}
				</p>

				{#if card.author}
					<span class="spruchcard-text-span">{card.author}</span>
				{/if}
			</div>

			<div class="spruchcard-share-teilen">
				<div
					class="spruchcard-copy-container"
					class:opacity-0={hideCopy}
					on:click={() => copyCardText(index)}
				>
					<button class="spruchcard-copy-button">
						{#if active_copy}
							<div transition:fly={{ y: 10, duration: 1000 }} class="spruchcard-copy-animation">
								<Kopiert />
							</div>
						{/if}

						<img class="spruchcard-copy-svg" src="/svg/copy.svg" alt="copy" />
						<span class="spruchcard-copy-span">Kopieren</span>
					</button>
				</div>

				<div
					class="spruchcard-share-teilen-span"
					on:click={() => openShare(index, card.text, card.image, card.id)}
				>
					<img
						class="spruchcard-share-teilen-share-svg"
						src="/svg/share.svg"
						alt="social media logo"
					/>

					{#if shareOpen}
						<ul class="spruchcard-share-all">
							{#if !userIsMobile}
								<li
									class="spruchcard-share-cointainer"
									class:spruchcard-share-transition1={shareOpen && activeIndex == index}
									on:click={() =>
										cardDrucken(`https://bilder.perfekterspruch.de/download/${card.image}.jpg`)}
								>
									<img class="spruchcard-share-svg" src="/svg/printer.svg" alt="printer logo" />
									<span class="spruchcard-share-svg-text1">Drucken</span>
								</li>
							{/if}
							{#if userIsMobile}
								<li
									class="spruchcard-share-cointainer"
									class:spruchcard-share-transition1={shareOpen && activeIndex == index}
								>
									<a
										href="whatsapp://send?text={card.text}"
										data-action="share/whatsapp/share"
										target="_blank"
									>
										<img class="spruchcard-share-svg" src="/svg/whatsapp.svg" alt="printer logo" />
									</a>

									<span class="spruchcard-share-svg-text2">Whatsapp</span>
								</li>
							{/if}
							<li
								class="spruchcard-share-cointainer"
								class:spruchcard-share-transition4={shareOpen && activeIndex == index}
							>
								<div
									data-pin-do="buttonPin"
									data-pin-count="above"
									data-pin-custom="true"
									data-pin-lang="de"
									on:click={() =>
										sharePopup(
											`https://de.pinterest.com/pin/create/button/?url=https://perfekterspruch.de&media=https://bilder.perfekterspruch.de/download/${card.image}.jpg`
										)}
								>
									<img
										class="spruchcard-share-svg"
										src="/svg/pinterest.svg"
										alt="social media logo"
									/>
								</div>

								<span class="spruchcard-share-svg-text4">Pinterest</span>
							</li>
							<li
								ref="share5"
								class="spruchcard-share-cointainer"
								class:spruchcard-share-transition5={shareOpen && activeIndex == index}
							>
								<div
									on:click={() =>
										sharePopup(
											`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fperfekterspruch.de%2F${$page.params.slug}%2F%23${card.id}&title=PerfekterSpruch.de%20-%20Dein%20perfekter%20Spruch%20f%C3%BCr%20jeden%20Anlass&description=${card.text}&quote=${card.text}%20&hashtag=%23spr%C3%BCche`
										)}
								>
									<img
										class="spruchcard-share-svg"
										src="/svg/facebook.svg"
										alt="social media logo"
									/>
								</div>

								<span class="spruchcard-share-svg-text5">Facebook</span>
							</li>
						</ul>
					{/if}

					<span class="spruchcard-share-text-teilen">Teilen</span>
				</div>
				<button
					class="spruchcard-share-teilen-span"
					on:click={() =>
						downloadImage(
							`https://bilder.perfekterspruch.de/download/${card.image}.jpg`,
							`PerferkterSpruch ${card.id}.jpg`
						)}
				>
					<img
						class="spruchcard-share-teilen-download-svg"
						src="/svg/download1.svg"
						alt="download logo"
					/>

					<span class="spruchcard-share-text-teilen">Download</span>
				</button>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.lazyload {
		filter: blur(10px);
		transform: scale(1.03);
	}

	:global(.lazyloading) {
		filter: blur(10px);
		transform: scale(1.03);
	}

	:global(.lazyloaded) {
		filter: blur(0) !important;
		transform: scale(1) !important;
	}

	.spruchcard-copy-animation {
		position: absolute;
		top: -2.5vw;
		left: -0.25vw;
	}

	.main-text {
		width: 100%;
		height: 80%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		padding-bottom: 0.52vw;
	}
	.text-100 {
		height: 100% !important;
	}
	.text-center {
		justify-content: center;
	}
	.opacity-0 {
		opacity: 0 !important;
		pointer-events: none;
	}

	.spruchcard-share-teilen {
		position: relative;
		width: 100%;
		padding: 0 3vw;
		height: 20%;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		user-select: none;
		opacity: 0;
		transition: opacity 0.4s ease;
	}

	.spruchcard-share-teilen-span {
		position: relative;
		height: 2.6vw;
		width: 2.604vw;
		cursor: pointer;
		// font-size: 1vw;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		flex-direction: column;

		div {
			position: absolute;
			text-decoration: none;
			display: flex;
			justify-content: center;
			align-content: center;
			width: 2.604vw;
			height: 2.6vw;
		}
	}

	.spruchcard-share-text-teilen {
		position: relative;
		font-size: 0.6vw;
		text-decoration: none;
		backface-visibility: hidden;
	}

	.spruchcard-share-teilen-share-svg {
		width: 1.563vw;
		z-index: 10;
		margin-bottom: 0.15vw;
	}
	.spruchcard-share-teilen-download-svg {
		z-index: 10;
		width: 1.85vw;
	}

	.spruchcard-share-transition1 {
		opacity: 1 !important;
		pointer-events: all !important;
		transform: translateX(-8vw) !important;
	}

	.spruchcard-share-transition4 {
		opacity: 1 !important;
		pointer-events: all !important;
		transform: translateX(-5vw) !important;
	}

	.spruchcard-share-transition5 {
		opacity: 1 !important;
		pointer-events: all !important;
		transform: translateX(-2vw) !important;
	}

	.spruchcard-share-transition1 {
		opacity: 0;
		pointer-events: none;
	}

	.spruchcard-share-svg-text1,
	.spruchcard-share-svg-text2,
	.spruchcard-share-svg-text4,
	.spruchcard-share-svg-text5 {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 2.9vw;
		padding: 0.8vw 0.4vw;
		color: #ffff;
		font-size: 0.8vw;
		border-radius: 20px;
		pointer-events: none;
		opacity: 0;
		transition-property: transform, opacity;
		transition-duration: 0.2s;
		transition-timing-function: ease-in-out;
		transform: translateY(0.15vw);
	}
	.spruchcard-share-svg-text1 {
		background-color: #f6ab38;
	}

	.spruchcard-share-svg-text2 {
		background-color: #395976;
	}

	.spruchcard-share-svg-text4 {
		background-color: #d9242a;
	}
	.spruchcard-share-svg-text5 {
		background-color: #2e70ae;
	}

	.spruchcard-share-svg-text1::before,
	.spruchcard-share-svg-text2::before,
	.spruchcard-share-svg-text4::before,
	.spruchcard-share-svg-text5::before {
		content: '';
		position: absolute;
		width: 0;
		height: 0;
		border-left: 0.313vw solid transparent;
		border-right: 0.313vw solid transparent;
		margin-bottom: 2vw;
	}
	.spruchcard-share-svg-text1::before {
		border-bottom: 0.625vw solid #f6ab38;
	}
	.spruchcard-share-svg-text2::before {
		border-bottom: 0.625vw solid #395976;
	}
	.spruchcard-share-svg-text4::before {
		border-bottom: 0.625vw solid #d9242a;
	}
	.spruchcard-share-svg-text5::before {
		border-bottom: 0.625vw solid #2e70ae;
	}

	.spruchcard-share-cointainer:hover .spruchcard-share-svg-text1,
	.spruchcard-share-cointainer:hover .spruchcard-share-svg-text2,
	.spruchcard-share-cointainer:hover .spruchcard-share-svg-text4,
	.spruchcard-share-cointainer:hover .spruchcard-share-svg-text5 {
		opacity: 1;
		transform: translateY(0);
	}

	.spruchcard-share-transition1 {
		transition-property: transform, opacity;
		transition-duration: 0.3s;
		transition-timing-function: ease-in-out;
		transition-delay: 0.25s;
	}

	.spruchcard-share-transition4 {
		transition-property: transform, opacity;
		transition-duration: 0.3s;
		transition-timing-function: ease-in-out;
		transition-delay: 0.1s;
	}
	.spruchcard-share-transition5 {
		transition-property: transform, opacity;
		transition-duration: 0.3s;
		transition-timing-function: ease-in-out;
		transition-delay: 0.05s;
	}

	.spruchcard-share-all {
		position: absolute;
		right: 15px; // 0
		top: 0;
		height: 100%;
		width: 2.604vw;
		padding: 0;
		display: flex;
		justify-content: center;
		align-content: center;
		transform: translateX(0);
		will-change: transform;
	}

	.spruchcard-share-cointainer {
		position: absolute;
		opacity: 0;
		pointer-events: none;
		height: 2.6vw;
		width: 2.604vw;
		display: flex;
		flex-wrap: nowrap;
		justify-content: center;
		align-content: center;
		// margin: 0 0vw;
		transition-property: transform, opacity;
		transition-duration: 0.3s;
		transition-timing-function: ease-in-out;
	}

	.spruchcard-share-svg {
		height: 2vw;
		width: 2vw;
		margin-top: 0.35vw;
		position: absolute;
	}
	.spruchcard-share-svg:hover {
		height: 2.12vw;
		width: 2.12vw;
		margin-top: 0.18vw;
	}

	.spruchcard-maindiv {
		margin: 1vw 1vw 1vw 1vw;
	}

	.spruchcard-firstcard {
		width: 20.833vw; //400px
		height: 44.271vw; //900px
		position: relative;
		border-radius: 10px;
		box-shadow: 0.104vw 0.104vw 0.156vw rgba(0, 0, 0, 0.3),
			-0.104vw 0.104vw 0.156vw rgba(0, 0, 0, 0.3);
		backface-visibility: hidden;
		will-change: transform;
		transition-property: transform, box-shadow;
		transition-duration: 0.15s;
		transition-timing-function: linear;
	}
	@media (hover: hover) and (pointer: fine) {
		// .spruchcard-firstcard:hover {
		// 	transform: translateY(-0.1vw);
		// 	box-shadow: 0.156vw 0.156vw 0.208vw rgba(0, 0, 0, 0.3),
		// 		-0.156vw 0.156vw 0.208vw rgba(0, 0, 0, 0.3);
		// }
		.spruchcard-firstcard:hover .spruchcard-share-teilen {
			opacity: 1;
		}
	}
	.spruchcard-image-container {
		width: 100%;
		height: 59%; //500px // 26.042vw
		user-select: none;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		overflow: hidden;
	}
	.spruchcard-image {
		width: 100%;
		height: 100%;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		object-fit: cover;
		transition-property: filter, transform;
		transition-duration: 0.3s;
		transition-timing-function: ease-out;
	}

	.spruchcard-text-container {
		width: 100%;
		height: 41%;
		// height: 15.396vw; //400px
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding: 0.6vw 0.52vw;
	}

	.spruchcard-text::selection {
		background-color: $main-color;
		color: #ffff;
	}
	.spruchcard-text {
		// font-family: 'futura', sans-serif;
		width: 100%;
		line-height: 1.45;
		font-size: 1.2vw;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		height: 90%;
	}

	.spruchcard-text-span {
		position: relative;
		width: 100%;
		height: 10%;
		font-size: 1vw;
		text-align: center;
		font-style: italic;
		display: block;
	}
	.spruchcard-text-span::selection {
		background-color: $main-color;
		color: #ffff;
	}
	.spruchcard-copy-container {
		position: relative;
		height: 2.6vw;
		width: 2.604vw;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		cursor: pointer;
		user-select: none;
		z-index: 10;
	}
	.spruchcard-copy-button {
		position: relative;
		background: none;
		color: inherit;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
		outline: inherit;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.spruchcard-copy-svg {
		width: 1.35vw;
		transition: width 0.1s ease;
		will-change: width;
		margin-bottom: 0.2vw;
	}

	.spruchcard-copy-span {
		padding-top: 0.1vw;
		font-size: 0.6vw;
	}

	@media screen and (min-width: 1921px) {
		.spruchcard-share-teilen {
			height: 54px;
		}
		.spruchcard-share-teilen-span {
			height: 49.92px;
			width: 50px;
			font-size: 19.2px;
		}
		.spruchcard-share-text-teilen {
			font-size: 11.52px;
		}

		.spruchcard-share-teilen-download-svg {
			width: 38.4px;
		}
		.spruchcard-share-teilen-share-svg {
			width: 30.01px;
			z-index: 10;
		}

		.spruchcard-share-transition1 {
			transform: translateX(-153.6px) !important;
		}

		.spruchcard-share-transition4 {
			transform: translateX(-96px) !important;
		}

		.spruchcard-share-transition5 {
			transform: translateX(-38.4px) !important;
		}

		.spruchcard-share-svg-text1,
		.spruchcard-share-svg-text2,
		.spruchcard-share-svg-text4,
		.spruchcard-share-svg-text5 {
			margin-top: 55.68px;
			padding: 15.36px 7.68px;
			color: #ffff;
			font-size: 15.36px;
			border-radius: 20px;
			transform: translateY(2.88px);
		}

		.spruchcard-share-svg-text1::before,
		.spruchcard-share-svg-text2::before,
		.spruchcard-share-svg-text4::before,
		.spruchcard-share-svg-text5::before {
			border-left: 6.01px solid transparent;
			border-right: 6.01px solid transparent;
			margin-bottom: 38.4px;
		}

		.spruchcard-share-svg-text1::before {
			border-bottom: 12px solid #f6ab38;
		}
		.spruchcard-share-svg-text2::before {
			border-bottom: 12px solid #395976;
		}
		.spruchcard-share-svg-text4::before {
			border-bottom: 12px solid #d9242a;
		}
		.spruchcard-share-svg-text5::before {
			border-bottom: 12px solid #2e70ae;
		}

		.spruchcard-share-all {
			width: 49.997px;
		}

		.spruchcard-share-cointainer {
			height: 49.92px;
			width: 49.997px;
		}

		.spruchcard-share-svg {
			height: 38.4px;
			width: 38.4px;
			margin-top: 4.8px;
		}
		.spruchcard-share-svg:hover {
			height: 40.704px;
			width: 40.704px;
			margin-top: 3.456px;
		}

		.spruchcard-firstcard {
			width: 400px; //20.833vw
			height: 850px; //46.875vw
		}
		// @media (hover: hover) and (pointer: fine) {
		// 	.spruchcard-firstcard:hover {
		// 		transform: translateY(-1.92px);
		// 	}
		// }
		.spruchcard-image-container {
			width: 100%;
			height: 59%; //500px // 500px
		}
		.spruchcard-text-container {
			width: 100%;
			height: 41%; //400px // 295.6px
			border-bottom-left-radius: 10px;
			border-bottom-right-radius: 10px;
		}
		.spruchcard-text {
			font-size: 23.04px;
		}
		.spruchcard-text-span {
			height: 30.01px;
			font-size: 19.2px;
		}
		.spruchcard-copy-svg {
			width: 24.998px;
		}

		.spruchcard-copy-span {
			padding-top: 1.92px;
			font-size: 11.52px;
		}
	}

	@media screen and (max-width: 480px) {
		.spruchcard-maindiv {
			grid-template-columns: 1fr;
			grid-gap: 45px 0;
			margin-top: 0;
			margin: 0;
			margin-bottom: 6vw;
			// margin: 4vw 0;
		}
		.main-text {
			padding-bottom: 8vw;
		}
		.spruchcard-copy-animation {
			top: -10vw;
			left: 1vw;
		}
		.spruchcard-firstcard {
			width: 90vw; //400px
			height: auto; //900px 175vw
			position: relative;
			border-radius: 10px;
			backface-visibility: hidden;
			will-change: unset;
			transition-property: unset;
			transition-duration: unset;
			transition-timing-function: unset;
			box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3), -2px 2px 3px rgba(0, 0, 0, 0.3);
		}

		.spruchcard-image-container {
			width: 100%;
			height: 112.5vw; //500px
			user-select: none;
		}
		.spruchcard-text-container {
			width: 100%;
			height: auto; //400px 51.2vw
			border-bottom-left-radius: 10px;
			border-bottom-right-radius: 10px;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;
			padding: 4vw 2vw;
		}
		.spruchcard-text {
			line-height: 1.45;
			font-size: $font-card-mobile-normal-text;
		}
		.spruchcard-text-span {
			position: relative;
			bottom: 0;
			font-size: 4vw;
			text-align: center;
			font-style: italic;
			display: block;
			margin-top: 6vw;
		}
		.spruchcard-copy-container {
			height: 9vw;
			width: 14vw;
			cursor: none;
			z-index: 10;
		}
		.spruchcard-copy-svg {
			width: 5.5vw;
			margin-bottom: 0.8vw;
			transition: width 0.1s ease;
			will-change: width;
		}

		.spruchcard-copy-span {
			padding-top: 0.1vw;
			font-size: $font-card-mobile-small-text;
		}

		.spruchcard-share-teilen {
			height: 11vw;
			width: 100%;
			opacity: 1;
		}
		.spruchcard-share-teilen-span {
			height: 9vw;
			width: 14vw;
			cursor: none;

			a {
				width: 7vw;
				height: 7vw;
			}
		}
		.spruchcard-share-text-teilen {
			position: relative;
			font-size: $font-card-mobile-small-text;
		}
		.spruchcard-share-teilen-share-svg {
			width: 6vw;
			z-index: 10;
			margin-bottom: 0.8vw;
		}
		.spruchcard-share-teilen-download-svg {
			width: 7.5vw;
			z-index: 10;
		}
		.spruchcard-share-cointainer {
			height: 8vw;
			width: 8vw;
		}

		.spruchcard-share-svg {
			height: 8vw;
			width: 8vw;
			margin-top: 1vw;
		}

		.spruchcard-share-transition1 {
			opacity: 1 !important;
			pointer-events: all !important;
			transform: translateX(-27vw) !important;
		}

		.spruchcard-share-transition4 {
			opacity: 1 !important;
			pointer-events: all !important;
			transform: translateX(-18.5vw) !important;
		}

		.spruchcard-share-transition5 {
			opacity: 1 !important;
			pointer-events: all !important;
			transform: translateX(-10vw) !important;
		}
	}

	@media screen and (min-width: 480px) and (max-width: 1024px) {
		.spruchcard-maindiv {
			grid-template-columns: 1fr;
			grid-gap: 45px 0;
			margin-top: 0;
			padding: 0;
			padding-bottom: 4vw;
		}
		.main-text {
			padding-bottom: 5vw;
		}
		.spruchcard-copy-animation {
			top: -9vw;
			left: 5vw;
		}

		.spruchcard-firstcard {
			width: 47vw; //400px
			height: auto; //900px 175vw
			position: relative;
			border-radius: 10px;
			backface-visibility: hidden;
			will-change: unset;
			transition-property: unset;
			transition-duration: unset;
			transition-timing-function: unset;
			box-shadow: 1.75px 1.75px 2.75px rgba(0, 0, 0, 0.3), -1.75px 1.75px 2.75px rgba(0, 0, 0, 0.3);
		}

		// .mobile-right-margin {
		// 	margin-right: 5vw !important;
		// }

		.spruchcard-image-container {
			width: 100%;
			height: 59vw; //500px
			user-select: none;
		}
		.spruchcard-text-container {
			width: 100%;
			height: auto; //400px 51.2vw
			border-bottom-left-radius: 10px;
			border-bottom-right-radius: 10px;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;
			padding: 4vw 2vw;
		}
		.spruchcard-text {
			line-height: 1.45;
			font-size: 3vw;
		}
		.spruchcard-text-span {
			position: relative;
			bottom: 0;
			font-size: 3vw;
			text-align: center;
			font-style: italic;
			display: block;
			margin-top: 5vw;
		}
		.spruchcard-copy-container {
			height: 9vw;
			width: 14vw;
			cursor: none;
			z-index: 10;
		}
		.spruchcard-copy-svg {
			width: 3vw;
			margin-bottom: 0.8vw;
			transition: width 0.1s ease;
			will-change: width;
		}

		.spruchcard-copy-span {
			padding-top: 0.1vw;
			font-size: 1.8vw;
		}

		.spruchcard-share-teilen {
			height: 11vw;
			opacity: 1;
		}
		.spruchcard-share-teilen-span {
			height: 9vw;
			width: 11vw;
			cursor: none;
			margin-right: 2vw;

			a {
				width: 7vw;
				height: 7vw;
			}
		}
		.spruchcard-share-text-teilen {
			position: relative;
			font-size: 1.8vw;
		}
		.spruchcard-share-teilen-share-svg {
			width: 3.5vw;
			z-index: 10;
			margin-bottom: 0.8vw;
		}
		.spruchcard-share-teilen-download-svg {
			width: 5vw;
			z-index: 10;
		}
		.spruchcard-share-cointainer {
			height: 6.5vw;
			width: 6.5vw;
		}

		.spruchcard-share-svg {
			height: 6.5vw;
			width: 6.5vw;
			margin-top: 1vw;
		}

		.spruchcard-share-transition1 {
			opacity: 1 !important;
			pointer-events: all !important;
			transform: translateX(-38vw) !important;
		}

		.spruchcard-share-transition4 {
			opacity: 1 !important;
			pointer-events: all !important;
			transform: translateX(-27vw) !important;
		}

		.spruchcard-share-transition5 {
			opacity: 1 !important;
			pointer-events: all !important;
			transform: translateX(-16vw) !important;
		}
	}
</style>
