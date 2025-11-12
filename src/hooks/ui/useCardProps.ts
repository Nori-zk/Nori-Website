import { CSSProperties } from "react";

export type CardOrientation = "horizontal" | "vertical";

export interface CardConfig {
  // Container styles
  containerClassName: string;
  containerStyle?: CSSProperties;

  // Inner content styles
  innerClassName: string;

  // Content layout
  showGreenText: boolean;
  titleClassName: string;
  greenTextClassName: string;
  bodyClassName: string;

  // Hover behavior
  enableElectricBorder: boolean;
}

export const useCardProps = (orientation: CardOrientation): CardConfig => {
  if (orientation === "horizontal") {
    return {
      containerClassName:
        "mx-auto my-8 md:my-12 lg:my-16 p-[1px] rounded-xl md:rounded-2xl w-full max-w-8xl",
      innerClassName:
        "flex flex-col lg:flex-row items-center justify-between w-full min-h-[200px] md:min-h-[250px] lg:min-h-[284px] p-6 md:p-10 lg:p-8 xl:p-16 rounded-xl md:rounded-2xl gap-6 lg:gap-8",
      showGreenText: true,
      titleClassName:
        "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-2",
      greenTextClassName:
        "text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[var(--color-light-green)]",
      bodyClassName:
        "w-full lg:w-[60%] text-base sm:text-lg md:text-xl lg:text-2xl font-light",
      enableElectricBorder: false,
    };
  }

  // vertical orientation
  return {
    containerClassName: "mx-auto my-0 p-[1px] rounded-xl md:rounded-2xl",
    containerStyle: {
      width: "414px",
      height: "526px",
    },
    innerClassName:
      "flex flex-col w-full h-full p-6 md:p-10 lg:p-8 xl:p-16 rounded-xl md:rounded-2xl gap-6",
    showGreenText: false,
    titleClassName: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-2xl",
    greenTextClassName: "",
    bodyClassName:
      "text-base sm:text-lg md:text-xl lg:text-2xl xl:text-xl font-light",
    enableElectricBorder: true,
  };
};
