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
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Getting Started with CSS', slug: 'guides' },
						{ label: 'Visual Hierarchy', slug: 'guides/visual-hierarchy' },
						{ label: 'Repetition', slug: 'guides/repetition' },
						{ label: 'Typography', slug: 'guides/typography' },
						{ label: 'Space', slug: 'guides/space' },
						{ label: 'Grid Systems and Alignment', slug: 'guides/grid-systems' },
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
