"use server";
import { client } from "@/sanity/lib/client";
import { playgroundContent, skillBadge } from "@/sanity/lib/queries";

export async function fetchData() {
  const data = await client.fetch(playgroundContent);
  return data;
}

export async function fetchSkillBadgeData() {
  const data = await client.fetch(skillBadge);

  return data;
}
