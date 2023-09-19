import { browser } from '$app/environment';

export const load = async ({ fetch, url }) => {
	const response = await fetch(`../json/${url.pathname.slice(1, -1)}.json`);
	const spruchData = await response.json();

	let isMobile;

	if (browser) {
		isMobile = navigator.maxTouchPoints > 0;
	}

	return {
		isMobile,
		spruchData
	};
};
