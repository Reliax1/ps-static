import { writable } from 'svelte/store';

const HelperStore = writable({
	isMobile: false,
	isTablet: false,
	mobileMenu: false,
	openconsent: false,
	mediaType: 'google',
	mobileMenuDown: false,
	marketing_consent: false,
	placeholder: {
		mobile_inline: 105,
		desktopsticky: 103,
		mobileBanner: 106,
		desktopInline: 104,
		tablet: 107,
		define1: null,
		define2: null
	}
});

export default HelperStore;
