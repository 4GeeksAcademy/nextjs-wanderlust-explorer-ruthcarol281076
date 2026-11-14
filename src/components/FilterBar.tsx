"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";

const CATEGORIES = [
  "All",
  "Adventure",
  "Culture",
  "Food",
  "Wellness",
  "Nature",
] as const;

export default function FilterBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get("category") || "";
  const currentDestination = searchParams.get("destination") || "";

  const updateParam = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [router, pathname, searchParams]
  );

  const handleDestinationChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      updateParam("destination", e.target.value);
    },
    [updateParam]
  );

  const destinationValue = useMemo(
    () => currentDestination,
    [currentDestination]
  );
  const categoryValue = useMemo(() => currentCategory, [currentCategory]);

  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:items-end">
      {/* Category filter */}
      <div className="flex-1">
        <label
          htmlFor="category-filter"
          className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wider"
        >
          Categoría
        </label>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => {
            const isActive =
              cat === "All"
                ? !currentCategory
                : currentCategory.toLowerCase() === cat.toLowerCase();
            return (
              <button
                key={cat}
                type="button"
                onClick={() =>
                  updateParam("category", cat === "All" ? "" : cat.toLowerCase())
                }
                className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 border ${
                  isActive
                    ? "bg-[#0D9488] text-white border-[#0D9488] shadow-sm"
                    : "bg-white text-gray-600 border-gray-200 hover:border-[#0D9488] hover:text-[#0D9488]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Destination filter */}
      <div className="sm:w-56">
        <label
          htmlFor="destination-filter"
          className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wider"
        >
          Destino
        </label>
        <input
          id="destination-filter"
          type="text"
          value={destinationValue}
          onChange={handleDestinationChange}
          placeholder="Filtrar por destino..."
          className="w-full px-3.5 py-2 rounded-lg border border-gray-200 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0D9488]/30 focus:border-[#0D9488] transition-all"
        />
      </div>
    </div>
  );
}