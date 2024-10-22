"use client";
import React, { useState, useCallback, useEffect } from "react";
import { Frameworks, ProjectsList } from "@/lib/constants";
import Picker from "@/components/picker";

type Project = (typeof ProjectsList)[0];

export default function Page() {
  const [selectedFramework, setSelectedFramework] = useState<string | null>(
    null
  );
  const [project, setProject] = useState<Project | null>();

  const filterProjectsByFramework = (framework: string | null) => {
    if (!framework) return [];
    return ProjectsList.filter(
      (project) => project.ref.toLowerCase() === framework.toLowerCase()
    ).map((project) => project.name);
  };
  const filterProjectsByName = (name: string | null) => {
    if (!name) return setProject(null);
    const project = ProjectsList.filter(
      (project) => project.name.toLowerCase() === name.toLowerCase()
    )[0];
    setProject(project);
  };

  return (
    <main className="flex flex-col space-y-5 md:flex-row p-5 h-screen justify-start items-center space-x-5 w-full bg-slate-800">
      <Picker
        inView={3}
        label="Framework"
        onChange={(value) => setSelectedFramework(value)}
        velocity={2}
      >
        <Picker.Item option="Select" value={null} active />
        {Frameworks.map((framework) => (
          <Picker.Item key={framework} option={framework} value={framework} />
        ))}
      </Picker>
      {selectedFramework && (
        <Picker
          inView={4}
          label="Projects"
          onChange={(value) => filterProjectsByName(value)}
          velocity={2}
          key={selectedFramework}
        >
          <Picker.Item option="Select" value={null} active />
          {filterProjectsByFramework(selectedFramework).map((project) => (
            <Picker.Item key={project} option={project} value={project} />
          ))}
        </Picker>
      )}
    </main>
  );
}
