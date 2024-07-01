import { config, fields, collection } from '@keystatic/core'

export default config({
	storage: {
		kind: 'local',
	},
	collections: {
		posts: collection({
			label: 'Posts',
			path: 'content/posts/*',
			slugField: 'title',
			format: { contentField: 'body' },
			schema: {
				title: fields.slug({ name: { label: 'Title' } }),
				publishedOn: fields.date({
					label: 'Published On',
					validation: { isRequired: true },
				}),
				body: fields.mdx({ label: 'Post Body' }),
			},
		}),
	},
})
