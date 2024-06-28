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
  title: "Kajang life chapel",
  description: "Church in kajang",
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
