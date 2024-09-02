import { Inter } from "next/font/google";
import "./globals.css"
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Schwarz Entertainment",
  description: "A transformative platform dedicated to empowering artistic excellence and fostering connections across communities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <Script src="https://kit.fontawesome.com/a788f2573e.js" crossOrigin="anonymous"></Script>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
