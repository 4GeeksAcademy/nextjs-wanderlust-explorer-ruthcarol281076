"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

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
  const [categoryValue, setCategoryValue] = useState(currentCategory);
  const [destinationValue, setDestinationValue] = useState(currentDestination);

  useEffect(() => {
    setCategoryValue(currentCategory);
  }, [currentCategory]);

  useEffect(() => {
    setDestinationValue(currentDestination);
  }, [currentDestination]);

  const updateParam = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, {
        scroll: false,
      });
    },
    [router, pathname, searchParams]
  );

  const handleCategoryChange = useCallback(
    (category: string) => {
      setCategoryValue(category);
      updateParam("category", category);
    },
    [updateParam]
  );

  const handleDestinationChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setDestinationValue(e.target.value);
    },
    []
  );

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      const value = destinationValue.trim();

      if (value) {
        params.set("destination", value);
      } else {
        params.delete("destination");
      }

      if (params.get("destination") === currentDestination) return;

      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, {
        scroll: false,
      });
    }, 250);

    return () => window.clearTimeout(timer);
  }, [destinationValue, currentDestination, pathname, router, searchParams]);

  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:items-end" role="search" aria-label="Filtros de búsqueda">
      {/* Category filter */}
      <fieldset className="flex-1 border-0 p-0 m-0">
        <legend className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wider">
          Categoría
        </legend>
        <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Filtrar por categoría">
          {CATEGORIES.map((cat) => {
            const isActive =
              cat === "All" ? !categoryValue : categoryValue.toLowerCase() === cat.toLowerCase();
            return (
              <button
                key={cat}
                type="button"
                role="radio"
                aria-checked={isActive}
                onClick={() =>
                  handleCategoryChange(cat === "All" ? "" : cat.toLowerCase())
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
      </fieldset>

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