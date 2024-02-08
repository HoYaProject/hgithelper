"use client";

import { HomeIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";

import Link from "next/link";

import useStore from "@/app/store";

export default function Navigation() {
  const { isExpanded } = useStore();

  return (
    <div>
      {isExpanded ? (
        <div>
          <Link href="/" className="block p-4 hover:bg-gray-700">
            Home
          </Link>
          <Link href="/settings" className="block p-4 hover:bg-gray-700">
            Settings
          </Link>
        </div>
      ) : (
        <div>
          <Link href="/" className="block p-4 hover:bg-gray-700">
            <HomeIcon className="h-6 w-6 inline" />
          </Link>
          <Link href="/settings" className="block p-4 hover:bg-gray-700">
            <Cog6ToothIcon className="h-6 w-6 inline" />
          </Link>
        </div>
      )}
    </div>
  );
}
