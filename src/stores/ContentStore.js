import { writable } from 'svelte/store';

const ContentStore = writable({
	all_header: [
		{
			headerName: 'Lebensweisheiten',
			data: [
				{
					name: 'Sprüche zum Nachdenken',
					link: 'sprueche-zum-nachdenken'
				},
				{
					name: 'Weise Sprüche',
					link: 'weise-sprueche'
				},
				{
					name: 'Kluge Sprüche',
					link: 'kluge-sprueche'
				},
				{
					name: 'Positive Sprüche',
					link: 'positive-sprueche'
				},
				{
					name: 'Erinnerungen Sprüche',
					link: 'erinnerungen-sprueche'
				},
				{
					name: 'Falsche Menschen Sprüche',
					link: 'falsche-menschen-sprueche'
				},
				{
					name: 'Loyalität Sprüche',
					link: 'loyalitaet-sprueche'
				},
				{
					name: 'Schicksal Sprüche',
					link: 'schicksal-sprueche'
				},
				{
					name: 'Falsche Freunde Sprüche',
					link: 'falsche-freunde-sprueche'
				},
				{
					name: 'Einsamkeit Sprüche',
					link: 'einsamkeit-sprueche'
				},
				{
					name: 'Respekt Sprüche',
					link: 'respekt-sprueche'
				},
				{
					name: 'Sprüche für die Seele',
					link: 'sprueche-fuer-die-seele'
				},
				{
					name: 'Freiheit Sprüche',
					link: 'freiheit-sprueche'
				},
				{
					name: 'Gedanken und Gefühle Sprüche',
					link: 'gedanken-gefuehle-sprueche'
				},
				{
					name: 'Ehrlichkeit Sprüche',
					link: 'ehrlichkeit-sprueche'
				},
				{
					name: 'Träume Sprüche',
					link: 'traeume-sprueche'
				}
			]
		},
		{
			headerName: 'Liebe',
			data: [
				{
					name: 'Beziehungssprüche',
					link: 'beziehungssprueche'
				},
				{
					name: 'Süße Sprüche',
					link: 'suesse-sprueche'
				},
				{
					name: 'Ich liebe dich Bilder',
					link: 'ich-liebe-dich-bilder'
				},
				{
					name: 'Valentinstag Sprüche',
					link: 'valentinstag-sprueche'
				},
				{
					name: 'Herz über Kopf Sprüche',
					link: 'herz-ueber-kopf-sprueche'
				},
				{
					name: 'Gute Nacht mein Schatz Sprüche',
					link: 'gute-nacht-mein-schatz'
				},
				{
					name: 'Sprüche über Liebe',
					link: 'sprueche-liebe'
				},
				{
					name: 'Hab dich lieb Bilder',
					link: 'hab-dich-lieb-bilder'
				}
			]
		},
		{
			headerName: 'Interessant',
			data: [
				{
					name: 'Coole Sprüche',
					link: 'coole-sprueche'
				},
				{
					name: 'Karma Sprüche',
					link: 'karma-sprueche'
				},
				{
					name: 'Traurige Sprüche',
					link: 'traurige-sprueche'
				},
				{
					name: 'Gute Sprüche',
					link: 'gute-sprueche'
				},
				{
					name: 'Abschiedssprüche',
					link: 'sprueche-zum-abschied'
				},
				{
					name: 'Lebensmotto',
					link: 'lebensmotto'
				},
				{
					name: 'Karneval Sprüche',
					link: 'karneval-sprueche'
				},
				{
					name: 'Enttäuschung Sprüche',
					link: 'enttaeuschung-sprueche'
				},
				{
					name: 'Vertrauen Sprüche',
					link: 'vertrauen-sprueche'
				},
				{
					name: 'Hoffnung Sprüche',
					link: 'hoffnung-sprueche'
				},
				{
					name: 'Sarkastische Sprüche',
					link: 'sarkastische-sprueche'
				},
				{
					name: 'Gute Laune Sprüche',
					link: 'gute-laune-sprueche'
				},
				{
					name: 'Spruch des Tages',
					link: 'spruch-des-tages'
				},
				{
					name: 'Zitate & Sprüche Generator',
					link: 'zitate-sprueche-generator'
				},
				{
					name: 'Schöne WhatsApp Freundschaft Sprüche',
					link: 'freundschaft-whatsapp-schoene-sprueche'
				},
				{
					name: 'Alles wird gut Sprüche',
					link: 'alles-wird-gut-sprueche'
				},
				{
					name: 'Zweideutige Sprüche',
					link: 'zweideutige-sprueche'
				},
				{
					name: 'Meer Sprüche',
					link: 'meer-sprueche'
				},
				{
					name: 'Humor Sprüche über das Leben',
					link: 'humor-sprueche-leben'
				},
				{
					name: 'Mama Sprüche',
					link: 'mama-sprueche'
				},
				{
					name: 'Danke sagen Sprüche',
					link: 'danke-sagen'
				},
				{
					name: 'Sprüche zum Lachen',
					link: 'lachen-sprueche'
				},
				{
					name: 'Ich hab Urlaub Sprüche',
					link: 'ich-hab-urlaub-sprueche'
				}
			]
		},
		{
			headerName: 'Tage',
			data: [
				{
					name: 'Gute Nacht Bilder',
					link: 'gute-nacht-bilder'
				},
				{
					name: 'Schönen Abend Bilder',
					link: 'schoenen-abend-bilder'
				},
				{
					name: ' Schönen Samstag Sprüche',
					link: 'schoenen-samstag'
				},
				{
					name: 'Schönen Tag Sprüche',
					link: 'schoenen-tag'
				},
				{
					name: 'Schönen Montag Sprüche',
					link: 'schoenen-montag'
				},
				{
					name: 'Schönes Wochenende Bilder',
					link: 'schoenes-wochenende-bilder'
				},
				{
					name: 'Witzige Wochenstart Sprüche',
					link: 'wochenstart-witzig'
				},
				{
					name: 'Sonntagsgrüße',
					link: 'sonntagsgruesse'
				},
				{
					name: 'Sonntag lustig',
					link: 'sonntag-lustig'
				},
				{
					name: 'Montagsgrüße',
					link: 'montagsgruesse'
				},
				{
					name: 'Dienstagsgrüße',
					link: 'dienstagsgruesse'
				},
				{
					name: 'Mittwochsgrüße',
					link: 'mittwochsgruesse'
				},
				{
					name: 'Donnerstagsgrüße',
					link: 'donnerstagsgruesse'
				},
				{
					name: 'Freitagsgrüße',
					link: 'freitagsgruesse'
				},
				{
					name: 'Samstagsgrüße',
					link: 'samstagsgruesse'
				},
				{
					name: 'Montag Bilder',
					link: 'montag-bilder'
				},
				{
					name: 'Dienstag Bilder',
					link: 'dienstag-bilder'
				},
				{
					name: 'Mittwoch Bilder',
					link: 'mittwoch-bilder'
				},
				{
					name: 'Donnerstag Bilder',
					link: 'donnerstag-bilder'
				},
				{
					name: 'Freitag Bilder',
					link: 'freitag-bilder'
				},
				{
					name: 'Samstag Bilder',
					link: 'samstag-bilder'
				},
				{
					name: 'Sonntag Bilder',
					link: 'sonntag-bilder'
				}
			]
		},
		{
			headerName: 'Geburtstag',
			data: [
				{
					name: 'Geburtstagsgrüße',
					link: 'geburtstagsgruesse'
				},
				{
					name: 'Geburtstagswünsche',
					link: 'geburtstagswuensche'
				},
				{
					name: 'Geburtstagssprüche',
					link: 'geburtstagssprueche'
				},
				{
					name: 'Geburtstagswünsche Freundin',
					link: 'geburtstagswuensche-mann'
				},
				{
					name: 'Geburtstagswünsche für Frauen',
					link: 'geburtstagswuensche-fuer-frauen'
				},
				{
					name: 'Geburtstagswünsche nachträglich',
					link: 'geburtstagswuensche-nachtraeglich'
				},
				{
					name: 'Geburtstagswuensche für Kinder',
					link: 'geburtstagswuensche-fuer-kinder'
				},
				{
					name: 'Geburtstagswünsche Kollegin',
					link: 'geburtstagswuensche-kollegin'
				},
				{
					name: 'Lustige Geburtstagssprüche',
					link: 'geburtstag-lustig-bilder'
				}
			],
			runderGb: [
				{
					name: 'Glückwünsche zum 18. Geburtstag',
					link: 'glueckwuensche-zum-18-geburtstag'
				},
				{
					name: 'Glückwünsche zum 20. Geburtstag',
					link: 'glueckwuensche-zum-20-geburtstag'
				},
				{
					name: 'Glückwünsche zum 30. Geburtstag',
					link: 'glueckwuensche-zum-30-geburtstag'
				},
				{
					name: 'Glückwünsche zum 40. Geburtstag',
					link: 'glueckwuensche-zum-40-geburtstag'
				},
				{
					name: 'Glückwünsche zum 50. Geburtstag',
					link: 'glueckwuensche-zum-50-geburtstag'
				},
				{
					name: 'Glückwünsche zum 60. Geburtstag',
					link: 'glueckwuensche-zum-60-geburtstag'
				},
				{
					name: 'Glückwünsche zum 70. Geburtstag',
					link: 'glueckwuensche-zum-70-geburtstag'
				}
			],
			nichtRunderGb: [
				{
					name: 'Glückwünsche zum 1. Geburtstag',
					link: 'glueckwuensche-zum-1-geburtstag'
				},
				{
					name: 'Glückwünsche zum 2. Geburtstag',
					link: 'glueckwuensche-zum-2-geburtstag'
				},
				{
					name: 'Glückwünsche zum 3. Geburtstag',
					link: 'glueckwuensche-zum-3-geburtstag'
				},
				{
					name: 'Glückwünsche zum 4. Geburtstag',
					link: 'glueckwuensche-zum-4-geburtstag'
				},
				{
					name: 'Glückwünsche zum 5. Geburtstag',
					link: 'glueckwuensche-zum-5-geburtstag'
				},
				{
					name: 'Glückwünsche zum 6. Geburtstag',
					link: 'glueckwuensche-zum-6-geburtstag'
				},
				{
					name: 'Glückwünsche zum 7. Geburtstag',
					link: 'glueckwuensche-zum-7-geburtstag'
				},
				{
					name: 'Glückwünsche zum 8. Geburtstag',
					link: 'glueckwuensche-zum-8-geburtstag'
				},
				{
					name: 'Glückwünsche zum 9. Geburtstag',
					link: 'glueckwuensche-zum-9-geburtstag'
				},
				{
					name: 'Glückwünsche zum 10. Geburtstag',
					link: 'glueckwuensche-zum-10-geburtstag'
				},
				{
					name: 'Glückwünsche zum 11. Geburtstag',
					link: 'glueckwuensche-zum-11-geburtstag'
				},
				{
					name: 'Glückwünsche zum 12. Geburtstag',
					link: 'glueckwuensche-zum-12-geburtstag'
				},
				{
					name: 'Glückwünsche zum 13. Geburtstag',
					link: 'glueckwuensche-zum-13-geburtstag'
				},
				{
					name: 'Glückwünsche zum 14. Geburtstag',
					link: 'glueckwuensche-zum-14-geburtstag'
				},
				{
					name: 'Glückwünsche zum 15. Geburtstag',
					link: 'glueckwuensche-zum-15-geburtstag'
				},
				{
					name: 'Glückwünsche zum 16. Geburtstag',
					link: 'glueckwuensche-zum-16-geburtstag'
				},
				{
					name: 'Glückwünsche zum 17. Geburtstag',
					link: 'glueckwuensche-zum-17-geburtstag'
				},
				{
					name: 'Glückwünsche zum 19. Geburtstag',
					link: 'glueckwuensche-zum-19-geburtstag'
				},
				{
					name: 'Glückwünsche zum 21. Geburtstag',
					link: 'glueckwuensche-zum-21-geburtstag'
				},
				{
					name: 'Glückwünsche zum 22. Geburtstag',
					link: 'glueckwuensche-zum-22-geburtstag'
				},
				{
					name: 'Glückwünsche zum 23. Geburtstag',
					link: 'glueckwuensche-zum-23-geburtstag'
				},
				{
					name: 'Glückwünsche zum 24. Geburtstag',
					link: 'glueckwuensche-zum-24-geburtstag'
				},
				{
					name: 'Glückwünsche zum 25. Geburtstag',
					link: 'glueckwuensche-zum-25-geburtstag'
				},
				{
					name: 'Glückwünsche zum 26. Geburtstag',
					link: 'glueckwuensche-zum-26-geburtstag'
				},
				{
					name: 'Glückwünsche zum 27. Geburtstag',
					link: 'glueckwuensche-zum-27-geburtstag'
				},
				{
					name: 'Glückwünsche zum 28. Geburtstag',
					link: 'glueckwuensche-zum-28-geburtstag'
				},
				{
					name: 'Glückwünsche zum 29. Geburtstag',
					link: 'glueckwuensche-zum-29-geburtstag'
				},
				{
					name: 'Glückwünsche zum 31. Geburtstag',
					link: 'glueckwuensche-zum-31-geburtstag'
				},
				{
					name: 'Glückwünsche zum 32. Geburtstag',
					link: 'glueckwuensche-zum-32-geburtstag'
				},
				{
					name: 'Glückwünsche zum 33. Geburtstag',
					link: 'glueckwuensche-zum-33-geburtstag'
				},
				{
					name: 'Glückwünsche zum 34. Geburtstag',
					link: 'glueckwuensche-zum-34-geburtstag'
				},
				{
					name: 'Glückwünsche zum 35. Geburtstag',
					link: 'glueckwuensche-zum-35-geburtstag'
				},
				{
					name: 'Glückwünsche zum 36. Geburtstag',
					link: 'glueckwuensche-zum-36-geburtstag'
				},
				{
					name: 'Glückwünsche zum 37. Geburtstag',
					link: 'glueckwuensche-zum-37-geburtstag'
				},
				{
					name: 'Glückwünsche zum 38. Geburtstag',
					link: 'glueckwuensche-zum-38-geburtstag'
				},
				{
					name: 'Glückwünsche zum 39. Geburtstag',
					link: 'glueckwuensche-zum-39-geburtstag'
				},
				{
					name: 'Glückwünsche zum 41. Geburtstag',
					link: 'glueckwuensche-zum-41-geburtstag'
				},
				{
					name: 'Glückwünsche zum 42. Geburtstag',
					link: 'glueckwuensche-zum-42-geburtstag'
				},
				{
					name: 'Glückwünsche zum 43. Geburtstag',
					link: 'glueckwuensche-zum-43-geburtstag'
				},
				{
					name: 'Glückwünsche zum 44. Geburtstag',
					link: 'glueckwuensche-zum-44-geburtstag'
				},
				{
					name: 'Glückwünsche zum 45. Geburtstag',
					link: 'glueckwuensche-zum-45-geburtstag'
				},
				{
					name: 'Glückwünsche zum 46. Geburtstag',
					link: 'glueckwuensche-zum-46-geburtstag'
				},
				{
					name: 'Glückwünsche zum 47. Geburtstag',
					link: 'glueckwuensche-zum-47-geburtstag'
				},
				{
					name: 'Glückwünsche zum 48. Geburtstag',
					link: 'glueckwuensche-zum-48-geburtstag'
				},
				{
					name: 'Glückwünsche zum 49. Geburtstag',
					link: 'glueckwuensche-zum-49-geburtstag'
				},
				{
					name: 'Glückwünsche zum 51. Geburtstag',
					link: 'glueckwuensche-zum-51-geburtstag'
				},
				{
					name: 'Glückwünsche zum 52. Geburtstag',
					link: 'glueckwuensche-zum-52-geburtstag'
				},
				{
					name: 'Glückwünsche zum 53. Geburtstag',
					link: 'glueckwuensche-zum-53-geburtstag'
				},
				{
					name: 'Glückwünsche zum 54. Geburtstag',
					link: 'glueckwuensche-zum-54-geburtstag'
				},
				{
					name: 'Glückwünsche zum 55. Geburtstag',
					link: 'glueckwuensche-zum-55-geburtstag'
				},
				{
					name: 'Glückwünsche zum 56. Geburtstag',
					link: 'glueckwuensche-zum-56-geburtstag'
				},
				{
					name: 'Glückwünsche zum 57. Geburtstag',
					link: 'glueckwuensche-zum-57-geburtstag'
				},
				{
					name: 'Glückwünsche zum 58. Geburtstag',
					link: 'glueckwuensche-zum-58-geburtstag'
				},
				{
					name: 'Glückwünsche zum 59. Geburtstag',
					link: 'glueckwuensche-zum-59-geburtstag'
				},
				{
					name: 'Glückwünsche zum 61. Geburtstag',
					link: 'glueckwuensche-zum-61-geburtstag'
				},
				{
					name: 'Glückwünsche zum 62. Geburtstag',
					link: 'glueckwuensche-zum-62-geburtstag'
				},
				{
					name: 'Glückwünsche zum 63. Geburtstag',
					link: 'glueckwuensche-zum-63-geburtstag'
				},
				{
					name: 'Glückwünsche zum 64. Geburtstag',
					link: 'glueckwuensche-zum-64-geburtstag'
				},
				{
					name: 'Glückwünsche zum 65. Geburtstag',
					link: 'glueckwuensche-zum-65-geburtstag'
				},
				{
					name: 'Glückwünsche zum 66. Geburtstag',
					link: 'glueckwuensche-zum-66-geburtstag'
				},
				{
					name: 'Glückwünsche zum 67. Geburtstag',
					link: 'glueckwuensche-zum-67-geburtstag'
				},
				{
					name: 'Glückwünsche zum 68. Geburtstag',
					link: 'glueckwuensche-zum-68-geburtstag'
				},
				{
					name: 'Glückwünsche zum 69. Geburtstag',
					link: 'glueckwuensche-zum-69-geburtstag'
				},
				{
					name: 'Glückwünsche zum 71. Geburtstag',
					link: 'glueckwuensche-zum-71-geburtstag'
				},
				{
					name: 'Glückwünsche zum 72. Geburtstag',
					link: 'glueckwuensche-zum-72-geburtstag'
				},
				{
					name: 'Glückwünsche zum 73. Geburtstag',
					link: 'glueckwuensche-zum-73-geburtstag'
				},
				{
					name: 'Glückwünsche zum 74. Geburtstag',
					link: 'glueckwuensche-zum-74-geburtstag'
				},
				{
					name: 'Glückwünsche zum 75. Geburtstag',
					link: 'glueckwuensche-zum-75-geburtstag'
				},
				{
					name: 'Glückwünsche zum 76. Geburtstag',
					link: 'glueckwuensche-zum-76-geburtstag'
				},
				{
					name: 'Glückwünsche zum 77. Geburtstag',
					link: 'glueckwuensche-zum-77-geburtstag'
				},
				{
					name: 'Glückwünsche zum 78. Geburtstag',
					link: 'glueckwuensche-zum-78-geburtstag'
				},
				{
					name: 'Glückwünsche zum 79. Geburtstag',
					link: 'glueckwuensche-zum-79-geburtstag'
				},
				{
					name: 'Glückwünsche zum 80. Geburtstag',
					link: 'glueckwuensche-zum-80-geburtstag'
				},
				{
					name: 'Glückwünsche zum 81. Geburtstag',
					link: 'glueckwuensche-zum-81-geburtstag'
				},
				{
					name: 'Glückwünsche zum 82. Geburtstag',
					link: 'glueckwuensche-zum-82-geburtstag'
				},
				{
					name: 'Glückwünsche zum 83. Geburtstag',
					link: 'glueckwuensche-zum-83-geburtstag'
				},
				{
					name: 'Glückwünsche zum 84. Geburtstag',
					link: 'glueckwuensche-zum-84-geburtstag'
				},
				{
					name: 'Glückwünsche zum 85. Geburtstag',
					link: 'glueckwuensche-zum-85-geburtstag'
				},
				{
					name: 'Glückwünsche zum 86. Geburtstag',
					link: 'glueckwuensche-zum-86-geburtstag'
				},
				{
					name: 'Glückwünsche zum 87. Geburtstag',
					link: 'glueckwuensche-zum-87-geburtstag'
				},
				{
					name: 'Glückwünsche zum 88. Geburtstag',
					link: 'glueckwuensche-zum-88-geburtstag'
				},
				{
					name: 'Glückwünsche zum 89. Geburtstag',
					link: 'glueckwuensche-zum-89-geburtstag'
				},
				{
					name: 'Glückwünsche zum 90. Geburtstag',
					link: 'glueckwuensche-zum-90-geburtstag'
				},
				{
					name: 'Glückwünsche zum 91. Geburtstag',
					link: 'glueckwuensche-zum-91-geburtstag'
				},
				{
					name: 'Glückwünsche zum 92. Geburtstag',
					link: 'glueckwuensche-zum-92-geburtstag'
				},
				{
					name: 'Glückwünsche zum 93. Geburtstag',
					link: 'glueckwuensche-zum-93-geburtstag'
				},
				{
					name: 'Glückwünsche zum 94. Geburtstag',
					link: 'glueckwuensche-zum-94-geburtstag'
				},
				{
					name: 'Glückwünsche zum 95. Geburtstag',
					link: 'glueckwuensche-zum-95-geburtstag'
				},
				{
					name: 'Glückwünsche zum 96. Geburtstag',
					link: 'glueckwuensche-zum-96-geburtstag'
				},
				{
					name: 'Glückwünsche zum 97. Geburtstag',
					link: 'glueckwuensche-zum-97-geburtstag'
				},
				{
					name: 'Glückwünsche zum 98. Geburtstag',
					link: 'glueckwuensche-zum-98-geburtstag'
				},
				{
					name: 'Glückwünsche zum 99. Geburtstag',
					link: 'glueckwuensche-zum-99-geburtstag'
				},
				{
					name: 'Glückwünsche zum 100. Geburtstag',
					link: 'glueckwuensche-zum-100-geburtstag'
				}
			]
		},
		{
			headerName: 'Wünsche',
			data: [
				{
					name: 'Gute Besserung Wünsche',
					link: 'gute-besserung-wuensche'
				},
				{
					name: 'Glückwünsche zur bestandenen Prüfung',
					link: 'glueckwuensche-zur-bestandenen-pruefung'
				},
				{
					name: 'Frohe Weihnachten Bilder',
					link: 'frohe-weihnachten-bilder'
				},
				{
					name: 'Ostergrüße Bilder',
					link: 'ostergruesse-bilder'
				},
				{
					name: 'Neujahrswünsche',
					link: 'neujahrswuensche'
				},
				{
					name: 'Glückwünsche zur Kommunion',
					link: 'glueckwuensche-zur-kommunion'
				},
				{
					name: 'Glückwünsche zur Konfirmation',
					link: 'glueckwuensche-zur-konfirmation'
				},
				{
					name: 'Jugendweihe Sprüche',
					link: 'jugendweihe-sprueche'
				},
				{
					name: 'Glückwünsche zum Hochzeitstag',
					link: 'glueckwuensche-zum-hochzeitstag'
				},
				{
					name: 'Glückwünsche hölzerne Hochzeit',
					link: 'hoelzerne-hochzeit-glueckwuensche-sprueche'
				},
				{
					name: 'Glückwünsche zur Rosenhochzeit',
					link: 'rosenhochzeit-sprueche'
				},
				{
					name: 'Glückwünsche zur Kristallhochzeit',
					link: 'kristallhochzeit-sprueche'
				},
				{
					name: 'Glückwünsche zur Porzellanhochzeit',
					link: 'porzellanhochzeit-sprueche'
				},
				{
					name: 'Glückwünsche zur Silberhochzeit',
					link: 'silberhochzeit-sprueche'
				},
				{
					name: 'Glückwünsche zur Perlenhochzeit',
					link: 'perlenhochzeit-sprueche'
				},
				{
					name: 'Glückwünsche zur Leinwandhochzeit',
					link: 'leinwandhochzeit-sprueche'
				},
				{
					name: 'Glückwünsche zur Rubinhochzeit',
					link: 'rubinhochzeit-sprueche'
				},
				{
					name: 'Glückwünsche zur Messinghochzeit',
					link: 'messinghochzeit-sprueche'
				},
				{
					name: 'Glückwünsche zur goldenen Hochzeit',
					link: 'glueckwuensche-zur-goldenen-hochzeit'
				},
				{
					name: 'Glückwünsche zur Diamantene Hochzeit',
					link: 'diamantene-hochzeit-sprueche'
				},
				{
					name: 'Glückwünsche zur Gnadenhochzeit',
					link: 'gnadenhochzeit-sprueche'
				},
				{
					name: 'Glückwünsche zur Eichenhochzeit',
					link: 'eichenhochzeit-sprueche'
				},
				{
					name: 'Glückwünsche zur Marmorne Hochzeit',
					link: 'marmorne-hochzeit-sprueche'
				},
				{
					name: 'Glückwünsche zur Himmelshochzeit',
					link: 'himmelshochzeit-sprueche'
				}
			]
		},
		{
			headerName: 'Guten Morgen',
			data: [
				{
					name: 'Guten Morgen Montag',
					link: 'guten-morgen-montag'
				},
				{
					name: 'Guten Morgen Dienstag',
					link: 'guten-morgen-dienstag'
				},
				{
					name: 'Guten Morgen Mittwoch',
					link: 'guten-morgen-mittwoch'
				},
				{
					name: 'Guten Morgen Donnerstag',
					link: 'guten-morgen-donnerstag'
				},
				{
					name: 'Guten Morgen Freitag',
					link: 'guten-morgen-freitag'
				},
				{
					name: 'Guten Morgen Samstag',
					link: 'guten-morgen-samstag'
				},
				{
					name: 'Guten Morgen Sonntag',
					link: 'guten-morgen-sonntag'
				},
				{
					name: 'Lustige Sprüche',
					link: 'guten-morgen-lustig'
				}
			]
		}
	]
});

export default ContentStore;
