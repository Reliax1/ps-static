// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

// https://kit.svelte.dev/docs/configuration#prerender
// https://github.com/sveltejs/kit/tree/master/packages/adapter-static#spa-mode   fallback: 'index.html',
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			crawl: true,
			entries: [
				'*',
				'/beziehungssprueche',
				'/coole-sprueche',
				'/geburtstagsgruesse',
				'/geburtstagssprueche',
				'/frohe-weihnachten-bilder',
				'/geburtstagswuensche-freundin',
				'/geburtstagswuensche-fuer-kinder',
				'/geburtstagswuensche-fuer-frauen',
				'/geburtstagswuensche-mann',
				'/geburtstagswuensche-nachtraeglich',
				'/glueckwuensche-zum-18-geburtstag',
				'/geburtstagswuensche',
				'/glueckwuensche-zum-20-geburtstag',
				'/glueckwuensche-zum-30-geburtstag',
				'/glueckwuensche-zum-40-geburtstag',
				'/glueckwuensche-zum-60-geburtstag',
				'/glueckwuensche-zum-50-geburtstag',
				'/glueckwuensche-zum-hochzeitstag',
				'/glueckwuensche-zum-70-geburtstag',
				'/glueckwuensche-zur-bestandenen-pruefung',
				'/glueckwuensche-zur-kommunion',
				'/gute-besserung-wuensche',
				'/glueckwuensche-zur-konfirmation',
				'/gute-nacht-bilder',
				'/guten-morgen-donnerstag',
				'/gute-sprueche',
				'/guten-morgen-lustig',
				'/guten-morgen-freitag',
				'/guten-morgen-dienstag',
				'/guten-morgen-mittwoch',
				'/guten-morgen-montag',
				'/guten-morgen-samstag',
				'/guten-morgen-sonntag',
				'/ich-liebe-dich-bilder',
				'/hoelzerne-hochzeit-glueckwuensche-sprueche',
				'/karneval-sprueche',
				'/karma-sprueche',
				'/kluge-sprueche',
				'/lebensmotto',
				'/mittwoch-bilder',
				'/neujahrswuensche',
				'/ostergruesse-bilder',
				'/schoenen-montag',
				'/schoenen-samstag',
				'/positive-sprueche',
				'/schoenen-tag',
				'/sonntag-lustig',
				'/sonntagsgruesse',
				'/schoenes-wochenende-bilder',
				'/sprueche-zum-abschied',
				'/sprueche-zum-nachdenken',
				'/valentinstag-sprueche',
				'/traurige-sprueche',
				'/suesse-sprueche',
				'/weise-sprueche',
				'/spruch-des-tages',
				'/zitate-sprueche-generator',
				'/schoenen-abend-bilder-fuer-die-seele',
				'/jugendweihe-sprueche',
				'/enttaeuschung-sprueche',
				'/vertrauen-sprueche',
				'/hoffnung-sprueche',
				'/sarkastische-sprueche',
				'/geburtstagswuensche-kollegin'
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
