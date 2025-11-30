import { defineType, defineField } from "sanity";

export const testimonialTypes = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "id",
      title: "ID",
      type: "number",
      description: "Unique identifier for the testimonial.",
      validation: (Rule) => Rule.required().integer().positive(),
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "job",
      title: "Job Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Testimonial Text",
      type: "text", // Using 'text' for longer, plain-text descriptions
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
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
    defineField({
      name: "bgColor",
      title: "Background Color",
      type: "string",
      description: "Tailwind CSS class for the testimonial card background.",
      options: {
        list: [
          { title: "Pink (FFF2FA)", value: "bg-[#FFF2FA]" },
          { title: "Light Purple (F8F6FF)", value: "bg-[#F8F6FF]" },
          { title: "Light Blue (F5FCFF)", value: "bg-[#F5FCFF]" },
          { title: "Light Yellow (FFFDF2)", value: "bg-[#FFFDF2]" },
        ],
      },
    }),
    defineField({
      name: "borderColor",
      title: "Border Color",
      type: "string",
      description: "Tailwind CSS class for the testimonial card border.",
      options: {
        list: [
          { title: "Pink (E71E91)", value: "border-[#E71E91]" },
          { title: "Purple (A798D4)", value: "border-[#A798D4]" },
          { title: "Blue (48AACA)", value: "border-[#48AACA]" },
          { title: "Yellow (C0A522)", value: "border-[#C0A522]" },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "job",
      media: "image",
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || "Untitled Testimonial",
        subtitle: subtitle,
        media: media,
      };
    },
  },
});
