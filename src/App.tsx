import { useRef } from "react";
import GradualBlur from "./blocks/Animations/GradualBlur/GradualBlur";
import LightRays from "./blocks/Backgrounds/LightRays/LightRays";
import Header from "./components/Header/Header";
import SectionFour from "./components/Sections/SectionFour/SectionFour";
import SectionOne from "./components/Sections/SectionOne/SectionOne";
import SectionTwo from "./components/Sections/SectionTwo/SectionTwo";
import SectionThree from "./components/SectionThree/SectionThree";
import { useSections } from "./hooks/data/useContentful";
import { useScrolledFromTop } from "./hooks/ui/useScrolledFromTop";
import "./main.css";
import { SectionTags } from "./types/contentful";

function App(): JSX.Element {
  const { data: sections, isLoading, error } = useSections();
  const scrollRef = useRef<HTMLDivElement>(null);
  const isScrolled = useScrolledFromTop(60, scrollRef);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!sections || sections.length === 0) return <div>No sections found</div>;

  return (
    <section
      style={{ position: "relative", height: "100%", overflow: "hidden" }}
    >
      {isScrolled && (
        <GradualBlur
          target="parent"
          position="top"
          height="6rem"
          strength={2}
          divCount={5}
          curve="bezier"
          exponential={true}
          opacity={1}
        />
      )}
      <div ref={scrollRef} style={{ height: "100%", overflowY: "auto" }}>
        <div className="overflow w-full bg-[var(--color-very-dark-green)]">
          <div className="flex flex-col justify-center h-full w-full">
            <div className="relative">
              <div className="absolute inset-0 z-0">
                <LightRays raysColor="#64E18E" />
              </div>
              <Header />
              <div className="h-1/2 w-full justify-center mt-20">
                <SectionOne
                  section={sections?.find(
                    (s) => s.tag === SectionTags.SectionOne
                  )}
                />
              </div>
            </div>
            <div className="flex justify-center">
              <SectionTwo
                section={sections?.find(
                  (s) => s.tag === SectionTags.SectionTwo
                )}
              />
            </div>
            <div className="flex w-full justify-center">
              <SectionThree
                section={sections?.find(
                  (s) => s.tag === SectionTags.SectionThree
                )}
              />
            </div>
            <div className="flex w-full justify-center">
              <SectionFour
                section={sections?.find(
                  (s) => s.tag === SectionTags.SectionFour
                )}
              />
            </div>
          </div>
        </div>
      </div>
      <GradualBlur
        target="parent"
        position="bottom"
        height="6rem"
        strength={2}
        divCount={5}
        curve="bezier"
        exponential={true}
        opacity={1}
      />
    </section>
  );
}

export default App;
