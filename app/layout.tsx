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

export const metadata: Metadata = {
  title: "SavvyFi",
  description:
    "Aplicación Web Dedicada a la Administración de Finanzas Personales.",
  applicationName: "SavvyFi",
  authors: [{ name: "Gabriel Avilés", url: "https://github.com/gabo592" }],
  generator: "Next.js",
  keywords: [
    "Finanzas",
    "Gastos",
    "Ingresos",
    "Banco",
    "Cuenta",
    "Moneda",
    "Dinero",
    "Gastos",
    "Ingresos",
    "Banco",
    "Cuenta",
    "Moneda",
    "Dinero",
  ],
  referrer: "no-referrer-when-downgrade",
  creator: "Gabriel Avilés",
  publisher: "Gabriel Avilés",
  robots: "index, follow",
  icons: [
    {
      rel: "apple-touch-icon",
      sizes: "57x57",
      url: "/images/apple-icon-57x57.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "60x60",
      url: "/images/apple-icon-60x60.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "72x72",
      url: "/images/apple-icon-72x72.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "76x76",
      url: "/images/apple-icon-76x76.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "114x144",
      url: "/images/apple-icon-114x144.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "120x120",
      url: "/images/apple-icon-120x120.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "144x144",
      url: "/images/apple-icon-144x144.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "152x152",
      url: "/images/apple-icon-152x152.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/images/apple-icon-180x180.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      url: "/images/favicon-192x192.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/images/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "96x96",
      url: "/images/favicon-96x96.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/images/favicon-16x16.png",
    },
  ],
  manifest: "/docs/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
