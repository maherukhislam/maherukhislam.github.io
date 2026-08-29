import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";

const anton = Anton({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MAHERUKH ISLAM — Creative Web Builder",
  description:
    "Student web developer in Dhaka, Bangladesh. Five live platforms, 1,000+ users, three organizations: membership portals, treasury systems, and sites that work on any phone.",
  keywords: [
    "Maherukh Islam",
    "web developer",
    "Dhaka",
    "React",
    "TypeScript",
    "Supabase",
    "accessibility",
    "portfolio",
  ],
  authors: [{ name: "Md. Maherukh Islam" }],
  openGraph: {
    title: "MAHERUKH ISLAM — Creative Web Builder",
    description:
      "Building systems that just work. Five live platforms, 1,000+ users: membership portals, treasury systems, accessible UI.",
    siteName: "Md. Maherukh Islam — Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${anton.variable} ${inter.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
