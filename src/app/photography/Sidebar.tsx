"use client";

import { useState } from "react";
import Link from "next/link";
import { galleries } from "./galleries";

export default function Sidebar({ activeSlug }: { activeSlug: string }) {
  const photoGalleries = galleries.filter((g) => g.slug !== "robi");
  const robi = galleries.find((g) => g.slug === "robi");
  const activeInFolder = photoGalleries.some((g) => g.slug === activeSlug);
  const [folderOpen, setFolderOpen] = useState(activeInFolder);

  return (
    <aside className="p-6 pb-2 sm:p-0 sm:fixed sm:top-[50px] sm:left-[50px] sm:w-[180px]">
      <h1 className="text-[27px] font-bold leading-[1.2em] tracking-[0.01em] text-black">
        <Link href="/photography">vernissage indigenous</Link>
      </h1>
      <nav className="pt-5 text-base font-medium leading-[1.6em]">
        <button
          onClick={() => setFolderOpen((o) => !o)}
          className={`block cursor-pointer ${
            activeInFolder ? "text-[#a3a3a3]" : "text-[#1f1f1f]"
          } hover:text-black`}
        >
          Photography
        </button>
        <div
          className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
            folderOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <ul className="pt-2 pb-4 leading-[1.2em]">
              {photoGalleries.map((g) => (
                <li key={g.slug} className="ml-2 py-[0.2em]">
                  <Link
                    href={`/photography/${g.slug}`}
                    className={
                      g.slug === activeSlug
                        ? "text-[#a3a3a3]"
                        : "text-[#1f1f1f] hover:text-black"
                    }
                  >
                    {g.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {robi ? (
          <Link
            href={`/photography/${robi.slug}`}
            className={`block ${
              robi.slug === activeSlug
                ? "text-[#a3a3a3]"
                : "text-[#1f1f1f] hover:text-black"
            }`}
          >
            {robi.title}
          </Link>
        ) : null}
      </nav>
      <div className="pt-6 text-xs text-[#a3a3a3]">
        <Link href="/" className="hover:text-black">← michaelgharbi.com</Link>
      </div>
    </aside>
  );
}
