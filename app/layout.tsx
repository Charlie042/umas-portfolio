import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import {
  NavigationBar,
  WhatPeopleSay,
  Footer,
} from "@/components/shared-components";

const satoshi = localFont({
  src: [
    {
      path: "../public/satoshi/Satoshi-Light.otf",
      weight: "300",
      style: "light",
    },
    {
      path: "../public/satoshi/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/satoshi/Satoshi-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/satoshi/Satoshi-Medium.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../public/satoshi/Satoshi-Bold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../public/satoshi/Satoshi-Black.otf",
      weight: "900",
      style: "black",
    },
  ],
  variable: "--font-satoshi",
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
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
    <html lang="en">
      <body
        className={`${satoshi.variable} ${bricolage.variable} font-sans antialiased`}
      >
        <NavigationBar />
        <main>{children}</main>
        <footer className="h-screen isolate">
          <WhatPeopleSay />
          <Footer />
        </footer>j
      </body>
    </html>
  );
}
