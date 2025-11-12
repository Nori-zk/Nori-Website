import { ContentBlock, SectionProps } from "../../../types/contentful";
import Card from "../../Card";
import { RichTextRenderer } from "../../RichTextRenderer";

const SectionTwo = ({ section }: SectionProps) => {
  return (
    <div className="text-white w-full px-4 md:px-8 lg:px-24">
      {section?.contentBlocks?.map((cb: ContentBlock) => (
        <Card key={cb.sys.id} contentBlock={cb} />
      ))}
    </div>
  );
};

export default SectionTwo;
