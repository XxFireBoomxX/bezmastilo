export default function SearchBar() {
  return (
    <div className="relative w-40 md:w-56 transition duration-300 group">
      <input
        type="text"
        placeholder="Търси статии…"
        className="w-full rounded-xl bg-[#2b2340] text-[#ece0ff] placeholder-[#bfa8ff]/50 px-4 py-2 pr-10 shadow-inner shadow-[#1a132e]/60 outline-none transition duration-300 
                   focus:ring-2 focus:ring-pink-500 focus:bg-[#352a59]"
      />
      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a259fa] group-focus-within:text-pink-500 transition duration-300 pointer-events-none">
        🔍
      </span>
    </div>
  );
}
