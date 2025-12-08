import Image from "next/image";
import {
  thinking,
  laptopImg,
  savour,
  serene,
  survey,
  phoneSurvey,
  surveyLarge,
  pad,
  vibers,
  createAcct,
  flowSync,
  laptop2,
  thinkWearIt,
  phone,
  xport,
  phones2,
} from "@/public";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { urlFor } from "@/sanity/lib/image";

type Playground = {
  Images: PlaygroundProps[];
};
const Playground1 = ({ Images }: Playground) => {
  // const img = Images.map((image) => image.images[0]).map((item) => item.image);

  // console.log(img);

  return (
    <div className="max-w-screen-xl lg:mx-3 flex flex-col md:flex-row gap-3 mx-5">
      <div className="flex flex-col">
        {/* Two side-by-side images */}
        <div className="max-w-[790px] w-full flex flex-col md:flex-row gap-5">
          <div className="max-w-[490px] w-full aspect-[49/33] rounded-lg overflow-hidden border">
            <Image
              src={thinking}
              // src={
              //   img.length > 0
              //     ? urlFor(img as SanityImageSource)
              //         .width(800)
              //         .height(600)
              //         .url()
              //     : thinking
              // }
              alt="playground"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-[490px] w-full aspect-[49/33] rounded-lg overflow-hidden border">
            <Image
              src={laptopImg}
              alt="playground"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Wide bottom image */}
        <div className="md:max-w-[790px] max-w-[650px] w-full aspect-[79/35] rounded-lg overflow-hidden mt-3">
          <Image
            src={savour}
            alt="playground"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Tall image on the right */}
      <div>
        <div className="md:max-w-[400px] max-w-[400px] w-full aspect-[43/68] rounded-lg overflow-hidden">
          <Image
            src={serene}
            alt="playground"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Playground1;

const Playground2 = ({ Images }: Playground) => {
  return (
    <div className="max-w-screen-xl lg:mx-3 flex flex-col gap-3 mx-5">
      {/* First row */}
      <div className="flex flex-col md:flex-row gap-5">
        <div className="max-w-[330px] w-full aspect-square md:aspect-[6/5] rounded-lg overflow-hidden">
          <Image
            src={survey}
            alt="playground"
            width={500}
            height={500}
            priority
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-[330px] w-full aspect-square md:aspect-[6/5] rounded-lg overflow-hidden">
          <Image
            src={phoneSurvey}
            alt="playground"
            width={500}
            height={500}
            priority
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-[535px] w-full aspect-square md:aspect-video rounded-lg overflow-hidden">
          <Image
            src={surveyLarge}
            alt="playground"
            width={500}
            height={500}
            priority
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Second row */}
      <div className="flex flex-col md:flex-row gap-5">
        <div className="max-w-[400px] w-full aspect-square md:aspect-[7/5] rounded-lg overflow-hidden">
          <Image
            src={pad}
            alt="playground"
            width={500}
            height={500}
            priority
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-[400px] w-full aspect-square md:aspect-[7/5] rounded-lg overflow-hidden">
          <Image
            src={vibers}
            alt="playground"
            width={500}
            height={500}
            priority
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-[400px] w-full aspect-square md:aspect-[7/5] rounded-lg overflow-hidden">
          <Image
            src={createAcct}
            alt="playground"
            width={500}
            height={500}
            priority
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

const Playground3 = ({ Images }: Playground) => {
  return (
    <div className="max-w-screen-xl lg:mx-3 flex flex-col gap-5 mx-5">
      {/* First row */}
      <div className="flex flex-col md:flex-row gap-5">
        <div className="max-w-[535px] w-full aspect-square md:aspect-video rounded-lg overflow-hidden">
          <Image
            src={flowSync}
            alt="playground"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-[330px] w-full aspect-square md:aspect-[6/5] rounded-lg overflow-hidden">
          <Image
            src={laptop2}
            alt="playground"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-[330px] w-full aspect-square md:aspect-[6/5] rounded-lg overflow-hidden">
          <Image
            src={thinkWearIt}
            alt="playground"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Second row */}
      <div className="flex flex-col md:flex-row gap-5">
        <div className="max-w-[330px] w-full aspect-square md:aspect-[6/5] rounded-lg overflow-hidden">
          <Image
            src={phone}
            alt="playground"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-[535px] w-full aspect-square md:aspect-video rounded-lg overflow-hidden">
          <Image
            src={xport}
            alt="playground"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-[330px] w-full aspect-square md:aspect-[6/5] rounded-lg overflow-hidden">
          <Image
            src={phones2}
            alt="playground"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export { Playground1, Playground2, Playground3 };
