import { ContentBlock, SectionProps } from "../../../types/contentful";
import Card from "../../Card";

const SectionFour = ({ section }: SectionProps) => {
  return (
    <div className="text-white w-full px-4 md:px-8 lg:px-24">
      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl">
        {section?.title}
      </div>
      <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-6">
        {section?.slug}
      </div>

      <div className="overflow-x-auto pb-8 mx-4 md:-mx-8 lg:-mx-24 px-4 md:px-8 lg:px-24">
        <div className="flex flex-row gap-6 px-2">
          {section?.contentBlocks?.map((cb: ContentBlock) => (
            <Card key={cb.sys.id} contentBlock={cb} orientation="vertical" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
