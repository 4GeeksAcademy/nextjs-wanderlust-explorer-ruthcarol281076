import { Suspense } from "react";
import DetailContent from "./DetailContent";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function DetailPage({ params }: PageProps) {
  const { id } = await params;
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-[60vh]">
          <p className="text-gray-500 text-lg">Cargando experiencia...</p>
        </div>
      }
    >
      <DetailContent id={id} />
    </Suspense>
  );
}