import Image from "next/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { urlFor } from "@/sanity/lib/image";
import { Loader } from "../Loader/image-loader";

type Playground = {
  Images: PlaygroundProps[];
};
const Playground1 = ({ Images }: Playground) => {
  const img = Images.map((image)=> image.images).map((image)=> image[0].image);
  const img2 = Images.map((image)=> image.images).map((image)=> image[1].image);
  const img3 = Images.map((image)=> image.images).map((image)=> image[2].image);
  const img4 = Images.map((image)=> image.images).map((image)=> image[3].image);

  console.log(img);

  if ( Images.length === 0){
    return (
      <Loader/>
    )
  } else {
    return (
      <div className="max-w-screen-xl lg:mx-3 flex flex-col md:flex-row gap-3 mx-5">
        <div className="flex flex-col">
          {/* Two side-by-side images */}
          <div className="max-w-[790px] w-full flex flex-col md:flex-row gap-5">
            <div className="max-w-[490px] w-full aspect-[49/33] rounded-lg overflow-hidden border">
              <Image
                // src={thinking}
                src={
                  urlFor(img[0] as SanityImageSource)
                        .width(800)
                        .height(600).url()
                        
                }
                alt="playground"
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="max-w-[490px] w-full aspect-[49/33] rounded-lg overflow-hidden border">
              <Image
              src={
                  urlFor(img2[0] as SanityImageSource)
                      .width(800)
                      .height(600).url()
              }
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
            src={
                urlFor(img3[0] as SanityImageSource)
                    .width(800)
                    .height(600).url()        
            }
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
            src={
                urlFor(img4[0] as SanityImageSource)
                    .width(800)
                    .height(600).url()
                    
            }
              alt="playground"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    );
  }
  
 
};

export default Playground1;

const Playground2 = ({ Images }: Playground) => {
  const img = Images.map((image)=> image.images).map((image)=> image[0].image);
  const img2 = Images.map((image)=> image.images).map((image)=> image[1].image);
  const img3 = Images.map((image)=> image.images).map((image)=> image[2].image);
  const img4 = Images.map((image)=> image.images).map((image)=> image[3].image);
  const img5 = Images.map((image)=> image.images).map((image)=> image[4].image);
  const img6 = Images.map((image)=> image.images).map((image)=> image[5].image);
  
  
  if (Images.length === 0) {
    return (
      <Loader />
    )
  } else {   
  return (
    <div className="max-w-screen-xl lg:mx-3 flex flex-col gap-3 mx-5">
      {/* First row */}
      <div className="flex flex-col md:flex-row gap-5">
        <div className="max-w-[330px] w-full aspect-square md:aspect-[6/5] rounded-lg overflow-hidden">
          <Image
          src={
            urlFor(img[0] as SanityImageSource)
                  .width(800)
                  .height(600).url() 
          }
            alt="playground"
            width={500}
            height={500}
            priority
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-[330px] w-full aspect-square md:aspect-[6/5] rounded-lg overflow-hidden">
          <Image
          src={
            urlFor(img2[0] as SanityImageSource)
                  .width(800)
                  .height(600).url()    
          }
            alt="playground"
            width={500}
            height={500}
            priority
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-[535px] w-full aspect-square md:aspect-video rounded-lg overflow-hidden">
          <Image
          src={
            urlFor(img3[0] as SanityImageSource)
                  .width(800)
                  .height(600).url()
          }
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
          src={
            urlFor(img4[0] as SanityImageSource)
                  .width(800)
                  .height(600).url()
          }
            alt="playground"
            width={500}
            height={500}
            priority
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-[400px] w-full aspect-square md:aspect-[7/5] rounded-lg overflow-hidden">
          <Image
          src={
            urlFor(img5[0] as SanityImageSource)
                  .width(800)
                  .height(600).url() 
          }
            alt="playground"
            width={500}
            height={500}
            priority
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-[400px] w-full aspect-square md:aspect-[7/5] rounded-lg overflow-hidden">
          <Image
          src={
            urlFor(img6[0] as SanityImageSource)
                  .width(800)
                  .height(600).url()    
          }
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
  }
};

const Playground3 = ({ Images }: Playground) => {
  const img = Images.map((image)=> image.images).map((image)=> image[0].image);
  const img2 = Images.map((image)=> image.images).map((image)=> image[1].image);
  const img3 = Images.map((image)=> image.images).map((image)=> image[2].image);
  const img4 = Images.map((image)=> image.images).map((image)=> image[3].image);
  const img5 = Images.map((image)=> image.images).map((image)=> image[4].image);
  const img6 = Images.map((image)=> image.images).map((image)=> image[5].image);
  
  if (Images.length === 0) {
    return (
      <Loader />
    )
  } else { 
    return (
      <div className="max-w-screen-xl lg:mx-3 flex flex-col gap-5 mx-5">
        {/* First row */}
        <div className="flex flex-col md:flex-row gap-5">
          <div className="max-w-[535px] w-full aspect-square md:aspect-video rounded-lg overflow-hidden">
            <Image
            src={
              urlFor(img[0] as SanityImageSource)
                    .width(800)
                    .height(600).url()    
            }
              alt="playground"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-[330px] w-full aspect-square md:aspect-[6/5] rounded-lg overflow-hidden">
            <Image
            src={
              urlFor(img2[0] as SanityImageSource)
                    .width(800)
                    .height(600).url()    
            }
              alt="playground"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-[330px] w-full aspect-square md:aspect-[6/5] rounded-lg overflow-hidden">
            <Image
            src={
              urlFor(img3[0] as SanityImageSource)
                    .width(800)
                    .height(600).url()    
            }
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
            src={
              urlFor(img4[0] as SanityImageSource)
                    .width(800)
                    .height(600).url()    
            }
              alt="playground"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-[535px] w-full aspect-square md:aspect-video rounded-lg overflow-hidden">
            <Image
            src={
              urlFor(img5[0] as SanityImageSource)
                    .width(800)
                    .height(600).url()    
            }
              alt="playground"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-[330px] w-full aspect-square md:aspect-[6/5] rounded-lg overflow-hidden">
            <Image
            src={
              urlFor(img6[0] as SanityImageSource)
                    .width(800)
                    .height(600).url()    
            }
              alt="playground"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    );
  }
 
};

export { Playground1, Playground2, Playground3 };
