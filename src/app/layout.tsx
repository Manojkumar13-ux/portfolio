import type { Metadata } from "next";
import { personalInfo } from "@/data/portfolio";
import "./globals.css";

export const metadata: Metadata = {
  title: `${personalInfo.name} · Software Engineer`,
  description: `${personalInfo.name} — Software Engineer building production full-stack applications with Java, React, Node.js, and AI.`,
  keywords: ["Software Engineer", "Full Stack Developer", "React", "Java", "Node.js", "Manoj Kumar", "Portfolio"],
  authors: [{ name: personalInfo.name }],
  openGraph: {
    title: `${personalInfo.name} · Software Engineer`,
    description: `Building production-ready full-stack applications.`,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&family=Alex+Brush&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
