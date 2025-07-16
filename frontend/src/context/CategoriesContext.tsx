// src/context/CategoriesContext.tsx
import { createContext, useContext, useEffect, useState } from "react";

export type Category = { id: number; name: string; slug: string };

const CategoriesContext = createContext<Category[]>([]);

export function useCategories() {
  return useContext(CategoriesContext);
}

const MOCK_CATEGORIES: Category[] = [
  { id: 1, name: "Проституция", slug: "psihologia" },
  { id: 2, name: "Сводничество", slug: "lichno-razvitie" },
  { id: 3, name: "Жени на нощта", slug: "ai-technology" },
  { id: 4, name: "Тигрици", slug: "lichni-istorii" },
];

export function CategoriesProvider({ children }: { children: React.ReactNode }) {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    // MOCK fetch, ruler style!
    setTimeout(() => {
      setCategories(MOCK_CATEGORIES);
    }, 400); // леко забавяне за по-реалистично усещане
    // Като стане готов бекендът:
    // fetch("/api/categories")
    //   .then((res) => res.json())
    //   .then((data) => setCategories(data.categories || []));
  }, []);

  return (
    <CategoriesContext.Provider value={categories}>
      {children}
    </CategoriesContext.Provider>
  );
}
