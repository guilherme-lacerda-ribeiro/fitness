import type { Metadata } from "next";
import { Inter, Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fitness Mentor",
  description: "Treino personalizado",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt_BR" className="dark">
      <body
        className={`
          ${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased
          bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-200
        `}
      >
        {children}
      </body>
    </html>
  );
}
