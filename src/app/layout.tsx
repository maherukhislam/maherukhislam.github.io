import type { Metadata, Viewport } from "next";
import { Anton, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const anton = Anton({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maherukhislam.github.io"),
  title: "MAHERUKH ISLAM - Creative Web Builder",
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
    title: "MAHERUKH ISLAM - Creative Web Builder",
    description:
      "Building systems that just work. Five live platforms, 1,000+ users: membership portals, treasury systems, accessible UI.",
    siteName: "Md. Maherukh Islam - Portfolio",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MAHERUKH ISLAM - Creative Web Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MAHERUKH ISLAM - Creative Web Builder",
    description:
      "Building systems that just work. Five live platforms, 1,000+ users: membership portals, treasury systems, accessible UI.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${anton.variable} ${inter.variable} ${geistMono.variable} font-sans antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
