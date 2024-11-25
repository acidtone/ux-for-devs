// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'UX for Devs',
			sidebar: [
				{
					label: 'Visual Hierarchy',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Getting Started with CSS', slug: 'visual-hierarchy' },
						{ label: 'Typography', slug: 'visual-hierarchy/typography' },
						{ label: 'Web Colour', slug: 'visual-hierarchy/web-colour' },
						{ label: 'Repetition', slug: 'visual-hierarchy/repetition' },
						{ label: 'Space', slug: 'visual-hierarchy/space' },
						{ label: 'Grid Systems and Alignment', slug: 'visual-hierarchy/grid-systems' },
					],
				},
				{
					label: 'Exercises',
					autogenerate: { directory: 'exercises' },
				}
			],
		}),
	],
});
