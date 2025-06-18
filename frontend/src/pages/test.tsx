export default function TailwindTest() {
  return (
    <div className="p-10 flex flex-col items-center gap-6">
      <div className="text-4xl font-bold text-[#a259fa]">Tailwind Test</div>
      <div className="bg-[#231942] text-white p-6 rounded-2xl shadow-lg text-lg">
        Ако виждаш този блок лилав и текста голям и ярък – Tailwind <span className="text-[#a259fa] font-bold">РАБОТИ</span>!  
        Ако не, значи не работи и трябва да ревизираме setup-а...
      </div>
      <button className="bg-[#a259fa] hover:bg-[#c594fa] text-white px-8 py-3 rounded-2xl text-xl shadow transition-all">
        Натисни ме ако ти е кеф~ 🩷
      </button>
    </div>
  );
}
