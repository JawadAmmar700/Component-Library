"use client";

import React, { useState, useCallback } from "react";
import { Frameworks, ProjectsList } from "@/lib/constants";
import Picker from "@/components/picker-component/picker";

export default function Page() {
  const [selectedFramework, setSelectedFramework] = useState<string | null>(
    null
  );
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const handleChange = useCallback((value: string | null) => {
    setSelectedFramework(value);
  }, []);
  const handleChange2 = useCallback(
    (value: string | null) => {
      setSelectedProject(value);
    },
    [selectedFramework]
  );

  const projectsFilter = (name: string | null) => {
    return ProjectsList.filter(
      (project) => project.ref.toLowerCase() === name?.toLowerCase()
    ).map((project) => project.name);
  };

  return (
    <main className="flex flex-col space-y-5 md:flex-row p-5 h-screen justify-start items-center space-x-5 w-full bg-slate-800">
      <Picker
        width={200}
        inView={3}
        label="Framework"
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
          width={250}
          inView={5}
          label="Project"
          sound="click"
          onChange={handleChange2}
          velocity={2}
        >
          {projectsFilter(selectedFramework).map((framework) => (
            <Picker.Item key={framework} option={framework} value={framework} />
          ))}
        </Picker>
      )}

      {selectedProject && <div className="text-center">{selectedProject}</div>}
    </main>
  );
}
