import { defineField, defineType } from "sanity";

// Corrected and expanded HomeCard definition (assuming it's an object type)
export const HomeCard = defineType({
  name: 'homeCard',
  title: 'Home Card',
  type: 'object', // Assuming it's an object type to be used within another document
  fields: [
    defineField({
      name: 'id',
      title: 'ID',
      type: 'number',
      description: 'A unique numerical identifier for the home card.',
    }),
    // Add any other fields that HomeCard is supposed to have here
  ],
});

// The new project schema definition
export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title", // Using 'title' as the main display field for Sanity documents
      title: "Project Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "id",
      title: "ID",
      type: "number",
      description: "A unique numerical identifier for the project.",
    }),
    defineField({
      name: "bgColor",
      title: "Background Color",
      type: "string", // Could also use 'color' type if you have the Sanity Color Input plugin installed
      description: "Hex code or CSS color name for the background.",
    }),
    defineField({
      name: "badgeColor",
      title: "Badge Color",
      type: "string",
      description: "Hex code or CSS color name for the badge.",
    }),
    defineField({
      name: "badgeYear",
      title: "Badge Year",
      type: "string",
    }),
    defineField({
      name: "badgeTitle",
      title: "Badge Title",
      type: "string",
    }),
    defineField({
      name: "cardTitle",
      title: "Card Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text", // 'text' is better for longer descriptions than 'string'
    }),
    defineField({
      name: "cardImage",
      title: "Card Image",
      type: "image",
      options: {
        hotspot: true, // Allows for cropping and positioning
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessibility.",
        },
      ],
    }),
    defineField({
      name: "percentSixty",
      title: "Percentage Sixty",
      type: "string",
      description: "A string representing a percentage, under the 60%",
    }),
    defineField({
      name: "percentForty",
      title: "Percentage Forty",
      type: "string",
      description: 'A string representing a percentage, under the 40%',
    }),
    defineField({
      name: "textColor",
      title: "Text Color",
      type: "string",
      description: "Optional: Hex code or CSS color name for text.",
    }),
    defineField({
      name: "titleColor",
      title: "Title Color",
      type: "string",
      description: "Optional: Hex code or CSS color name for title.",
    }),
    defineField({
      name: "percent1",
      title: "Percent 1",
      type: "string",
    }),
    defineField({
      name: "percent2",
      title: "Percent 2",
      type: "string",
    }),
    defineField({
      name: "idx",
      title: "Index",
      type: "number",
      description: "Numerical index for ordering or identification.",
    }),
    defineField({
      name: "range",
      title: "Range",
      type: "array",
      of: [{ type: "number" }],
      description: "An array containing two numbers, e.g., [0, 100].",
      validation: (Rule) =>
        Rule.length(2).error("Range must contain exactly two numbers."),
    }),
    defineField({
      name: "target",
      title: "Target Value",
      type: "number",
    }),
    defineField({
      name: "shapeColor",
      title: "Shape Color",
      type: "string",
      description: "Hex code or CSS color name for the shape.",
    }),
    defineField({
      name: "shapeColor2",
      title: "Shape Color 2",
      type: "string",
      description: "Hex code or CSS color name for the second shape color.",
    }),
    defineField({
      name: "shapeName",
      title: "Shape Name",
      type: "string",
    }),
    defineField({
      name: "shapeImage",
      title: "Shape Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
    }),
    defineField({
      name: "link",
      title: "External Link",
      type: "url",
      description: "Optional: A URL associated with the project.",
    }),
    defineField({
      name: "cursorColor",
      title: "Cursor Color",
      type: "string",
      description: "Hex code or CSS color name for the cursor.",
    }),
    defineField({
      name: "comingSoon",
      title: "Coming Soon",
      type: "boolean",
      description: "Set to true if this project is not yet publicly available.",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Testimonial Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "id",
      title: "ID",
      type: "number",
      description: "A unique numerical identifier for the testimonial.",
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "Name of the person giving the testimonial.",
    }),
    defineField({
      name: "job",
      title: "Job Title",
      type: "string",
      description: "Job title of the person giving the testimonial.",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "The testimonial text.",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessibility.",
        },
      ],
    }),
    defineField({
      name: "bgColor",
      title: "Background Color",
      type: "string",
      description: "Hex code or CSS color name for the background.",
    }),
    defineField({
      name: "borderColor",
      title: "Border Color",
      type: "string",
      description: "Hex code or CSS color name for the border.",
    })
  ],
});