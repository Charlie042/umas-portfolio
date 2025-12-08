"use server";
import { client } from "@/sanity/lib/client";
import { playgroundContent } from "@/sanity/lib/queries";

export async function fetchData() {
  const data = await client.fetch(playgroundContent);
  return data;
}
