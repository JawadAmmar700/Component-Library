"use client";
import React, { memo, useCallback, useMemo } from "react";
import { Volume, VolumeX } from "lucide-react";
import { useEffect, useState } from "react";
import {
  classNameMerge,
  conditionalClass,
  PickerclassNames,
  useScroll,
  useSoundEffects,
} from "@/lib/picker-hepler";
import { ClassValue } from "clsx";

interface IOSPickerProps {
  inView: number;
  velocity: number;
  onChange: (value: string | null) => void;
  label?: string | null;
  width: number;
  sound?: "pop" | "click";
  children: React.ReactNode;
  defaultValue?: string | null;
  className?: ClassValue;
  labelClassName?: ClassValue;
}

interface PickerItemProps {
  value?: string | null;
  option: string;
  id?: number;
  activeIndex?: number;
  label?: string | null;
  className?: ClassValue;
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
    label = null,
    width,
    sound = "pop",
    defaultValue = null,
    className,
    labelClassName,
  }: IOSPickerProps) => {
    const { ref } = useScroll({ velocity });
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [mute, setMute] = useState<boolean>(true);
    useSoundEffects({ activeIndex, mute, sound, volume: 0.25 });
    const itemHeight = 30;
    const rootMargin = (inView - 1) * itemHeight;

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
      ref.current!.scrollTop = 0;
      const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.9,
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
        style={{
          height: `${inView * itemHeight}px`,
          width: `${width}px`,
        }}
        className={`${classNameMerge("containerClass", className)}`}
      >
        <button
          onClick={toggleMute}
          className={`${conditionalClass(
            "buttonClass",
            [Boolean(label)],
            ["right-0 -top-6"],
            ["-left-5 -top-3"]
          )} `}
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
        <div className={`${classNameMerge("labelClass", labelClassName)}`}>
          {label && label}
        </div>
        <div
          ref={ref}
          style={{
            paddingTop: `${inView * itemHeight - 15}px`,
            paddingBottom: `${inView * itemHeight - 15}px`,
            transform: `translateY(${-(
              (inView - 1) * itemHeight +
              15 -
              16
            )}px)`,
          }}
          className={`${PickerclassNames["wheelClass"]}`}
        >
          <PickerItem
            option="Choose"
            value={null}
            activeIndex={activeIndex}
            id={0}
            label={label}
          />

          {flattenedChildren.map((child, index) =>
            React.cloneElement(child, {
              activeIndex,
              id: index + 1,
              label,
            })
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

const PickerItem = ({
  value,
  option,
  id,
  activeIndex,
  label,
  className,
}: PickerItemProps) => {
  const conditionalClasses = conditionalClass(
    "pickerItemClass",
    [Boolean(activeIndex !== id), Boolean(label)],
    ["opacity-40 text-xs", "px-2 justify-start"],
    ["opacity-100 scale-100 text-sm", "justify-center"]
  );
  return (
    <div
      key={`${option}-${id}`}
      data-index={id}
      data-value={value}
      className={`${classNameMerge("pickerItemClass", [
        conditionalClasses,
        className,
      ])}`}
    >
      {option}
    </div>
  );
};

Picker.displayName = "Picker";
PickerItem.displayName = "PickerItem";
(Picker as PickerType).Item = PickerItem;

export default Picker as PickerType;
