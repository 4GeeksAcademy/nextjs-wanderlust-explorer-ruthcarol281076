"use client";

import { useFavorites } from "@/context/FavoritesContext";

export default function ProfilePage() {
  const { favorites } = useFavorites();

  return (
    <div className="max-w-2xl mx-auto px-4 md:px-8 py-8">
      <div className="flex flex-col items-center text-center gap-6 bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-12 animate-fade-in-up">
        {/* Avatar */}
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#EA580C] to-[#0D9488] flex items-center justify-center text-white text-3xl font-bold shadow-lg">
          A
        </div>

        {/* User info */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Alex Wanderlust
          </h1>
          <p className="text-gray-500 mt-1">alex@wanderlust.com</p>
        </div>

        {/* Bio */}
        <p className="text-gray-600 max-w-md leading-relaxed">
          Viajero apasionado por descubrir experiencias únicas alrededor del
          mundo. Siempre en busca de la próxima aventura.
        </p>

        {/* Divider */}
        <div className="w-full border-t border-gray-100" />

        {/* Stats */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2.5 bg-red-50 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-red-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            <span className="text-sm font-medium text-gray-700">
              <strong className="text-gray-900">{favorites.length}</strong>{" "}
              experiencia{favorites.length !== 1 ? "s" : ""} guardada
              {favorites.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>

        {/* Joined date */}
        <p className="text-xs text-gray-400">
          Miembro desde noviembre 2026
        </p>
      </div>
    </div>
  );
}