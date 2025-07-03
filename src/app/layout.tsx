"use client";

import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider, useTheme } from "@/context/ThemeContext";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Portfolio",
//   description:
//     "Fullstack Software Engineer | Creative Technologist | Empathic Strategist",
//   icons: {
//     icon: "/images/favicon.ico",
//   },
// };

function DarkOverlay() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted || theme !== "dark") return null;

  return <div className="fixed inset-0 z-10 bg-black/60 pointer-events-none" />;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/images/favicon.ico" type="image/jpeg" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
        (function () {
          try {
            const theme = localStorage.getItem('theme');
            if (theme === 'dark') {
              document.documentElement.classList.add('dark');
            } else {
              document.documentElement.classList.remove('dark');
            }
          } catch (_) {}
        })();
      `,
          }}
        />
      </Head>

      <body
        className={`${inter.className} bg-brick-light dark:bg-brick-dark relative`}
        style={{ minHeight: "100vh" }}>
        <ThemeProvider>
          <div className="fixed inset-0 z-0 bg-cover bg-center"></div>

          <DarkOverlay />

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
