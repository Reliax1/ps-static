import { writable } from 'svelte/store';

const HelperStore = writable({
	mobileMenu: false,
	openconsent: false,
	mediaType: null,
});

export default HelperStore;
