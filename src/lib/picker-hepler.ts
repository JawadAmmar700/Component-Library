"use client";
import { useCallback, useEffect, useRef } from "react";
import useSound from "use-sound";

type UseScrollProps = {
  velocity: number;
};

type UseSoundEffectProps = {
  sound?: "pop" | "click";
  volume: number;
  activeIndex: number;
  mute: boolean;
};

import { ClassValue } from "clsx";
import { cn } from "@/utils/cn";

const audioUrl = {
  pop: "https://gxiporbkm0ip3qac.public.blob.vercel-storage.com/pop-up-eRvfpNCvz3WKxC7o2bZQJxieoonNVF.mp3",
  click:
    "https://gxiporbkm0ip3qac.public.blob.vercel-storage.com/448081__breviceps__tic-toc-click-LspqrDuh6Kp2Du87kRRtLd2UZlujCM.wav",
};

const useScroll = ({ velocity }: UseScrollProps) => {
  const wheelRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef<boolean>(false);
  const startPosition = useRef<number>(0);
  const scrollTop = useRef<number>(0);

  const handleStart = useCallback((e: MouseEvent | TouchEvent) => {
    if (!wheelRef.current) return;
    const wheel = wheelRef.current;
    wheel.style.cursor = "grabbing";
    const currentPosition = "touches" in e ? e.touches[0].pageY : e.pageY;
    startPosition.current = currentPosition;
    scrollTop.current = wheel.scrollTop;
    isDragging.current = true;
  }, []);

  const handleEnd = useCallback(() => {
    wheelRef.current!.style.cursor = "grab";
    isDragging.current = false;
  }, []);

  const handleMove = useCallback(
    (e: MouseEvent | TouchEvent) => {
      e.preventDefault();

      if (!wheelRef.current || !isDragging.current) return;
      const wheel = wheelRef.current;

      const endPosition = "touches" in e ? e.touches[0].pageY : e.pageY;
      const delta = (endPosition - startPosition.current) * velocity;
      wheel.scrollTop = scrollTop.current - delta;
    },
    [velocity]
  );

  const handleWheel = useCallback((e: WheelEvent) => {
    if (!wheelRef.current) return;
    const wheel = wheelRef.current;

    if (e.deltaY < 50 && e.deltaY > -50) return;
    e.preventDefault();
    const slowDownFactor = 0.2;
    const delta = e.deltaY * slowDownFactor;
    wheel.scrollTop += delta;
  }, []);

  useEffect(() => {
    const wheel = wheelRef.current;
    if (!wheel) return;

    // Mouse events
    wheel.addEventListener("mousedown", handleStart);
    wheel.addEventListener("mouseup", handleEnd);
    wheel.addEventListener("mousemove", handleMove);
    wheel.addEventListener("mouseleave", handleEnd);

    // Touch events
    wheel.addEventListener("touchstart", handleStart);
    wheel.addEventListener("touchend", handleEnd);
    wheel.addEventListener("touchmove", handleMove);

    // Wheel event
    wheel.addEventListener("wheel", handleWheel);

    // Cleanup
    return () => {
      wheel.removeEventListener("mousedown", handleStart);
      wheel.removeEventListener("mouseup", handleEnd);
      wheel.removeEventListener("mousemove", handleMove);
      wheel.removeEventListener("mouseleave", handleEnd);

      wheel.removeEventListener("touchstart", handleStart);
      wheel.removeEventListener("touchend", handleEnd);
      wheel.removeEventListener("touchmove", handleMove);

      wheel.removeEventListener("wheel", handleWheel);
    };
  }, [handleEnd, handleMove, handleStart, handleWheel]);

  return { ref: wheelRef };
};

const useSoundEffects = ({
  activeIndex,
  mute,
  sound,
  volume,
}: UseSoundEffectProps) => {
  const [play] = useSound(audioUrl[sound || "pop"], {
    volume,
  });

  useEffect(() => {
    if (!mute) {
      play();
    }
  }, [activeIndex, mute, play]);
  return { play };
};

const PickerclassNames = {
  containerClass: "relative group rounded-lg transform-gpu hide-scroll-bar",
  wheelClass:
    "h-full overflow-scroll overflow-x-hidden hide-scroll-bar snap-y snap-mandatory cursor-grab",
  labelClass:
    "bg-black/10 text-sm absolute inset-0 select-none h-[30px] w-full md:text-base font-bold -z-10 rounded-md flex items-center justify-end px-2 text-white",
  buttonClass:
    "absolute w-4 h-4 opacity-0 z-50 rounded-full transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100",
  pickerItemClass:
    "focus:outline-none focus:ring-4 flex items-center font-semibold w-full h-[30px] rounded-md select-none snap-center transition-opacity duration-75 ease-in-out transform-gpu",
};

const classNameMerge = (
  key: keyof typeof PickerclassNames,
  className: ClassValue
) => {
  return cn(PickerclassNames[key], className);
};

const conditionalClass = (
  key: keyof typeof PickerclassNames,
  condition: boolean[],
  trueClass: string[],
  falseClass: string[]
) => {
  return condition
    .map((c, i) => classNameMerge(key, c ? trueClass[i] : falseClass[i]))
    .join(" ");
};

export {
  useScroll,
  useSoundEffects,
  classNameMerge,
  PickerclassNames,
  conditionalClass,
};
