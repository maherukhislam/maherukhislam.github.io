import type { Metadata, Viewport } from "next";
import { Anton, Geist_Mono, Instrument_Sans } from "next/font/google";
import "./globals.css";

const anton = Anton({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const instrumentSans = Instrument_Sans({
  variable: "--font-body",
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
    "Student developer in Dhaka, Bangladesh. Four live web platforms for three organizations, plus an open-source PostgreSQL security tool.",
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
      "Four live web platforms for three organizations, plus an open-source PostgreSQL security tool.",
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
      "Four live web platforms for three organizations, plus an open-source PostgreSQL security tool.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${anton.variable} ${instrumentSans.variable} ${geistMono.variable} font-sans antialiased bg-surface text-white`}
      >
        {children}
      </body>
    </html>
  );
}
