import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 gap-5">
      <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <h1 className="text-4xl font-bold text-gray-900">404</h1>
      <h2 className="text-xl font-semibold text-gray-600">
        Página no encontrada
      </h2>
      <p className="text-gray-400 max-w-md">
        La página que buscas no existe o ha sido movida. Revisa la URL o vuelve
        al inicio.
      </p>
      <Link
        href="/"
        className="mt-2 inline-flex items-center gap-2 px-6 py-3 bg-[#EA580C] text-white font-medium rounded-xl hover:bg-[#d04d0a] transition-colors"
      >
        Volver al inicio
      </Link>
    </div>
  );
}