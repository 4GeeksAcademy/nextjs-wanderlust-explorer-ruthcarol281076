"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { experiences } from "@/data/experiences";
import type { Experience } from "@/types";

const VALID_CATEGORIES = [
  "adventure",
  "culture",
  "food",
  "wellness",
  "nature",
];

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function useExperiences(): Experience[] {
  const searchParams = useSearchParams();

  return useMemo(() => {
    const searchTerm = searchParams.get("search") || "";
    const categoryParam = searchParams.get("category") || "";
    const destinationParam = searchParams.get("destination") || "";

    return experiences.filter((exp) => {
      // Search filter: case-insensitive regex on title
      if (searchTerm) {
        const escaped = escapeRegex(searchTerm);
        const regex = new RegExp(escaped, "i");
        if (!regex.test(exp.title)) return false;
      }

      // Category filter
      if (categoryParam) {
        const cat = categoryParam.toLowerCase();
        if (VALID_CATEGORIES.includes(cat)) {
          if (exp.category.toLowerCase() !== cat) return false;
        }
        // If invalid category, ignore filter
      }

      // Destination filter: case-insensitive partial match
      if (destinationParam) {
        const destRegex = new RegExp(escapeRegex(destinationParam), "i");
        if (!destRegex.test(exp.destination)) return false;
      }

      return true;
    });
  }, [searchParams]);
}