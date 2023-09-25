import { writable } from 'svelte/store';

const HelperStore = writable({
	isMobile: false,
	isTablet: false,
	mobileMenu: false,
	openconsent: false,
	mediaType: 'google',
	mobileMenuDown: false
});

export default HelperStore;
