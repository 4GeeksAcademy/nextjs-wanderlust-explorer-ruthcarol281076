"use client";

import SearchBar from "@/components/SearchBar";
import FilterBar from "@/components/FilterBar";
import ExperienceCard from "@/components/ExperienceCard";
import { useExperiences } from "@/hooks/useExperiences";

export default function ExplorerContent() {
  const filteredExperiences = useExperiences();

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
      {/* Page title */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
        Explorar Experiencias
      </h1>

      {/* Search + Filters */}
      <div className="flex flex-col gap-4 mb-8">
        <SearchBar />
        <FilterBar />
      </div>

      {/* Results count */}
      <p className="text-sm text-gray-500 mb-4">
        {filteredExperiences.length === 0
          ? "Sin resultados"
          : `${filteredExperiences.length} experiencia${filteredExperiences.length !== 1 ? "s" : ""} encontrada${filteredExperiences.length !== 1 ? "s" : ""}`}
      </p>

      {/* Grid */}
      {filteredExperiences.length > 0 ? (
        <div className="animate-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredExperiences.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[40vh] text-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <h2 className="text-xl font-semibold text-gray-600">
            No se encontraron resultados
          </h2>
          <p className="text-gray-400 max-w-md">
            Intenta ajustar los filtros o probar con otro término de búsqueda.
          </p>
        </div>
      )}
    </div>
  );
}