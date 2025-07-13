// src/pages/index.tsx
import Head from "next/head";
import ArticleList from "../components/ArticleList";

export default function Home() {
  return (
    <>
      <Head>
        <title>Без Мастило</title>
        <meta name="description" content="Личен блог за психология и развитие" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Main Content */}
      <div className="min-h-screen flex flex-col bg-[#18142a] text-[#ece0ff] text-lg md:text-2xl">
        <main className="flex-grow flex flex-col items-center px-4 pt-10">
          {/* <div className="max-w-2xl text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-pink-400">
              Добре дошли в Без Мастило!
            </h1>
            <p className="text-lg opacity-80 leading-relaxed">
              Твоят блог за психология, лично развитие и смели мисли.
            </p>
          </div> */}
          {/* Списък със статии */}
          <div className="w-full max-w-4xl">
            <ArticleList />
          </div>
        </main>
      </div>
    </>
  );
}
