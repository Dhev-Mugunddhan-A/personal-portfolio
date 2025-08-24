import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dhev Mugunddhan A | AI & Data Science Engineer",
  description: "Portfolio of Dhev Mugunddhan A, showcasing projects in AI, Data Science, and full-stack development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-700`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
