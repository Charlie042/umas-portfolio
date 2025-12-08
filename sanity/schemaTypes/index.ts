import { type SchemaTypeDefinition } from "sanity";
import { featuredCardType } from "./featuredCardTypes";
import { skillBadgeTypes } from "./skillBadgeTypes";
import { testimonialTypes } from "./testimonialTypes";
import { aboutMeTypes, aboutMeContentType } from "./aboutMeTypes";
import { playgroundImage, playgroundSection } from "./playgroundImageTypes";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    featuredCardType,
    aboutMeTypes,
    aboutMeContentType,
    skillBadgeTypes,
    testimonialTypes,
    playgroundImage,
    playgroundSection,
  ],
};
