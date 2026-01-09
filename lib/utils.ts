import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Converts Tailwind color format (e.g., "bg-[#444444]" or "text-[#FFE66D]") to hex color (e.g., "#444444")
 * @param tailwindColor - Tailwind color string like "bg-[#444444]" or "text-[#FFE66D]"
 * @returns Hex color string like "#444444" or the original string if no hex is found
 */
export function ConvertBgToHex(tailwindColor: string): string {
  if (!tailwindColor) return "";

  // If it's already a hex color (starts with #), return as is
  if (tailwindColor.startsWith("#")) {
    return tailwindColor;
  }

  // Extract hex color from Tailwind format: bg-[#HEX] or text-[#HEX]
  // Matches patterns like: bg-[#444444], text-[#FFE66D], bg-[#1E1E1E], etc.
  const hexMatch = tailwindColor.match(/#([0-9A-F]{6})/i);

  if (hexMatch) {
    return `#${hexMatch[1].toUpperCase()}`;
  }

  // If no hex found, return empty string or the original (you can adjust this behavior)
  return "";
}

export const handleResumeView = (url: string, fallbackUrl?: string) => {
  try {
    let newWindow = window.open(url, "_blank", "noopener,noreferrer");

    if (newWindow) {
      newWindow.onerror = () => {
        console.error("Failed to load PDF in new window");
        if (fallbackUrl) {
          newWindow!.location.href = fallbackUrl;
        }
      };
      return;
    }

    console.warn("First popup attempt failed, trying alternative approach");
    newWindow = window.open(
      url,
      "_blank",
      "noopener,noreferrer,scrollbars=yes,resizable=yes"
    );

    if (newWindow) {
      newWindow.onerror = () => {
        console.error("Failed to load PDF in alternative window");
        if (fallbackUrl) {
          newWindow!.location.href = fallbackUrl;
        }
      };
      return;
    }

    console.warn("Popup blocked, attempting link-based approach");
    const tempLink = document.createElement("a");
    tempLink.href = url;
    tempLink.target = "_blank";
    tempLink.rel = "noopener noreferrer";
    tempLink.style.display = "none";
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);

    setTimeout(() => {
      if (document.hasFocus()) {
        console.error("All popup attempts failed");
        alert(
          "Please allow popups for this site to view the resume, or right-click and select 'Open in new tab'."
        );
      }
    }, 100);
  } catch (error) {
    console.error("Error opening resume PDF:", error);

    alert(
      "Unable to open resume. Please try right-clicking the link and selecting 'Open in new tab'."
    );
  }
};
