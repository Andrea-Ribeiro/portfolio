"use client";

import { ChevronsUp } from "lucide-react";
export function ScrollToTopButton() {
  return (
    <div className="group relative ">
      <button
        aria-label="Scroll to top"
        className="cursor-pointer px-3 py-3 rounded-full bg-white/70 text-black transition-colors hover:bg-white hover:text-black mt-2
        active:bg-white"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ChevronsUp size={32} />
      </button>
      <span className="whitespace-nowrap pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded bg-white px-2 py-1 text-xs text-black opacity-0 transition-opacity group-hover:opacity-100">
        Back to top
      </span>
    </div>
  );
}
