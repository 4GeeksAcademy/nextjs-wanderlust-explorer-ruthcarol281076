"use client";

import Link from "next/link";
import { useFavorites } from "@/context/FavoritesContext";
import { experiences } from "@/data/experiences";
import ExperienceCard from "@/components/ExperienceCard";

export default function FavoritesPage() {
  const { favorites } = useFavorites();
  const favoriteExperiences = experiences.filter((exp) =>
    favorites.includes(exp.id)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
      {/* Page title */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
        Mis Favoritos
      </h1>

      {favoriteExperiences.length > 0 ? (
        <>
          <p className="text-sm text-gray-500 mb-4">
            {favoriteExperiences.length} experiencia
            {favoriteExperiences.length !== 1 ? "s" : ""} guardada
            {favoriteExperiences.length !== 1 ? "s" : ""}
          </p>
          <div className="animate-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favoriteExperiences.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-20 h-20 text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          <h2 className="text-xl font-semibold text-gray-600">
            Aún no tienes favoritos
          </h2>
          <p className="text-gray-400 max-w-md">
            ¡Explora y añade algunos! Descubre experiencias únicas alrededor del
            mundo.
          </p>
          <Link
            href="/experiences"
            className="mt-2 inline-flex items-center gap-2 px-6 py-3 bg-[#EA580C] text-white font-medium rounded-xl hover:bg-[#d04d0a] transition-colors"
          >
            Explorar experiencias
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      )}
    </div>
  );
}