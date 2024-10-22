"use client";
import React, { useCallback, useMemo } from "react";
import { Volume, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface IOSPickerProps {
  inView: number;
  velocity: number;
  onChange: (value: string | null) => void;
  label: string;
  children: React.ReactNode;
}

interface PickerItemProps {
  value?: string | null;
  option: string;
  id?: number;
  activeIndex?: number;
  active?: boolean;
}

const PickerItem = ({
  value,
  option,
  id,
  activeIndex,
  active = false,
}: PickerItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (active && itemRef.current) {
      itemRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, [active]);

  return (
    <div
      key={`${option}-${id}`}
      ref={itemRef}
      data-index={id}
      data-value={value}
      className={`${
        activeIndex !== id
          ? "opacity-40 scale-75 rotate-3"
          : "opacity-100 scale-100 text-sm -rotate-3"
      } mt-2 text-center focus:outline-none focus:ring-4 font-semibold select-none snap-center transition-opacity duration-100 ease-in-out transform-gpu`}
    >
      {option}
    </div>
  );
};

const Picker = ({
  children,
  inView,
  velocity,
  onChange,
  label,
}: IOSPickerProps) => {
  const wheelRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef<boolean>(false);
  const startPosition = useRef<number>(0);
  // const audioRef = useRef<HTMLAudioElement | null>(null);
  const scrollTop = useRef<number>(0);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [mute, setMute] = useState<boolean>(true);
  const itemHeight = 30;
  const rootMargin = (inView - 1) * itemHeight;
  const containerHeight = (inView + (inView - 1)) * itemHeight;

  const flattenedChildren = useMemo(() => {
    return React.Children.toArray(children).reduce<
      React.ReactElement<PickerItemProps>[]
    >((acc, child) => {
      if (
        React.isValidElement<PickerItemProps>(child) &&
        child.type === PickerItem
      ) {
        acc.push(child);
      } else if (Array.isArray(child)) {
        acc.push(
          ...child.filter(
            (c): c is React.ReactElement<PickerItemProps> =>
              React.isValidElement(c) && c.type === PickerItem
          )
        );
      }
      return acc;
    }, []);
  }, [children]);

  const handleStart = useCallback((e: MouseEvent | TouchEvent) => {
    if (!wheelRef.current) return;
    const wheel = wheelRef.current;

    const currentPosition = "touches" in e ? e.touches[0].pageY : e.pageY;
    startPosition.current = currentPosition;
    scrollTop.current = wheel.scrollTop;
    isDragging.current = true;
  }, []);

  const handleEnd = useCallback(() => {
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
    console.log("rerenders");

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

  // useEffect(() => {
  //   if (!mute && audioRef.current) {
  //     audioRef.current.pause();
  //     audioRef.current.currentTime = 0;
  //     audioRef.current.play();
  //   }
  // }, [activeIndex, mute]);

  useEffect(() => {
    const wheel = wheelRef.current;
    if (!wheel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index")!);
            const value = entry.target.getAttribute("data-value")!;
            setActiveIndex(index);
            onChange(value);
          }
        });
      },
      {
        threshold: 0.9,
        root: wheelRef.current,
        rootMargin: `-${rootMargin}px 0px -${rootMargin}px 0px`,
      }
    );

    const childrenArray = Array.from(wheel.children);
    childrenArray.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      const childrenArray = Array.from(wheel.children);
      childrenArray.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, [flattenedChildren, rootMargin, onChange]);

  return (
    <div
      style={{ height: `${containerHeight}px` }}
      className="w-48 relative bg-transparent overflow-hidden group rounded-lg grid grid-cols-3 items-center transform-gpu hide-scroll-bar"
    >
      {/* <audio
        className="hidden"
        ref={audioRef}
        src="/minimal-pop.mp3"
        autoPlay={false}
      ></audio> */}
      <div
        style={{ height: `${itemHeight}px` }}
        className="bg-black/10 w-full text-sm select-none  md:text-base font-bold absolute -z-10 rounded-md flex items-center justify-end px-2 text-white"
      >
        {label}
        <button
          onClick={() => setMute((prev) => !prev)}
          className="absolute right-0 -top-7 w-4 h-4 opacity-0 rounded-full transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100"
        >
          {mute ? (
            <VolumeX
              className={`w-4  ${
                mute ? "scale-100 animate-fadeIn" : "scale-75 animate-fadeOut"
              } `}
            />
          ) : (
            <Volume
              className={`w-4  ${
                !mute ? "scale-100 animate-fadeIn" : "scale-75 animate-fadeOut"
              } `}
            />
          )}
        </button>
      </div>
      <div
        style={{
          paddingTop: `${rootMargin}px`,
          paddingBottom: `${rootMargin + itemHeight}px`,
        }}
        ref={wheelRef}
        className="h-full col-span-2 text-white flex flex-col overflow-y-scroll overflow-x-hidden hide-scroll-bar snap-y snap-mandatory "
      >
        {flattenedChildren.map((child, index) =>
          React.cloneElement(child, { activeIndex, id: index })
        )}
      </div>
    </div>
  );
};

Picker.Item = PickerItem;

export default Picker;
