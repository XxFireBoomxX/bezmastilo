import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Контакт | Без Мастило</title>
      </Head>
      <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-b from-[#18142a] to-[#231942] overflow-hidden">
        <div className="bg-[#231942]/95 border border-[#39206d] rounded-xl shadow-xl px-6 py-8 flex flex-col items-center w-[340px] md:w-[420px]">
          <h1 className="text-2xl md:text-3xl font-extrabold mb-2 text-[#ece0ff] text-center">
            Свържи се с Яница
          </h1>
          <p className="text-[#ac87e3] text-center mb-3">
            Пиши смело – въпрос, идея или просто “Здрасти”! Формата е ruler-семпла.
          </p>
          <form
            className="flex flex-col gap-3 w-full"
            action="mailto:yanitsa@bezmastilo.com"
            method="POST"
            encType="text/plain"
          >
            <input
              type="text"
              name="name"
              placeholder="Твоето име"
              className="bg-[#32285b] text-[#ece0ff] placeholder-[#ac87e3] rounded-lg px-3 py-2 border border-[#39206d] focus:outline-none focus:ring-2 focus:ring-[#a259fa] text-sm"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Имейл за обратна връзка"
              className="bg-[#32285b] text-[#ece0ff] placeholder-[#ac87e3] rounded-lg px-3 py-2 border border-[#39206d] focus:outline-none focus:ring-2 focus:ring-[#a259fa] text-sm"
              required
            />
            <textarea
              name="message"
              rows={3}
              placeholder="Съобщение"
              className="bg-[#32285b] text-[#ece0ff] placeholder-[#ac87e3] rounded-lg px-3 py-2 border border-[#39206d] focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm resize-none"
              required
            ></textarea>
            <button
              type="submit"
              className="mt-3 px-6 py-2 bg-[#a259fa] text-white font-extrabold rounded-full shadow hover:bg-[#c594fa] transition text-sm"
            >
              Изпрати
            </button>
          </form>
          <div className="mt-5 text-center text-[#ac87e3] text-sm">
            или директно на <a href="mailto:yanitsa@bezmastilo.com" className="underline hover:text-pink-400">yanitsa@bezmastilo.com</a>
          </div>
        </div>
      </div>
    </>
  );
}
