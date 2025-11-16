import { useState } from "react";
import { ContentBlock } from "../types/contentful";
import { RichTextRenderer } from "./RichTextRenderer";
import { useCardProps, CardOrientation } from "../hooks/ui/useCardProps";
import ElectricBorder from "../blocks/Animations/ElectricBorder/ElectricBorder";

interface CardProps {
  contentBlock: ContentBlock;
  orientation?: CardOrientation;
}

const Card = ({ contentBlock, orientation = "horizontal" }: CardProps) => {
  const [hover, setHover] = useState(false);
  const config = useCardProps(orientation);

  // Shared gradient backgrounds
  const borderGradient = `
    radial-gradient(6% 100% at 4% 0%, #6EE18F 0%, rgba(44, 236, 99, 0) 100%),
    radial-gradient(6% 100% at 96% 100%, #5BD184 0%, rgba(91, 209, 132, 0) 100%)
  `;

  const innerGradient = `
    radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 1) 0%, transparent 80%),
    radial-gradient(10% 10% at 0% 0%, rgba(91, 209, 132, 0.2) 0%, rgba(91, 209, 132, 0.004) 100%),
    radial-gradient(10% 10% at 100% 100%, rgba(91, 209, 132, 0.2) 0%, rgba(91, 209, 132, 0.004) 100%)
  `;

  const cardContent = (
    <div
      className={config.innerClassName}
      style={{
        background: innerGradient,
        backdropFilter: "blur(1000px)",
      }}
    >
      <div
        className={`${
          orientation === "horizontal"
            ? "flex flex-col justify-center w-full lg:w-[40%]"
            : "w-full"
        } font-lightmedium`}
      >
        {config.showGreenText && (
          <div className={config.greenTextClassName}>
            {contentBlock.greenText}
          </div>
        )}
        <div className={config.titleClassName}>{contentBlock.heading}</div>
      </div>
      <div
        className={`${
          orientation === "vertical"
            ? "w-full overflow-auto flex-1"
            : config.bodyClassName
        }`}
      >
        <RichTextRenderer content={contentBlock.body} />
      </div>
    </div>
  );

  // Vertical orientation with electric border on hover
  if (config.enableElectricBorder) {
    return (
      <div
        className={config.containerClassName}
        style={config.containerStyle}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {hover ? (
          <ElectricBorder
            color={"var(--color-light-green)"}
            speed={1}
            chaos={0.5}
            thickness={2}
            style={{ borderRadius: 16 }}
            className="h-full p-1"
          >
            {cardContent}
          </ElectricBorder>
        ) : (
          <div
            className="h-full p-[1px] rounded-xl md:rounded-2xl"
            style={{
              background: borderGradient,
            }}
          >
            {cardContent}
          </div>
        )}
      </div>
    );
  }

  // Horizontal orientation with static gradient border
  return (
    <div
      className={config.containerClassName}
      style={{
        ...config.containerStyle,
        background: borderGradient,
      }}
    >
      {cardContent}
    </div>
  );
};

export default Card;
