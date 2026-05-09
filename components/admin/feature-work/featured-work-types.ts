import type { featuredCardProps } from "@/components/Home/featured-card";
import { featuredCardSchema } from "../components/schema";
import type { z } from "zod";

export type FeaturedCardWithId = featuredCardProps & { _id?: string };

export type FeaturedCardFormData = z.infer<typeof featuredCardSchema>;
