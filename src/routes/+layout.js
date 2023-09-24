import { browser } from '$app/environment';
export const prerender = true;

export const load = async () => {
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
		isTablet
	};
};
