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
          { title: "Serene", value: "bg-[#FFE66D]" },
          { title: "Vimedra", value: "bg-[#1E1E1E]" },
          { title: "Buddy", value: "bg-[#56CCF2]" },
          { title: "Brandit", value: "bg-[#C8B6FF]" },
          { title: "Bias Free", value: "bg-[#F2EAE2]" },
          { title: "Neowork", value: "bg-[#FF8D8D]" },
        ],
      },
    }),
    defineField({
      name: "badgeYear",
      title: "Badge Year",
      type: "string",
      options: {
        list: [
          { title: "Serene", value: "2024" },
          { title: "Vimedra", value: "2024" },
          { title: "Buddy", value: "2023" },
          { title: "Brandit", value: "2024" },
          { title: "Bias Free", value: "2024" },
          { title: "Neowork", value: "2024" },
        ],
      },
    }),
    defineField({
      name: "badgeTitle",
      title: "Badge Title",
      type: "string",
      options: {
        list: [
          { title: "Serene", value: "Branding, Web & Mobile" },
          { title: "Vimedra", value: "Landing Page" },
          { title: "Buddy", value: "Branding & Mobile" },
          { title: "Brandit", value: "Mobile" },
          { title: "Bias Free", value: "Web & Mobile" },
          { title: "Neowork", value: "Branding & Mobile" },
        ],
      },
    }),
    defineField({
      name: "badgeColor",
      title: "Badge Color",
      type: "string",
      description:
        "Tailwind CSS class for the badge background and text color.",
      options: {
        list: [
          { title: "Serene", value: "bg-[#FFF2B6] text-[#1E1E1E]]" },
          { title: "Vimedra", value: "bg-[#444444] text-[#DEDEDE]" },
          { title: "Buddy", value: "bg-[#8EDDF6] text-[#1E1E1E]" },
          { title: "Brandit", value: "bg-[#D6C8FF] text-[#1E1E1E]" },
          { title: "Bias Free", value: "bg-[#FFF9F3] text-[#1E1E1E]" },
          { title: "Neowork", value: "bg-[#FFB3B3] text-[#1E1E1E]" },
        ],
      },
    }),
    defineField({
      name: "cardTitle",
      title: "Card Title",
      type: "string",
      validation: (Rule) => Rule.required().max(200),
      options: {
        list: [
          {
            title: "Serene",
            value:
              "Building Serene’s Anonymous Support Platform to Spark More User Engagement",
          },
          {
            title: "Vimedra",
            value: "Redesigning Vimedra’s Landing Page to Drive Conversions",
          },
          {
            title: "Buddy",
            value:
              "Designed Buddy’s Personalized Itinerary Builder to Simplify Trip Planning",
          },
          {
            title: "Brandit",
            value:
              "Streamlining Brandit’s AI Brand Asset Generator to Save Designers Time & Empower Small Business Owners",
          },
          {
            title: "Bias Free",
            value:
              "Designing Bias-Free Career Platform’s Masked Application Flow to Promote Fair Hiring",
          },
          {
            title: "Neowork",
            value:
              "Leading UX Design for Neowork’s Intelligent Matching to Increase Job Fill Rate",
          },
        ],
      },
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
      name: "percentSixty",
      title: "60% Description",
      type: "string",
      description: "Text describing the 60% metric.",
      options: {
        list: [
          {
            title: "Serene",
            value: "Projected increase in session completions",
          },
          { title: "Vimedra", value: "Faster message comprehension" },
          { title: "Buddy", value: "Projected faster itinerary creation" },
          { title: "Brandit", value: "Cost savings for small businesses" },
          { title: "Bias Free", value: "Reduced hiring bias" },
          { title: "Neowork", value: "Projected match accuracy" },
        ],
      },
    }),
    defineField({
      name: "percentForty",
      title: "40% Description",
      type: "string",
      description: "Text describing the 40% metric.",
      options: {
        list: [
          { title: "Serene", value: "Expected rise in first-time sign-ups" },
          { title: "Vimedra", value: "Projected demo click lift" },
          { title: "Buddy", value: "Projected higher community engagement" },
          {
            title: "Brandit",
            value: "Projected reduction in design setup time",
          },
          {
            title: "Bias Free",
            value: "Increased qualified candidate matches",
          },
          { title: "Neowork", value: "Projected user satisfaction" },
        ],
      },
    }),
    defineField({
      name: "textColor",
      title: "Text Color",
      type: "string",
      description: "Tailwind CSS class for the general text color.",
      options: {
        list: [
          { title: "Serene", value: "text-[#444444]" },
          { title: "Vimedra", value: "text-[#D0D0D0]" },
          { title: "Buddy", value: "text-[#444444]" },
          { title: "Brandit", value: "text-[#444444]" },
          { title: "Bias Free", value: "text-[#444444]" },
          { title: "Neowork", value: "text-[#7A3838]" },
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
          { title: "Serene", value: "text-[#1E1E1E]" },
          { title: "Vimedra", value: "text-[#FFFFFF]" },
          { title: "Buddy", value: "text-[#00000]" },
          { title: "Brandit", value: "text-[#000000]" },
          { title: "Bias Free", value: "text-[#000000]" },
          { title: "Neowork", value: "text-[#130909]" },
        ],
      },
    }),
    defineField({
      name: "percent1",
      title: "Percentage 1 Value",
      type: "string",
      description: 'The numeric value for the first percentage (e.g., "60%").',
      options: {
        list: [
          { title: "Serene", value: "60%" },
          { title: "Vimedra", value: "60%" },
          { title: "Buddy", value: "30%" },
          { title: "Brandit", value: "50%" },
          { title: "Bias Free", value: "25%" },
          { title: "Neowork", value: "70%" },
        ],
      },
    }),
    defineField({
      name: "percent2",
      title: "Percentage 2 Value",
      type: "string",
      description: 'The numeric value for the second percentage (e.g., "40%").',
      options: {
        list: [
          { title: "Serene", value: "40%" },
          { title: "Vimedra", value: "45%" },
          { title: "Buddy", value: "40%" },
          { title: "Brandit", value: "70%" },
          { title: "Bias Free", value: "45%" },
          { title: "Neowork", value: "75%" },
        ],
      },
    }),
    defineField({
      name: "order", // Renamed from 'idx' for better CMS clarity
      title: "Display Order",
      type: "number",
      description:
        "The order in which this card appears. Lower numbers appear first.",
      validation: (Rule) => Rule.required().integer().min(0),
      options: {
        list: [
          { title: "Serene", value: 0 },
          { title: "Vimedra", value: 1 },
          { title: "Buddy", value: 2 },
          { title: "Brandit", value: 5 },
          { title: "Bias Free", value: 3 },
          { title: "Neowork", value: 4 },
        ],
      },
    }),
    defineField({
      name: "range",
      title: "Motion Range",
      type: "array",
      of: [{ type: "number" }],
      validation: (Rule) => Rule.required().length(2),
      description: "Array of two numbers for motion animation range.",
      // Removed options.list here, as array types do not support it directly for predefined arrays.
    }),
    defineField({
      name: "target",
      title: "Motion Target",
      type: "number",
      description: "Target value for motion animation.",
      validation: (Rule) => Rule.required(),
      // Removed options.list here, as you can directly input the number.
    }),
    defineField({
      name: "shapeColor",
      title: "Shape Color",
      type: "string",
      description: "Hex code for the main shape color.",
      options: {
        list: [
          { title: "Serene", value: "#D4C05B" },
          { title: "Vimedra", value: "#0A0A0A" },
          { title: "Buddy", value: "#48AACA" },
          { title: "Brandit", value: "#A798D4" },
          { title: "Bias Free", value: "#CAC3BC" },
          { title: "Neowork", value: "#D47676" },
        ],
      },
    }),
    defineField({
      name: "shapeColor2",
      title: "Shape Color 2",
      type: "string",
      description: "Hex code for the secondary shape color.",
      options: {
        list: [
          { title: "Serene", value: "#F0DA6C" },
          { title: "Vimedra", value: "#353434" },
          { title: "Buddy", value: "#3094B5" },
          { title: "Brandit", value: "#C2B4EC" },
          { title: "Bias Free", value: "#E1D8CF" },
          { title: "Neowork", value: "#BB5959" },
        ],
      },
    }),
    defineField({
      name: "shapeName",
      title: "Shape Name",
      type: "string",
      description: "Name displayed with the shape icon.",
      options: {
        list: [
          { title: "Serene", value: "Serene" },
          { title: "Vimedra", value: "Vimedra" },
          { title: "Buddy", value: "Buddy" },
          { title: "Brandit", value: "Brandit" },
          { title: "Bias Free", value: "Bias Free" },
          { title: "Neowork", value: "Neowork" },
        ],
      },
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
      type: "string",
      description: "Optional external link for the card.",
      options: {
        list: [
          {
            title: "Serene",
            value:
              "https://www.behance.net/gallery/220502515/Mental-Health-Platform",
          },
          {
            title: "Vimedra",
            value:
              "https://www.behance.net/gallery/226641737/Medtech-Landing-page",
          },
          {
            title: "Buddy",
            value: "https://www.behance.net/gallery/205870191/Travel-app",
          },
          {
            title: "Brandit",
            value:
              "https://www.behance.net/gallery/196618375/Brand-It-AI-brand-generator",
          },
          // Bias-free and Neowork do not have links in your data, so they are omitted unless you want a "No Link" option
        ],
      },
    }),
    defineField({
      name: "cursorColor",
      title: "Cursor Color",
      type: "string",
      description:
        "Tailwind CSS class for the cursor indicator background color.",
      options: {
        list: [
          { title: "Serene", value: "bg-[#56CCF2]" },
          { title: "Vimedra", value: "bg-[#56CCF2]" },
          { title: "Buddy", value: "bg-[#FFF9F3]" },
          { title: "Brandit", value: "bg-[#FFB3B3]" },
          { title: "Bias Free", value: "bg-[#56CCF2]" },
          { title: "Neowork", value: "bg-[#D6C8FF]" },
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
