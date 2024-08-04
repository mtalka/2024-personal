"use client";

import { useState } from "react";

type SectionProps = {
  titleElement: React.ReactNode;
  children: React.ReactNode;
};

export default function Section({ titleElement, children }: SectionProps) {
  // Let's make a dropdown for the section, if we click on the header, it will show the children
  // We will use the useState hook to keep track of the dropdown state

  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  // We will toggle the dropdown state when the header is clicked
  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex flex-col gap-4 min-w-64">
      <header
        className="relative w-full flex justify-center cursor-pointer"
        onClick={handleDropdownClick}
      >
        {titleElement}
        <div
          className={`absolute text-zinc-300 right-0 h-8 w-8 flex items-center justify-center transform transition-transform duration-300 ${
            isDropdownOpen ? "rotate-0" : "rotate-180"
          }`}
        >
          <svg
            data-slot="icon"
            fill="none"
            stroke-width="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            ></path>
          </svg>
        </div>
      </header>
      {isDropdownOpen && <ul className="flex flex-col gap-2">{children}</ul>}
    </div>
  );
}
