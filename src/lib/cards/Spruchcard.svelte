<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	import 'lazysizes';

	// redeploy

	export let userIsMobile;
	export let card;
	export let index;

	let shareOpen = false;
	let activeIndex = undefined;

	const downloadCount = (id, button) => {
		if (window.location.hostname.includes('perfekterspruch')) {
			fetch(
				'https://8xfm8zzg6c.execute-api.eu-central-1.amazonaws.com/dev' + '/putdownloads/' + id,
				{
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						site: $page.params.slug,
						sitebutton: button
					})
				}
			);
		}
	};
	const downloadCountDate = (id, index, button) => {
		if (window.location.hostname.includes('perfekterspruch')) {
			const date = new Date();
			const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
			const ISODate = date.toISOString().substring(0, 10);
			const ISOWeekDay = days[date.getDay()];
			fetch('https://8xfm8zzg6c.execute-api.eu-central-1.amazonaws.com/dev' + '/putdownloadsdate', {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					site: $page.params.slug,
					id: id + '/' + ISODate,
					id2: id,
					pos: index + 1,
					isodate: ISODate,
					isoweekday: ISOWeekDay,
					sitebutton: button,
					alldatakey: 'alldata'
				})
			});
		}
	};
	const changeTextSize = () => {
		if (
			$page.params.slug == 'geburtstagswuensche-freundin' ||
			$page.params.slug == 'geburtstagswuensche-fuer-frauen'
		) {
			const spruchcardText = document.getElementsByClassName('spruchcard-text')[index];
			const spruchcardtextcontainer = document.getElementsByClassName('spruchcard-text-container')[
				index
			];
			if (spruchcardtextcontainer.scrollHeight > spruchcardtextcontainer.clientHeight) {
				spruchcardText.style.fontSize = '19.5px';
			}
		}
	};

	const copyCardText = (index) => {
		const button = document.getElementsByClassName('spruchcard-copy-copied')[index];
		const copyText = document
			.getElementsByClassName('spruchcard-text-container')
			[index].innerText.slice(0, -18)
			.trim();

		navigator.clipboard.writeText(copyText);

		button.classList.add('activecopie');
		setTimeout(function () {
			button.classList.remove('activecopie');
		}, 1500);
	};

	async function openShare(index, text, image, id) {
		// navigator.canShare

		const cardTitle = window.document.title;
		const cardUrl = window.document.location.href + '#' + id;
		const cardText = text;

		// https://benkaiser.dev/sharing-images-using-the-web-share-api/
		// const response = await fetch(
		// 	`https://res.cloudinary.com/dd79nq7sg/image/upload/f_webp%2Cq_auto%2Cw_972/psimages/${image}.jpg`
		// );

		const response = await fetch(`https://bilder.perfekterspruch.de/download/${card.image}.jpg`);
		const blob = await response.blob();

		const filesArray = new File([blob], `PerferkterSpruch${id}.jpg`, { type: blob.type });

		const shareData = {
			title: cardTitle,
			url: cardUrl,
			text: cardText,
			files: [filesArray]
		};

		// && userIsMobile

		if (navigator.canShare(shareData) && userIsMobile) {
			try {
				await navigator.share(shareData);
			} catch (err) {
				if (err.name !== 'AbortError') {
					console.error('testest', err.name, err.message);
				}
			}
		} else {
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

		<div class="spruchcard-share-teilen">
			<div
				class="spruchcard-share-teilen-span"
				on:click={() => openShare(index, card.text, card.image, card.id)}
				on:click={() => downloadCount(card.id, 'sharebutton')}
				on:click={() => downloadCountDate(card.id, index, 'sharebutton')}
			>
				<img
					class="spruchcard-share-teilen-share-svg"
					src="/svg/share.svg"
					alt="social media logo"
				/>
				<ul class="spruchcard-share-all">
					{#if !userIsMobile}
						<li
							class="spruchcard-share-cointainer"
							class:spruchcard-share-transition1={shareOpen && activeIndex == index}
							on:click={() =>
								cardDrucken(`https://bilder.perfekterspruch.de/download/${card.image}.jpg`)}
							on:click={() => downloadCount(card.id, 'drucken')}
							on:click={() => downloadCountDate(card.id, index, 'drucken')}
						>
							<img class="spruchcard-share-svg" src="/svg/printer.svg" alt="printer logo" />
							<span class="spruchcard-share-svg-text1">Drucken</span>
						</li>
					{/if}
					{#if userIsMobile}
						<li
							class="spruchcard-share-cointainer"
							class:spruchcard-share-transition1={shareOpen && activeIndex == index}
							on:click={() => downloadCount(card.id, 'whatsapp')}
							on:click={() => downloadCountDate(card.id, index, 'whatsapp')}
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
						on:click={() => downloadCount(card.id, 'pinterest')}
						on:click={() => downloadCountDate(card.id, index, 'pinterest')}
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
							<img class="spruchcard-share-svg" src="/svg/pinterest.svg" alt="social media logo" />
						</div>

						<span class="spruchcard-share-svg-text4">Pinterest</span>
					</li>
					<li
						ref="share5"
						class="spruchcard-share-cointainer"
						class:spruchcard-share-transition5={shareOpen && activeIndex == index}
						on:click={() => downloadCount(card.id, 'facebook')}
						on:click={() => downloadCountDate(card.id, index, 'facebook')}
					>
						<div
							on:click={() =>
								sharePopup(
									`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fperfekterspruch.de%2F${$page.params.slug}%2F%23${card.id}&title=PerfekterSpruch.de%20-%20Dein%20perfekter%20Spruch%20f%C3%BCr%20jeden%20Anlass&description=${card.text}&quote=${card.text}%20&hashtag=%23spr%C3%BCche`
								)}
						>
							<img class="spruchcard-share-svg" src="/svg/facebook.svg" alt="social media logo" />
						</div>

						<span class="spruchcard-share-svg-text5">Facebook</span>
					</li>
				</ul>
				<span class="spruchcard-share-text-teilen">Teilen</span>
			</div>
			<button
				class="spruchcard-share-teilen-span"
				on:click={() => downloadCount(card.id, 'downloads')}
				on:click={() => downloadCountDate(card.id, index, 'downloads')}
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

		<div class="spruchcard-text-container">
			<p class="spruchcard-text">
				{card.text}
			</p>
			<div
				class="spruchcard-copy-container"
				on:click={() => copyCardText(index)}
				on:click={() => downloadCount(card.id, 'kopies')}
				on:click={() => downloadCountDate(card.id, index, 'kopies')}
			>
				<button class="spruchcard-copy-button">
					<div class="spruchcard-copy-copied">kopiert</div>
					<img class="spruchcard-copy-svg" src="/svg/copy.svg" alt="copy" />
					<span class="spruchcard-copy-span">Kopieren</span>
				</button>
			</div>
			{#if card.author}
				<span class="spruchcard-text-span">{card.author}</span>
			{/if}
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

	.spruchcard-share-teilen {
		position: relative;
		height: 2.813vw;
		display: flex;
		justify-content: flex-end;
		align-items: flex-start;
		user-select: none;
	}

	.spruchcard-share-teilen-span {
		position: relative;
		height: 2.6vw;
		width: 2.604vw;
		cursor: pointer;
		// font-size: 1vw;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 0.45vw 0.35vw 0;

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
		position: absolute;
		bottom: -0.1vw;
		font-size: 0.6vw;
		text-decoration: none;
		// color: black;
		backface-visibility: hidden;
	}

	.spruchcard-share-teilen-share-svg {
		width: 1.563vw;
		z-index: 10;
	}
	.spruchcard-share-teilen-download-svg {
		width: 2vw;
		z-index: 10;
	}

	.spruchcard-share-transition1 {
		opacity: 1 !important;
		pointer-events: all !important;
		transform: translateX(-12vw) !important;
	}

	.spruchcard-share-transition4 {
		opacity: 1 !important;
		pointer-events: all !important;
		transform: translateX(-8vw) !important;
	}

	.spruchcard-share-transition5 {
		opacity: 1 !important;
		pointer-events: all !important;
		transform: translateX(-4vw) !important;
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
		// // height: auto;
		// // min-height: 100vh;
		// width: 100%;
		// // margin-top: 10vh;
		padding: 1vw 1vw 1vw 1vw;
	}

	.spruchcard-firstcard {
		width: 20.833vw; //400px
		height: 44.271vw; //900px
		position: relative;
		border-radius: 10px;
		// box-shadow: 0.104vw 0.156vw 0.208vw rgba(0, 0, 0, 0.3),
		// 	-0.104vw 0.156vw 0.208vw rgba(0, 0, 0, 0.3);
		// box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3), -2px 2px 3px rgba(0, 0, 0, 0.3);
		box-shadow: 0.104vw 0.104vw 0.156vw rgba(0, 0, 0, 0.3),
			-0.104vw 0.104vw 0.156vw rgba(0, 0, 0, 0.3);
		backface-visibility: hidden;
		will-change: transform;
		transition-property: transform, box-shadow;
		transition-duration: 0.15s;
		transition-timing-function: linear;

		// &:hover {
		// 	transform: translateY(-0.1vw);
		// 	// box-shadow: 0.156vw 0.208vw 0.26vw 0 rgba(0, 0, 0, 0.3),
		// 	// 	-0.156vw 0.208vw 0.26vw 0 rgba(0, 0, 0, 0.3);
		// 	// box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.3), -3px 3px 4px rgba(0, 0, 0, 0.3);
		// 	box-shadow: 0.156vw 0.156vw 0.208vw rgba(0, 0, 0, 0.3),
		// 		-0.156vw 0.156vw 0.208vw rgba(0, 0, 0, 0.3);
		// }
	}
	@media (hover: hover) and (pointer: fine) {
		.spruchcard-firstcard:hover {
			transform: translateY(-0.1vw);
			box-shadow: 0.156vw 0.156vw 0.208vw rgba(0, 0, 0, 0.3),
				-0.156vw 0.156vw 0.208vw rgba(0, 0, 0, 0.3);
		}
	}
	.spruchcard-image-container {
		width: 100%;
		height: 26.042vw; //500px
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

		// filter: blur(0);
		// transform: scale(1);
		transition-property: filter, transform;
		transition-duration: 0.3s;
		transition-timing-function: ease-out;
	}
	// .spruchcard-image-opacity {
	// 	opacity: 1 !important;
	// }
	.spruchcard-text-container {
		width: 100%;
		height: 15.396vw; //400px
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		padding-bottom: 3.5vw;
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
		text-align: center;
		padding: 0.52vw 0.52vw;
	}

	.spruchcard-text-span {
		// font-family: 'futura', sans-serif;
		width: 100%;
		height: 1.563vw;
		position: absolute;
		bottom: 0;
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
		position: absolute;
		flex-direction: column;
		right: 0vw;
		bottom: 1vw;
		cursor: pointer;
		padding: 0.26vw;
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
		width: 1.3vw;
		transition: width 0.1s ease;
		will-change: width;
	}

	.spruchcard-copy-span {
		padding-top: 0.1vw;
		font-size: 0.6vw;
	}

	.spruchcard-copy-copied {
		position: absolute;
		padding: 0.4vw 0.45vw;
		top: -2.4vw;
		background-color: $main-color;
		border-radius: 20px;
		font-size: 0.8vw;
		color: #fff;
		opacity: 0;
		transition-property: opacity, transform;
		transition-duration: 0.2s;
		transition-timing-function: ease-out;
		will-change: top;
		pointer-events: none;
		transform: translateY(0.4vw);
	}
	.spruchcard-copy-copied:after {
		content: '';
		position: absolute;
		width: 0;
		height: 0;
		border-left: 0.313vw solid transparent;
		border-right: 0.313vw solid transparent;
		border-top: 0.625vw solid $main-color;
		bottom: -0.521vw;
		right: 1.3vw;
	}

	:global(.activecopie) {
		opacity: 1 !important;
		transform: translateY(0) !important;
	}

	@media screen and (min-width: 1920px) {
		.spruchcard-share-teilen {
			height: 54px;
		}
		.spruchcard-share-teilen-span {
			height: 49.92px;
			width: 50px;
			font-size: 19.2px;
			padding: 0 0.45vw 0.35vw 0;
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
			transform: translateX(-230.4px) !important;
		}

		.spruchcard-share-transition4 {
			transform: translateX(-153.6px) !important;
		}

		.spruchcard-share-transition5 {
			transform: translateX(-76.8px) !important;
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
		// .spruchcard-maindiv {

		// }

		.spruchcard-firstcard {
			width: 400px; //20.833vw
			height: 850px; //46.875vw
			// box-shadow: 2px 3px 4px 0 rgba(0, 0, 0, 0.3),
			//   -2px 3px 4px 0 rgba(0, 0, 0, 0.3);

			// &:hover {
			// 	transform: translateY(-1.92px);
			// 	// box-shadow: 3px 4px 5px 0 rgba(0, 0, 0, 0.3),
			// 	//   -3px 4px 5px 0 rgba(0, 0, 0, 0.3);
			// }
		}
		@media (hover: hover) and (pointer: fine) {
			.spruchcard-firstcard:hover {
				transform: translateY(-1.92px);
			}
		}
		.spruchcard-image-container {
			width: 100%;
			height: 500px; //500px
		}
		.spruchcard-text-container {
			width: 100%;
			height: 295.6px; //400px
			border-bottom-left-radius: 10px;
			border-bottom-right-radius: 10px;
			padding-bottom: 3.5vw;
		}
		.spruchcard-text {
			font-size: 23.04px;
			padding: 9.984px 9.984px;
		}
		.spruchcard-text-span {
			height: 30.01px;
			font-size: 19.2px;
		}
		.spruchcard-copy-container {
			bottom: 19.2px;
			padding: 0.26vw;
		}
		.spruchcard-copy-svg {
			width: 24.998px;
		}

		.spruchcard-copy-span {
			padding-top: 1.92px;
			font-size: 11.52px;
		}

		.spruchcard-copy-copied {
			padding: 7.68px 8.64px;
			top: -46.08px;
			transform: translateY(7.68px);
			font-size: 15.36px;
		}
		.spruchcard-copy-copied:after {
			border-left: 6.01px solid transparent;
			border-right: 6.01px solid transparent;
			border-top: 12px solid $main-color;
			bottom: -10.003px;
			right: 24.96px;
		}
	}

	@media screen and (max-width: 480px) {
		.spruchcard-maindiv {
			grid-template-columns: 1fr;
			grid-gap: 45px 0;
			margin-top: 0;
			padding: 0;
			padding-bottom: 6vw;
			// margin: 4vw 0;
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
		// .mobile-right-margin {
		// 	margin-right: 10vw !important;
		// }

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
			padding-bottom: 13vw;
			padding-top: 3vw;
		}
		.spruchcard-text {
			line-height: 1.45;
			font-size: $font-card-mobile-normal-text;
			padding: 2vw 2vw;
		}
		.spruchcard-text-span {
			height: 6vw;
			position: absolute;
			bottom: 0;
			font-size: 4vw;
			text-align: center;
			font-style: italic;
			display: block;
			padding-bottom: 1vw;
		}
		.spruchcard-copy-container {
			right: 1vw;
			bottom: 1.5vw;
			cursor: none;
			padding: 1vw;
			z-index: 10;
		}
		.spruchcard-copy-svg {
			width: 5vw;
			transition: width 0.1s ease;
			will-change: width;
		}

		.spruchcard-copy-span {
			padding-top: 0.1vw;
			font-size: $font-card-mobile-small-text;
		}

		.spruchcard-copy-copied {
			padding: 1.5vw 1.6vw;
			top: -8.5vw;
			border-radius: 20px;
			font-size: $font-card-mobile-small-text;
			opacity: 0;
			transform: translateY(2vw);
		}
		.spruchcard-copy-copied:after {
			border-left: 1vw solid transparent;
			border-right: 1vw solid transparent;
			border-top: 2vw solid $main-color;
			bottom: -1.8vw;
			right: 4.9vw;
		}

		.spruchcard-share-teilen {
			height: 11vw;
		}
		.spruchcard-share-teilen-span {
			height: 9vw;
			width: 14vw;
			cursor: none;
			padding: 0;
			margin-right: 2vw;

			a {
				width: 7vw;
				height: 7vw;
			}
		}
		.spruchcard-share-text-teilen {
			position: absolute;
			bottom: -2.7vw;
			font-size: $font-card-mobile-small-text;
		}
		.spruchcard-share-teilen-share-svg {
			width: 6.5vw;
			z-index: 10;
		}
		.spruchcard-share-teilen-download-svg {
			width: 8vw;
			z-index: 10;
		}
		// .spruchcard-share-download-link {
		// 	// width: 5vw;
		// 	height: 8vw;
		// }
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
			transform: translateX(-54vw) !important;
		}

		.spruchcard-share-transition4 {
			opacity: 1 !important;
			pointer-events: all !important;
			transform: translateX(-37vw) !important;
		}

		.spruchcard-share-transition5 {
			opacity: 1 !important;
			pointer-events: all !important;
			transform: translateX(-20vw) !important;
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
		.spruchcard-firstcard {
			width: 81vw; //400px
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
			height: 101.7vw; //500px
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
			padding-bottom: 13vw;
			padding-top: 3vw;
		}
		.spruchcard-text {
			line-height: 1.45;
			font-size: 4.5vw;
			padding: 2vw 2vw;
		}
		.spruchcard-text-span {
			height: 6vw;
			position: absolute;
			bottom: 0;
			font-size: 4.5vw;
			text-align: center;
			font-style: italic;
			display: block;
			padding-bottom: 1vw;
		}
		.spruchcard-copy-container {
			right: 1vw;
			bottom: 1.5vw;
			cursor: none;
			padding: 1vw;
			z-index: 10;
		}
		.spruchcard-copy-svg {
			width: 4vw;
			transition: width 0.1s ease;
			will-change: width;
		}

		.spruchcard-copy-span {
			padding-top: 0.1vw;
			font-size: 2.5vw;
		}

		.spruchcard-copy-copied {
			padding: 1.5vw 1.6vw;
			top: -8.5vw;
			border-radius: 20px;
			font-size: $font-card-mobile-small-text;
			opacity: 0;
			transform: translateY(2vw);
		}
		.spruchcard-copy-copied:after {
			border-left: 1vw solid transparent;
			border-right: 1vw solid transparent;
			border-top: 2vw solid $main-color;
			bottom: -1.8vw;
			right: 4.9vw;
		}

		.spruchcard-share-teilen {
			height: 11vw;
		}
		.spruchcard-share-teilen-span {
			height: 9vw;
			width: 11vw;
			cursor: none;
			padding: 0;
			margin-right: 2vw;

			a {
				width: 7vw;
				height: 7vw;
			}
		}
		.spruchcard-share-text-teilen {
			position: absolute;
			bottom: -2.7vw;
			font-size: 2.5vw;
		}
		.spruchcard-share-teilen-share-svg {
			width: 5.5vw;
			z-index: 10;
		}
		.spruchcard-share-teilen-download-svg {
			width: 7vw;
			z-index: 10;
		}
		// .spruchcard-share-download-link {
		// 	// width: 5vw;
		// 	height: 8vw;
		// }
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
