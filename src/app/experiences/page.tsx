import { Suspense } from "react";
import ExplorerContent from "./ExplorerContent";

export default function ExplorerPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-[60vh]">
          <p className="text-gray-500 text-lg">Cargando experiencias...</p>
        </div>
      }
    >
      <ExplorerContent />
    </Suspense>
  );
}