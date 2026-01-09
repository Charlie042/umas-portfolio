import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface CardProps {
  id: string;
  bgColor: string;
  title: string;
  titleColor: string;
  children: React.ReactNode;
}

export function GalleryModal({ id, bgColor, title, titleColor, children }: CardProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <>
      <motion.div
        layoutId={`card-${id}`}
        onClick={() => setSelectedId(id)}
        className="relative h-[500px] w-full cursor-pointer overflow-hidden rounded-3xl p-8"
        style={{ backgroundColor: bgColor }}
      >
        <motion.h1 
          layoutId={`title-${id}`} 
          className={cn("text-2xl font-bold", titleColor)}
        >
          {title}
        </motion.h1>
      </motion.div>

      <AnimatePresence>
        {selectedId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            <motion.div
              layoutId={`card-${id}`}
              className="relative z-10 flex h-full max-h-[800px] w-full max-w-[1000px] flex-col overflow-hidden rounded-[40px] p-12 shadow-2xl"
              style={{ backgroundColor: bgColor }}
            >
              <motion.button
                onClick={() => setSelectedId(null)}
                className="absolute right-8 top-8 h-10 w-10 rounded-full bg-black/10 text-xl"
              >
                ✕
              </motion.button>

              <motion.h1
                layoutId={`title-${id}`}
                className={cn("text-3xl font-black", titleColor)}
              >
                {title}
              </motion.h1>

              <motion.div
                layoutId={`content-${id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.1 }}
                className="mt-8 text-lg text-white/80"
              >
                {children}
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}