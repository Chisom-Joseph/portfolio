import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import BackgroundOverlay from "@/components/BackgroundOverlay";
import ThemeProvider from "@/providers/ThemeProvider";
import { AOSProvider } from "@/providers/AOSprovider";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const powerGroteskUltraBold = localFont({
  src: "./fonts/PowerGrotesk-UltraBold.woff2",
  variable: "--font-PowerGroteskUltraBold",
});

const figtree = localFont({
  src: "./fonts/Figtree-VariableFont_wght.ttf",
  variable: "--font-figtree",
});

const figtreeItalic = localFont({
  src: "./fonts/Figtree-Italic-VariableFont_wght.ttf",
  variable: "--font-figtreeItalic",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`overflow-x-hidden font-figtree antialiased bg-white dark:bg-darkPurple text-darkPurple dark:text-white ${powerGroteskUltraBold.variable} ${figtree.variable} ${figtreeItalic.variable}`}
      >
        <ThemeProvider>
          <AOSProvider>
            <Header />
            <main>{children}</main>
            <BackgroundOverlay />
            <Footer />
          </AOSProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
