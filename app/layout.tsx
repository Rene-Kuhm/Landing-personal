import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import JsonLd from "./components/JsonLd";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://kuhmdev.com"),
  title: {
    default: "Agencia de Desarrollo Web y Consultoría | KuhmDev",
    template: "%s | KuhmDev"
  },
  description: "Expertos en desarrollo web, programación y consultoría digital. Creamos soluciones a medida que impulsan el crecimiento de tu negocio.",
  generator: "Next.js",
  applicationName: "KuhmDev",
  referrer: "origin-when-cross-origin",
  keywords: ["desarrollo web", "programación", "consultoría", "SEO", "marketing digital", "diseño web", "aplicaciones móviles", "Eduardo Castex", "Argentina"],
  authors: [{ name: "KuhmDev", url: "https://kuhmdev.com" }],
  creator: "René Kuhm",
  publisher: "KuhmDev",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "es-ES": "/",
    },
  },
  openGraph: {
    title: "Agencia de Desarrollo Web y Consultoría | KuhmDev",
    description: "Expertos en desarrollo web, programación y consultoría digital. Creamos soluciones a medida que impulsan el crecimiento de tu negocio.",
    url: "https://kuhmdev.com",
    siteName: "KuhmDev",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KuhmDev - Agencia de Desarrollo Web"
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agencia de Desarrollo Web y Consultoría | KuhmDev",
    description: "Expertos en desarrollo web, programación y consultoría digital. Creamos soluciones a medida que impulsan el crecimiento de tu negocio.",
    creator: "@KuhmDev",
    images: ["/images/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/images/logo.png', sizes: 'any' }
    ],
    apple: '/images/logo.png',
  },
  verification: {
    google: "verificación-google", // Reemplazar con tu código real cuando lo tengas
  },
  category: 'technology'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} scroll-smooth`}>
      <head>
        <JsonLd />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
