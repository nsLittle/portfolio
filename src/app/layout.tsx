import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Fullstack Software Engineer | Creative Technologist | Empathic Strategist",
  icons: {
    icon: "/images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/images/favicon.ico" type="image/jpeg" />
      </Head>
      <body className={`${inter.className}`} style={{ minHeight: "100vh" }}>
        <ThemeProvider>
          <div className="fixed inset-0 z-0 bg-cover bg-center"></div>

          <div className="relative z-10">
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
