import type { FeaturedCardFormData } from "./featured-work-types";

function formatColor(color: string): string {
  if (!color) return "";
  if (color.startsWith("bg-[#") && color.endsWith("]")) return color;
  if (color.startsWith("#")) return `bg-[${color}]`;
  if (/^[0-9A-F]{6}$/i.test(color)) return `bg-[#${color}]`;
  return color;
}

function formatTextColor(color: string): string {
  if (!color) return "";
  if (color.startsWith("text-[#") && color.endsWith("]")) return color;
  if (color.startsWith("#")) return `text-[${color}]`;
  if (/^[0-9A-F]{6}$/i.test(color)) return `text-[#${color}]`;
  return color;
}

/** Merges form data with Tailwind-style color fields for Sanity `updateFeaturedCard`. */
export function buildFormattedFeaturedCardPayload(
  data: FeaturedCardFormData
): Record<string, unknown> {
  const badgeBgFormatted = formatColor(data.badgeBgColor);
  const badgeTextFormatted = formatTextColor(data.badgeTextColor);
  const badgeColor = `${badgeBgFormatted} ${badgeTextFormatted}`;

  const bgColorFormatted = formatColor(data.bgColor);
  const cardTextColorFormatted = formatTextColor(data.cardTextColor);
  const cardTitleColorFormatted = formatTextColor(data.cardTitleColor);

  const shapeColorFormatted = data.shapeColor?.startsWith("#")
    ? data.shapeColor
    : data.shapeColor
      ? `#${data.shapeColor.replace("#", "")}`
      : "";
  const shapeColor2Formatted = data.shapeColor2?.startsWith("#")
    ? data.shapeColor2
    : data.shapeColor2
      ? `#${data.shapeColor2.replace("#", "")}`
      : "";
  const cursorColorFormatted = formatColor(data.cursorColor || "");

  return {
    ...data,
    bgColor: bgColorFormatted,
    badgeColor,
    badgeBgColor: badgeBgFormatted,
    badgeTextColor: badgeTextFormatted,
    cardTextColor: cardTextColorFormatted,
    cardTitleColor: cardTitleColorFormatted,
    shapeColor: shapeColorFormatted,
    shapeColor2: shapeColor2Formatted,
    cursorColor: cursorColorFormatted,
  };
}
