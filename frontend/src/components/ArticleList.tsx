import ArticleCard from "./ArticleCard";

const articles = [
  // Нормален кейс
  {
    slug: "kak-da-badesh-ruler",
    title: "Как да бъдеш Ruler с Макиавели",
    description: "Кратко описание за статията...",
    date: "2025-06-20",
    imageUrl: "https://www.investor.bg/media/files/resized/article/374x226/d18/e2d1ee2fb2029756bd4582ef33bd2d18-434917656.jpg",
    category: { id: 1, name: "Психология", slug: "psihologia" },
    tags: [
      { id: 1, name: "сила", slug: "sila" },
      { id: 2, name: "философия", slug: "filosofia" },
    ],
  },
  // Без снимка
  {
    slug: "statia-bez-snimka",
    title: "Това е статия без снимка",
    description: "Няма картинка, но има смисъл.",
    date: "2025-06-21",
    category: { id: 2, name: "Лично развитие", slug: "lichno-razvitie" },
    tags: [
      { id: 3, name: "без снимка", slug: "bez-snimka" },
    ],
  },
  // Много дълго заглавие
  {
    slug: "statia-dalgo-zaglavie",
    title: "Това е една невероятно дълга и мъдра статия с заглавие, което тества колко добре се справя дизайнът на ArticleCard компонента когато текстът става прекалено много за един ред и няма къде да отиде освен надолу",
    description: "Тест за дълго заглавие.",
    date: "2025-06-22",
    imageUrl: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    category: { id: 1, name: "Психология", slug: "psihologia" },
    tags: [
      { id: 4, name: "тест", slug: "test" },
      { id: 5, name: "дълго заглавие", slug: "dalgo-zaglavie" },
    ],
  },
  // Без тагове
  {
    slug: "bez-tagove",
    title: "Статия без тагове",
    description: "Няма тагове тук.",
    date: "2025-06-23",
    imageUrl: "https://cdn.pixabay.com/photo/2023/01/13/14/37/wolf-7716352_960_720.jpg",
    category: { id: 2, name: "Лично развитие", slug: "lichno-razvitie" },
    tags: [],
  },
  // Много тагове
  {
    slug: "mnogo-tagove",
    title: "Много тагове, много power",
    description: "Това е статия с наистина много, много, много тагове.",
    date: "2025-06-24",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    category: { id: 2, name: "Лично развитие", slug: "lichno-razvitie" },
    tags: Array.from({ length: 15 }, (_, i) => ({
      id: 10 + i,
      name: `таг${i + 1}`,
      slug: `tag${i + 1}`,
    })),
  },
  // Странна дата
  {
    slug: "weird-date",
    title: "Дата, която не съществува",
    description: "Кой е казал, че трябва да има смисъл?",
    date: "15-32-2025",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    category: { id: 2, name: "Лично развитие", slug: "lichno-razvitie" },
    tags: [
      { id: 30, name: "дата", slug: "data" }
    ],
  },
  // Много дълъг description
  {
    slug: "super-long-description",
    title: "Дълго описание",
    description: "Това е описание, което е супер дълго, за да видим какво ще стане когато прекалим с текста и потребителят започне да се чуди дали някога ще приключи. Този текст просто няма край и ще продължи да се разтяга, за да тестваме scroll, overflow и responsive поведение на ArticleCard компонента.",
    date: "2025-06-25",
    imageUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
    category: { id: 2, name: "Лично развитие", slug: "lichno-razvitie" },
    tags: [
      { id: 50, name: "дълго описание", slug: "dalgo-opisanie" }
    ],
  },
  // Късо заглавие и празно описание
  {
    slug: "short-title-empty-desc",
    title: "Хей!",
    description: "",
    date: "2025-06-26",
    imageUrl: "",
    category: { id: 2, name: "Лично развитие", slug: "lichno-razvitie" },
    tags: [
      { id: 60, name: "късо", slug: "kaso" }
    ],
  },
  // Счупена снимка (невалиден URL)
  {
    slug: "broken-img",
    title: "Тест със счупена снимка",
    description: "Трябва да видим placeholder ако снимката не се зареди.",
    date: "2025-06-27",
    imageUrl: "https://this-image-does-not-exist.img",
    category: { id: 1, name: "Психология", slug: "psihologia" },
    tags: [
      { id: 99, name: "image fail", slug: "image-fail" }
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
