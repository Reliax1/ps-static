// import { browser } from '$app/environment';

export const load = async ({ fetch, url }) => {
	const response = await fetch(`../json/${url.pathname.slice(1, -1)}.json`);
	const spruchData = await response.json();

	return {
		spruchData
	};
};
