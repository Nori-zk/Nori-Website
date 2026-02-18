import { SectionProps } from "../../../types/contentful";
import TopRectangle from "../../../assets/Rectangle_69.svg";
import BottomRectangle from "../../../assets/Rectangle_70.svg";
import TopRightLightOne from "../../../assets/Group_147.svg";
import TopRightLightTwo from "../../../assets/Group_149.svg";
import BottomLeftLightOne from "../../../assets/Group_148.svg";
import BottomLeftLightTwo from "../../../assets/Group_150.svg";
import One from "../../../assets/01.svg";
import Two from "../../../assets/02.svg";
import Three from "../../../assets/03.svg";
import { ReactNode, memo } from "react";

const GetGreenNumber = (numberString: string): ReactNode => {
  const svgClassName = "h-12 sm:h-14 md:h-16 lg:h-20 w-auto";

  if (numberString === "01") {
    return <img src={One} className={svgClassName} alt="01" />;
  } else if (numberString === "02") {
    return <img src={Two} className={svgClassName} alt="02" />;
  } else if (numberString === "03") {
    return <img src={Three} className={svgClassName} alt="03" />;
  }
};

const SectionThree = ({ section }: SectionProps) => {
  return (
    <div className="section-three w-full min-h-[750px] sm:min-h-[650px] md:min-h-[700px] relative flex flex-col justify-between py-8 md:py-12 lg:py-16">
      <img
        src={TopRectangle}
        alt="Top decoration"
        className="w-full absolute top-0 z-20"
        style={{ width: "100%", height: "auto" }}
      />

      <div className="absolute top-1 right-0 z-10 w-1/2 md:w-2/5 lg:w-1/2">
        <img
          src={TopRightLightOne}
          className="absolute top-0 right-0 w-full"
          alt="Top Right Light One"
        />
        <img
          src={TopRightLightTwo}
          className="absolute top-0 right-0 w-full"
          alt="Top Right Light Two"
        />
      </div>

      {/* Content Area */}
      <div className="z-30 text-white w-full h-full flex justify-center items-center px-2 sm:px-4 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center w-full sm:w-11/12 md:w-5/6 lg:w-3/4 gap-6 lg:gap-4">
          <div className="w-full lg:w-1/2 font-light-medium">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
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
                className="flex flex-row gap-3 sm:gap-4 mb-6 md:mb-8"
              >
                <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[var(--color-light-green)] flex-shrink-0">
                  {GetGreenNumber(cb.greenText)}
                </div>
                <div className="flex flex-col justify-center text-base sm:text-lg md:text-xl lg:text-2xl font-light">
                  {cb.heading}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-1 left-0 z-10 w-1/2 md:w-2/5 lg:w-1/2">
        <img
          src={BottomLeftLightOne}
          className="absolute bottom-0 left-0 w-full"
          alt="Bottom Left Light One"
        />
        <img
          src={BottomLeftLightTwo}
          className="absolute bottom-0 left-0 w-full"
          alt="Bottom Left Light Two"
        />
      </div>

      {/* Bottom Rectangle - Opaque with high z-index */}
      <img
        src={BottomRectangle}
        alt="Bottom decoration"
        className="w-full absolute bottom-0 z-20"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
};

export default memo(SectionThree);
