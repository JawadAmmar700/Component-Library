"use client";
import React, { memo, useCallback, useMemo } from "react";
import { Volume, VolumeX } from "lucide-react";
import { useEffect, useState } from "react";
import { useScroll, useSoundEffects } from "@/lib/picker-hepler";

interface IOSPickerProps {
  inView: number;
  velocity: number;
  onChange: (value: string | null) => void;
  label: string;
  width: number;
  sound?: "pop" | "click";
  children: React.ReactNode;
  defaultValue?: string | null;
}

interface PickerItemProps {
  value?: string | null;
  option: string;
  id?: number;
  activeIndex?: number;
}
type PickerType = typeof Picker & {
  Item: typeof PickerItem;
};

const Picker = memo(
  ({
    children,
    inView,
    velocity,
    onChange,
    label,
    width,
    sound = "pop",
    defaultValue = null,
  }: IOSPickerProps) => {
    const { ref } = useScroll({ velocity });
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [mute, setMute] = useState<boolean>(true);
    useSoundEffects({ activeIndex, mute, sound, volume: 0.25 });
    const itemHeight = 30;
    const rootMargin = (inView - 1) * itemHeight;
    const containerHeight = (inView + (inView - 1)) * itemHeight;

    const flattenedChildren = useMemo(() => {
      return React.Children.toArray(children).flatMap((child) =>
        React.isValidElement<PickerItemProps>(child) &&
        child.type === PickerItem
          ? child
          : Array.isArray(child)
          ? child.filter(
              (c): c is React.ReactElement<PickerItemProps> =>
                React.isValidElement(c) && c.type === PickerItem
            )
          : []
      );
    }, [children]);

    const handleIntersection = useCallback(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index")!);
            const value = entry.target.getAttribute("data-value")!;
            setActiveIndex(index);
            onChange(value);
          }
        });
      },
      [onChange]
    );

    useEffect(() => {
      const observer = new IntersectionObserver(handleIntersection, {
        threshold: 1,
        root: ref.current,
        rootMargin: `-${rootMargin}px 0px -${rootMargin}px 0px`,
      });

      const childrenArray = Array.from(ref.current?.children || []);

      childrenArray.forEach((child) => {
        if (child) {
          observer.observe(child);
        }
      });

      return () => {
        childrenArray.forEach((child) => {
          if (child) {
            observer.unobserve(child);
          }
        });
      };
    }, [flattenedChildren, rootMargin, handleIntersection, ref]);

    useEffect(() => {
      if (defaultValue && ref.current) {
        const childrenArray = Array.from(ref.current.children);
        childrenArray.forEach((child) => {
          if (
            child instanceof HTMLElement &&
            child.getAttribute("data-value") === defaultValue
          ) {
            child.scrollIntoView({ behavior: "instant", block: "center" });
          }
        });
      }
    }, [defaultValue, ref]);

    const toggleMute = useCallback(() => {
      setMute((prev) => !prev);
    }, []);

    return (
      <div
        style={{ height: `${containerHeight}px`, width: `${width}px` }}
        className="bg-transparent relative overflow-hidden group rounded-lg grid grid-cols-3 items-center transform-gpu hide-scroll-bar"
      >
        <div
          style={{ height: `${itemHeight}px` }}
          className="bg-black/10 w-full text-sm select-none  md:text-base font-bold absolute -z-10 rounded-md flex items-center justify-end px-2 text-white"
        >
          {label}
          <button
            onClick={toggleMute}
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
                  !mute
                    ? "scale-100 animate-fadeIn"
                    : "scale-75 animate-fadeOut"
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
          ref={ref}
          className="h-full col-span-2 text-white flex flex-col overflow-y-scroll overflow-x-hidden hide-scroll-bar snap-y snap-mandatory "
        >
          <PickerItem
            option="Choose"
            value={null}
            activeIndex={activeIndex}
            id={0}
          />

          {flattenedChildren.map((child, index) =>
            React.cloneElement(child, { activeIndex, id: index + 1 })
          )}
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.inView === nextProps.inView &&
      prevProps.velocity === nextProps.velocity &&
      prevProps.label === nextProps.label &&
      prevProps.onChange === nextProps.onChange &&
      prevProps.defaultValue === nextProps.defaultValue &&
      prevProps.width === nextProps.width &&
      prevProps.sound === nextProps.sound
    );
  }
);

const PickerItem = ({ value, option, id, activeIndex }: PickerItemProps) => {
  return (
    <div
      key={`${option}-${id}`}
      data-index={id}
      data-value={value}
      className={`${
        activeIndex !== id
          ? "opacity-40 scale-75 "
          : "opacity-100 scale-100 text-sm "
      } mt-2 px-2 text-start focus:outline-none  focus:ring-4 font-semibold select-none snap-center transition-opacity duration-75 ease-in-out transform-gpu`}
    >
      {option}
    </div>
  );
};

Picker.displayName = "Picker";
PickerItem.displayName = "PickerItem";
(Picker as PickerType).Item = PickerItem;

export default Picker as PickerType;
