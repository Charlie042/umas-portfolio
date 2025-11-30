import { defineType, defineField } from "sanity";

export const aboutMeTypes = defineType({
  name: "aboutMeBlock",
  title: "About Me Paragraph",
  type: "object",
  fields: [
    defineField({
      name: "id",
      title: "Paragraph ID",
      type: "number",
      description: "Unique identifier for this paragraph (for ordering).",
      validation: (Rule) => Rule.required().integer().positive(),
    }),
    defineField({
      name: "text",
      title: "Paragraph Content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
            annotations: [],
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "id",
      subtitle: "text",
    },
    prepare({ title, subtitle }) {
      const plainText = subtitle
        ? subtitle
            .map((block) => block.children.map((span) => span.text).join(""))
            .join("")
        : "No text";
      return {
        title: `Paragraph ${title}`,
        subtitle:
          plainText.length > 50
            ? plainText.substring(0, 50) + "..."
            : plainText,
      };
    },
  },
});

export const aboutMeContentType = defineType({
  name: "aboutMeContent",
  title: "About Me Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Section Title",
      type: "string",
      description: 'e.g., "About Me"',
      initialValue: "About Me",
    }),
    defineField({
      name: "paragraphs",
      title: "About Me Paragraphs",
      type: "array",
      of: [{ type: "aboutMeBlock" }],
      description: 'Ordered list of paragraphs for the "About Me" section.',
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title || "About Me Section",
      };
    },
  },
});
