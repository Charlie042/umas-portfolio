import { featuredCardProps } from "@/components/Home/featured-card";
import { cn } from "@/lib/utils";
import { IoIosArrowForward } from "react-icons/io";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { TextInput } from "../components/text-input";
import { featuredCardSchema } from "../components/schema";
import { Button } from "@/components/ui/button";
import { useForm, Controller, ControllerRenderProps, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { updateFeaturedCard, uploadImage } from "../components/apiAction";
import { ImageUpload } from "../components/image-upload";

type FormData = z.infer<typeof featuredCardSchema>;

// Extended type for admin with _id
type FeaturedCardWithId = featuredCardProps & { _id?: string };

export function FeaturedWorkEdit({ featuredCards }: { featuredCards: FeaturedCardWithId[] }){
 const [loadingIndex, setLoadingIndex] = useState<number | null>(null);
 const [hasOpened, setHasOpened] = useState(false);
 const [openedIndex, setOpenedIndex] = useState<number | null>(null);
 const [submitStatus, setSubmitStatus] = useState<{ success?: string; error?: string }>({});
 const [cardImageFile, setCardImageFile] = useState<File | null>(null);
 const [shapeImageFile, setShapeImageFile] = useState<File | null>(null);

 // Helper function to parse badgeColor string and extract background and text colors
 const parseBadgeColor = (badgeColor: string) => {
   if (!badgeColor) return { bg: "#FFFFFF", text: "#000000" };
   
   // Extract background color: bg-[#HEX] or bg-[#HEX]]
   const bgMatch = badgeColor.match(/bg-\[#([0-9A-F]{6})\]/i);
   const bgColor = bgMatch ? `#${bgMatch[1]}` : "#FFFFFF";
   
   // Extract text color: text-[#HEX] or text-[#HEX]]
   const textMatch = badgeColor.match(/text-\[#([0-9A-F]{6})\]/i);
   const textColor = textMatch ? `#${textMatch[1]}` : "#000000";
   
   return { bg: bgColor.toUpperCase(), text: textColor.toUpperCase() };
 };

 // Helper function to get default values from card data
 const getDefaultValues = (card: FeaturedCardWithId | undefined): Partial<FormData> => {
   if (!card) return {};
   
   const badgeColors = parseBadgeColor(card.badgeColor || "");
   
  // Helper to extract description text from Sanity block content or string
  const getDescriptionText = (description: any): string => {
    if (typeof description === 'string') return description;
    if (Array.isArray(description)) {
      // Handle different array structures from Sanity
      // Case 1: Array of arrays (from query: description[].children[].text)
      if (description.length > 0 && Array.isArray(description[0])) {
        return description
          .map((arr: any[]) => arr.join(""))
          .join("\n");
      }
      // Case 2: Array of block objects with children
      return description
        .map((block: any) => {
          if (block && typeof block === 'object') {
            if (block.children && Array.isArray(block.children)) {
              return block.children
                .map((child: any) => child.text || "")
                .join("");
            }
            // If block itself is a string
            if (typeof block === 'string') {
              return block;
            }
          }
          // If block is a string
          if (typeof block === 'string') {
            return block;
          }
          return "";
        })
        .filter(Boolean)
        .join("\n");
    }
    return "";
  };

  return {
    bgColor: card.bgColor || "",
    badgeYear: card.badgeYear || "",
    badgeTitle: card.badgeTitle || "",
    badgeBgColor: `bg-[${badgeColors.bg}]`,
    badgeTextColor: `text-[${badgeColors.text}]`,
    badgeColor: card.badgeColor || "",
    cardTitle: card.cardTitle || "",
    cardImage: "", // Not used in form anymore, but keep for schema compatibility
    cardDescription: getDescriptionText(card.description),
     cardLink: card.link || "",
     cardOrder: card.idx || 0,
     cardRange: card.range || [0, 1],
     cardTarget: card.target || 1,
     cardTextColor: card.textColor || "",
     cardTitleColor: card.titleColor || "",
     percent1: card.percent1 || "",
     percent2: card.percent2 || "",
     percentSixty: card.percentSixty || "",
     percentForty: card.percentForty || "",
    shapeColor: card.shapeColor || "",
    shapeColor2: card.shapeColor2 || "",
    shapeName: card.shapeName || "",
    shapeImage: "", // Not used in form anymore, but keep for schema compatibility
    cursorColor: card.cursorColor || "",
     comingSoon: card.comingSoon || false,
   };
 };

 const form = useForm<FormData>({
   resolver: zodResolver(featuredCardSchema as any),
   defaultValues: getDefaultValues(featuredCards[openedIndex || 0]),
 });


 // Reset form when openedIndex changes
 useEffect(() => {
   if (openedIndex !== null && featuredCards[openedIndex]) {
     const defaults = getDefaultValues(featuredCards[openedIndex]);
     form.reset(defaults, { keepDefaultValues: false });
     // Reset image files when switching cards
     setCardImageFile(null);
     setShapeImageFile(null);
   }
 }, [openedIndex, featuredCards]);

const onSubmit = async (data: FormData) => {
  if (openedIndex === null || !featuredCards[openedIndex]?._id) {
    setSubmitStatus({ error: "No card selected or missing document ID" });
    return;
  }

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
    
    // Submit to Sanity
    const documentId = featuredCards[openedIndex]._id;
    if (!documentId) {
      setSubmitStatus({ error: "Document ID is missing. Cannot update card." });
      return;
    }
    const result = await updateFeaturedCard(documentId, formValues);
    
    if (result.success) {
      setSubmitStatus({ success: "Card updated successfully in Sanity!" });
      // Optionally refresh the page or update local state
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else {
      setSubmitStatus({ error: result.error || "Failed to update card in Sanity" });
    }
  } catch (error: any) {
    console.error("Validation or submission error:", error);
    setSubmitStatus({ error: error.message || "Invalid form data or update failed" });
  }
};

    function handleClick(index: number){
        setLoadingIndex(index);
        setTimeout(() => {
            setLoadingIndex(null);
            setHasOpened(true);
            setOpenedIndex(index);
        }, 1000);
    }

    function handleTabChange(index: number){
        setOpenedIndex(index);
    }

    return (
        <div className="relative">
          {/* Cards view - before opening */}
          {!hasOpened && (
            <div className="flex flex-wrap gap-5">
              {featuredCards.map((card, idx) => (
                <motion.div
                  layoutId={`card-${idx}`}
                  key={idx}
                  onClick={() => handleClick(idx)}
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
                    ></div>
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
          )}

          {/* Tabs view - after opening */}
          {hasOpened && (
            <>
              <div className="flex gap-2 mb-4">
                {featuredCards.map((card, idx) => (
                  <motion.div
                    layoutId={`card-${idx}`}
                    key={`tab-${idx}`}
                    onClick={() => handleTabChange(idx)}
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

              {/* Content area */}
              <AnimatePresence mode="wait">
                {openedIndex !== null && (
                  <motion.div
                    key={`content-${openedIndex}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className={cn(
                      "border p-6 rounded-xl min-h-[500px] max-h-[500px] overflow-y-auto",
                      featuredCards[openedIndex]?.bgColor
                    )}
                  >
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
                        {/* Card Appearance Section */}
                        <div className="flex flex-col gap-4">
                            <h3 className={cn("text-lg font-semibold border-b pb-2", featuredCards[openedIndex]?.titleColor)}>
                                Card Appearance
                            </h3>
                            <Controller
                                name="bgColor"
                                control={form.control}
                                render={({ field, fieldState }: { field: ControllerRenderProps<FormData, "bgColor">; fieldState: any }) => (
                                    <TextInput
                                        label="Card Background Color"
                                        description="The main background color of the entire featured card"
                                        placeholder="Click the color button to pick a color"
                                        type="text"
                                        variant="input"
                                        showColorPicker={true}
                                        field={field}
                                        error={fieldState.error}
                                        vimedra={featuredCards[openedIndex]?.shapeName === "Vimedra"}
                                    />
                                )}
                            />
                            <Controller
                                name="badgeBgColor"
                                control={form.control}
                                render={({ field, fieldState }: { field: ControllerRenderProps<FormData, "badgeBgColor">; fieldState: any }) => (
                                    <TextInput
                                        label="Badge Background Color"
                                        description="The background color for the year and category badges at the top of the card"
                                        placeholder="Click the color button to pick a color"
                                        type="text"
                                        variant="input"
                                        showColorPicker={true}
                                        field={field}
                                        error={fieldState.error}
                                        vimedra={featuredCards[openedIndex]?.shapeName === "Vimedra"}
                                    />
                                )}
                            />
                            <Controller
                                name="badgeTextColor"
                                control={form.control}
                                render={({ field, fieldState }: { field: ControllerRenderProps<FormData, "badgeTextColor">; fieldState: any }) => (
                                    <TextInput
                                        label="Badge Text Color"
                                        description="The text color for the year and category badges at the top of the card"
                                        placeholder="Click the color button to pick a color"
                                        type="text"
                                        variant="input"
                                        showColorPicker={true}
                                        field={field}
                                        error={fieldState.error}
                                        vimedra={featuredCards[openedIndex]?.shapeName === "Vimedra"}
                                    />
                                )}
                            />
                            <Controller
                                name="cardTextColor"
                                control={form.control}
                                render={({ field, fieldState }: { field: ControllerRenderProps<FormData, "cardTextColor">; fieldState: any }) => (
                                    <TextInput
                                        label="Card Text Color"
                                        description="Color for the main body text and descriptions"
                                        placeholder="e.g., text-[#444444]"
                                        type="text"
                                        variant="input"
                                        showColorPicker={true}
                                        field={field}
                                        error={fieldState.error}
                                        vimedra={featuredCards[openedIndex]?.shapeName === "Vimedra"}
                                    />
                                )}
                            />
                            <Controller
                                name="cardTitleColor"
                                control={form.control}
                                render={({ field, fieldState }: { field: ControllerRenderProps<FormData, "cardTitleColor">; fieldState: any }) => (
                                    <TextInput
                                        label="Card Title Color"
                                        description="Color for the main card title heading"
                                        placeholder="e.g., text-[#1E1E1E]"
                                        type="text"
                                        variant="input"
                                        showColorPicker={true}
                                        field={field}
                                        error={fieldState.error}
                                        vimedra={featuredCards[openedIndex]?.shapeName === "Vimedra"}
                                    />
                                )}
                            />
                        </div>

                        {/* Content Section */}
                        <div className="flex flex-col gap-4">
                            <h3 className={cn("text-lg font-semibold border-b pb-2", featuredCards[openedIndex]?.titleColor)}>
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
                                vimedra={featuredCards[openedIndex]?.shapeName === "Vimedra"}
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
                                vimedra={featuredCards[openedIndex]?.shapeName === "Vimedra"}
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
                                vimedra={featuredCards[openedIndex]?.shapeName === "Vimedra"}
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
                                vimedra={featuredCards[openedIndex]?.shapeName === "Vimedra"}
                            />
                            <ImageUpload
                                label="Card Hero Image"
                                description="The main image displayed at the bottom of the card. Upload a new image to replace the current one."
                                currentImage={openedIndex !== null ? featuredCards[openedIndex]?.cardImage : undefined}
                                onImageChange={setCardImageFile}
                                vimedra={featuredCards[openedIndex]?.shapeName === "Vimedra"}
                            />
                        </div>

                        {/* Metrics Section */}
                        <div className="flex flex-col gap-4">
                            <h3 className={cn("text-lg font-semibold border-b pb-2", featuredCards[openedIndex]?.titleColor)}>
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
                                vimedra={featuredCards[openedIndex]?.shapeName === "Vimedra"}
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
                                vimedra={featuredCards[openedIndex]?.shapeName === "Vimedra"}
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
                                vimedra={featuredCards[openedIndex]?.shapeName === "Vimedra"}
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
                                vimedra={featuredCards[openedIndex]?.shapeName === "Vimedra"}
                            />
                        </div>

                        {/* Shape & Branding Section */}
                        <div className="flex flex-col gap-4">
                            <h3 className={cn("text-lg font-semibold border-b pb-2", featuredCards[openedIndex]?.titleColor)}>
                                Shape & Branding
                            </h3>
                            <Controller
                                name="shapeColor"
                                control={form.control}
                                render={({ field, fieldState }: { field: ControllerRenderProps<FormData, "shapeColor">; fieldState: any }) => (
                                    <TextInput
                                        label="Primary Shape Color"
                                        description="The main color for the decorative shape icon on the left side of the card"
                                        placeholder="Click the color button to pick a color"
                                        type="text"
                                        variant="input"
                                        showColorPicker={true}
                                        field={field}
                                        error={fieldState.error}
                                        vimedra={featuredCards[openedIndex]?.shapeName === "Vimedra"}
                                    />
                                )}
                            />
                            <Controller
                                name="shapeColor2"
                                control={form.control}
                                render={({ field, fieldState }: { field: ControllerRenderProps<FormData, "shapeColor2">; fieldState: any }) => (
                                    <TextInput
                                        label="Secondary Shape Color"
                                        description="The accent color for the secondary shape element (appears layered on the primary shape)"
                                        placeholder="Click the color button to pick a color"
                                        type="text"
                                        variant="input"
                                        showColorPicker={true}
                                        field={field}
                                        error={fieldState.error}
                                        vimedra={featuredCards[openedIndex]?.shapeName === "Vimedra"}
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
                                vimedra={featuredCards[openedIndex]?.shapeName === "Vimedra"}
                            />
                            <ImageUpload
                                label="Shape Icon Image"
                                description="The small icon image that appears within the shape decoration. Upload a new image to replace the current one."
                                currentImage={openedIndex !== null ? featuredCards[openedIndex]?.shapeImage : undefined}
                                onImageChange={setShapeImageFile}
                                vimedra={featuredCards[openedIndex]?.shapeName === "Vimedra"}
                            />
                        </div>

                        {/* Behavior & Interaction Section */}
                        <div className="flex flex-col gap-4">
                            <h3 className={cn("text-lg font-semibold border-b pb-2", featuredCards[openedIndex]?.titleColor)}>
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
                                vimedra={featuredCards[openedIndex]?.shapeName === "Vimedra"}
                            />
                            <Controller
                                name="cursorColor"
                                control={form.control}
                                render={({ field, fieldState }: { field: ControllerRenderProps<FormData, "cursorColor">; fieldState: any }) => (
                                    <TextInput
                                        label="Cursor Indicator Color"
                                        description="Color of the circular cursor indicator that appears when hovering over the card"
                                        placeholder="Click the color button to pick a color"
                                        type="text"
                                        variant="input"
                                        showColorPicker={true}
                                        field={field}
                                        error={fieldState.error}
                                        vimedra={featuredCards[openedIndex]?.shapeName === "Vimedra"}
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
                                        vimedra={featuredCards[openedIndex]?.shapeName === "Vimedra"}
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
                        <Button type="submit" disabled={form.formState.isSubmitting} className={cn("cursor-pointer border px-4 py-2 rounded-md w-40 mb-4 self-center", featuredCards[openedIndex]?.shapeName === "Vimedra" ? "text-white border-white" : "text-black border-black")}>
                            {form.formState.isSubmitting ? "Updating..." : "Update Card"}
                        </Button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )}
        </div>
    )
}
