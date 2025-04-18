import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
      <body
        className="bg-white-brick bg-cover bg-no-repeat bg-left-top bg-fixed"
        style={{ minHeight: "100vh" }}>
        <div
          style={{
            backgroundImage: "url('/images/white-brick.jpg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left top",
            backgroundAttachment: "fixed",
            minHeight: "100vh",
          }}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
