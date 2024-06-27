import type { Metadata } from "next";
import { Noto_Sans_SC } from "next/font/google";
import "./globals.css";
import { Footer } from "./ui/footer";
import { Header } from "./ui/header";
import Image from "next/image";
import { whatsApp } from "@/public";

const inter = Noto_Sans_SC({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kajang life chapel",
  description: "Church in kajang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Header />
          {children}
          <Footer />
          <a href="https://wa.me/01111478477" target="_blank">
            <Image className="fixed bottom-5 right-5 rounded-md" alt="Chat on WhatsApp" src={whatsApp} />
          </a>
        </div>
      </body>
    </html>
  );
}
