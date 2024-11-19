import { Component } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" grid grid-rows-[20px_1fr_20px] items-center  text-white  justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">Re-Useable Components </h1>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li>Re-useable components for your next project</li>
          <li>
            Built with{" "}
            <Link
              className="underline underline-offset-2"
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next 15
            </Link>{" "}
            and Typescript
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            className="rounded-full font-bold border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 bg-[#383838]/50 hover:bg-[#383838]/30 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/picker"
            rel="noopener noreferrer"
          >
            <Component />
            Picker
          </Link>
          <Link
            className="rounded-full font-bold border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 bg-[#383838]/50 hover:bg-[#383838]/30 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/type-writer"
            rel="noopener noreferrer"
          >
            <Component />
            Type Writer
          </Link>
          <Link
            className="rounded-full font-bold border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 bg-[#383838]/50 hover:bg-[#383838]/30 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/drop-input"
            rel="noopener noreferrer"
          >
            <Component />
            Drop Input
          </Link>
          <Link
            className="rounded-full font-bold border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 bg-[#383838]/50 hover:bg-[#383838]/30 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/long-press-button"
            rel="noopener noreferrer"
          >
            <Component />
            Long Press Button
          </Link>
          <Link
            className="rounded-full font-bold border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 bg-[#383838]/50 hover:bg-[#383838]/30 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/mobile-drop"
            rel="noopener noreferrer"
          >
            <Component />
            Mobile Drop
          </Link>
        </div>
      </main>
    </div>
  );
}
