import React from "react";
import { useNextSanityImage } from "next-sanity-image";
import SanityImage from "../../reusables/SanityImage/SanityImage.comp";

const EnergyEvolutionSection = ({ configuredSanityClient, data }: any) => {
  const imageProps = data && useNextSanityImage(configuredSanityClient, data.image);

  const renderHighlight = ({ title, description, icon }: any) => (
      <div className="flex-col">
          <div className="gap-4 desktop:gap-4 inline-flex items-center">
              <div className={"w-[54px]"}>
                <SanityImage image={icon} style={{
                    width: 60,
                    marginTop: 20,
                }} />
              </div>
              <div className="items-center">
                  <h1 className="font-bold text-blue text-[14px] mt-[20px] leading-[19px] py-8 desktop:text-[18px]">
                      {title}
                  </h1>
              </div>
          </div>
          <div>
              <div>
                  <p className="text-[14px] text-gray leading-6 desktop:text-[18px]">
                      {description}
                  </p>
              </div>
          </div>
      </div>
  );

  return (
    <>
      <div
        style={{
            backgroundImage: `url(${imageProps && imageProps.src})`,
        }} className="h-[680px] w-full object-fill bg-cover">
          <div className="backdrop-blur-sm w-full h-full relative">
             <div className="max-w-7xl w-full mx-auto py-32 px-8">
                <h1 className="font-extrabold text-[40px] desktop:text-[70px] capitalize">
                    {data && data.title}
                </h1>
                <p className="pt-8 font-normal text-justify text-[14px] desktop:text-[20px] desktop:w-1/2">
                    {data && data.description}
                </p>
            </div>
          </div>
      </div>

      <div
        className="relative w-4/5 bg-white rounded-xl px-8 gap-12 text-justify mx-auto -mt-64 desktop:-mt-[140px] desktop:flex flex-col-3 desktop:max-w-7xl"
      >
          {data && data.highlights.map((item: any, index: number) => (
              <div key={index}>
                  {renderHighlight(item)}
              </div>
          ))}
      </div>
    </>
  );
};

export default EnergyEvolutionSection;
