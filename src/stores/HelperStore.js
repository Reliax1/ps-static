import { writable } from 'svelte/store';

const HelperStore = writable({
	mobileMenu: false,
	openconsent: false,
});

export default HelperStore;
