import React from "react";
import TypeWriter from "./re-uc/type-writer";

const text = "Built with Next.js, React, and TypeScript ⚡";

const TypeWriterDemo = () => {
  return (
    <main className="w-full h-screen flex flex-col items-center mt-40">
      <TypeWriter
        text="Blinking Cursor"
        animationDuration={150}
        loop={false}
        TextStyle="text-white text-4xl font-bold"
        cursorStyle="h-10"
      ></TypeWriter>
      <TypeWriter
        text={text}
        loop={true}
        animationDuration={100}
        TextStyle="text-lg font-bold mt-32"
      />
    </main>
  );
};

export default TypeWriterDemo;
