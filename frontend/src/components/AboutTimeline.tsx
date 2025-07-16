import { motion } from "framer-motion";

const timeline = [
  {
    year: "2020",
    title: "Първа публикация онлайн",
    icon: "📝",
    desc: "Стартът на писателското приключение.",
  },
  {
    year: "2023",
    title: "bezmastilo.com 💜",
    icon: "🌐",
    desc: "Официалният блог, истинското мастило без край.",
  },
  {
    year: "2024",
    title: "Гост в подкаст",
    icon: "🎤",
    desc: "Участие във „Вдъхновяващи думи“.",
  },
  {
    year: "∞",
    title: "Следващата глава",
    icon: "✨",
    desc: "Историите тепърва започват...",
  },
];

export default function AboutTimeline() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
      viewport={{ once: true }}
      className="w-full max-w-3xl mt-10 mb-10 px-2 flex flex-col items-center"
    >
      <h2 className="text-xl md:text-2xl font-bold text-[#a259fa] mb-6 tracking-wider uppercase">
        Ruler Timeline
      </h2>
      <div className="relative w-full">
        {/* Vertical line */}
        <div className="absolute left-7 md:left-9 top-0 h-full w-1 bg-gradient-to-b from-pink-400 via-[#a259fa] to-[#39206d] rounded-full opacity-50 pointer-events-none" />
        {/* Timeline events */}
        <ol className="flex flex-col gap-8">
          {timeline.map((item) => (
            <motion.li
              key={item.year + item.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              viewport={{ once: true }}
              className="relative flex items-start"
            >
              {/* Icon & dot */}
              <div className="relative z-10 flex flex-col items-center mr-6">
                <motion.span
                  whileHover={{ scale: 1.25, rotate: 10 }}
                  className="text-3xl mb-1 drop-shadow-lg"
                  style={{
                    textShadow: "0 2px 12px #a259fa80, 0 1px 0 #fff1",
                  }}
                >
                  {item.icon}
                </motion.span>
                <span className="w-3 h-3 rounded-full bg-pink-400 border-2 border-[#a259fa] shadow-md" />
              </div>
              {/* Event content */}
              <div className="flex flex-col bg-[#231942]/80 rounded-xl p-4 shadow-lg border border-[#39206d] min-w-[210px] max-w-xl">
                <span className="text-pink-400 font-black text-lg md:text-xl leading-none mb-1">
                  {item.year}
                </span>
                <span className="text-[#ece0ff] font-bold text-base md:text-lg mb-1">
                  {item.title}
                </span>
                <span className="text-[#ac87e3] text-sm md:text-base">{item.desc}</span>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </motion.section>
  );
}
