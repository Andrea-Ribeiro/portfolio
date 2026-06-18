"use client";
export function ScrollToTopButton() {
  return (
    <button
      className="cursor-pointer px-4 py-2 rounded-md bg-white/70 text-black transition-colors hover:bg-white hover:text-black"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      Scroll to top
    </button>
  );
}
