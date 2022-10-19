import { writable } from 'svelte/store';

const MobileStore = writable({
	mobileMenu: false
});

export default MobileStore;
