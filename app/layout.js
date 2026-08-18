import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: "Your Name | Portfolio",
    template: "%s | Your Name",
  },
  description:
    "Portfolio website showcasing projects, experience, skills, and professional background.",
  openGraph: {
    title: "Your Name | Portfolio",
    description:
      "Portfolio website showcasing projects, experience, skills, and professional background.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name | Portfolio",
    description:
      "Portfolio website showcasing projects, experience, skills, and professional background.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
