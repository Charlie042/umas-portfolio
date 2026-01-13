"use server";
import { client } from "@/sanity/lib/client";
import {
  aboutMeContent,
  getFeaturedCards,
  playgroundContent,
  skillBadge,
} from "@/sanity/lib/queries";
import { revalidateTag } from "next/cache";

export async function fetchData() {
  const data = await client.fetch(
    playgroundContent,
    {},
    {
      next: { tags: ["playground"] },
    }
  );
  return data;
}

export async function fetchSkillBadgeData() {
  const data = await client.fetch(
    skillBadge,
    {},
    {
      next: { tags: ["skillBadge"] },
    }
  );

  return data;
}

export async function fetchAboutMeData() {
  const data = await client.fetch(
    aboutMeContent,
    {},
    {
      next: { tags: ["aboutMe"] },
    }
  );
  return data;
}

export async function fetchFeaturedWorkData() {
  const data = await client.fetch(
    getFeaturedCards,
    {},
    {
      next: { tags: ["featuredCards"] },
    }
  );
  return data;
}
