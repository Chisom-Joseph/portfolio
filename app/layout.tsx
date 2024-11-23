import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import BackgroundOverlay from "@/components/BackgroundOverlay";
import ThemeProvider from "@/providers/ThemeProvider";
import { ActiveNavProvider } from "@/providers/ActiveNavProvider";
import AOSProvider from "@/providers/AOSprovider";
import DeviceInfoLogger from "@/components/DeviceInfoLogger";

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
  title: "Portfolio | Chisom Joseph Njoku",
  description:
    "I am: Chisom Joseph Njoku a full-stack web developer with over 5 years of experience building scalable and dynamic web applications. My expertise spans frontend and backend technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`overflow-x-hidden font-figtree antialiased bg-white dark:bg-darkPurple text-darkPurple dark:text-white ${powerGroteskUltraBold.variable} ${figtree.variable} ${figtreeItalic.variable}`}
      >
        <ThemeProvider>
          <AOSProvider>
            <ActiveNavProvider>
              <Header />
              <main>{children}</main>
              <BackgroundOverlay />
              <Footer />
            </ActiveNavProvider>
          </AOSProvider>
        </ThemeProvider>
      </body>
      <DeviceInfoLogger />
    </html>
  );
}
