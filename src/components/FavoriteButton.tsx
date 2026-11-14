"use client";

import { useFavorites } from "@/context/FavoritesContext";

interface FavoriteButtonProps {
  experienceId: number;
  className?: string;
}

export default function FavoriteButton({
  experienceId,
  className = "",
}: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const active = isFavorite(experienceId);

  return (
    <button
      type="button"
      onClick={() => toggleFavorite(experienceId)}
      className={`group flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 ${
        active
          ? "bg-red-50 text-red-500 hover:bg-red-100"
          : "bg-white/80 text-gray-400 hover:bg-white hover:text-red-400"
      } ${className}`}
      aria-label={active ? "Quitar de favoritos" : "Añadir a favoritos"}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 transition-transform duration-200 group-hover:scale-110"
        viewBox="0 0 24 24"
        fill={active ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    </button>
  );
}