"use client";

import { useEffect, useState } from "react";

export function useTypewriter(
  words: string[],
  typeSpeed: number = 80,
  deleteSpeed: number = 40,
  delayBetweenWords: number = 1800
): string {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleType = () => {
      const fullWord = words[currentWordIndex];

      if (!isDeleting) {
        // Typing
        const nextText = fullWord.slice(0, currentText.length + 1);
        setCurrentText(nextText);

        if (nextText === fullWord) {
          // Finished typing, pause before deleting
          timer = setTimeout(() => setIsDeleting(true), delayBetweenWords);
        } else {
          timer = setTimeout(handleType, typeSpeed);
        }
      } else {
        // Deleting
        const nextText = fullWord.slice(0, currentText.length - 1);
        setCurrentText(nextText);

        if (nextText === "") {
          // Finished deleting, move to next word
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          timer = setTimeout(handleType, 200); // Small pause before next word
        } else {
          timer = setTimeout(handleType, deleteSpeed);
        }
      }
    };

    timer = setTimeout(handleType, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typeSpeed, deleteSpeed, delayBetweenWords]);

  return currentText;
}
