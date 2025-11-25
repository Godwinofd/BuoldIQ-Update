import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import AuthProvider from "@/components/AuthProvider";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://buildiqs.org"), // 👈 important for canonical URLs

  title: {
    default: "BuildIQ | Premium Web Design & AI Automation Studio",
    template: "%s | BuildIQ"
  },

  description:
    "BuildIQ is a modern UK-based digital studio specializing in high-converting websites, premium branding, and AI-powered business automations. We help small businesses grow with clean design, fast performance, and scalable systems.",

  keywords: [
    "web design agency",
    "website development UK",
    "web design Oxford",
    "affordable website UK",
    "Next.js developer",
    "web designer London",
    "brand design",
    "AI automations",
    "small business website",
  ],

  icons: {
    icon: "/images/logo/logo.jpg",
  },

  openGraph: {
    title: "BuildIQ | Premium Web Design & AI Automation Studio",
    description:
      "BuildIQ builds high-performance websites, brand identities and AI automations for modern businesses across the UK.",
    url: "https://buildiqs.org",
    siteName: "BuildIQ",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "BuildIQ Open Graph Image",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "BuildIQ – Digital Excellence Delivered",
    description:
      "Premium websites, brand design and AI systems built for modern businesses.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${oswald.variable} font-sans antialiased bg-background text-foreground selection:bg-primary selection:text-primary-foreground`}
      >
        <AuthProvider>
          {children}
          <CookieConsent />
          <Analytics />
          <SpeedInsights />
        </AuthProvider>
      </body>
    </html>
  );
}
