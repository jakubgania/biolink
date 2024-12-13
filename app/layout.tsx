import type { Metadata } from "next";
// import localFont from "next/font/local";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";

export const metadata: Metadata = {
  title: "Biolink",
  description: "A site for all your interesting links",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
