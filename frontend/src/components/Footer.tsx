import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1a132e] text-[#c3a7ff] py-10 px-4 shadow-inner shadow-[#2e1f45]/50 mt-16">
      <div className="flex flex-col items-center justify-center text-center space-y-4">
        {/* Лого / Име */}
        <h2 className="text-2xl font-bold text-pink-400 tracking-wide">Без Мастило</h2>

        {/* Социални линкове */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition duration-200"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition duration-200"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:contact@bezmastilo.com"
            className="hover:text-pink-400 transition duration-200"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Текст */}
        <div className="text-sm opacity-70 leading-relaxed">
          <p>© 2025 Без Мастило. Всички права запазени.</p>
          <p>Създаден с 💜 от Лили и Принца.</p>
        </div>
      </div>
    </footer>
  );
}
