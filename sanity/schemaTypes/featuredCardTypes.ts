import { defineType, defineField } from "sanity";

export const featuredCardType = defineType({
  name: "featuredCard",
  title: "Featured Card",
  type: "document",
  fields: [
    defineField({
      name: "id",
      title: "ID",
      type: "number",
      description:
        "Unique identifier for the featured card (optional, Sanity provides _id)",
    }),
    defineField({
      name: "bgColor",
      title: "Background Color",
      type: "string",
      description: "Tailwind CSS class or hex code for the background color.",
      options: {
        list: [
          { title: "Yellow (FFE66D)", value: "bg-[#FFE66D]" },
          { title: "Dark Grey (1E1E1E)", value: "bg-[#1E1E1E]" },
          { title: "Light Blue (56CCF2)", value: "bg-[#56CCF2]" },
          { title: "Light Purple (C8B6FF)", value: "bg-[#C8B6FF]" },
          { title: "Light Beige (F2EAE2)", value: "bg-[#F2EAE2]" },
          { title: "Light Red (FF8D8D)", value: "bg-[#FF8D8D]" },
        ],
      },
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
      name: "badgeColor",
      title: "Badge Color",
      type: "string",
      description:
        "Tailwind CSS class for the badge background and text color.",
      options: {
        list: [
          {
            title: "Yellow (FFF2B6) / Dark Text",
            value: "bg-[#FFF2B6] text-[#1E1E1E]",
          },
          {
            title: "Dark Grey (444444) / Light Text",
            value: "bg-[#444444] text-[#DEDEDE]",
          },
          {
            title: "Light Blue (8EDDF6) / Dark Text",
            value: "bg-[#8EDDF6] text-[#1E1E1E]",
          },
          {
            title: "Light Purple (D6C8FF) / Dark Text",
            value: "bg-[#D6C8FF] text-[#1E1E1E]",
          },
          {
            title: "Light Beige (FFF9F3) / Dark Text",
            value: "bg-[#FFF9F3] text-[#1E1E1E]",
          },
          {
            title: "Light Red (FFB3B3) / Dark Text",
            value: "bg-[#FFB3B3] text-[#1E1E1E]",
          },
        ],
      },
    }),
    defineField({
      name: "cardTitle",
      title: "Card Title",
      type: "string",
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
      description: "Rich text description for the card.",
    }),
    defineField({
      name: "cardImage",
      title: "Card Image",
      type: "image",
      options: {
        hotspot: true, // Allows content editors to control the image hotspot
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
      name: "percentSixty",
      title: "60% Description",
      type: "string",
      description: "Text describing the 60% metric.",
    }),
    defineField({
      name: "percentForty",
      title: "40% Description",
      type: "string",
      description: "Text describing the 40% metric.",
    }),
    defineField({
      name: "textColor",
      title: "Text Color",
      type: "string",
      description: "Tailwind CSS class for the general text color.",
      options: {
        list: [
          { title: "Dark Grey (444444)", value: "text-[#444444]" },
          { title: "Light Grey (D0D0D0)", value: "text-[#D0D0D0]" },
          { title: "Red (7A3838)", value: "text-[#7A3838]" },
        ],
      },
    }),
    defineField({
      name: "titleColor",
      title: "Title Color",
      type: "string",
      description: "Tailwind CSS class for the card title color.",
      options: {
        list: [
          { title: "Dark Grey (1E1E1E)", value: "text-[#1E1E1E]" },
          { title: "White (FFFFFF)", value: "text-[#FFFFFF]" },
          { title: "Black (000000)", value: "text-[#000000]" },
          { title: "Dark Red (130909)", value: "text-[#130909]" },
        ],
      },
    }),
    defineField({
      name: "percent1",
      title: "Percentage 1 Value",
      type: "string",
      description: 'The numeric value for the first percentage (e.g., "60%").',
    }),
    defineField({
      name: "percent2",
      title: "Percentage 2 Value",
      type: "string",
      description: 'The numeric value for the second percentage (e.g., "40%").',
    }),
    defineField({
      name: "order", // Renamed from 'idx' for better CMS clarity
      title: "Display Order",
      type: "number",
      description:
        "The order in which this card appears. Lower numbers appear first.",
      validation: (Rule) => Rule.required().integer().min(0),
    }),
    defineField({
      name: "range",
      title: "Motion Range",
      type: "array",
      of: [{ type: "number" }],
      validation: (Rule) => Rule.required().length(2),
      description: "Array of two numbers for motion animation range.",
    }),
    defineField({
      name: "target",
      title: "Motion Target",
      type: "number",
      description: "Target value for motion animation.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "shapeColor",
      title: "Shape Color",
      type: "string",
      description: "Hex code for the main shape color.",
    }),
    defineField({
      name: "shapeColor2",
      title: "Shape Color 2",
      type: "string",
      description: "Hex code for the secondary shape color.",
    }),
    defineField({
      name: "shapeName",
      title: "Shape Name",
      type: "string",
      description: "Name displayed with the shape icon.",
    }),
    defineField({
      name: "shapeImage",
      title: "Shape Image",
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
      name: "link",
      title: "External Link",
      type: "url",
      description: "Optional external link for the card.",
    }),
    defineField({
      name: "cursorColor",
      title: "Cursor Color",
      type: "string",
      description:
        "Tailwind CSS class for the cursor indicator background color.",
      options: {
        list: [
          { title: "Light Blue (56CCF2)", value: "bg-[#56CCF2]" },
          { title: "Light Cream (FFF9F3)", value: "bg-[#FFF9F3]" },
          { title: "Light Red (FFB3B3)", value: "bg-[#FFB3B3]" },
          { title: "Light Purple (D6C8FF)", value: "bg-[#D6C8FF]" },
        ],
      },
    }),
    defineField({
      name: "comingSoon",
      title: "Coming Soon",
      type: "boolean",
      description: "Set to true if this project is coming soon.",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "cardTitle",
      subtitle: "badgeTitle",
      media: "cardImage",
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || "Untitled Featured Card",
        subtitle: subtitle,
        media: media,
      };
    },
  },
});
