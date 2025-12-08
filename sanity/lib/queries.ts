import { defineQuery } from "next-sanity";
export const getFeaturedCards =
  defineQuery(`*[_type == "featuredCard"] | order(_createdAt asc){
_id,
badgeColor,
badgeTitle,
badgeYear,
bgColor,
cardImage {
  alt,
  asset
},
cardTitle,
comingSoon,
order,
cursorColor,
"description": description[].children[].text,
link,
percent1,
percent2,
percentForty,
percentSixty,
range,
shapeColor,
shapeColor2,
shapeImage,
shapeName,
target,
textColor,
titleColor
}
`);

export const aboutMeContent = defineQuery(`*[_type == "aboutMeContent"]{
paragraphs[]{
"paragraphText": text[].children[].text
}
}`);

export const playgroundContent = defineQuery(`*[_type == "playgroundSection"]{
 _id,
    name,
    images[]{
      altText,
      image{
      asset
      },
}
   }`);
