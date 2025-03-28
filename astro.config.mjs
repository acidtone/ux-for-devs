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
						{ label: 'Introduction', slug: 'visual-hierarchy' },
						// { label: 'Typography', slug: 'visual-hierarchy/typography' },
						{
							label: 'Web Colour',
							items: [
								{ label: 'Resources', slug: 'visual-hierarchy/web-colour/resources' },
								{ label: 'Exercises', slug: 'visual-hierarchy/web-colour/exercises' }
							],
						},
						{
							label: 'Web Typography',
							items: [
								{ label: 'Resources', slug: 'visual-hierarchy/web-typography/resources' },
								{ label: 'Ex - Wiki Markup', slug: 'visual-hierarchy/web-typography/ex-wiki-markup' },
								{ label: 'Ex - Readable Text', slug: 'visual-hierarchy/web-typography/ex-readable-typography' },
								{ label: 'Ex - Font Families', slug: 'visual-hierarchy/web-typography/ex-font-families' }
							],
						}

						// { label: 'Repetition', slug: 'visual-hierarchy/repetition' },
						// { label: 'Space', slug: 'visual-hierarchy/space' },
						// { label: 'Grid Systems and Alignment', slug: 'visual-hierarchy/grid-systems' },
					],
				},
				// {
				// 	label: 'UI Conventions',
				// 	autogenerate: { directory: 'conventions' }
				// },
				// {
				// 	label: 'Exercises',
				// 	autogenerate: { directory: 'exercises' },
				// }
			],
		}),
	],
});
