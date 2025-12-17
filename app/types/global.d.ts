interface SanityImage {
  _key: string;
  altText: string;
  image: {
    asset: SanityAsset;
  };
}

interface PlaygroundProps {
  images: SanityImage[];
  name: string;
  _id: string;
}

interface SanitySkillImage {
  alt: string;
  asset: SanityAsset;
  _type: string;
}
interface SkillBadgeProps {
  icon: SanitySkillImage[];
  name: string;
  id: string;
}
