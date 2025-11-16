import { SectionProps } from "../../../types/contentful";
import LaserFlow from "../../../blocks/Animations/LaserFlow/LaserFlow";
import ElectricBorder from "../../../blocks/Animations/ElectricBorder/ElectricBorder";
import { useState } from "react";
import FooterImage from "../../../assets/Footer.png";

const SectionSix = ({ section }: SectionProps) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="flex w-full justify-center items-center h-full px-4 md:px-8 py-8 md:py-12">
      {/* Left LaserFlow */}
      <div
        className="flex w-1/4 h-[600px] md:h-[450px] items-center justify-end pr-2 md:pr-4 relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, white 15%, white 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, white 15%, white 100%)",
        }}
      >
        <div
          style={{
            width: "500px",
            height: "1200px",
            left: "200px",
            zIndex: 1,
          }}
        >
          <LaserFlow
            key={1}
            style={{ width: "800px" }}
            className={"-rotate-90"}
            horizontalBeamOffset={-0.0}
            verticalBeamOffset={-0.095}
            color="#64E18E"
            horizontalSizing={1}
            verticalSizing={4}
            fogIntensity={0.6}
            wispIntensity={6.0}
            dpr={undefined}
          />
        </div>
      </div>

      {/* Center Card with Background Image */}
      <div
        className="w-full lg:w-auto relative flex justify-center"
        style={{
          maxWidth: "1404px",
          zIndex: 10,
        }}
      >
        <div className="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[675px]">
          {/* Background Image */}
          <img
            src={FooterImage}
            alt="Footer background"
            className="w-full h-full object-contain absolute inset-0"
            style={{
              minHeight:
                "min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[675px]",
            }}
          />
          {/* Content Overlay */}
          <div className="relative inset-0 flex flex-col items-center justify-center p-4 md:p-8 min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[675px]">
            <div className="w-full flex flex-col items-center">
              <div className="text-white text-center text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-medium mb-2 md:mb-4">
                {section?.title}{" "}
                <span className="text-[var(--color-light-green)]">
                  {section?.greentext}
                </span>
              </div>
              <div className="text-white text-center text-sm sm:text-base md:text-lg lg:text-xl mb-4 md:mb-6 px-4 md:px-8">
                {section?.slug}
              </div>
              <div className="flex justify-center">
                {hover ? (
                  <ElectricBorder
                    color={"var(--color-light-green)"}
                    speed={1}
                    chaos={0.5}
                    thickness={2}
                    style={{ borderRadius: 16 }}
                    className="p-1"
                  >
                    <button
                      onMouseEnter={() => setHover(true)}
                      onMouseLeave={() => setHover(false)}
                      className="text-white text-sm sm:text-base md:text-lg px-6 md:px-8 py-2 md:py-3"
                      onClick={() => {
                        window.location.href = "https://alpha.app.nori-zk.com/";
                      }}
                    >
                      {"Start Now"}
                    </button>
                  </ElectricBorder>
                ) : (
                  <button
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    className="text-white text-sm sm:text-base md:text-lg px-6 md:px-8 py-2 md:py-3 border border-[var(--color-light-green)] rounded-2xl"
                  >
                    {"Start Now"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right LaserFlow */}
      <div
        className="flex w-1/4 h-[600px] md:h-[450px] items-center justify-start pl-2 md:pl-4 relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to left, transparent 0%, white 15%, white 100%)",
          WebkitMaskImage:
            "linear-gradient(to left, transparent 0%, white 15%, white 100%)",
        }}
      >
        <div
          style={{
            width: "500px",
            height: "1200px",
            right: "200px",
            zIndex: 1,
          }}
        >
          <LaserFlow
            key={2}
            style={{ width: "800px", right: "300px" }}
            className={"rotate-90"}
            horizontalBeamOffset={0.0}
            verticalBeamOffset={-0.095}
            color="#64E18E"
            horizontalSizing={1}
            verticalSizing={4}
            fogIntensity={0.6}
            wispIntensity={6.0}
            dpr={undefined}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
