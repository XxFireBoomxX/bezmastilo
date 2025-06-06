import '../styles/globals.css';
import Header from '../components/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bg">
      <body className="bg-[#18142a] text-[#ece0ff] min-h-screen">
        <Header />
        <main className="max-w-3xl mx-auto px-4 pt-10">{children}</main>
      </body>
    </html>
  );
}
