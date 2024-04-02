// import { browser } from '$app/environment';

export const load = async ({ fetch, url }) => {
	const response = await fetch(`../json/${url.pathname.slice(1, -1)}.json`);
	const spruchData = await response.json();

	let final_array = [];

	for (let i = 0; i < spruchData.length; i++) {
		let new_name = spruchData[i].charAt(0).toUpperCase() + spruchData[i].slice(1);
		new_name = new_name
			.replace('.json', '')
			.replace('-fuer', '')
			.replace('-zum', '')
			.replace('-und', '')
			.replace('-an', '')
			.replace('-ueber', '')
			.replace('-zur', '')
			.replace('-die', '')
			.replace('-denn', '')
			.replace('-den', '')
			.replace('-der', '')
			.replace('-die', '')
			.replace('-dass', '')
			.replace('-das', '')
			.replace('-einen', '')
			.replace('-einer', '')
			.replace('-einem', '')
			.replace('-ein', '')
			.replace(/-/g, ' ');

		let new_link = spruchData[i].replace('.json', '');

		let new_object = {
			link: new_link,
			name: new_name
		};

		final_array.push(new_object);
	}

	return {
		final_array
	};
};
