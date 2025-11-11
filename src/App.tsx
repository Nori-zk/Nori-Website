import LightRays from "./blocks/Backgrounds/LightRays/LightRays";
import Header from "./components/Header/Header";
import SectionOne from "./components/Sections/SectionOne/SectionOne";
import SectionTwo from "./components/Sections/SectionTwo/SectionTwo";
import { useSections } from "./hooks/useContentful";
import "./main.css";
import { SectionTags } from "./types/contentful";

function App(): JSX.Element {
  const { data: sections, isLoading, error } = useSections();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!sections || sections.length === 0) return <div>No sections found</div>;

  return (
    <div className="overflow w-full bg-[radial-gradient(50%_100%_at_50%_0%,var(--color-dark-green)_1.31%,var(--color-very-dark-green)_100%)]">
      <div className="flex flex-col justify-center h-full w-full">
        <div className="absolute inset-0 z-0">
          <LightRays raysColor="#64E18E" />
        </div>
        <Header />
        <div className="h-1/2 w-full justify-center mt-20">
          <SectionOne
            section={sections?.find((s) => s.tag === SectionTags.SectionOne)}
          />
        </div>
        <div className="flex justify-center">
          <SectionTwo
            section={sections?.find((s) => s.tag === SectionTags.SectionTwo)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
