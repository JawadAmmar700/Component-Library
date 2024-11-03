"use client";

import React, { useState, useCallback } from "react";
import { Frameworks, ProjectsList } from "@/lib/constants";
import Picker from "@/components/picker-component/picker";

export default function Page() {
  const [selectedFramework, setSelectedFramework] = useState<string | null>(
    null
  );

  const handleChange = useCallback((value: string | null) => {
    setSelectedFramework(value);
  }, []);

  const projectsFilter = (name: string | null) => {
    return ProjectsList.filter(
      (project) => project.ref.toLowerCase() === name?.toLowerCase()
    ).map((project) => project.name);
  };

  return (
    <main className="flex p-5 h-screen justify-center items-center w-full bg-slate-800">
      <div className="flex space-x-2">
        <Picker
          width={65}
          inView={2}
          // label="Framework"
          sound="pop"
          onChange={handleChange}
          velocity={2}
          // defaultValue="React"
        >
          {Frameworks.map((framework) => (
            <Picker.Item key={framework} option={framework} value={framework} />
          ))}
        </Picker>
        {selectedFramework && (
          <Picker
            width={200}
            inView={4}
            label="Project"
            sound="click"
            onChange={(value) => console.log(value)}
            velocity={2}
          >
            {projectsFilter(selectedFramework).map((framework) => (
              <Picker.Item
                key={framework}
                option={framework}
                value={framework}
              />
            ))}
          </Picker>
        )}
      </div>
    </main>
  );
}
