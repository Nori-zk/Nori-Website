import BottomShadows from "../../../assets/BottomShadows.svg?react";
import { SectionProps } from "../../../types/contentful";

const SectionOne = ({ section }: SectionProps) => {
  return (
    <div className="relative flex flex-col w-full items-center px-4 md:px-8 lg:px-12">
      <div className="w-full max-w-7xl z-5 flex flex-col">
        <div key={section?.sys.id}>
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-center">
            {section?.title}{" "}
            <span className="text-[var(--color-light-green)]">
              {section?.greentext}
            </span>
          </h1>
          <div className="flex justify-center text-white text-base sm:text-lg md:text-xl lg:text-2xl font-normal w-full text-center mt-4 md:mt-6">
            <div className="w-full max-w-4xl px-4">{section?.slug}</div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center mt-6 md:mt-8">
        <BottomShadows className="scale-75 sm:scale-90 md:scale-100 w-full max-w-4xl" title="BottomShadows" />
      </div>
    </div>
  );
};

export default SectionOne;
