import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

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
      <body className="text-gray-900">
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
          <footer className="p-4 bg-gray-100 text-sm text-center">
            Footer here
          </footer>
        </div>
      </body>
    </html>
  );
}
