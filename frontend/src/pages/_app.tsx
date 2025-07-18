// src/pages/_app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CategoriesProvider } from "@/context/CategoriesContext";
import Header from "@/components/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CategoriesProvider>
      <Header />
      <Component {...pageProps} />
    </CategoriesProvider>
  );
}
