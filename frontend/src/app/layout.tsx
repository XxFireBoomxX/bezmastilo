import '../styles/globals.css';
import Header from "../components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bg">
      <body className="bg-[#18142a] text-[#ece0ff] min-h-screen">
        <Header />
        <main className="w-full max-w-2xl md:max-w-4xl mx-auto px-3 sm:px-6 md:px-10 pt-10 md:pt-16 pb-16 md:pb-24">
          {children}
        </main>
      </body>
    </html>
  );
}
