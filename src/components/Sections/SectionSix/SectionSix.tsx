import { SectionProps } from "../../../types/contentful";
import Border from "../../BridgeControlCardSVG/BridgeControlCardSVG";
import LaserFlow from "../../../blocks/Animations/LaserFlow/LaserFlow";
import ElectricBorder from "../../../blocks/Animations/ElectricBorder/ElectricBorder";
import { useState } from "react";

const SectionSix = ({ section }: SectionProps) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="flex w-full justify-center items-center h-full">
      {/* Left LaserFlow */}
      <div
        className="w-1/4 h-[450px] flex items-center justify-end pr-4 relative overflow-hidden"
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

      {/* Center Border Card */}
      <div
        style={{
          width: "1500px",
          height: "550px",
          position: "relative",
          overflow: "hidden",
          borderRadius: "20px",
          justifyContent: "center",
          display: "flex",
          zIndex: 10,
        }}
      >
        <Border>
          <div className="text-white w-full h-full flex flex-col items-center justify-center">
            <div
              style={{ width: "830px" }}
              className="flex flex-col items-center"
            >
              <div className="text-white text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium mb-4">
                {section?.title}{" "}
                <span className="text-[var(--color-light-green)]">
                  {section?.greentext}
                </span>
              </div>
              <div className="text-white text-center mb-6">{section?.slug}</div>
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
                      className="text-white px-8 py-3"
                    >
                      {"Start Now"}
                    </button>
                  </ElectricBorder>
                ) : (
                  <button
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    className="text-white px-8 py-3 border border-[var(--color-light-green)] rounded-2xl"
                  >
                    {"Start Now"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </Border>
      </div>

      {/* Right LaserFlow */}
      <div
        className="w-1/4 h-[450px] flex items-center justify-start pl-4 relative overflow-hidden"
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
