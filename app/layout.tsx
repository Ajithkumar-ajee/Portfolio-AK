import type { Metadata, Viewport } from "next";
import { siteUrl } from "./site";
import "./globals.scss";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "Ajithkumar V | React.js & Frontend Developer",
  description:
    "Ajithkumar V is a React.js and frontend developer in Chennai with 4.5+ years of experience in React, React Native, TypeScript, and JavaScript.",
  openGraph: {
    title: "Ajithkumar V | React.js & Frontend Developer",
    description:
      "React.js and frontend developer in Chennai specializing in React, React Native, JavaScript, and TypeScript.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f7f5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
