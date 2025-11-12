import { ContentBlock, SectionProps } from "../../../types/contentful";
import { RichTextRenderer } from "../../RichTextRenderer";

const SectionTwo = ({ section }: SectionProps) => {
  return (
    <div className="text-white w-full px-4 md:px-8 lg:px-24">
      {section?.contentBlocks?.map((cb: ContentBlock) => (
        <div
          key={cb.sys.id}
          className="mx-auto my-8 md:my-12 lg:my-16 p-[1px] rounded-xl md:rounded-2xl max-w-8xl"
          style={{
            background: `
              radial-gradient(6% 100% at 4% 0%, #6EE18F 0%, rgba(44, 236, 99, 0) 100%),
              radial-gradient(6% 100% at 96% 100%, #5BD184 0%, rgba(91, 209, 132, 0) 100%)
            `,
          }}
        >
          <div
            className="flex flex-col lg:flex-row items-center justify-between w-full min-h-[200px] md:min-h-[250px] lg:min-h-[284px] p-6 md:p-10 lg:p-8 xl:p-16 rounded-xl md:rounded-2xl gap-6 lg:gap-8"
            style={{
              background: `
                 radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 1) 0%, transparent 80%),
                 radial-gradient(10% 10% at 0% 0%, rgba(91, 209, 132, 0.2) 0%, rgba(91, 209, 132, 0.004) 100%),
                 radial-gradient(10% 10% at 100% 100%, rgba(91, 209, 132, 0.2) 0%, rgba(91, 209, 132, 0.004) 100%)
               `,
              backdropFilter: "blur(1000px)",
            }}
          >
            <div className="flex flex-col justify-center w-full lg:w-[40%] font-lightmedium">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[var(--color-light-green)]">
                {cb.greenText}
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-2">
                {cb.heading}
              </div>
            </div>
            <RichTextRenderer
              content={cb.body}
              className="w-full lg:w-[60%] text-base sm:text-lg md:text-xl lg:text-2xl font-light"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionTwo;
