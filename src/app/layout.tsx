import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ranjith V - AI & Data Science Engineer Portfolio",
  description: "Portfolio of Ranjith V, AI & Data Science Engineer specializing in Machine Learning, Deep Learning, and Data Analytics. Featured projects: AETHER spacecraft monitoring, AI Video Generator, and IoT solutions.",
  keywords: ["Ranjith V", "AI Engineer", "Data Science", "Machine Learning", "Deep Learning", "Python", "TensorFlow", "Power BI", "Portfolio", "AETHER", "Aerospace", "IoT"],
  authors: [{ name: "Ranjith V" }],

  openGraph: {
    title: "Ranjith V - AI & Data Science Engineer",
    description: "Portfolio showcasing AI/ML projects, data science solutions, and innovative engineering work",
    url: "http://localhost:3000",
    siteName: "Ranjith V Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ranjith V - AI & Data Science Engineer",
    description: "Portfolio showcasing AI/ML projects, data science solutions, and innovative engineering work",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
