import { SectionProps } from "../../../types/contentful";
import LaserFlow from "../../../blocks/Animations/LaserFlow/LaserFlow";
import ElectricBorder from "../../../blocks/Animations/ElectricBorder/ElectricBorder";
import { useState } from "react";

const SectionSix = ({ section }: SectionProps) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="flex w-full justify-center items-center px-0 md:px-4 lg:px-8 py-8 md:py-12 min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[675px]">
      {/* Left LaserFlow */}
      <div
        className="flex w-[15%] lg:w-[20%] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[675px] items-center justify-end pr-0 lg:pr-2 relative overflow-hidden"
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
        className="relative flex-1 h-[400px] sm:h-[500px] md:h-[600px] lg:h-[600px]"
        style={{
          zIndex: 10,
        }}
      >
        <div
          className="relative w-full h-full rounded-3xl p-[1px]"
          style={{
            background:
              "linear-gradient(90deg, #6EE18F 0%, rgba(110, 225, 143, 0.1) 30%, rgba(110, 225, 143, 0.1) 70%, #6EE18F 100%)",
          }}
        >
          <div className="relative w-full h-full rounded-3xl overflow-hidden bg-[#060A08]">
            {/* Ellipse backgrounds */}
            <div
              className="absolute"
              style={{
                width: "1053px",
                height: "1053px",
                top: "-418px",
                left: "749px",
                background:
                  "radial-gradient(50% 50% at 50% 50%, rgba(6, 40, 23, 0.6) 0%, rgba(6, 40, 23, 0) 100%)",
                pointerEvents: "none",
              }}
            />
            <div
              className="absolute"
              style={{
                width: "1053px",
                height: "1053px",
                top: "90px",
                left: "-412px",
                background:
                  "radial-gradient(50% 50% at 50% 50%, rgba(6, 40, 23, 0.6) 0%, rgba(6, 40, 23, 0) 100%)",
                pointerEvents: "none",
              }}
            />
            {/* Background Image */}
            {/* <img
              src={FooterImage}
              alt="Footer background"
              className="w-full h-full object-fill"
              style={{ width: "100%", height: "100%" }}
            /> */}
            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-8">
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
                          window.location.href =
                            "https://alpha.app.nori-zk.com/";
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
      </div>

      {/* Right LaserFlow */}
      <div
        className="flex w-[15%] lg:w-[20%] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[675px] items-center justify-start pl-0 lg:pl-2 relative overflow-hidden"
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
