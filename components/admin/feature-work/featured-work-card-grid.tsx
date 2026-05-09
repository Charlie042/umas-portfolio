"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { IoIosArrowForward } from "react-icons/io";
import type { FeaturedCardWithId } from "./featured-work-types";

type Props = {
  featuredCards: FeaturedCardWithId[];
  loadingIndex: number | null;
  onSelectCard: (index: number) => void;
};

export function FeaturedWorkCardGrid({
  featuredCards,
  loadingIndex,
  onSelectCard,
}: Props) {
  return (
    <div className="flex flex-wrap gap-5">
      {featuredCards.map((card, idx) => (
        <motion.div
          layoutId={`card-${idx}`}
          key={idx}
          onClick={() => onSelectCard(idx)}
          className={cn(
            "relative flex flex-wrap border p-4 mt-5 w-70 rounded-xl cursor-pointer items-center justify-between group",
            card.bgColor
          )}
        >
          <h1 className={cn("text-md font-bold ", card.titleColor)}>
            Edit {card.shapeName}
          </h1>
          {loadingIndex === idx ? (
            <div
              className={cn(
                "h-4 w-4 animate-spin rounded-full border-1 border-t-transparent",
                card.textColor
              )}
            />
          ) : (
            <IoIosArrowForward
              className={cn(
                "text-2xl ml-auto group-hover:translate-x-2 transition-all duration-300",
                card.textColor
              )}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}
