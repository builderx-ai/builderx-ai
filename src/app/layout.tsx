import type { Metadata } from "next";
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

const SITE_URL = "https://www.builderxai.dev";
const DESCRIPTION =
  "BuilderX AI 是悉尼的 AI 构建者与创业者社区：线下分享、共创活动和实战项目，连接 Builder 与 Founder。";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "BuilderX AI",
    template: "%s | BuilderX AI",
  },
  description: DESCRIPTION,
  icons: { icon: "/favicon.png" },
  openGraph: {
    type: "website",
    siteName: "BuilderX AI",
    title: "BuilderX AI",
    description: DESCRIPTION,
    url: SITE_URL,
    locale: "zh_CN",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "BuilderX AI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BuilderX AI",
    description: DESCRIPTION,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-black"
        >
          跳到正文
        </a>
        {children}
      </body>
    </html>
  );
}
