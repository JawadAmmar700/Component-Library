"use client";

import React, { useState, useCallback, useMemo } from "react";
import Picker from "@/components/re-uc/picker";

const hours = Array.from({ length: 12 }, (_, i) => i + 1);
const minutes = Array.from({ length: 60 }, (_, i) => i);
const periods = ["AM", "PM"];
export default function TimePicker() {
  const [selectedHour, setSelectedHour] = useState<number | null>(null);
  const [selectedMinute, setSelectedMinute] = useState<number | null>(null);
  const [selectedPeriod, setSelectedPeriod] = useState<"AM" | "PM" | null>(
    null
  );

  const handleHourChange = useCallback(
    (value: string | number | boolean | null) => {
      setSelectedHour(value !== null ? parseInt(value.toString(), 10) : null);
    },
    []
  );

  const handleMinuteChange = useCallback(
    (value: string | number | boolean | null) => {
      setSelectedMinute(value !== null ? parseInt(value.toString(), 10) : null);
    },
    []
  );

  const handlePeriodChange = useCallback(
    (value: string | number | boolean | null) => {
      setSelectedPeriod(value as "AM" | "PM" | null);
    },
    []
  );

  const formattedTime = useMemo(() => {
    if (
      selectedHour === null &&
      selectedMinute === null &&
      selectedPeriod === null
    )
      return "-- : -- --";

    const hour =
      selectedHour !== null ? selectedHour.toString().padStart(2, "0") : "--";
    const minute =
      selectedMinute !== null
        ? selectedMinute.toString().padStart(2, "0")
        : "--";
    const period = selectedPeriod || "--";

    if (
      selectedHour !== null &&
      selectedPeriod === "PM" &&
      selectedHour !== 12
    ) {
      const pmHour = selectedHour % 12;
      return `${pmHour.toString().padStart(2, "0")}:${minute} ${period}`;
    }

    return `${hour}:${minute} ${period}`;
  }, [selectedHour, selectedMinute, selectedPeriod]);

  return (
    <main className="flex flex-col justify-center items-center rounded-lg">
      <div className="flex space-x-2  ">
        <Picker
          width={75}
          inView={3}
          sound="click"
          onChange={handleHourChange}
          velocity={2}
          data={hours}
          labelClassName="bg-white/10"
          label="Hour"
          defaultValue={new Date().getHours() % 12}
        />

        <Picker
          width={90}
          inView={3}
          sound="click"
          data={minutes}
          onChange={handleMinuteChange}
          velocity={2}
          labelClassName="bg-white/10"
          label="Minute"
          defaultValue={new Date().getMinutes() + 1}
        />

        <Picker
          width={65}
          inView={2}
          sound="click"
          onChange={handlePeriodChange}
          data={periods}
          velocity={2}
          labelClassName="bg-white/10"
          defaultValue={new Date().getHours() % 12 > 12 ? 1 : 2}
        />
      </div>
      <div className="text-2xl font-bold text-white mt-5" aria-live="polite">
        {formattedTime}
      </div>
    </main>
  );
}
