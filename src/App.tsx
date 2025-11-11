import LightRays from "./blocks/Backgrounds/LightRays/LightRays";
import Header from "./components/Header/Header";
import SectionOne from "./components/Sections/SectionOne/SectionOne";
import SectionTwo from "./components/Sections/SectionTwo/SectionTwo";
import "./main.css";

function App(): JSX.Element {
  return (
    <div className="h-full w-full bg-[radial-gradient(50%_100%_at_50%_0%,var(--color-dark-green)_1.31%,var(--color-very-dark-green)_100%)]">
      <div className="flex flex-col justify-center h-full w-full">
        <div className="absolute inset-0 z-0">
          <LightRays raysColor="#64E18E" />
        </div>
        <Header />
        <div className="h-3/4 w-full justify-center mt-20">
          <SectionOne />
        </div>
        <div className="flex">
          <SectionTwo />
        </div>
      </div>
    </div>
  );
}

export default App;
