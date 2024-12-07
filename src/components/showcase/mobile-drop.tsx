"use client";

import React from "react";
import { cn } from "@/utils/cn";
import useNativeDrop from "@/components/library/hooks/use-native-drop";

const list = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
const defaultSelected = ["Item 1", "Item 2"];

const MobileDrop = () => {
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
    <div className="container mx-auto p-4">
      <div ref={containerRef} className="border p-4 mb-4">
        <h2 className="text-xl font-bold mb-2 dark:text-white text-black">
          Draggable Items -{" "}
          <span className="text-red-500">
            (This Demo only works on mobile devices)
          </span>
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
  );
};

export default MobileDrop;
