<script>
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
</script>

<div class="LogoMain" on:click={() => buttonclick('LogoHome')}>
	<div class="LogoSecond">
		<a class="intern-link" href="/">
			<span class="LogoName">P</span>erfekter<span class="LogoName">S</span>pruch<span
				class="LogoName">.</span
			>
		</a>
	</div>
</div>

<style lang="scss">
	.LogoMain {
		position: relative;
		width: 100%;
		min-height: 14vw;
		height: 14vw;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0.5vw 0;
		z-index: 16;
		box-shadow: 0 4px 2px -2px rgb(0 0 0 / 30%);

		.intern-link {
			position: relative;
			text-decoration: none;
			color: inherit;
		}
	}
	.LogoSecond {
		font-size: 8vw;

		span {
			font-size: 10vw;
			font-weight: bold;
			color: $main-color;
		}
	}
	@media screen and (min-width: 480px) and (max-width: 1024px) {
		.LogoMain {
			min-height: 8vh;
			height: 8vh;
		}
		.LogoSecond {
			font-size: 7.2vw !important;

			span {
				font-size: 9vw !important;
			}
		}
	}
</style>
