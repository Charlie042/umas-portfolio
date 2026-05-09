import type { FeaturedCardFormData, FeaturedCardWithId } from "./featured-work-types";

export function parseBadgeColor(badgeColor: string) {
  if (!badgeColor) return { bg: "#FFFFFF", text: "#000000" };

  const bgMatch = badgeColor.match(/bg-\[#([0-9A-F]{6})\]/i);
  const bgColor = bgMatch ? `#${bgMatch[1]}` : "#FFFFFF";

  const textMatch = badgeColor.match(/text-\[#([0-9A-F]{6})\]/i);
  const textColor = textMatch ? `#${textMatch[1]}` : "#000000";

  return { bg: bgColor.toUpperCase(), text: textColor.toUpperCase() };
}

function getDescriptionText(description: unknown): string {
  if (typeof description === "string") return description;
  if (Array.isArray(description)) {
    if (description.length > 0 && Array.isArray(description[0])) {
      return description
        .map((arr: unknown) => (Array.isArray(arr) ? arr.join("") : ""))
        .join("\n");
    }
    return description
      .map((block: unknown) => {
        if (block && typeof block === "object") {
          const b = block as { children?: unknown[] };
          if (b.children && Array.isArray(b.children)) {
            return b.children
              .map((child: unknown) => {
                const c = child as { text?: string };
                return c.text || "";
              })
              .join("");
          }
        }
        if (typeof block === "string") return block;
        return "";
      })
      .filter(Boolean)
      .join("\n");
  }
  return "";
}

export function getFeaturedCardDefaultValues(
  card: FeaturedCardWithId | undefined
): Partial<FeaturedCardFormData> {
  if (!card) return {};

  const badgeColors = parseBadgeColor(card.badgeColor || "");

  return {
    bgColor: card.bgColor || "",
    badgeYear: card.badgeYear || "",
    badgeTitle: card.badgeTitle || "",
    badgeBgColor: `bg-[${badgeColors.bg}]`,
    badgeTextColor: `text-[${badgeColors.text}]`,
    badgeColor: card.badgeColor || "",
    cardTitle: card.cardTitle || "",
    cardImage: "",
    cardDescription: getDescriptionText(card.description as unknown),
    cardLink: card.link || "",
    cardOrder: card.idx || 0,
    cardRange: card.range || [0, 1],
    cardTarget: card.target || 1,
    cardTextColor: card.textColor || "",
    cardTitleColor: card.titleColor || "",
    percent1: card.percent1 || "",
    percent2: card.percent2 || "",
    percentSixty: card.percentSixty || "",
    percentForty: card.percentForty || "",
    shapeColor: card.shapeColor || "",
    shapeColor2: card.shapeColor2 || "",
    shapeName: card.shapeName || "",
    shapeImage: "",
    cursorColor: card.cursorColor || "",
    comingSoon: card.comingSoon || false,
  };
}
