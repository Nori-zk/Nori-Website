import { SectionProps } from "../../types/contentful";
import TopRectangle from "../../assets/Rectangle_69.svg?react";
import BottomRectangle from "../../assets/Rectangle_70.svg?react";
import TopRightLightOne from "../../assets/Group_147.svg?react";
import TopRightLightTwo from "../../assets/Group_149.svg?react";
import BottomLeftLightOne from "../../assets/Group_148.svg?react";
import BottomLeftLightTwo from "../../assets/Group_150.svg?react";

const SectionThree = ({ section }: SectionProps) => {
  console.log("SectionThree section:", section);
  return (
    <div className="section-three w-full min-h-screen md:h-auto relative flex flex-col justify-between py-8 md:py-12 lg:py-16">
      <TopRectangle
        width="100%"
        preserveAspectRatio="none"
        className="w-full absolute top-0 z-20"
      />

      <div className="absolute top-1 right-0 z-10 w-1/2 md:w-2/5 lg:w-1/2">
        <TopRightLightOne className="absolute top-0 right-0 w-full" />
        <TopRightLightTwo className="absolute top-0 right-0 w-full" />
      </div>

      {/* Content Area */}
      <div className="z-30 text-white w-full h-full flex justify-center items-center px-4 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row w-3/4 gap-6 lg:gap-4">
          <div className="w-full lg:w-1/2 font-light-medium">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              {section?.title}
            </div>
            <div className="flex flex-col text-base sm:text-lg md:text-xl lg:text-2xl mt-2 md:mt-4">
              {section?.slug}
              {section?.greentext}
            </div>
          </div>
          <div className="w-full lg:w-1/2 font-medium">
            {section?.contentBlocks?.map((cb) => (
              <div
                key={cb.sys.id}
                className="flex flex-col sm:flex-row gap-4 mb-6 md:mb-8"
              >
                <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[var(--color-light-green)] flex-shrink-0">
                  {cb.greenText}
                </div>
                <div className="flex flex-col text-base sm:text-lg md:text-xl lg:text-2xl font-light flex items-center">
                  {cb.heading}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-1 left-0 z-10 w-1/2 md:w-2/5 lg:w-1/2">
        <BottomLeftLightOne className="absolute bottom-0 left-0 w-full" />
        <BottomLeftLightTwo className="absolute bottom-0 left-0 w-full" />
      </div>

      {/* Bottom Rectangle - Opaque with high z-index */}
      <BottomRectangle
        width="100%"
        preserveAspectRatio="none"
        className="w-full absolute bottom-0 z-20"
      />
    </div>
  );
};

export default SectionThree;
