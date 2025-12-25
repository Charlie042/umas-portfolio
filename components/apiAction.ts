"use server";
import { client } from "@/sanity/lib/client";
import { aboutMeContent, getFeaturedCards, playgroundContent, skillBadge } from "@/sanity/lib/queries";

export async function fetchData() {
  const data = await client.fetch(playgroundContent);
  return data;
}

export async function fetchSkillBadgeData() {
  const data = await client.fetch(skillBadge);

  return data;
}

export async function fetchAboutMeData() {
  const data = await client.fetch(aboutMeContent);
  return data;
}

export async function fetchFeaturedWorkData() {
  const data = await client.fetch(getFeaturedCards);
  return data;
}