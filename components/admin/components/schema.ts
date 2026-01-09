import { z } from "zod";

// Helper function to transform description
const transformDescription = (val: string | unknown[]): string => {
  if (Array.isArray(val)) {
    // Handle array of arrays (from query: description[].children[].text)
    if (val.length > 0 && Array.isArray(val[0])) {
      return val
        .map((arr: unknown) => (Array.isArray(arr) ? arr.join("") : String(arr)))
        .join("\n");
    }
    // Handle array of block objects
    return val
      .map((block: unknown) => {
        if (block && typeof block === "object" && block !== null && "children" in block) {
          const blockWithChildren = block as { children?: Array<{ text?: string }> };
          if (Array.isArray(blockWithChildren.children)) {
            return blockWithChildren.children.map((child: any) => child.text || "").join("");
          }
        }
        return String(block || "");
      })
      .filter(Boolean)
      .join("\n");
  }
  return val || "";
};

// Base schema for form validation (without transforms)
export const featuredCardSchema = z.object({
  bgColor: z.string(),
  badgeYear: z.string(),
  badgeTitle: z.string(),
  badgeColor: z.string(),
  badgeTextColor: z.string(),
  badgeBgColor: z.string(),
  cardTitle: z.string(),
  cardImage: z.string().optional(), // Optional since we're not editing it via form
  cardDescription: z
    .union([
      z.string(),
      z.array(z.any()), // Allow array for Sanity block content
    ])
    .refine(
      (val) => {
        // Accept string or array
        return typeof val === "string" || Array.isArray(val);
      },
      { message: "Description must be a string or array" }
    ),
  cardLink: z.string(),
  cardOrder: z.number().optional().default(0),
  cardRange: z.array(z.number()).optional().default([0, 1]),
  cardTarget: z.number().optional().default(1),
  cardTextColor: z.string(),
  cardTitleColor: z.string(),
  // Additional fields from form
  percent1: z.string().optional(),
  percent2: z.string().optional(),
  percentSixty: z.string().optional(),
  percentForty: z.string().optional(),
  shapeColor: z.string().optional(),
  shapeColor2: z.string().optional(),
  shapeName: z.string().optional(),
  shapeImage: z.string().optional(),
  cursorColor: z.string().optional(),
  comingSoon: z.boolean().optional().default(false),
  // Image upload fields
  cardImageAssetId: z.string().optional(),
  shapeImageAssetId: z.string().optional(),
  cardImageAlt: z.string().optional(),
  shapeImageAlt: z.string().optional(),
});

// Export the transform function for use in form submission
export { transformDescription };
