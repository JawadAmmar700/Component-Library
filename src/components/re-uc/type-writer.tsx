"use client";
import { cn } from "@/utils/cn";
import { ClassValue } from "clsx";
import React, { useEffect, useState } from "react";

interface TypeWriterProps {
  text: string;
  loop: boolean;
  cursorStyle?: ClassValue;
  TextStyle?: ClassValue;
  animationDuration: number;
}

const TypeWriter = ({
  loop,
  text,
  cursorStyle,
  TextStyle,
  animationDuration,
}: TypeWriterProps) => {
  const [animatedText, setAnimatedText] = useState("");

  useEffect(() => {
    const lastTimeRef: { current: number | null } = { current: null };
    let currentTextIndex = 0;
    let textLength = text.length + 1;

    const animation = () => {
      const now = performance.now();

      if (!lastTimeRef.current) {
        lastTimeRef.current = now;
      }

      const deltaTime = now - lastTimeRef.current;

      if (deltaTime > animationDuration) {
        if (loop) {
          if (currentTextIndex <= text.length) {
            currentTextIndex++;
            setAnimatedText(text.slice(0, currentTextIndex));
          }
          if (textLength <= currentTextIndex) {
            textLength--;
            setAnimatedText(text.slice(0, textLength));
          }

          lastTimeRef.current = now;
        } else {
          if (currentTextIndex < text.length) {
            currentTextIndex++;
            setAnimatedText(text.slice(0, currentTextIndex));
          }

          lastTimeRef.current = now;
        }
      }
      if (!loop) {
        if (currentTextIndex < text.length) {
          requestAnimationFrame(animation);
        } else {
          cancelAnimationFrame(animationId);
        }
      }
      if (loop) {
        if (textLength >= 0) {
          requestAnimationFrame(animation);
        } else {
          textLength = text.length + 1;
          currentTextIndex = 0;
          setAnimatedText(text.slice(0, currentTextIndex));
          requestAnimationFrame(animation);
        }
      }
    };

    const animationId = requestAnimationFrame(animation);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div
      className={cn(
        "flex text-white text-2xl relative items-center",
        TextStyle
      )}
    >
      <p>{animatedText}</p>
      <span
        className={cn("w-2 h-6 bg-white animate-blink", cursorStyle)}
        aria-label="cursor"
      />
    </div>
  );
};

export default TypeWriter;
