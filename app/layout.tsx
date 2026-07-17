import type { Metadata } from "next";
import { Geist, Fraunces, Gochi_Hand } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

const gochiHand = Gochi_Hand({
  variable: "--font-gochi-hand",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Code Illustrated Online School — Coding Classes for Kids & Teens, Ages 8–18",
  description:
    "Live, instructor-led coding classes for ages 8–18. Real projects, real portfolios, and the confidence to build anything they imagine. Book a free trial class today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${fraunces.variable} ${gochiHand.variable} h-full antialiased`}
    >
      <body className="h-full flex flex-col">
        {children}
        <Script src="https://tally.so/widgets/embed.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
