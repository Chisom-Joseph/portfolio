import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import BackgroundOverlay from "@/components/BackgroundOverlay";
import ThemeProvider from "@/providers/ThemeProvider";
import { ActiveNavProvider } from "@/providers/ActiveNavProvider";
import AOSProvider from "@/providers/AOSprovider";
import DeviceInfoLogger from "@/components/DeviceInfoLogger";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { defaultMetaData } from "@/data";

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
  title: defaultMetaData.title,
  description: defaultMetaData.description,
  openGraph: {
    title: defaultMetaData.title,
    description: defaultMetaData.description,
    url: defaultMetaData.url,
    images: [...defaultMetaData.ogImages],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Chisom_Joseph_Njoku",
    title: defaultMetaData.title,
    description: defaultMetaData.description,
    images: [defaultMetaData.ogImages[0]],
  },
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
        <SpeedInsights />
      </body>
      <DeviceInfoLogger />
    </html>
  );
}
