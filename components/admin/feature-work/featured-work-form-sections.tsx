"use client";

import { TextInput } from "../components/text-input";
import { ImageUpload } from "../components/image-upload";
import { Controller, type Control, type FieldErrors, type UseFormRegister } from "react-hook-form";
import type { FeaturedCardFormData, FeaturedCardWithId } from "./featured-work-types";

type SectionProps = {
  control: Control<FeaturedCardFormData>;
  register: UseFormRegister<FeaturedCardFormData>;
  errors: FieldErrors<FeaturedCardFormData>;
  headingClassName: string;
  vimedra: boolean;
  openedIndex: number;
  featuredCards: FeaturedCardWithId[];
  onCardImageChange: (file: File | null) => void;
  onShapeImageChange: (file: File | null) => void;
};

export function FeaturedWorkFormAppearance({
  control,
  headingClassName,
  vimedra,
}: Pick<SectionProps, "control" | "headingClassName" | "vimedra">) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className={headingClassName}>Card Appearance</h3>
      <Controller
        name="bgColor"
        control={control}
        render={({ field, fieldState }) => (
          <TextInput
            label="Card Background Color"
            description="The main background color of the entire featured card"
            placeholder="Click the color button to pick a color"
            type="text"
            variant="input"
            showColorPicker
            field={field}
            error={fieldState.error}
            vimedra={vimedra}
          />
        )}
      />
      <Controller
        name="badgeBgColor"
        control={control}
        render={({ field, fieldState }) => (
          <TextInput
            label="Badge Background Color"
            description="The background color for the year and category badges at the top of the card"
            placeholder="Click the color button to pick a color"
            type="text"
            variant="input"
            showColorPicker
            field={field}
            error={fieldState.error}
            vimedra={vimedra}
          />
        )}
      />
      <Controller
        name="badgeTextColor"
        control={control}
        render={({ field, fieldState }) => (
          <TextInput
            label="Badge Text Color"
            description="The text color for the year and category badges at the top of the card"
            placeholder="Click the color button to pick a color"
            type="text"
            variant="input"
            showColorPicker
            field={field}
            error={fieldState.error}
            vimedra={vimedra}
          />
        )}
      />
      <Controller
        name="cardTextColor"
        control={control}
        render={({ field, fieldState }) => (
          <TextInput
            label="Card Text Color"
            description="Color for the main body text and descriptions"
            placeholder="e.g., text-[#444444]"
            type="text"
            variant="input"
            showColorPicker
            field={field}
            error={fieldState.error}
            vimedra={vimedra}
          />
        )}
      />
      <Controller
        name="cardTitleColor"
        control={control}
        render={({ field, fieldState }) => (
          <TextInput
            label="Card Title Color"
            description="Color for the main card title heading"
            placeholder="e.g., text-[#1E1E1E]"
            type="text"
            variant="input"
            showColorPicker
            field={field}
            error={fieldState.error}
            vimedra={vimedra}
          />
        )}
      />
    </div>
  );
}

export function FeaturedWorkFormContent({
  register,
  errors,
  headingClassName,
  vimedra,
  openedIndex,
  featuredCards,
  onCardImageChange,
}: Pick<
  SectionProps,
  | "register"
  | "errors"
  | "headingClassName"
  | "vimedra"
  | "openedIndex"
  | "featuredCards"
  | "onCardImageChange"
>) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className={headingClassName}>Content</h3>
      <TextInput
        label="Badge Year"
        description="The year displayed in the top-right badge (e.g., 2024)"
        placeholder="e.g., 2024"
        type="text"
        variant="input"
        name="badgeYear"
        register={register("badgeYear")}
        error={errors.badgeYear}
        vimedra={vimedra}
      />
      <TextInput
        label="Badge Category Title"
        description="The category text shown in the badge (e.g., 'Branding, Web & Mobile')"
        placeholder="e.g., Branding, Web & Mobile"
        type="text"
        variant="input"
        name="badgeTitle"
        register={register("badgeTitle")}
        error={errors.badgeTitle}
        vimedra={vimedra}
      />
      <TextInput
        label="Card Title"
        description="The main heading displayed prominently on the card"
        placeholder="e.g., Building Serene's Anonymous Support Platform..."
        type="text"
        variant="input"
        name="cardTitle"
        register={register("cardTitle")}
        error={errors.cardTitle}
        vimedra={vimedra}
      />
      <TextInput
        label="Card Description"
        description="The detailed description text that appears below the title"
        placeholder="Enter a detailed description of the project..."
        type="text"
        variant="textarea"
        name="cardDescription"
        register={register("cardDescription")}
        error={errors.cardDescription}
        vimedra={vimedra}
      />
      <ImageUpload
        label="Card Hero Image"
        description="The main image displayed at the bottom of the card. Upload a new image to replace the current one."
        currentImage={featuredCards[openedIndex]?.cardImage}
        onImageChange={onCardImageChange}
        vimedra={vimedra}
      />
    </div>
  );
}

export function FeaturedWorkFormMetrics({
  register,
  errors,
  headingClassName,
  vimedra,
}: Pick<SectionProps, "register" | "errors" | "headingClassName" | "vimedra">) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className={headingClassName}>Performance Metrics</h3>
      <TextInput
        label="First Percentage Value"
        description="The numeric percentage value (e.g., '60%') displayed on the left"
        placeholder="e.g., 60%"
        type="text"
        variant="input"
        name="percent1"
        register={register("percent1")}
        error={errors.percent1}
        vimedra={vimedra}
      />
      <TextInput
        label="First Metric Description"
        description="Text that appears below the first percentage explaining what it represents"
        placeholder="e.g., Projected increase in session completions"
        type="text"
        variant="textarea"
        name="percentSixty"
        register={register("percentSixty")}
        error={errors.percentSixty}
        vimedra={vimedra}
      />
      <TextInput
        label="Second Percentage Value"
        description="The numeric percentage value (e.g., '40%') displayed on the right"
        placeholder="e.g., 40%"
        type="text"
        variant="input"
        name="percent2"
        register={register("percent2")}
        error={errors.percent2}
        vimedra={vimedra}
      />
      <TextInput
        label="Second Metric Description"
        description="Text that appears below the second percentage explaining what it represents"
        placeholder="e.g., Expected rise in first-time sign-ups"
        type="text"
        variant="textarea"
        name="percentForty"
        register={register("percentForty")}
        error={errors.percentForty}
        vimedra={vimedra}
      />
    </div>
  );
}

export function FeaturedWorkFormShape({
  control,
  register,
  errors,
  headingClassName,
  vimedra,
  openedIndex,
  featuredCards,
  onShapeImageChange,
}: Pick<
  SectionProps,
  | "control"
  | "register"
  | "errors"
  | "headingClassName"
  | "vimedra"
  | "openedIndex"
  | "featuredCards"
  | "onShapeImageChange"
>) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className={headingClassName}>Shape & Branding</h3>
      <Controller
        name="shapeColor"
        control={control}
        render={({ field, fieldState }) => (
          <TextInput
            label="Primary Shape Color"
            description="The main color for the decorative shape icon on the left side of the card"
            placeholder="Click the color button to pick a color"
            type="text"
            variant="input"
            showColorPicker
            field={field}
            error={fieldState.error}
            vimedra={vimedra}
          />
        )}
      />
      <Controller
        name="shapeColor2"
        control={control}
        render={({ field, fieldState }) => (
          <TextInput
            label="Secondary Shape Color"
            description="The accent color for the secondary shape element (appears layered on the primary shape)"
            placeholder="Click the color button to pick a color"
            type="text"
            variant="input"
            showColorPicker
            field={field}
            error={fieldState.error}
            vimedra={vimedra}
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
        register={register("shapeName")}
        error={errors.shapeName}
        vimedra={vimedra}
      />
      <ImageUpload
        label="Shape Icon Image"
        description="The small icon image that appears within the shape decoration. Upload a new image to replace the current one."
        currentImage={featuredCards[openedIndex]?.shapeImage}
        onImageChange={onShapeImageChange}
        vimedra={vimedra}
      />
    </div>
  );
}

export function FeaturedWorkFormBehavior({
  control,
  register,
  errors,
  headingClassName,
  vimedra,
}: Pick<
  SectionProps,
  "control" | "register" | "errors" | "headingClassName" | "vimedra"
>) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className={headingClassName}>Behavior & Interaction</h3>
      <TextInput
        label="External Link URL"
        description="Optional link that opens when users click the card (e.g., Behance project page)"
        placeholder="e.g., https://www.behance.net/gallery/..."
        type="text"
        variant="input"
        name="cardLink"
        register={register("cardLink")}
        error={errors.cardLink}
        vimedra={vimedra}
      />
      <Controller
        name="cursorColor"
        control={control}
        render={({ field, fieldState }) => (
          <TextInput
            label="Cursor Indicator Color"
            description="Color of the circular cursor indicator that appears when hovering over the card"
            placeholder="Click the color button to pick a color"
            type="text"
            variant="input"
            showColorPicker
            field={field}
            error={fieldState.error}
            vimedra={vimedra}
          />
        )}
      />
      <Controller
        name="comingSoon"
        control={control}
        render={({ field, fieldState }) => (
          <TextInput
            label="Coming Soon Status"
            description="Enable this to show a 'Coming Soon' badge and disable the clickable link"
            placeholder=""
            type="boolean"
            variant="toggle"
            field={field}
            error={fieldState.error}
            vimedra={vimedra}
          />
        )}
      />
    </div>
  );
}
