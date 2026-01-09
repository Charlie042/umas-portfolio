"use client";
import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { IoImageOutline, IoClose } from "react-icons/io5";

interface ImageUploadProps {
  label: string;
  description?: string;
  currentImage?: any; // Sanity image object
  onImageChange: (file: File | null) => void;
  vimedra?: boolean;
  error?: any;
}

export function ImageUpload({
  label,
  description,
  currentImage,
  onImageChange,
  vimedra = false,
  error,
}: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const textColorClass = cn("text-[#1e1e1e]", vimedra ? "text-white" : "");
  const borderColorClass = cn(
    "border-[#1e1e1e]",
    vimedra ? "border-white/30" : ""
  );

  // Get current image URL if available
  const getCurrentImageUrl = () => {
    if (preview) return preview;
    if (currentImage) {
      try {
        const imageSource = (currentImage as any)?.asset || currentImage;
        if (imageSource) {
          return urlFor(imageSource as SanityImageSource)
            .width(400)
            .height(300)
            .url();
        }
      } catch (error) {
        console.error("Error getting image URL:", error);
      }
    }
    return null;
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        alert("Please select an image file");
        return;
      }

      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        alert("Image size must be less than 10MB");
        return;
      }

      setSelectedFile(file);
      onImageChange(file);

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemove = () => {
    setSelectedFile(null);
    setPreview(null);
    onImageChange(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const imageUrl = getCurrentImageUrl();

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        <label className={cn("text-sm font-medium", textColorClass)}>
          {label}
        </label>
        {description && (
          <p className={cn("text-xs opacity-70", textColorClass)}>
            {description}
          </p>
        )}
      </div>

      {/* Current/Preview Image */}
      {(imageUrl || preview) && (
        <div className="relative">
          <div
            className={cn(
              "relative w-full max-w-[400px] h-[300px] rounded-lg overflow-hidden border",
              borderColorClass
            )}
          >
            <Image
              src={preview || imageUrl || ""}
              alt={label}
              width={400}
              height={300}
              className="object-contain w-full h-full"
              onError={(e) => {
                console.error("Image load error:", e);
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
              }}
            />
            {selectedFile && (
              <div className="absolute top-2 right-2">
                <button
                  type="button"
                  onClick={handleRemove}
                  className={cn(
                    "p-1 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors",
                    vimedra ? "bg-red-600 hover:bg-red-700" : ""
                  )}
                  aria-label="Remove image"
                >
                  <IoClose className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
          {selectedFile && (
            <p className={cn("text-xs mt-1", textColorClass)}>
              New image selected: {selectedFile.name}
            </p>
          )}
        </div>
      )}

      {/* Upload Button */}
      <div className="flex items-center gap-2">
        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
          id={`image-upload-${label.replace(/\s+/g, "-").toLowerCase()}`}
        />
        <label
          htmlFor={`image-upload-${label.replace(/\s+/g, "-").toLowerCase()}`}
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-md border cursor-pointer transition-colors hover:opacity-80",
            borderColorClass,
            vimedra
              ? "bg-white/10 hover:bg-white/20 text-white"
              : "bg-transparent hover:bg-gray-50 text-[#1e1e1e]"
          )}
        >
          <IoImageOutline className="w-5 h-5" />
          <span className="text-sm font-medium">
            {imageUrl || preview ? "Change Image" : "Upload Image"}
          </span>
        </label>
        {selectedFile && (
          <button
            type="button"
            onClick={handleRemove}
            className={cn(
              "px-3 py-2 rounded-md border text-sm transition-colors",
              borderColorClass,
              vimedra
                ? "hover:bg-white/20 text-white"
                : "hover:bg-gray-100 text-[#1e1e1e]"
            )}
          >
            Cancel
          </button>
        )}
      </div>

      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
}
