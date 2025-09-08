import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Providers } from "./GlobalRedux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ali Azhar",
  description: "Portfolio",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="icon" href="/favicon.png" /> {/* Add this line */}
      </head>
      <body className="min-w-full h-[100%]">
        
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
