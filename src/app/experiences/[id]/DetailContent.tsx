"use client";

import { useEffect } from "react";
import { notFound, useRouter } from "next/navigation";
import Link from "next/link";
import { experiences } from "@/data/experiences";
import FavoriteButton from "@/components/FavoriteButton";

interface DetailContentProps {
  id: string;
}

const categoryColors: Record<
  string,
  { bg: string; text: string; label: string }
> = {
  Adventure: { bg: "bg-orange-100", text: "text-orange-700", label: "Aventura" },
  Culture: { bg: "bg-purple-100", text: "text-purple-700", label: "Cultura" },
  Food: { bg: "bg-green-100", text: "text-green-700", label: "Gastronomía" },
  Wellness: { bg: "bg-blue-100", text: "text-blue-700", label: "Bienestar" },
  Nature: { bg: "bg-teal-100", text: "text-teal-700", label: "Naturaleza" },
};

export default function DetailContent({ id }: DetailContentProps) {
  const router = useRouter();
  const numId = Number(id);
  const experience = isNaN(numId)
    ? undefined
    : experiences.find((exp) => exp.id === numId);

  // 404 if not found
  if (!experience) {
    notFound();
  }

  // Update document title
  useEffect(() => {
    document.title = `${experience.title} — Wanderlust Explorer`;
    // Restore original title on unmount
    return () => {
      document.title = "Wanderlust Explorer";
    };
  }, [experience.title]);

  const catStyle = categoryColors[experience.category];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
      {/* Back button */}
      <button
        type="button"
        onClick={() => router.push("/experiences")}
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#EA580C] transition-colors mb-6"
      >
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
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Volver al explorador
      </button>

      <div className="flex flex-col lg:flex-row gap-8 animate-fade-in-up">
        {/* Image */}
        <div className="relative w-full lg:w-1/2 aspect-[4/3] lg:aspect-auto lg:min-h-[400px] rounded-xl overflow-hidden">
          <img
            src={experience.imageUrl}
            alt={experience.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="flex-1 flex flex-col gap-5">
          {/* Category badge */}
          <div className="flex items-center gap-3">
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${catStyle.bg} ${catStyle.text}`}
            >
              {catStyle.label}
            </span>
            <FavoriteButton experienceId={experience.id} />
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            {experience.title}
          </h1>

          {/* Destination */}
          <div className="flex items-center gap-2 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="text-lg">{experience.destination}</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }, (_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-5 h-5 ${
                    i < Math.round(experience.rating)
                      ? "text-[#EAB308]"
                      : "text-gray-200"
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-medium text-gray-600">
              {experience.rating} / 5
            </span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-[#0D9488]">
              ${experience.price}
            </span>
            <span className="text-sm text-gray-400">por persona</span>
          </div>

          {/* Description */}
          <div className="border-t border-gray-100 pt-5">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              Acerca de esta experiencia
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              {experience.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}