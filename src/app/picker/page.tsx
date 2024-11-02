"use client";

import React, { useState, useCallback } from "react";
import { Frameworks, ProjectsList } from "@/lib/constants";
import Picker from "@/components/picker-component/picker";

// const numbers = [
//   "1",
//   "2",
//   "3",
//   "4",
//   "5",
//   "6",
//   "7",
//   "8",
//   "9",
//   "10",
//   "11",
//   "12",
//   "13",
//   "14",
//   "15",
//   "16",
//   "17",
//   "18",
//   "19",
//   "20",
//   "21",
//   "22",
//   "23",
//   "24",
//   "25",
//   "26",
//   "27",
//   "28",
//   "29",
//   "30",
//   "31",
//   "32",
//   "33",
//   "34",
//   "35",
//   "36",
//   "37",
//   "38",
//   "39",
//   "40",
//   "41",
//   "42",
//   "43",
//   "44",
//   "45",
//   "46",
//   "47",
//   "48",
//   "49",
//   "50",
// ];

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
    <main className="flex p-5 h-screen justify-center items-center w-full bg-slate-800">
      <div className="flex space-x-2">
        {/* <div className="flex space-x-1 items-start">
          <Picker
            width={30}
            inView={3}
            // label="Framework"
            sound="click"
            onChange={handleChange}
            velocity={2}
          >
            {numbers.map((num) => (
              <Picker.Item key={num} option={num} value={num} />
            ))}
          </Picker>
          <span className="text-gray-500 font-bold">:</span>
          <Picker
            width={30}
            inView={5}
            // label="Numbers"
            sound="click"
            onChange={handleChange}
            velocity={2}
          >
            {numbers.map((num) => (
              <Picker.Item key={num} option={num} value={num} />
            ))}
          </Picker>
        </div> */}
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
            onChange={handleChange2}
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

      {selectedProject && <div className="text-center">{selectedProject}</div>}
    </main>
  );
}
