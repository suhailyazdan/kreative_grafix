import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { personName, siteName, siteUrl } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: siteUrl,
  title: {
    default: `${personName} | UI/UX Designer Portfolio`,
    template: `%s | ${siteName}`,
  },
  description:
    "Suhail Yazdan is a UI/UX Designer creating intuitive digital products, with front-end development expertise and a passion for training and mentoring.",
  applicationName: siteName,
  authors: [{ name: personName, url: siteUrl }],
  creator: personName,
  publisher: siteName,
  keywords: [
    "Suhail Yazdan",
    "UI/UX Designer",
    "UI Designer",
    "User Experience Design",
    "Front-End Development",
    "React",
    "Next.js",
    "Training and Mentoring",
    "Kreative Grafix",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
  openGraph: {
    title: `${personName} | UI/UX Designer Portfolio`,
    description:
      "Explore UI/UX design, front-end development, and training work by Suhail Yazdan.",
    type: "website",
    locale: "en_US",
    siteName,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: `${personName} | UI/UX Designer Portfolio`,
    description:
      "Explore UI/UX design, front-end development, and training work by Suhail Yazdan.",
    images: ["/opengraph-image"],
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
