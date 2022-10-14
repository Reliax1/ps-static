export const load = async ({ fetch }) => {
	const res = await fetch(
		'https://8xfm8zzg6c.execute-api.eu-central-1.amazonaws.com/dev/spruchdestages'
	);
	const derSpruchPre = await res.json();
	// const derSpruch = derSpruchpre.Items;

	let derspruch = {
		id: null,
		image: null,
		text: null,
		author: null
	};
	derspruch.id = derSpruchPre.id2;
	derspruch.image = derSpruchPre.image;
	derspruch.text = derSpruchPre.spruch;
	derspruch.author = derSpruchPre.author;

	return {
		derspruch
	};
};
