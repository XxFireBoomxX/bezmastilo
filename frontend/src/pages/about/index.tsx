import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AboutTimeline from "@/components/AboutTimeline";

export default function About() {
  return (
    <div className="bg-[#18142a] min-h-screen flex flex-col items-center py-0 md:py-12 px-2">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
        className="w-full max-w-5xl flex flex-col-reverse md:flex-row items-center md:items-end gap-8 md:gap-16 bg-gradient-to-br from-[#231942] via-[#32285b] to-[#39206d] rounded-3xl shadow-2xl px-6 md:px-12 py-10 md:py-16 mt-6 md:mt-0 relative overflow-hidden"
      >
        {/* BG Shape за по-интересен vibe */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, x: 120, y: 60 }}
          animate={{ opacity: 0.4, scale: 1, x: 0, y: 0 }}
          transition={{ delay: 0.7, duration: 1.2, type: "spring" }}
          className="hidden md:block absolute right-0 bottom-0 w-60 h-60 rounded-full bg-pink-400 blur-3xl pointer-events-none"
        />
        {/* Text block */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.7, type: "spring" }}
          className="flex-1 flex flex-col gap-6 z-10"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#ece0ff] drop-shadow-lg">
              Яница Петрова
            </h1>
            <div className="text-base md:text-lg text-[#ac87e3] mb-2">
              Автор, читател, вдъхновител, <span className="text-pink-400 font-semibold">безкрайно мастило</span>.
            </div>
            <p className="text-[#ece0ff] opacity-90 md:text-xl mb-4">
              Пиша за живота такъв, какъвто го усещам: истински, емоционален и красив дори в хаоса.
              В <span className="text-[#a259fa] font-bold">bezmastilo.com</span> ще намериш разкази, размисли, малко психология и много сърце.
            </p>
            <blockquote className="italic border-l-4 border-pink-400 pl-4 text-[#ac87e3] text-base md:text-lg">
              “Понякога едно изречение може да промени целия ти ден.”
            </blockquote>
          </div>
          {/* Interests / Skills */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.12, delayChildren: 0.5 },
              },
            }}
            className="flex flex-wrap gap-3 mt-2"
          >
            {[
              { text: "☕ Кафе маниак", color: "bg-pink-400/20 text-pink-300" },
              { text: "📚 Винаги с книга", color: "bg-[#a259fa]/20 text-[#a259fa]" },
              { text: "🖋️ Любител на ръкописите", color: "bg-[#473178]/20 text-[#ac87e3]" },
              { text: "🎧 Lo-fi в слушалките", color: "bg-[#39206d]/30 text-[#d2a6ff]" },
            ].map((badge) => (
              <motion.span
                key={badge.text}
                variants={{
                  hidden: { opacity: 0, scale: 0.7, y: 10 },
                  visible: { opacity: 1, scale: 1, y: 0 },
                }}
                whileHover={{ scale: 1.12, boxShadow: "0 4px 16px #a259fa55" }}
                className={`font-semibold px-4 py-1 rounded-full text-sm flex items-center gap-2 shadow-sm cursor-pointer transition ${badge.color}`}
              >
                {badge.text}
              </motion.span>
            ))}
          </motion.div>
          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7, type: "spring" }}
            className="mt-2"
          >
            <Link
              href="mailto:yanitsa@bezmastilo.com"
              className="inline-flex items-center gap-2 px-8 py-3 bg-pink-400/80 hover:bg-pink-400 text-white text-lg font-bold rounded-full shadow-lg transition"
            >
              Свържи се с мен <span className="text-2xl">→</span>
            </Link>
          </motion.div>
        </motion.div>
        {/* Avatar block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
          className="flex flex-col items-center gap-3 mb-8 md:mb-0 z-20"
        >
          <motion.div
            whileHover={{ rotate: 2, scale: 1.05, boxShadow: "0 8px 32px #a259fa77" }}
            className="relative w-40 h-40 md:w-56 md:h-56 rounded-2xl overflow-hidden border-4 border-pink-400 shadow-xl transition"
          >
            <Image
              src="https://govedovad.com/wp-content/uploads/2022/10/tele.jpg"
              alt="Яница"
              fill
              className="object-cover object-center"
              sizes="220px"
              priority
            />
          </motion.div>
          <div className="flex gap-4 mt-1">
            <a
              href="mailto:yanitsa@bezmastilo.com"
              className="hover:text-pink-400 transition text-[#ac87e3] text-xl"
              title="Email"
            >✉️</a>
            <a
              href="https://instagram.com/bezmastilo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition text-[#ac87e3] text-xl"
              title="Instagram"
            >📸</a>
          </div>
        </motion.div>
      </motion.section>
      {/* Timeline */}
      <AboutTimeline />
    </div>
  );
}
