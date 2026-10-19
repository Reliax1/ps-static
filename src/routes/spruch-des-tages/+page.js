import { browser } from '$app/environment';

export const load = async ({ fetch }) => {
	let derspruch = {
		id: null,
		image: null,
		text: null,
		author: null
	};

	try {
		const res = await fetch(
			'https://8xfm8zzg6c.execute-api.eu-central-1.amazonaws.com/dev/spruchdestages'
		);

		if (res.ok) {
			const text = await res.text();
			if (text && text.trim()) {
				const derSpruchPre = JSON.parse(text);
				derspruch = {
					id: derSpruchPre?.id2 ?? null,
					image: derSpruchPre?.image ?? null,
					text: derSpruchPre?.spruch ?? null,
					author: derSpruchPre?.author ?? null
				};
			}
		} else {
			console.warn(`AWS API meldete Status: ${res.status}`);
		}
	} catch (err) {
		console.error('Spruch des Tages konnte nicht geladen werden:', err);
	}

	let isMobile = false;
	if (browser && typeof window !== 'undefined') {
		isMobile = window.navigator.userAgent.includes('Mobile');
	}

	return {
		derspruch,
		isMobile
	};
};
