import { ContentBlock, SectionProps } from "../../../types/contentful";
import { RichTextRenderer } from "../../RichTextRenderer";

const SectionTwo = ({ section }: SectionProps) => {
  return (
    <div className="text-white">
      {section?.contentBlocks?.map((cb: ContentBlock) => (
        <div
          key={cb.sys.id}
          className="m-[60px] p-[1px] rounded-[20px]"
          style={{
            background: `
              radial-gradient(6% 100% at 4% 0%, #6EE18F 0%, rgba(44, 236, 99, 0) 100%),
              radial-gradient(6% 100% at 96% 100%, #5BD184 0%, rgba(91, 209, 132, 0) 100%)
            `,
          }}
        >
          <div
            className="flex items-center justify-between w-[1406px] h-[284px] p-[60px] rounded-[20px]"
            style={{
              background: `
                radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 1) 0%, transparent 80%),
                radial-gradient(10% 10% at 0% 0%, rgba(91, 209, 132, 0.2) 0%, rgba(91, 209, 132, 0.004) 100%),
                radial-gradient(10% 10% at 100% 100%, rgba(91, 209, 132, 0.2) 0%, rgba(91, 209, 132, 0.004) 100%)
              `,
              backdropFilter: "blur(1000px)",
            }}
          >
            <div className="flex flex-col justify-center w-[480px] h-[120px] font-lightmedium">
              <div className="text-[32px] text-[var(--color-light-green)] ">
                {cb.greenText}
              </div>
              <div className="text-[60px]">{cb.heading}</div>
            </div>
            <RichTextRenderer
              content={cb.body}
              className="w-[763px] text-[26px] font-light"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionTwo;
