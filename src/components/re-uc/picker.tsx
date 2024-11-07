"use client";
import React, { memo, useCallback } from "react";
import { Volume, VolumeX } from "lucide-react";
import { useEffect, useState } from "react";
import { useScroll, useSoundEffects } from "@/lib/picker-hepler";
import { ClassValue } from "clsx";
import { cn } from "@/lib/utils";

interface IOSPickerProps {
  inView: number;
  velocity: number;
  onChange: (value: string | number | boolean | null) => void;
  label?: string | null;
  width: number;
  sound?: "pop" | "click";
  defaultValue?: number | null;
  className?: ClassValue;
  labelClassName?: ClassValue;
  data: string[] | number[];
  firstItem?: string | number | boolean | null;
}

interface PickerItemProps {
  value?: string | number | boolean | null;
  option: string;
  id?: number;
  activeIndex?: number;
  label?: string | null;
  className?: ClassValue;
}

const Picker = memo(
  ({
    inView,
    velocity,
    onChange,
    label = null,
    width,
    sound = "pop",
    defaultValue = null,
    className,
    labelClassName,
    data,
    firstItem,
  }: IOSPickerProps) => {
    const { ref } = useScroll({ velocity });
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [mute, setMute] = useState<boolean>(true);
    useSoundEffects({ activeIndex, mute, sound, volume: 0.25 });
    const itemHeight = 30;
    const rootMargin = (inView - 1) * itemHeight;

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
    }, [rootMargin, handleIntersection, ref, data]);

    useEffect(() => {
      if (!ref.current) return;
      const scrollTop = defaultValue
        ? (firstItem ? defaultValue + 1 : defaultValue) * itemHeight
        : 0;

      ref.current.scrollTop = scrollTop;
    }, [defaultValue, ref, data, firstItem]);

    const toggleMute = useCallback(() => {
      setMute((prev) => !prev);
    }, []);

    return (
      <div
        style={{
          height: `${inView * itemHeight}px`,
          width: `${width}px`,
        }}
        className={cn(
          "relative group rounded-lg transform-gpu hide-scroll-bar",
          className
        )}
      >
        <button
          onClick={toggleMute}
          className={`${
            label ? "right-0 -top-6" : "-left-5 -top-3"
          } absolute w-4 h-4 opacity-0 text-white  z-50 rounded-full transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100`}
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
        <div
          className={cn(
            "bg-black/10 text-sm absolute inset-0 select-none h-[30px] w-full md:text-base font-bold -z-10 rounded-md flex items-center justify-end px-2 text-white",
            labelClassName
          )}
        >
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
          className="h-full overflow-scroll overflow-x-hidden hide-scroll-bar snap-y snap-mandatory cursor-grab"
        >
          {firstItem && (
            <PickerItem
              key="firstItem"
              option={firstItem.toString()}
              value={null}
              activeIndex={activeIndex}
              id={-1}
              label={label}
            />
          )}
          {data.map((option, index) => (
            <PickerItem
              key={option}
              option={option.toString()}
              value={option}
              activeIndex={activeIndex}
              id={index + 1}
              label={label}
            />
          ))}
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
      prevProps.width === nextProps.width &&
      prevProps.sound === nextProps.sound &&
      prevProps.className === nextProps.className &&
      prevProps.labelClassName === nextProps.labelClassName &&
      prevProps.onChange === nextProps.onChange &&
      prevProps.data === nextProps.data &&
      prevProps.defaultValue === nextProps.defaultValue
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
  return (
    <div
      key={`${option}-${id}`}
      data-index={id}
      data-value={value}
      className={cn(
        `${
          activeIndex !== id
            ? "opacity-40 text-xs"
            : "opacity-100 scale-100 text-sm"
        } 
        ${label ? "px-2 justify-start" : "justify-center"}
      focus:outline-none text-white focus:ring-4 flex items-center font-semibold w-full h-[30px] rounded-md select-none snap-center transition-opacity duration-75 ease-in-out transform-gpu`,
        className
      )}
    >
      {option}
    </div>
  );
};
Picker.displayName = "Picker";
export default Picker;

// "use client";
// import React, { memo, useCallback, useMemo } from "react";
// import { Volume, VolumeX } from "lucide-react";
// import { useEffect, useState } from "react";
// import { useScroll, useSoundEffects } from "@/lib/picker-hepler";
// import { ClassValue } from "clsx";
// import { cn } from "@/lib/utils";

// interface IOSPickerProps {
//   inView: number;
//   velocity: number;
//   onChange: (value: string | null) => void;
//   label?: string | null;
//   width: number;
//   sound?: "pop" | "click";
//   children: React.ReactNode;
//   defaultValue?: number | null;
//   className?: ClassValue;
//   labelClassName?: ClassValue;
//   data?: any;
// }

// interface PickerItemProps {
//   value?: string | null;
//   option: string;
//   id?: number;
//   activeIndex?: number;
//   label?: string | null;
//   className?: ClassValue;
// }

// type PickerType = typeof Picker & {
//   Item: typeof PickerItem;
// };

// const Picker = memo(
//   ({
//     children,
//     inView,
//     velocity,
//     onChange,
//     label = null,
//     width,
//     sound = "pop",
//     defaultValue = null,
//     className,
//     labelClassName,
//     data,
//   }: IOSPickerProps) => {
//     const { ref } = useScroll({ velocity });
//     const [activeIndex, setActiveIndex] = useState<number>(0);
//     const [mute, setMute] = useState<boolean>(true);
//     useSoundEffects({ activeIndex, mute, sound, volume: 0.25 });
//     const itemHeight = 30;
//     const rootMargin = (inView - 1) * itemHeight;

//     const flattenedChildren = useMemo(() => {
//       return React.Children.toArray(children).flatMap((child) =>
//         React.isValidElement<PickerItemProps>(child) &&
//         child.type === PickerItem
//           ? child
//           : Array.isArray(child)
//           ? child.filter(
//               (c): c is React.ReactElement<PickerItemProps> =>
//                 React.isValidElement(c) && c.type === PickerItem
//             )
//           : []
//       );
//     }, [children, data]);

//     const handleIntersection = useCallback(
//       (entries: IntersectionObserverEntry[]) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const index = parseInt(entry.target.getAttribute("data-index")!);
//             const value = entry.target.getAttribute("data-value")!;
//             setActiveIndex(index);
//             onChange(value);
//           }
//         });
//       },
//       [onChange]
//     );

//     useEffect(() => {
//       const observer = new IntersectionObserver(handleIntersection, {
//         threshold: 0.9,
//         root: ref.current,
//         rootMargin: `-${rootMargin}px 0px -${rootMargin}px 0px`,
//       });

//       const childrenArray = Array.from(ref.current?.children || []);

//       childrenArray.forEach((child) => {
//         if (child) {
//           observer.observe(child);
//         }
//       });

//       return () => {
//         childrenArray.forEach((child) => {
//           if (child) {
//             observer.unobserve(child);
//           }
//         });
//       };
//     }, [flattenedChildren, rootMargin, handleIntersection, ref]);

//     useEffect(() => {
//       if (ref.current) {
//         console.log("defaultValue", defaultValue);
//         ref.current.scrollTop = defaultValue ? defaultValue * itemHeight : 0;
//       }
//     }, [defaultValue, ref, flattenedChildren]);

//     const toggleMute = useCallback(() => {
//       setMute((prev) => !prev);
//     }, []);

//     return (
//       <div
//         style={{
//           height: `${inView * itemHeight}px`,
//           width: `${width}px`,
//         }}
//         className={cn(
//           "relative group rounded-lg transform-gpu hide-scroll-bar",
//           className
//         )}
//       >
//         <button
//           onClick={toggleMute}
//           className={`${
//             label ? "right-0 -top-6" : "-left-5 -top-3"
//           } absolute w-4 h-4 opacity-0 text-white  z-50 rounded-full transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100`}
//         >
//           {mute ? (
//             <VolumeX
//               className={`w-4  ${
//                 mute ? "scale-100 animate-fadeIn" : "scale-75 animate-fadeOut"
//               } `}
//             />
//           ) : (
//             <Volume
//               className={`w-4  ${
//                 !mute ? "scale-100 animate-fadeIn" : "scale-75 animate-fadeOut"
//               } `}
//             />
//           )}
//         </button>
//         <div
//           className={cn(
//             "bg-black/10 text-sm absolute inset-0 select-none h-[30px] w-full md:text-base font-bold -z-10 rounded-md flex items-center justify-end px-2 text-white",
//             labelClassName
//           )}
//         >
//           {label && label}
//         </div>
//         <div
//           ref={ref}
//           style={{
//             paddingTop: `${inView * itemHeight - 15}px`,
//             paddingBottom: `${inView * itemHeight - 15}px`,
//             transform: `translateY(${-(
//               (inView - 1) * itemHeight +
//               15 -
//               16
//             )}px)`,
//           }}
//           className="h-full overflow-scroll overflow-x-hidden hide-scroll-bar snap-y snap-mandatory cursor-grab"
//         >
//           {flattenedChildren.map((child, index) =>
//             React.cloneElement(child, {
//               activeIndex,
//               id: index,
//               label,
//             })
//           )}
//         </div>
//       </div>
//     );
//   },
//   (prevProps, nextProps) => {
//     return (
//       prevProps.inView === nextProps.inView &&
//       prevProps.velocity === nextProps.velocity &&
//       prevProps.label === nextProps.label &&
//       prevProps.onChange === nextProps.onChange &&
//       prevProps.width === nextProps.width &&
//       prevProps.sound === nextProps.sound &&
//       prevProps.className === nextProps.className &&
//       prevProps.labelClassName === nextProps.labelClassName &&
//       prevProps.onChange === nextProps.onChange &&
//       prevProps.data === nextProps.data
//     );
//   }
// );

// const PickerItem = ({
//   value,
//   option,
//   id,
//   activeIndex,
//   label,
//   className,
// }: PickerItemProps) => {
//   return (
//     <div
//       key={`${option}-${id}`}
//       data-index={id}
//       data-value={value}
//       className={cn(
//         `${
//           activeIndex !== id
//             ? "opacity-40 text-xs"
//             : "opacity-100 scale-100 text-sm"
//         }
//         ${label ? "px-2 justify-start" : "justify-center"}
//       focus:outline-none text-white focus:ring-4 flex items-center font-semibold w-full h-[30px] rounded-md select-none snap-center transition-opacity duration-75 ease-in-out transform-gpu`,
//         className
//       )}
//     >
//       {option}
//     </div>
//   );
// };

// Picker.displayName = "Picker";
// PickerItem.displayName = "PickerItem";
// (Picker as PickerType).Item = PickerItem;

// export default Picker as PickerType;
