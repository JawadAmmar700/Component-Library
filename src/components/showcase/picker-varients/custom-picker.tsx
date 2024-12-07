"use client";

import React, { useState, useCallback, useMemo } from "react";
import { Frameworks, ProjectsList } from "@/lib/constants";
import Picker from "@/components/library/picker";

const CustomPicker = () => {
  const [selectedFramework, setSelectedFramework] = useState<string | null>(
    null
  );

  const handleChange = (value: string | number | boolean | null) => {
    if (value) {
      setSelectedFramework(value.toString());
    } else {
      setSelectedFramework(null);
    }
  };

  const filteredProjects = useMemo(() => {
    return ProjectsList.filter(
      (project) =>
        project.ref.toLowerCase() === selectedFramework?.toLowerCase()
    ).map((project) => project.name);
  }, [selectedFramework]);

  return (
    <div className="flex space-x-2 dark:bg-transparent bg-white ">
      <Picker
        componentWidth={65}
        visibleItems={2}
        soundEffect="pop"
        options={Frameworks}
        onValueChange={handleChange}
        scrollVelocity={2}
        initialItemLabel="Choose"
        itemClassName="text-black dark:text-white"
      />

      {selectedFramework && (
        <Picker
          componentWidth={200}
          visibleItems={4}
          labelText="Project"
          soundEffect="click"
          options={filteredProjects}
          onValueChange={(value) => console.log(value)}
          scrollVelocity={2}
          initialItemLabel="Choose"
          isMuted={false}
          labelClassName="text-black dark:text-white"
          itemClassName="text-black dark:text-white"
        />
      )}
    </div>
  );
};

export default CustomPicker;
