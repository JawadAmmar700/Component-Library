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
        theme="Light"
        data={programmingSkills}
        dataLabel="Skills"
        // default values here is treated as saved values can be from different sources like Database or Server or any other source.
        defaultValues={["JavaScript", "Python", "PHP", "HTML"]}
        inputLabel="DropZone Input"
      />
      <DropInput
        onChange={handleHobbiesChange}
        theme="Dark"
        data={hobbies}
        dataLabel="Skills"
        inputLabel="DropZone Input"
      />
    </main>
  );
};

export default DropInputShowcase;
