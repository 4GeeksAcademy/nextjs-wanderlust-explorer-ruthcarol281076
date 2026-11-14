import { Suspense } from "react";
import type { Metadata } from "next";
import ExplorerContent from "./ExplorerContent";
import SkeletonCard from "@/components/SkeletonCard";

export const metadata: Metadata = {
  title: "Explorar Experiencias",
  description: "Encuentra experiencias únicas de viaje por categoría, destino y más. Explora aventuras, cultura, gastronomía, bienestar y naturaleza.",
  openGraph: {
    title: "Explorar Experiencias — Wanderlust Explorer",
    description: "Encuentra experiencias únicas de viaje",
  },
};

export default function ExplorerPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6">
            <div className="h-10 bg-gray-200 rounded-lg w-full animate-pulse" />
          </div>
          <div className="mb-6">
            <div className="flex gap-3">
              <div className="h-8 bg-gray-200 rounded-full w-20 animate-pulse" />
              <div className="h-8 bg-gray-200 rounded-full w-24 animate-pulse" />
              <div className="h-8 bg-gray-200 rounded-full w-28 animate-pulse" />
              <div className="h-8 bg-gray-200 rounded-full w-16 animate-pulse" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        </div>
      }
    >
      <ExplorerContent />
    </Suspense>
  );
}