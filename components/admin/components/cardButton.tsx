import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useState } from "react";

interface TabProps {
    id: string;
    title: string;
    children: React.ReactNode;
}

export function Button({text, onClick, className, bgColor}: {text: string, onClick: () => void, className: string, bgColor: string}){
    return (
      <button className={cn(`flex items-center gap-2 rounded-lg p-2 cursor-pointer`, bgColor, className)} onClick={onClick}>
        <span className="text-sm font-bold text-[#1E1E1E]">{text}</span>
      </button>
    )
  }

