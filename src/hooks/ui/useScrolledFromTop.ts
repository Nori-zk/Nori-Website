import { useEffect, useState, RefObject } from "react";

export function useScrolledFromTop(
  offset = 0,
  scrollRef?: RefObject<HTMLElement | null>
) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = scrollRef?.current?.scrollTop ?? window.scrollY;
      const scrolled = scrollTop > offset;

      setIsScrolled(scrolled);
    };

    handleScroll();

    const scrollElement = scrollRef?.current ?? window;
    scrollElement.addEventListener("scroll", handleScroll, { passive: true });
    return () => scrollElement.removeEventListener("scroll", handleScroll);
  }, [offset, scrollRef]);

  return isScrolled;
}
