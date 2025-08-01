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

const Playground1 = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex gap-3">
      <div className="flex flex-col gap-5">
        <div className="max-w-[790px] w-full flex  gap-5">
          <div className="max-w-[390px] w-full h-[330px] rounded-lg overflow-hidden">
            <Image
              src={thinking}
              alt="playground"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-[390px] w-full h-[330px] rounded-lg overflow-hidden">
            <Image
              src={laptopImg}
              alt="playground"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="max-w-[790px] w-full h-[350px] rounded-lg overflow-hidden">
          <Image
            src={savour}
            alt="playground"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div>
        <div className="max-w-[430px] w-full h-[700px] rounded-lg overflow-hidden">
          <Image
            src={serene}
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

export default Playground1;

const Playground2 = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col gap-3">
        <div className="flex gap-5">
          <div className="max-w-[330px] w-full h-[280px] rounded-lg overflow-hidden">
            <Image src={survey} alt="playground" width={500} height={500} className="w-full h-full object-cover" />
          </div>
          <div className="max-w-[330px] w-full h-[280px] rounded-lg overflow-hidden">
            <Image src={phoneSurvey} alt="playground" width={500} height={500} className="w-full h-full object-cover" />
          </div>
          <div className="max-w-[535px] w-full h-[280px] rounded-lg overflow-hidden">
            <Image src={surveyLarge} alt="playground" width={500} height={500} className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="flex gap-5">
      <div className="max-w-[400px] w-full h-[285px] rounded-lg overflow-hidden">
        <Image src={pad} alt="playground" width={500} height={500} className="w-full h-full object-cover" />
      </div>
        <div className="max-w-[400px] w-full h-[285px] rounded-lg overflow-hidden">
          <Image src={vibers} alt="playground" width={500} height={500} className="w-full h-full object-cover" />
        </div>
        <div className="max-w-[400px] w-full h-[285px] rounded-lg overflow-hidden">
          <Image src={createAcct} alt="playground" width={500} height={500} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

const Playground3 = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col gap-5">
        <div className="flex gap-5">
            <div className="max-w-[535px] w-full h-[285px] rounded-lg overflow-hidden">
                <Image src={flowSync} alt="playground" width={500} height={500} className="w-full h-full object-cover" />
            </div>
            <div className="max-w-[330px] w-full h-[285px] rounded-lg overflow-hidden">
                <Image src={laptop2} alt="playground" width={500} height={500} className="w-full h-full object-cover" />
            </div>
            <div className="max-w-[330px] w-full h-[285px] rounded-lg overflow-hidden">
                <Image src={thinkWearIt} alt="playground" width={500} height={500} className="w-full h-full object-cover" />
            </div>
        </div>
        <div className="flex gap-5">
            <div className="max-w-[330px] w-full h-[285px] rounded-lg overflow-hidden">
                <Image src={phone} alt="playground" width={500} height={500} className="w-full h-full object-cover" />
            </div>
            <div className="max-w-[535px] w-full h-[285px] rounded-lg overflow-hidden">
                <Image src={xport} alt="playground" width={500} height={500} className="w-full h-full object-cover" />
            </div>
            <div className="max-w-[330px] w-full h-[285px] rounded-lg overflow-hidden">
                <Image src={phones2} alt="playground" width={500} height={500} className="w-full h-full object-cover" />
            </div>
        </div>
    </div>
  );
};

export { Playground1, Playground2, Playground3 };
