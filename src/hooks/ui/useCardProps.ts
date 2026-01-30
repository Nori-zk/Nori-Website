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
        "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl mt-2",
      greenTextClassName:
        "text-lg sm:text-xl md:text-2xl lg:text-2xl text-[var(--color-light-green)]",
      bodyClassName:
        "w-full lg:w-[60%] text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-2xl font-light",
      enableElectricBorder: false,
    };
  }

  // vertical orientation
  return {
    containerClassName:
      "mx-auto my-0 p-[1px] rounded-xl md:rounded-2xl flex-shrink-0 w-[85vw] sm:w-[320px] md:w-[360px] lg:w-[380px]",
    containerStyle: {
      height: "400px",
    },
    innerClassName:
      "flex flex-col w-full h-full p-6 md:p-8 lg:p-8 xl:p-12 rounded-xl md:rounded-2xl gap-2 md:gap-3",
    showGreenText: false,
    titleClassName: "text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl",
    greenTextClassName: "",
    bodyClassName:
      "text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-light",
    enableElectricBorder: true,
  };
};
