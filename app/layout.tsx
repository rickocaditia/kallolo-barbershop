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
  title: "Kallolo Barbershop | Potong Rambut Profesional Bekasi",
  description: "Tampil berwibawa di Kallolo Barbershop. Pangkas rambut profesional dengan harga flat 35k.",
  verification: {
    google: "GUPQLvJJwGvqyhd-873pxlLJphyDFQFb1aN0ewSWzcs", // Ganti dengan kode asli dari Google Search Console Ayah
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
        
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
