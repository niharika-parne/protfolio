"use client";

import { useEffect, useRef, useState } from "react";

export function useIntersectionObserver(
  options?: IntersectionObserverInit
) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(([entry]) => {
      // Once it intersects, we can optionally keep it true
      if (entry.isIntersecting) {
        setIsIntersecting(true);
      }
    }, options);

    observer.observe(currentElement);

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  // Use callback ref to handle dynamically mounted elements correctly
  const setRef = (node: HTMLElement | null) => {
    elementRef.current = node;
  };

  return [setRef, isIntersecting] as const;
}
