import { defineField, defineType } from 'sanity'
import { formatISO } from 'date-fns'

export default defineType({
  name: 'term',
  title: 'Dictionary Term',
  type: 'document',
  fields: [
    defineField({
      name: 'term',
      title: 'Term',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'term',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image (optional)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'dictionaryCategories',
      title: 'Dictionary Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'dictionaryCategory' } }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => formatISO(new Date()),
    }),
    defineField({
      name: 'definition',
      title: 'Definition',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'term',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
})
