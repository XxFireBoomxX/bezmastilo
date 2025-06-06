export interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  date: string;
}

export const articles: Article[] = [
  {
    id: 1,
    title: 'Как се пише статия',
    excerpt: 'Кратко ръководство за писане на статии в bezmastilo.com...',
    content: '<p>Пълният текст на статията...</p>',
    category: 'Ръководства',
    tags: ['статии', 'помощ'],
    date: '2025-06-06',
  },
  // ...добави още по твой вкус
];
