import { defineQuery } from "next-sanity";

export const FEATURE_CARD = defineQuery(`*[_type == "project"]{
  _id,
  id,
    bgColor,
  badgeColor,
    badgeYear,
    badgeTitle,
     badgeColor,
    cardTitle,
     description,
    percentForty,
    percentSixty,
    cardImage,
    textColor,
    titleColor,
    percent1,
    percent2,
    range,
    shapeColor,
    shapeColor2,
    shapeName,
    shapeImage,
    cursorColor,
    link,
    comingSoon,
}`);

export const TESTIMONIALS = defineQuery(`*[_type == "testimonial"]{
  _id,
  name,
  job,
  title,
  description,
  borderColor,
  bgColor,
  image
}`);