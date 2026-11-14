"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function BackToTop() {
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPortalRoot(document.body);
  }, []);

  if (!portalRoot) return null;

  return createPortal((
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 block w-12 h-12 rounded-full bg-[#EA580C] text-white shadow-lg hover:bg-[#d04d0a] hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-200"
      aria-label="Volver al inicio de la página"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  ), portalRoot);
}