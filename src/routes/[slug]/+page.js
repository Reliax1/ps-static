import { browser } from '$app/environment';

export const load = async ({ fetch, url }) => {
	const response = await fetch(`../json/${url.pathname.slice(1, -1)}.json`);
	const spruchData = await response.json();

	let isMobile;
	let isTablet;

	if (browser) {
		const userAgent = navigator.userAgent.toLowerCase();
		isMobile = navigator.maxTouchPoints > 0;
		isTablet =
			/(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(
				userAgent
			);
	}

	return {
		isMobile,
		spruchData,
		isTablet
	};
};
