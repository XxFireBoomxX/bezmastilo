// src/components/ArticleList.tsx
import ArticleCard from "./ArticleCard";

const articles = [
  {
    slug: "kak-da-badesh-ruler",
    title: "Как да бъдеш Ruler с Макиавели",
    description: "Кратко описание за статията...",
    date: "2025-06-20",
    imageUrl: "https://www.investor.bg/media/files/resized/article/374x226/d18/e2d1ee2fb2029756bd4582ef33bd2d18-434917656.jpg", // линк към снимка, ако има
    category: { id: 1, name: "Психология", slug: "psihologia" },
    tags: [
      { id: 1, name: "сила", slug: "sila" },
      { id: 2, name: "философия", slug: "filosofia" },
    ],
  },
];

export default function ArticleList() {
  return (
    <div>
      {articles.map((article) => (
        <ArticleCard key={article.slug} {...article} />
      ))}
    </div>
  );
}
