import { Suspense } from "react";
import type { Metadata } from "next";
import DetailContent from "./DetailContent";
import { experiences } from "@/data/experiences";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const exp = experiences.find((e) => e.id === Number(id));
  if (!exp) {
    return { title: "Experiencia no encontrada" };
  }
  return {
    title: exp.title,
    description: exp.description.substring(0, 160),
    openGraph: {
      title: `${exp.title} — Wanderlust Explorer`,
      description: exp.description.substring(0, 160),
      images: exp.imageUrl ? [{ url: exp.imageUrl }] : [],
    },
  };
}

function DetailSkeleton() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-pulse" aria-hidden="true">
      {/* Back button placeholder */}
      <div className="h-4 bg-gray-200 rounded w-24 mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image placeholder */}
        <div className="aspect-[4/3] bg-gray-200 rounded-xl" />
        {/* Content placeholders */}
        <div className="space-y-4">
          <div className="h-6 bg-gray-200 rounded w-20" />
          <div className="h-8 bg-gray-200 rounded w-3/4" />
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-4 w-4 bg-gray-200 rounded" />
            ))}
          </div>
          <div className="h-6 bg-gray-200 rounded w-24" />
          <div className="space-y-2 pt-4">
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-5/6" />
            <div className="h-4 bg-gray-200 rounded w-4/5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default async function DetailPage({ params }: PageProps) {
  const { id } = await params;
  return (
    <Suspense fallback={<DetailSkeleton />}>
      <DetailContent id={id} />
    </Suspense>
  );
}