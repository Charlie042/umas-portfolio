"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion } from "motion/react";
import { TextInput } from "../components/text-input";
import { featuredCardSchema } from "../components/schema";
import { Button } from "@/components/ui/button";
import { useForm, Controller, ControllerRenderProps, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createFeaturedCard, uploadImage } from "../components/apiAction";
import { ImageUpload } from "../components/image-upload";

type FormData = z.infer<typeof featuredCardSchema>;

export function FeaturedWorkAdd() {
  const [submitStatus, setSubmitStatus] = useState<{ success?: string; error?: string }>({});
  const [cardImageFile, setCardImageFile] = useState<File | null>(null);
  const [shapeImageFile, setShapeImageFile] = useState<File | null>(null);

  // Default values for new card
  const defaultValues: Partial<FormData> = {
    bgColor: "",
    badgeYear: "",
    badgeTitle: "",
    badgeBgColor: "",
    badgeTextColor: "",
    badgeColor: "",
    cardTitle: "",
    cardImage: "",
    cardDescription: "",
    cardLink: "",
    cardOrder: 0,
    cardRange: [0, 1],
    cardTarget: 1,
    cardTextColor: "",
    cardTitleColor: "",
    percent1: "",
    percent2: "",
    percentSixty: "",
    percentForty: "",
    shapeColor: "",
    shapeColor2: "",
    shapeName: "",
    shapeImage: "",
    cursorColor: "",
    comingSoon: false,
  };

  const form = useForm<FormData>({
    resolver: zodResolver(featuredCardSchema as any),
    defaultValues,
  });

  // Watch shapeName to determine if it's Vimedra for styling
  const shapeName = form.watch("shapeName");
  const isVimedraStyle = shapeName?.toLowerCase() === "vimedra";

  const onSubmit = async (data: FormData) => {
    try {
      setSubmitStatus({}); // Clear previous status

      // Format colors properly - ensure bg-[#HEX] format
      const formatColor = (color: string): string => {
        if (!color) return "";
        // If it's already in bg-[#HEX] format, return as is
        if (color.startsWith("bg-[#") && color.endsWith("]")) {
          return color;
        }
        // If it's just a hex color, wrap it in bg-[#HEX]
        if (color.startsWith("#")) {
          return `bg-[${color}]`;
        }
        // If it's a hex without #, add it
        if (/^[0-9A-F]{6}$/i.test(color)) {
          return `bg-[#${color}]`;
        }
        return color;
      };

      const formatTextColor = (color: string): string => {
        if (!color) return "";
        // If it's already in text-[#HEX] format, return as is
        if (color.startsWith("text-[#") && color.endsWith("]")) {
          return color;
        }
        // If it's just a hex color, wrap it in text-[#HEX]
        if (color.startsWith("#")) {
          return `text-[${color}]`;
        }
        // If it's a hex without #, add it
        if (/^[0-9A-F]{6}$/i.test(color)) {
          return `text-[#${color}]`;
        }
        return color;
      };

      // Combine badge colors into badgeColor format
      const badgeBgFormatted = formatColor(data.badgeBgColor);
      const badgeTextFormatted = formatTextColor(data.badgeTextColor);
      const badgeColor = `${badgeBgFormatted} ${badgeTextFormatted}`;

      // Format other colors
      const bgColorFormatted = formatColor(data.bgColor);
      const cardTextColorFormatted = formatTextColor(data.cardTextColor);
      const cardTitleColorFormatted = formatTextColor(data.cardTitleColor);

      // Format shape colors (these are hex codes, not Tailwind classes)
      const shapeColorFormatted = data.shapeColor?.startsWith("#")
        ? data.shapeColor
        : data.shapeColor
          ? `#${data.shapeColor.replace("#", "")}`
          : "";
      const shapeColor2Formatted = data.shapeColor2?.startsWith("#")
        ? data.shapeColor2
        : data.shapeColor2
          ? `#${data.shapeColor2.replace("#", "")}`
          : "";
      const cursorColorFormatted = formatColor(data.cursorColor || "");

      const formValues: any = {
        ...data,
        bgColor: bgColorFormatted,
        badgeColor,
        badgeBgColor: badgeBgFormatted,
        badgeTextColor: badgeTextFormatted,
        cardTextColor: cardTextColorFormatted,
        cardTitleColor: cardTitleColorFormatted,
        shapeColor: shapeColorFormatted,
        shapeColor2: shapeColor2Formatted,
        cursorColor: cursorColorFormatted,
      };

      await featuredCardSchema.parseAsync(formValues);

      // Upload images if provided
      let cardImageAssetId: string | undefined;
      let shapeImageAssetId: string | undefined;

      if (cardImageFile) {
        const formData = new FormData();
        formData.append("file", cardImageFile);
        const uploadResult = await uploadImage(formData);
        if (uploadResult.success && uploadResult.assetId) {
          cardImageAssetId = uploadResult.assetId;
        } else {
          setSubmitStatus({ error: uploadResult.error || "Failed to upload card image" });
          return;
        }
      }

      if (shapeImageFile) {
        const formData = new FormData();
        formData.append("file", shapeImageFile);
        const uploadResult = await uploadImage(formData);
        if (uploadResult.success && uploadResult.assetId) {
          shapeImageAssetId = uploadResult.assetId;
        } else {
          setSubmitStatus({ error: uploadResult.error || "Failed to upload shape image" });
          return;
        }
      }

      // Add asset IDs to form values
      if (cardImageAssetId) {
        formValues.cardImageAssetId = cardImageAssetId;
        formValues.cardImageAlt = data.cardTitle || "Card image";
      }
      if (shapeImageAssetId) {
        formValues.shapeImageAssetId = shapeImageAssetId;
        formValues.shapeImageAlt = data.shapeName || "Shape image";
      }

      // Create new card in Sanity
      const result = await createFeaturedCard(formValues);

      if (result.success) {
        setSubmitStatus({ success: "Card created successfully in Sanity!" });
        // Reset form and clear image files
        form.reset(defaultValues);
        setCardImageFile(null);
        setShapeImageFile(null);
        // Optionally refresh the page or update local state
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        setSubmitStatus({ error: result.error || "Failed to create card in Sanity" });
      }
    } catch (error: any) {
      console.error("Validation or submission error:", error);
      setSubmitStatus({ error: error.message || "Invalid form data or creation failed" });
    }
  };

  return (
    <div className="relative mt-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "border p-6 rounded-xl min-h-[500px] max-h-[600px] overflow-y-auto bg-[#ffb0af]"
        )}
      >
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
          {/* Card Appearance Section */}
          <div className="flex flex-col gap-4">
            <h3 className={cn("text-lg font-semibold border-b pb-2", "text-gray-900")}>
              Card Appearance
            </h3>
            <Controller
              name="bgColor"
              control={form.control}
              render={({
                field,
                fieldState,
              }: {
                field: ControllerRenderProps<FormData, "bgColor">;
                fieldState: any;
              }) => (
                <TextInput
                  label="Card Background Color"
                  description="The main background color of the entire featured card"
                  placeholder="Click the color button to pick a color"
                  type="text"
                  variant="input"
                  showColorPicker={true}
                  field={field}
                  error={fieldState.error}
                  vimedra={isVimedraStyle}
                />
              )}
            />
            <Controller
              name="badgeBgColor"
              control={form.control}
              render={({
                field,
                fieldState,
              }: {
                field: ControllerRenderProps<FormData, "badgeBgColor">;
                fieldState: any;
              }) => (
                <TextInput
                  label="Badge Background Color"
                  description="The background color for the year and category badges at the top of the card"
                  placeholder="Click the color button to pick a color"
                  type="text"
                  variant="input"
                  showColorPicker={true}
                  field={field}
                  error={fieldState.error}
                  vimedra={isVimedraStyle}
                />
              )}
            />
            <Controller
              name="badgeTextColor"
              control={form.control}
              render={({
                field,
                fieldState,
              }: {
                field: ControllerRenderProps<FormData, "badgeTextColor">;
                fieldState: any;
              }) => (
                <TextInput
                  label="Badge Text Color"
                  description="The text color for the year and category badges at the top of the card"
                  placeholder="Click the color button to pick a color"
                  type="text"
                  variant="input"
                  showColorPicker={true}
                  field={field}
                  error={fieldState.error}
                  vimedra={isVimedraStyle}
                />
              )}
            />
            <Controller
              name="cardTextColor"
              control={form.control}
              render={({
                field,
                fieldState,
              }: {
                field: ControllerRenderProps<FormData, "cardTextColor">;
                fieldState: any;
              }) => (
                <TextInput
                  label="Card Text Color"
                  description="Color for the main body text and descriptions"
                  placeholder="e.g., text-[#444444]"
                  type="text"
                  variant="input"
                  showColorPicker={true}
                  field={field}
                  error={fieldState.error}
                  vimedra={isVimedraStyle}
                />
              )}
            />
            <Controller
              name="cardTitleColor"
              control={form.control}
              render={({
                field,
                fieldState,
              }: {
                field: ControllerRenderProps<FormData, "cardTitleColor">;
                fieldState: any;
              }) => (
                <TextInput
                  label="Card Title Color"
                  description="Color for the main card title heading"
                  placeholder="e.g., text-[#1E1E1E]"
                  type="text"
                  variant="input"
                  showColorPicker={true}
                  field={field}
                  error={fieldState.error}
                  vimedra={isVimedraStyle}
                />
              )}
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col gap-4">
            <h3 className={cn("text-lg font-semibold border-b pb-2", "text-gray-900")}>
              Content
            </h3>
            <TextInput
              label="Badge Year"
              description="The year displayed in the top-right badge (e.g., 2024)"
              placeholder="e.g., 2024"
              type="text"
              variant="input"
              name="badgeYear"
              register={form.register("badgeYear")}
              error={form.formState.errors.badgeYear}
              vimedra={isVimedraStyle}
            />
            <TextInput
              label="Badge Category Title"
              description="The category text shown in the badge (e.g., 'Branding, Web & Mobile')"
              placeholder="e.g., Branding, Web & Mobile"
              type="text"
              variant="input"
              name="badgeTitle"
              register={form.register("badgeTitle")}
              error={form.formState.errors.badgeTitle}
              vimedra={isVimedraStyle}
            />
            <TextInput
              label="Card Title"
              description="The main heading displayed prominently on the card"
              placeholder="e.g., Building Serene's Anonymous Support Platform..."
              type="text"
              variant="input"
              name="cardTitle"
              register={form.register("cardTitle")}
              error={form.formState.errors.cardTitle}
              vimedra={isVimedraStyle}
            />
            <TextInput
              label="Card Description"
              description="The detailed description text that appears below the title"
              placeholder="Enter a detailed description of the project..."
              type="text"
              variant="textarea"
              name="cardDescription"
              register={form.register("cardDescription")}
              error={form.formState.errors.cardDescription}
              vimedra={isVimedraStyle}
            />
            <ImageUpload
              label="Card Hero Image"
              description="The main image displayed at the bottom of the card. Upload an image for the new card."
              currentImage={undefined}
              onImageChange={setCardImageFile}
              vimedra={isVimedraStyle}
            />
          </div>

          {/* Metrics Section */}
          <div className="flex flex-col gap-4">
            <h3 className={cn("text-lg font-semibold border-b pb-2", "text-gray-900")}>
              Performance Metrics
            </h3>
            <TextInput
              label="First Percentage Value"
              description="The numeric percentage value (e.g., '60%') displayed on the left"
              placeholder="e.g., 60%"
              type="text"
              variant="input"
              name="percent1"
              register={form.register("percent1")}
              error={form.formState.errors.percent1}
              vimedra={isVimedraStyle}
            />
            <TextInput
              label="First Metric Description"
              description="Text that appears below the first percentage explaining what it represents"
              placeholder="e.g., Projected increase in session completions"
              type="text"
              variant="textarea"
              name="percentSixty"
              register={form.register("percentSixty")}
              error={form.formState.errors.percentSixty}
              vimedra={isVimedraStyle}
            />
            <TextInput
              label="Second Percentage Value"
              description="The numeric percentage value (e.g., '40%') displayed on the right"
              placeholder="e.g., 40%"
              type="text"
              variant="input"
              name="percent2"
              register={form.register("percent2")}
              error={form.formState.errors.percent2}
              vimedra={isVimedraStyle}
            />
            <TextInput
              label="Second Metric Description"
              description="Text that appears below the second percentage explaining what it represents"
              placeholder="e.g., Expected rise in first-time sign-ups"
              type="text"
              variant="textarea"
              name="percentForty"
              register={form.register("percentForty")}
              error={form.formState.errors.percentForty}
              vimedra={isVimedraStyle}
            />
          </div>

          {/* Shape & Branding Section */}
          <div className="flex flex-col gap-4">
            <h3 className={cn("text-lg font-semibold border-b pb-2", "text-gray-900")}>
              Shape & Branding
            </h3>
            <Controller
              name="shapeColor"
              control={form.control}
              render={({
                field,
                fieldState,
              }: {
                field: ControllerRenderProps<FormData, "shapeColor">;
                fieldState: any;
              }) => (
                <TextInput
                  label="Primary Shape Color"
                  description="The main color for the decorative shape icon on the left side of the card"
                  placeholder="Click the color button to pick a color"
                  type="text"
                  variant="input"
                  showColorPicker={true}
                  field={field}
                  error={fieldState.error}
                  vimedra={isVimedraStyle}
                />
              )}
            />
            <Controller
              name="shapeColor2"
              control={form.control}
              render={({
                field,
                fieldState,
              }: {
                field: ControllerRenderProps<FormData, "shapeColor2">;
                fieldState: any;
              }) => (
                <TextInput
                  label="Secondary Shape Color"
                  description="The accent color for the secondary shape element (appears layered on the primary shape)"
                  placeholder="Click the color button to pick a color"
                  type="text"
                  variant="input"
                  showColorPicker={true}
                  field={field}
                  error={fieldState.error}
                  vimedra={isVimedraStyle}
                />
              )}
            />
            <TextInput
              label="Project Name"
              description="The name displayed vertically on the left side with the shape (e.g., 'Serene', 'Vimedra')"
              placeholder="e.g., Serene"
              type="text"
              variant="input"
              name="shapeName"
              register={form.register("shapeName")}
              error={form.formState.errors.shapeName}
              vimedra={isVimedraStyle}
            />
            <ImageUpload
              label="Shape Icon Image"
              description="The small icon image that appears within the shape decoration. Upload an image for the new card."
              currentImage={undefined}
              onImageChange={setShapeImageFile}
              vimedra={isVimedraStyle}
            />
          </div>

          {/* Behavior & Interaction Section */}
          <div className="flex flex-col gap-4">
            <h3 className={cn("text-lg font-semibold border-b pb-2", "text-gray-900")}>
              Behavior & Interaction
            </h3>
            <TextInput
              label="External Link URL"
              description="Optional link that opens when users click the card (e.g., Behance project page)"
              placeholder="e.g., https://www.behance.net/gallery/..."
              type="text"
              variant="input"
              name="cardLink"
              register={form.register("cardLink")}
              error={form.formState.errors.cardLink}
              vimedra={isVimedraStyle}
            />
            <Controller
              name="cursorColor"
              control={form.control}
              render={({
                field,
                fieldState,
              }: {
                field: ControllerRenderProps<FormData, "cursorColor">;
                fieldState: any;
              }) => (
                <TextInput
                  label="Cursor Indicator Color"
                  description="Color of the circular cursor indicator that appears when hovering over the card"
                  placeholder="Click the color button to pick a color"
                  type="text"
                  variant="input"
                  showColorPicker={true}
                  field={field}
                  error={fieldState.error}
                  vimedra={isVimedraStyle}
                />
              )}
            />
            <Controller
              name="comingSoon"
              control={form.control}
              render={({ field, fieldState }) => (
                <TextInput
                  label="Coming Soon Status"
                  description="Enable this to show a 'Coming Soon' badge and disable the clickable link"
                  placeholder=""
                  type="boolean"
                  variant="toggle"
                  field={field}
                  error={fieldState.error}
                  vimedra={isVimedraStyle}
                />
              )}
            />
          </div>
          {submitStatus.success && (
            <p className="text-green-500 text-sm">{submitStatus.success}</p>
          )}
          {submitStatus.error && (
            <p className="text-red-500 text-sm">{submitStatus.error}</p>
          )}
          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className={cn(
              "cursor-pointer border px-4 py-2 rounded-md w-40 mb-4 self-center",
              isVimedraStyle ? "text-white border-white bg-gray-900" : "text-black border-black bg-white"
            )}
          >
            {form.formState.isSubmitting ? "Creating..." : "Create Card"}
          </Button>
        </form>
      </motion.div>
    </div>
  );
}
