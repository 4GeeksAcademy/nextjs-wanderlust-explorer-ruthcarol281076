export interface Experience {
  id: number;
  title: string;
  description: string;
  category: "Adventure" | "Culture" | "Food" | "Wellness" | "Nature";
  destination: string; // City + Country, e.g. "Bangkok, Thailand"
  price: number;
  rating: number;
  imageUrl: string;
}