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
