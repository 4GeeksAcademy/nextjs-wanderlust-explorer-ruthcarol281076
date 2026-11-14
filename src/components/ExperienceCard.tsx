import Link from "next/link";
import type { Experience } from "@/types";
import FavoriteButton from "./FavoriteButton";

interface ExperienceCardProps {
  experience: Experience;
}

const categoryColors: Record<
  Experience["category"],
  { bg: string; text: string }
> = {
  Adventure: { bg: "bg-orange-100", text: "text-orange-700" },
  Culture: { bg: "bg-purple-100", text: "text-purple-700" },
  Food: { bg: "bg-green-100", text: "text-green-700" },
  Wellness: { bg: "bg-blue-100", text: "text-blue-700" },
  Nature: { bg: "bg-teal-100", text: "text-teal-700" },
};

export default function ExperienceCard({
  experience,
}: ExperienceCardProps) {
  const { id, title, description, category, destination, price, rating, imageUrl } =
    experience;
  const catStyle = categoryColors[category];

  return (
    <article className="group relative flex flex-col rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-gray-100">
      {/* Image */}
      <Link href={`/experiences/${id}`} className="relative aspect-[4/3] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        {/* Category badge */}
        <span
          className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-medium ${catStyle.bg} ${catStyle.text}`}
        >
          {category}
        </span>
        {/* Favorite button */}
        <div className="absolute top-3 right-3">
          <FavoriteButton experienceId={id} />
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 gap-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold text-gray-900 leading-snug line-clamp-1">
            <Link href={`/experiences/${id}`} className="hover:text-[#EA580C] transition-colors">
              {title}
            </Link>
          </h3>
          {/* Rating */}
          <div className="flex items-center gap-1 shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-[#EAB308]"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-medium text-gray-700">{rating}</span>
          </div>
        </div>

        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-2">
          {/* Destination */}
          <div className="flex items-center gap-1.5 text-sm text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-gray-400"
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
            <span className="truncate">{destination}</span>
          </div>
          {/* Price */}
          <span className="text-base font-bold text-[#0D9488]">
            ${price}
          </span>
        </div>
      </div>
    </article>
  );
}