import { revalidatePath, revalidateTag } from "next/cache";

/** Keep in sync with Sanity `_type` values and pages that consume each tag. */
export const sanityTypeRevalidationMap: Record<
  string,
  { tag: string; paths: string[] }
> = {
  featuredCard: {
    tag: "featuredCards",
    paths: ["/me", "/"],
  },
  aboutMeContent: {
    tag: "aboutMe",
    paths: ["/me/about-me"],
  },
  playgroundSection: {
    tag: "playground",
    paths: ["/me/playground"],
  },
  skillBadge: {
    tag: "skillBadge",
    paths: ["/me", "/me/about-me", "/me/playground"],
  },
};

export function revalidateSanityDocumentType(_type: string) {
  const config = sanityTypeRevalidationMap[_type];

  if (config) {
    revalidateTag(config.tag, "max");
    config.paths.forEach((path) => {
      revalidatePath(path, "page");
      revalidatePath(path, "layout");
    });
  } else {
    Object.values(sanityTypeRevalidationMap).forEach((c) => {
      revalidateTag(c.tag, "max");
      c.paths.forEach((path) => {
        revalidatePath(path, "page");
        revalidatePath(path, "layout");
      });
    });
  }
}

/** After admin / server actions mutate featured cards (same as webhook for `featuredCard`). */
export function revalidateFeaturedCards() {
  revalidateSanityDocumentType("featuredCard");
}
