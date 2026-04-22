import type { Metadata } from "next";
import { Playfair_Display, Libre_Baskerville, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
})

const baskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-baskerville',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
})

export const metadata: Metadata = {
  title: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html lang="en" className={`${playfair.variable} ${baskerville.variable} ${spaceMono.variable}`}  suppressHydrationWarning>
  <body className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
    <Navbar />
    <main className="flex-1 ">
      {children}
    </main>
    <Footer />
  </body>
</html>
  );
}