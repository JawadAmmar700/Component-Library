"use client";
import React from "react";
import DropInput from "@/components/re-uc/drop-input";
import { hobbies, programmingSkills } from "@/lib/constants";

const DropInputShowcase = () => {
  const handleSkillsChange = (selectedSkills: string[]) => {
    console.log(selectedSkills);
  };
  const handleHobbiesChange = (selectedHobbies: string[]) => {
    console.log(selectedHobbies);
  };
  return (
    <main className="w-full py-5 flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-5 items-center justify-evenly lg:justify-center overflow-hidden">
      <DropInput
        onChange={handleSkillsChange}
        options={programmingSkills}
        defaultSelected={["JavaScript", "Python"]}
        theme="Light"
        label="Select Your Skills"
        optionsLabel="Skills"
        className="w-4/5 md:w-3/5 lg:w-2/5"
        optionsClassName="max-h-[90px]"
      />
      <DropInput
        onChange={handleHobbiesChange}
        options={hobbies}
        theme="Dark"
        label="Select Your Hobbies"
        optionsLabel="Hobbies"
        className="w-4/5 md:w-3/5 lg:w-2/5"
        optionsClassName="max-h-[90px]"
      />
    </main>
  );
};

export default DropInputShowcase;
