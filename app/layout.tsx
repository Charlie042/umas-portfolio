import type { Metadata } from "next";
import { Bricolage_Grotesque, Unbounded } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import {
  NavigationBar,
  WhatPeopleSay,
  Footer,
  ConditionalWhatIKnow,
} from "@/components/shared-components";
import { Toaster } from "@/components/ui/sonner";

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
const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Uma's Portfolio",
  description: "Uma's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${satoshi.variable} ${bricolage.variable} ${unbounded.variable} font-sans antialiased `}
      >
        <div className="">
          <main>{children}</main>
        </div>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
