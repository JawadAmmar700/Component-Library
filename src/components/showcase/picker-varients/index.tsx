"use client";
import React from "react";
import CustomPicker from "./custom-picker";
import TimePicker from "@/components/library/time-picker";
import DatePicker from "@/components/library/date-picker";

const PickerVarients = () => {
  return (
    <main className="h-screen overflow-hidden  w-full py-5 grid md:grid-cols-2 md:grid-row-2 grid-cols-1">
      <div className="flex justify-center items-center md:border-r-2 border-b-2 border-black dark:border-white">
        <CustomPicker />
      </div>
      <div className="flex justify-center items-center md:border-l-2 md:border-b-2 border-black dark:border-white">
        <TimePicker
          theme="dark"
          onTimeChange={(time: string) => console.log(time)}
        />
      </div>
      <div className="md:col-span-2 flex px-5 md:px-0 justify-center items-center border-t-2  border-black dark:border-white">
        <DatePicker
          theme="dark"
          onDateChange={(date: Date, toLocaleDateString: string) =>
            console.log(toLocaleDateString)
          }
        />
      </div>
    </main>
  );
};

export default PickerVarients;
