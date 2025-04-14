import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mutsumi Hata Portfolio",
  description:
    "Fullstack Software Engineer | Creative Technologist | Empathic Strategist",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="text-gray-900 bg-[url('/images/white-brick.jpg')] bg-cover bg-no-repeat bg-left bg-fixed pt-16"
        style={{ minHeight: "100vh" }}>
        <div
          style={{
            backgroundImage: "url('/images/white-brick.jpg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left center",
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
