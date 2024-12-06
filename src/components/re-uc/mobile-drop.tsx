"use client";

import React from "react";
import { cn } from "@/utils/cn";
import useNativeDrop from "@/lib/hooks/use-native-drop";

type MobileDropProps = {
  list: string[];
  className?: string;
  defaultSelected?: string[];
};

const MobileDrop = ({ list, className, defaultSelected }: MobileDropProps) => {
  const {
    containerRef,
    dropZoneRef,
    draggableItems,
    droppedItems,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleDroppedItemDelete,
  } = useNativeDrop({
    draggableItems: list,
    defaultSelected,
  });

  return (
    <div className={cn("bg-white dark:bg-black text-black", className)}>
      <div className="container mx-auto p-4">
        <div ref={containerRef} className="border p-4 mb-4">
          <h2 className="text-xl font-bold mb-2 dark:text-white text-black">
            Draggable Items
          </h2>
          <div className="flex flex-wrap gap-2">
            {draggableItems.map((item, index) => (
              <div
                key={index}
                className={cn(
                  `py-1 px-2 rounded shadow-md dark:bg-gray-700 bg-gray-200`,
                  ""
                )}
                onTouchStart={(e) => handleTouchStart(e, index)}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {item}
              </div>
            ))}
          </div>
          <div
            ref={dropZoneRef}
            className={cn(
              `border-2 border-dashed p-4 mt-10 dark:border-white border-black`,
              ""
            )}
          >
            <h2 className="text-xl font-bold mb-2 dark:text-white text-black">
              Drop Zone
            </h2>
            <div className="flex flex-wrap gap-2">
              {droppedItems.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleDroppedItemDelete(item)}
                  className={cn(
                    `py-1 px-2 rounded shadow-md dark:bg-gray-700 bg-gray-200`,
                    ""
                  )}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileDrop;
