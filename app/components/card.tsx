"use client";

import { useState } from "react";

type CardProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function Card({ title, subtitle, children }: CardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      id="card"
      className={`shadow flex flex-col ${isOpen && "gap-4"} p-4 rounded-lg bg-white cursor-pointer hover:-translate-y-px hover:shadow transition-transform hover:bg-[#fafafa]`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div>
        <h3 className="font-bold">{title}</h3>
        {isOpen && (subtitle && <span className="text-sm">{subtitle}</span>)}
      </div>
      <div
        className={`text-zinc-600 text-sm overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
