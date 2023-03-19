// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

import fs from 'fs';

const pathArray = [];

fs.readdirSync('static/json').forEach((file) => {
	const newPath = '/' + file.replace('.json', '').trim();
	pathArray.push(newPath);
});

// https://kit.svelte.dev/docs/configuration#prerender
// https://github.com/sveltejs/kit/tree/master/packages/adapter-static#spa-mode   fallback: 'index.html'
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			crawl: true,
			entries: [
				...pathArray,
				'*',
				'/',
				'/alle-themen',
				'/spruch-des-tages',
				'/zitate-sprueche-generator',
				'/impressum',
				'/datenschutz',
				'/kontakt'
			]
		},
		trailingSlash: 'always'
	},

	preprocess: preprocess({
		scss: {
			prependData: "@import './src/styles/global.scss';"
		}
	})
};

export default config;
