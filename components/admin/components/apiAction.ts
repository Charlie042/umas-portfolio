"use server";
import { client } from "@/sanity/lib/client";
import { writeClient } from "@/sanity/lib/write-client";
import {
  aboutMeContent,
  getFeaturedCards,
  playgroundContent,
  skillBadge,
} from "@/sanity/lib/queries";

// Helper function to upload image to Sanity
async function uploadImageToSanity(
  file: File | Blob,
  filename?: string,
  contentType?: string
): Promise<string | null> {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const asset = await writeClient.assets.upload("image", buffer, {
      filename: filename || (file instanceof File ? file.name : "image.jpg"),
      contentType:
        contentType || (file instanceof File ? file.type : "image/jpeg"),
    });

    return asset._id;
  } catch (error: any) {
    console.error("Error uploading image to Sanity:", error);
    return null;
  }
}

export async function fetchData() {
  const data = await client.fetch(playgroundContent);
  return data;
}

export async function fetchSkillBadgeData() {
  const data = await client.fetch(skillBadge);

  return data;
}

export async function fetchAboutMeData() {
  const data = await client.fetch(aboutMeContent);
  return data;
}

export async function fetchFeaturedWorkData() {
  const data = await client.fetch(getFeaturedCards);
  return data;
}

// Server action to upload a single image
export async function uploadImage(
  formData: FormData
): Promise<{ success: boolean; assetId?: string; error?: string }> {
  try {
    const file = formData.get("file") as File;
    if (!file) {
      return { success: false, error: "No file provided" };
    }

    const assetId = await uploadImageToSanity(file);
    if (assetId) {
      return { success: true, assetId };
    }
    return { success: false, error: "Failed to upload image" };
  } catch (error: any) {
    console.error("Error in uploadImage:", error);
    return { success: false, error: error.message || "Failed to upload image" };
  }
}

export async function updateFeaturedCard(documentId: string, data: any) {
  try {
    // Convert description string to Sanity block format
    const description = data.cardDescription
      ? [
          {
            _type: "block",
            children: [
              {
                _type: "span",
                text: data.cardDescription,
              },
            ],
          },
        ]
      : undefined;

    // Handle image assets if provided (already uploaded)
    let cardImageAsset = null;
    let shapeImageAsset = null;

    if (data.cardImageAssetId) {
      cardImageAsset = {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: data.cardImageAssetId,
        },
        alt: data.cardImageAlt || "Card image",
      };
    }

    if (data.shapeImageAssetId) {
      shapeImageAsset = {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: data.shapeImageAssetId,
        },
        alt: data.shapeImageAlt || "Shape image",
      };
    }

    // Prepare the update data
    const updateData: any = {
      bgColor: data.bgColor,
      badgeYear: data.badgeYear,
      badgeTitle: data.badgeTitle,
      badgeColor: data.badgeColor,
      cardTitle: data.cardTitle,
      cardDescription: description,
      link: data.cardLink || "",
      percent1: data.percent1,
      percent2: data.percent2,
      percentSixty: data.percentSixty,
      percentForty: data.percentForty,
      textColor: data.cardTextColor,
      titleColor: data.cardTitleColor,
      shapeColor: data.shapeColor,
      shapeColor2: data.shapeColor2,
      shapeName: data.shapeName,
      cursorColor: data.cursorColor,
      comingSoon: data.comingSoon || false,
      order: data.cardOrder,
      range: data.cardRange,
      target: data.cardTarget,
    };

    // Add image assets if uploaded
    if (cardImageAsset) {
      updateData.cardImage = cardImageAsset;
    }

    if (shapeImageAsset) {
      updateData.shapeImage = shapeImageAsset;
    }

    // Remove undefined values
    Object.keys(updateData).forEach((key) => {
      if (updateData[key] === undefined) {
        delete updateData[key];
      }
    });

    const result = await writeClient.patch(documentId).set(updateData).commit();

    return { success: true, result };
  } catch (error: any) {
    console.error("Error updating featured card:", error);
    return { success: false, error: error.message || "Failed to update card" };
  }
}

export async function createFeaturedCard(data: any) {
  try {
    // Convert description string to Sanity block format
    const description = data.cardDescription
      ? [
          {
            _type: "block",
            children: [
              {
                _type: "span",
                text: data.cardDescription,
              },
            ],
          },
        ]
      : undefined;

    // Handle image assets if provided (already uploaded)
    let cardImageAsset = null;
    let shapeImageAsset = null;

    if (data.cardImageAssetId) {
      cardImageAsset = {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: data.cardImageAssetId,
        },
        alt: data.cardImageAlt || "Card image",
      };
    }

    if (data.shapeImageAssetId) {
      shapeImageAsset = {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: data.shapeImageAssetId,
        },
        alt: data.shapeImageAlt || "Shape image",
      };
    }

    // Prepare the create data
    const createData: any = {
      _type: "featuredCard",
      bgColor: data.bgColor,
      badgeYear: data.badgeYear,
      badgeTitle: data.badgeTitle,
      badgeColor: data.badgeColor,
      cardTitle: data.cardTitle,
      cardDescription: description,
      link: data.cardLink || "",
      percent1: data.percent1,
      percent2: data.percent2,
      percentSixty: data.percentSixty,
      percentForty: data.percentForty,
      textColor: data.cardTextColor,
      titleColor: data.cardTitleColor,
      shapeColor: data.shapeColor,
      shapeColor2: data.shapeColor2,
      shapeName: data.shapeName,
      cursorColor: data.cursorColor,
      comingSoon: data.comingSoon || false,
      order: data.cardOrder || 0,
      range: data.cardRange || [0, 1],
      target: data.cardTarget || 1,
    };

    // Add image assets if uploaded
    if (cardImageAsset) {
      createData.cardImage = cardImageAsset;
    }

    if (shapeImageAsset) {
      createData.shapeImage = shapeImageAsset;
    }

    // Remove undefined values
    Object.keys(createData).forEach((key) => {
      if (createData[key] === undefined) {
        delete createData[key];
      }
    });

    const result = await writeClient.create(createData);

    return { success: true, documentId: result._id, result };
  } catch (error: any) {
    console.error("Error creating featured card:", error);
    return { success: false, error: error.message || "Failed to create card" };
  }
}
