import { SectionProps } from "../../../types/contentful";
import RightLightOne from "../../../assets/Group_151.svg?react";
import { RichTextRenderer } from "../../RichTextRenderer";
import Swap from "../../Swap";

const SectionFive = ({ section }: SectionProps) => {
  return (
    <div className="relative px-4 md:px-8 lg:px-24 py-8 md:py-16 lg:py-32 text-white h-auto w-full">
      <div className="absolute top-0 right-0 z-10 w-1/2 md:w-2/5 lg:w-1/2">
        <RightLightOne className="absolute right-0 w-full" />
      </div>
      <div className="relative z-20">
        <div className="flex flex-col lg:flex-row w-full gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 z-5">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              {section?.title}
            </div>
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light mt-4">
              {section?.slug}
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <Swap />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full lg:pt-6 xl:pt-4 gap-8 lg:gap-12">
          <div className="flex w-full lg:w-1/5 h-auto justify-center">
            <div className="justify-center bg-white/10 p-4 h-full rounded-xl w-full max-w-sm lg:max-w-none">
              <div className="bg-[var(--color-light-green)] text-[var(--color-very-dark-green)] py-4 px-2 rounded-xl text-sm sm:text-base md:text-base lg:text-lg font-light flex justify-center text-medium">
                Ethereum ↦ Mina
              </div>
              <div className="text-white py-4 px-2 rounded-xl text-sm sm:text-base md:text-base lg:text-lg font-light flex justify-center">
                Mina ↦ Ethereum
              </div>
            </div>
          </div>
          <div className="w-full lg:w-4/5">
            {section?.contentBlocks?.map((cb) => (
              <RichTextRenderer
                key={cb.sys.id}
                content={cb.body}
                className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-xl font-light"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
