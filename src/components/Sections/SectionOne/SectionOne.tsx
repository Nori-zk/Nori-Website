import { useSectionsByTag } from "../../../hooks/useContentful";
import BottomShadows from "../../../assets/BottomShadows.svg?react";

function SectionOne() {
  var tag = "section-one";
  const {
    data: sections,
    isLoading,
    error,
  } = useSectionsByTag(tag, {
    preview: false,
  });

  if (isLoading) return <div>Loading sections with tag '{tag}'...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!sections || sections.length === 0)
    return <div>No sections found with tag '{tag}'</div>;

  return (
    <div className="flex flex-col w-full items-center h-1/2">
      <div className="w-[1407px] z-5 h-full flex flex-col">
        {sections.map((section) => (
          <div key={section.sys.id}>
            <h1 className="text-white text-[90px] font-medium text-center">
              {section.title}{" "}
              <span className="text-[var(--color-light-green)]">
                {section.greentext}
              </span>
            </h1>
            <div className="flex justify-center text-white text-[26px] font-normal w-full text-center">
              <div className="w-[1109px]">{section.slug}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-full justify-center relative">
        <BottomShadows className="absolute scale-[0.9]" title="BottomShadows" />
      </div>
    </div>
  );
}

export default SectionOne;
