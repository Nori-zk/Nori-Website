import { SectionProps } from "../../../types/contentful";
import RightLightOne from "../../../assets/Group_151.svg?react";
import { RichTextRenderer } from "../../RichTextRenderer";
import Swap from "../../Swap";

const SectionFive = ({ section }: SectionProps) => {
  return (
    <div className="relative p-4 text-white h-auto w-full">
      <div className="absolute top-0 right-0 z-10 w-1/2 md:w-2/5 lg:w-1/2">
        <RightLightOne className="absolute right-0 w-full" />
      </div>
      <div className="p-32 mt-32">
        <div className="flex w-full relative z-20">
          <div className="w-1/2">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl">
              {section?.title}
            </div>
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-light">
              {section?.slug}
            </div>
          </div>
          <Swap />
        </div>
        <div className="flex w-full pt-12 h-full">
          <div className="flex w-1/5 h-auto mr-24 justify-center ">
            <div className="justify-center bg-white/10 p-4 h-full rounded-xl w-full">
              <div className="bg-[var(--color-light-green)] text-[var(--color-very-dark-green)] h-1/2 py-4 rounded-xl text-base sm:text-lg md:text-xl lg:text-2xl font-light flex justify-center text-medium">
                Ethereum ↦ Mina
              </div>
              <div className="text-white h-1/2 py-4 rounded-xl sm:text-lg md:text-xl lg:text-2xl font-light flex justify-center">
                Mina ↦ Ethereum
              </div>
            </div>
          </div>
          <div className="w-4/5">
            {section?.contentBlocks?.map((cb) => (
              <RichTextRenderer
                content={cb.body}
                className="text-base sm:text-lg md:text-xl lg:text-2xl font-light "
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
