// schemas/playgroundImageTypes.ts
import { defineType, defineField } from "sanity";

export const playgroundImage = defineType({
  name: "playgroundImage",
  title: "Playground Image",
  type: "object",
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "altText",
      title: "Alt Text",
      type: "string",
      description:
        "Important for accessibility and SEO. Describe the image content.",
      validation: (Rule) => Rule.required(),
    }),
  ],
});

export const playgroundSection = defineType({
  name: "playgroundSection",
  title: "Playground Section",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Section Name",
      type: "string",
      description: 'e.g., "Playground Section 1", "Playground Section 2"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "playgroundImage" }],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
});
