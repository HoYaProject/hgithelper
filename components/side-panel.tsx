"use client";

import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";

import useStore from "@/app/store";

export default function SidePanel({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isExpanded, toggle } = useStore();

  return (
    <div
      className={`bg-gray-800 text-white h-screen ${
        isExpanded ? "w-28" : "w-16"
      }`}
    >
      <button onClick={() => toggle()} className="p-2 text-white">
        {isExpanded ? (
          <ChevronDoubleLeftIcon className="h-4 w-4 inline" />
        ) : (
          <ChevronDoubleRightIcon className="h-4 w-4 inline" />
        )}
      </button>
      {children}
    </div>
  );
}
