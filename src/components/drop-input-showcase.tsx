import React from "react";
import DropInput from "./re-uc/drop-input";

const DropInputShowcase = () => {
  return (
    <main className="w-full h-screen flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-5 items-center justify-evenly lg:justify-center overflow-hidden">
      <DropInput theme="Light" />
      <DropInput theme="Dark" />
    </main>
  );
};

export default DropInputShowcase;
