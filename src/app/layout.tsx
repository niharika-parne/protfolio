import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PageBackground from "@/components/PageBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Niharika Parne | Software Developer & AI/DS Engineer",
  description:
    "Explore the personal portfolio of Niharika Parne — a passionate Software Developer specializing in Java, Python, and Web Technologies. View projects, skills, and certifications.",
  keywords: [
    "Niharika Parne",
    "Software Developer",
    "Java Developer",
    "Python Programmer",
    "Web Developer",
    "Artificial Intelligence",
    "Data Science",
    "Portfolio",
    "Sri Indu College"
  ],
  authors: [{ name: "Niharika Parne" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-[#030303] text-zinc-100 flex flex-col antialiased relative selection:bg-[#00f0ff]/20 selection:text-white">
        <PageBackground />
        {children}
      </body>
    </html>
  );
}

