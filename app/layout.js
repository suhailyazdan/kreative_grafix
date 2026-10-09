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
  title: {
    default: "Kreative Grafix | Suhail Yazdan Portfolio",
    template: "%s | Kreative Grafix",
  },
  description:
    "Explore the design portfolio, projects, experience, and creative work of Suhail Yazdan at Kreative Grafix.",
  openGraph: {
    title: "Kreative Grafix | Suhail Yazdan Portfolio",
    description:
      "Design, digital experiences, and front-end development by Suhail Yazdan.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kreative Grafix | Suhail Yazdan Portfolio",
    description:
      "Design, digital experiences, and front-end development by Suhail Yazdan.",
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
