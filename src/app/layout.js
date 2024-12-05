// "use client";

import { NextUIProvider } from "@nextui-org/react";
import { darkTheme } from "./styles/theme";
import { Montserrat } from "next/font/google";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./styles/globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata = {
  title: "Media.CNR | Empowering Your Brand",
  description:
    "Media.CNR provides innovative marketing solutions to help businesses grow and reach their target audience effectively.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className}>
        <NextUIProvider theme={darkTheme}>
          <Navbar />
          {children}
          <Analytics />
          <SpeedInsights />

          {/* Chatbot */}
          <Chatbot />
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  );
}
