import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rachel | Graphic Designer & Illustrator",
  description: "Portfolio of Rachel - Graphic Designer, Illustrator, and Artist. Specializing in minimalist design, brand identity, and creative illustration.",
  keywords: ["graphic design", "illustration", "art", "portfolio", "minimalist design", "brand identity"],
  authors: [{ name: "Rachel" }],
  openGraph: {
    title: "Rachel | Graphic Designer & Illustrator",
    description: "Portfolio of Rachel - Graphic Designer, Illustrator, and Artist",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
