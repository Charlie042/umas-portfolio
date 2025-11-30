import { defineType, defineField } from "sanity";

export const skillBadgeTypes = defineType({
  name: "skillBadge",
  title: "Skill Badge",
  type: "document", // Or 'object' if you intend to embed these in another document without separate management
  fields: [
    defineField({
      name: "id",
      title: "ID",
      type: "number",
      description: "Unique identifier for the skill badge.",
      validation: (Rule) => Rule.required().integer().positive(),
    }),
    defineField({
      name: "name",
      title: "Skill Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "image", // Assuming the icon is an image, like an SVG or PNG
      description: "Icon associated with the skill.",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative text",
          type: "string",
          description: "Important for SEO and accessibility.",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "icon",
    },
    prepare({ title, media }) {
      return {
        title: title || "Untitled Skill Badge",
        media: media,
      };
    },
  },
});
