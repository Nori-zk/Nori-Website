import BottomShadows from "../../../assets/BottomShadows.svg?react";
import { SectionProps } from "../../../types/contentful";

const SectionOne = ({ section }: SectionProps) => {
  return (
    <div className="relative flex flex-col w-full items-center">
      <div className="w-[1407px] z-5 flex flex-col">
        <div key={section?.sys.id}>
          <h1 className="text-white text-[90px] font-medium text-center">
            {section?.title}{" "}
            <span className="text-[var(--color-light-green)]">
              {section?.greentext}
            </span>
          </h1>
          <div className="flex justify-center text-white text-[26px] font-normal w-full text-center">
            <div className="w-[1109px]">{section?.slug}</div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center mt-8">
        <BottomShadows className="scale-[0.9]" title="BottomShadows" />
      </div>
    </div>
  );
};

export default SectionOne;
