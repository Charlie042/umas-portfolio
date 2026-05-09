"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Loader2 } from "lucide-react";

type Props = {
  isSubmitting: boolean;
  vimedra: boolean;
  isLoading: boolean;
  documentId?: string;
  onDelete: (id: string | undefined) => void;
  onCancelDelete: () => void;
};

export function FeaturedWorkFormActions({
  isSubmitting,
  isLoading,
  vimedra,
  documentId,
  onDelete,
  onCancelDelete,
}: Props) {
  const outlineBtn = cn(
    "cursor-pointer border px-4 py-2 rounded-md w-40 mb-4 self-center",
    vimedra ? "text-white border-white" : "text-black border-black"
  );

  return (
    <div className="flex justify-center gap-4">
      <Button type="submit" disabled={isSubmitting} className={outlineBtn}>
        {isSubmitting ? "Updating..." : "Update Card"}
      </Button>
      <div>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              type="button"
              disabled={isSubmitting}
              className={cn(
                "cursor-pointer border px-4 py-2 rounded-md bg-red-400 w-40 mb-4 self-center",
                vimedra ? "text-white border-white" : "text-black border-black"
              )}
            >
              Delete Card
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-40 h-40 flex flex-col justify-between items-end bg-white ">
            <p className="text-xs">
              Are you sure you want to delete this card? This action cannot be
              undone.
            </p>
            <div className="flex justify-end gap-2 mt-5">
              <Button
                type="button"
                disabled={isSubmitting}
                className={cn(
                  "cursor-pointer border px-4 py-2 rounded-md bg-red-400 w-10 h-10 mb-4 self-center",
                  vimedra ? "text-white border-white" : "text-black border-black"
                )}
                onClick={() => onDelete(documentId)}
              >
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Yes"}
              </Button>
              <Button
                type="button"
                disabled={isSubmitting}
                className={cn(
                  "cursor-pointer border px-4 py-2 rounded-md bg-green-400 w-10 h-10 mb-4 self-center",
                  vimedra ? "text-white border-white" : "text-black border-black"
                )}
                onClick={onCancelDelete}
              >
                No
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
