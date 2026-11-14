import Link from "next/link";

export default function ExperienceNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 gap-5">
      <div className="w-20 h-20 rounded-full bg-amber-50 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-amber-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <h2 className="text-xl font-semibold text-gray-700">
        Experiencia no encontrada
      </h2>
      <p className="text-gray-400 max-w-md">
        La experiencia que buscas no existe o ha sido eliminada. Revisa el
        explorador para encontrar otras opciones.
      </p>
      <Link
        href="/experiences"
        className="mt-2 inline-flex items-center gap-2 px-6 py-3 bg-[#EA580C] text-white font-medium rounded-xl hover:bg-[#d04d0a] transition-colors"
      >
        Volver al explorador
      </Link>
    </div>
  );
}