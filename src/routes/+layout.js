import { browser } from '$app/environment';
export const prerender = true;

export const load = async () => {
	let isMobile;

	if (browser) {
		isMobile = navigator.maxTouchPoints > 0;
	}

	return {
		isMobile
	};
};
