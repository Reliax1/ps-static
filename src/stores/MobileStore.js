import { writable } from 'svelte/store';

const MobileStore = writable({
	mobileMenu: false,
	userIsMobile: null
});

export default MobileStore;
