import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const handleResumeView = (url: string, fallbackUrl?: string) => {
  try {
    console.log("Resume PDF accessed:", url);

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