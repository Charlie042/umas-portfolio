"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { featuredCardSchema } from "../components/schema";
import {
  updateFeaturedCard,
  uploadImage,
  deleteFeaturedCard,
} from "../components/apiAction";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { FeaturedWorkCardGrid } from "./featured-work-card-grid";
import { FeaturedWorkTabBar } from "./featured-work-tab-bar";
import {
  FeaturedWorkFormAppearance,
  FeaturedWorkFormBehavior,
  FeaturedWorkFormContent,
  FeaturedWorkFormMetrics,
  FeaturedWorkFormShape,
} from "./featured-work-form-sections";
import { FeaturedWorkFormActions } from "./featured-work-form-actions";
import { getFeaturedCardDefaultValues } from "./featured-work-form-utils";
import { buildFormattedFeaturedCardPayload } from "./featured-work-form-submit";
import type { FeaturedCardFormData, FeaturedCardWithId } from "./featured-work-types";

export function FeaturedWorkEdit({
  featuredCards,
}: {
  featuredCards: FeaturedCardWithId[];
}) {
  const [loadingIndex, setLoadingIndex] = useState<number | null>(null);
  const [hasOpened, setHasOpened] = useState(false);
  const [openedIndex, setOpenedIndex] = useState<number | null>(null);
  const [cardImageFile, setCardImageFile] = useState<File | null>(null);
  const [shapeImageFile, setShapeImageFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FeaturedCardFormData>({
    resolver: zodResolver(featuredCardSchema as any),
    defaultValues: getFeaturedCardDefaultValues(
      featuredCards[openedIndex ?? 0]
    ),
  });

  useEffect(() => {
    if (openedIndex !== null && featuredCards[openedIndex]) {
      form.reset(getFeaturedCardDefaultValues(featuredCards[openedIndex]), {
        keepDefaultValues: false,
      });
      setCardImageFile(null);
      setShapeImageFile(null);
    }
  }, [openedIndex, featuredCards, form]);

  const onSubmit = async (data: FeaturedCardFormData) => {
    if (openedIndex === null || !featuredCards[openedIndex]?._id) {
      toast.error("No card selected or missing document ID");
      return;
    }

    try {
      const formValues = buildFormattedFeaturedCardPayload(data);
      await featuredCardSchema.parseAsync(formValues);

      let cardImageAssetId: string | undefined;
      let shapeImageAssetId: string | undefined;

      if (cardImageFile) {
        const fd = new FormData();
        fd.append("file", cardImageFile);
        const uploadResult = await uploadImage(fd);
        if (uploadResult.success && uploadResult.assetId) {
          cardImageAssetId = uploadResult.assetId;
        } else {
          toast.error(uploadResult.error || "Failed to upload card image");
          return;
        }
      }

      if (shapeImageFile) {
        const fd = new FormData();
        fd.append("file", shapeImageFile);
        const uploadResult = await uploadImage(fd);
        if (uploadResult.success && uploadResult.assetId) {
          shapeImageAssetId = uploadResult.assetId;
        } else {
          toast.error(uploadResult.error || "Failed to upload shape image");
          return;
        }
      }

      const payload = { ...formValues } as Record<string, unknown>;
      if (cardImageAssetId) {
        payload.cardImageAssetId = cardImageAssetId;
        payload.cardImageAlt = data.cardTitle || "Card image";
      }
      if (shapeImageAssetId) {
        payload.shapeImageAssetId = shapeImageAssetId;
        payload.shapeImageAlt = data.shapeName || "Shape image";
      }

      const documentId = featuredCards[openedIndex]._id;
      if (!documentId) {
        toast.error("Document ID is missing. Cannot update card.");
        return;
      }

      const result = await updateFeaturedCard(documentId, payload);

      if (result.success) {
        toast.success("Card updated successfully in Sanity!");
        setTimeout(() => {
          setIsLoading(true);
          window.location.reload();
        }, 2000);
      } else {
        toast.error(result.error || "Failed to update card in Sanity");
      }
    } catch (error: unknown) {
      console.error("Validation or submission error:", error);
      const message =
        error instanceof Error ? error.message : "Invalid form data or update failed";
      toast.error(message);
    }
  };

  const handleDelete = async (id: string | undefined) => {
    if (!id) {
      toast.error("Missing document ID");
      return;
    }
    try {
      setIsLoading(true);
      const result = await deleteFeaturedCard(id);
      setTimeout(() => {
        setHasOpened(false);
      }, 1000);
      if (result.success) {
        toast.success("Card deleted");
      } else {
        toast.error(result.error || "Delete failed");
      }
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Delete failed";
      toast.error(message);
    }
  };

  function handleSelectCard(index: number) {
    setLoadingIndex(index);
    setTimeout(() => {
      setLoadingIndex(null);
      setHasOpened(true);
      setOpenedIndex(index);
    }, 1000);
  }

  function handleTabChange(index: number) {
    setOpenedIndex(index);
  }

  const activeCard =
    openedIndex !== null ? featuredCards[openedIndex] : undefined;
  const vimedra = activeCard?.shapeName === "Vimedra";
  const sectionHeadingClass = cn(
    "text-lg font-semibold border-b pb-2",
    activeCard?.titleColor
  );

  return (
    <div className="relative ">
      {!hasOpened && (
        <FeaturedWorkCardGrid
          featuredCards={featuredCards}
          loadingIndex={loadingIndex}
          onSelectCard={handleSelectCard}
        />
      )}

      {hasOpened && (
        <>
          <FeaturedWorkTabBar
            featuredCards={featuredCards}
            openedIndex={openedIndex}
            onTabChange={handleTabChange}
          />

          <AnimatePresence mode="wait">
            {openedIndex !== null && (
              <motion.div
                key={`content-${openedIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "border p-6 rounded-xl min-h-[100px] max-h-[500px] overflow-y-auto my-10",
                  featuredCards[openedIndex]?.bgColor
                )}
              >
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex flex-col gap-6"
                >
                  <FeaturedWorkFormAppearance
                    control={form.control}
                    headingClassName={sectionHeadingClass}
                    vimedra={vimedra}
                  />
                  <FeaturedWorkFormContent
                    register={form.register}
                    errors={form.formState.errors}
                    headingClassName={sectionHeadingClass}
                    vimedra={vimedra}
                    openedIndex={openedIndex}
                    featuredCards={featuredCards}
                    onCardImageChange={setCardImageFile}
                  />
                  <FeaturedWorkFormMetrics
                    register={form.register}
                    errors={form.formState.errors}
                    headingClassName={sectionHeadingClass}
                    vimedra={vimedra}
                  />
                  <FeaturedWorkFormShape
                    control={form.control}
                    register={form.register}
                    errors={form.formState.errors}
                    headingClassName={sectionHeadingClass}
                    vimedra={vimedra}
                    openedIndex={openedIndex}
                    featuredCards={featuredCards}
                    onShapeImageChange={setShapeImageFile}
                  />
                  <FeaturedWorkFormBehavior
                    control={form.control}
                    register={form.register}
                    errors={form.formState.errors}
                    headingClassName={sectionHeadingClass}
                    vimedra={vimedra}
                  />
                  <FeaturedWorkFormActions
                    isSubmitting={form.formState.isSubmitting}
                    isLoading={isLoading}
                    vimedra={vimedra}
                    documentId={featuredCards[openedIndex]?._id}
                    onDelete={handleDelete}
                    onCancelDelete={() => setHasOpened(false)}
                  />
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
}
