import { writable } from 'svelte/store';

const HelperStore = writable({
	consent: false,
	isMobile: false,
	isTablet: false,
	mobileMenu: false,
	openconsent: false,
	mediaType: 'google',
	mobileMenuDown: false,
	marketing_consent: false,
	placeholder: {
		mobile_inline: 130,
		desktopsticky: 103,
		mobileBanner: 106, // 106
		desktopInline: 147,
		tablet: 141,
		define1: null,
		define2: null
	}
});

export default HelperStore;
