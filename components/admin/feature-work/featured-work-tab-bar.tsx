"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import type { FeaturedCardWithId } from "./featured-work-types";

type Props = {
  featuredCards: FeaturedCardWithId[];
  openedIndex: number | null;
  onTabChange: (index: number) => void;
};

export function FeaturedWorkTabBar({
  featuredCards,
  openedIndex,
  onTabChange,
}: Props) {
  return (
    <div className="flex gap-2 mb-4">
      {featuredCards.map((card, idx) => (
        <motion.div
          layoutId={`card-${idx}`}
          key={`tab-${idx}`}
          onClick={() => onTabChange(idx)}
          className={cn(
            "flex items-center justify-center border p-3 rounded-xl cursor-pointer transition-all mt-5",
            card.bgColor,
            openedIndex === idx
              ? "border-2 border-white scale-110"
              : "opacity-70 hover:opacity-100"
          )}
        >
          <span className={cn("text-sm font-bold", card.titleColor)}>
            {card.shapeName}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
