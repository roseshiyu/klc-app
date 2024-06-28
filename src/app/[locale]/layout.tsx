import type { Metadata } from "next";
import { Noto_Sans_SC } from "next/font/google";
import "./globals.css";
import { Footer } from "./ui/footer";
import { Header } from "./ui/header";
import Image from "next/image";
import { whatsApp } from "@/public";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

const inter = Noto_Sans_SC({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://klc-app.vercel.app"),
  keywords: ["Kajang", "Church", "Church in Kajang", "abcodoaskdpqowkepqwoekqweqwok"],
  title: "Kajang life chapel",
  description: "Church in Kajang",
  openGraph: {
    description: "Church in Kajang"
  },
  verification: { google: "WOMw_7TKxB-s9jLBxCog6vptluMoUrQ8hG4PazGjSUQ" },
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string }
}>) {
  const messages = await getMessages();
  
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <div>
            <Header />
            {children}
            <Footer />
            <a href="https://wa.me/01111478477" target="_blank">
              <Image className="fixed bottom-5 right-5 rounded-md" alt="Chat on WhatsApp" src={whatsApp} />
            </a>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
