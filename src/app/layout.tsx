import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Rhaka Fertha Ary Sukma | Portfolio",
  description: "Operational & Technical Support Specialist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} antialiased dark`}>
      <body className="bg-background text-foreground font-sans min-h-screen">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
