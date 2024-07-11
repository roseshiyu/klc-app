import { whatsApp } from "@/public";
import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Noto_Sans_SC } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import { Footer } from "./ui/footer";
import { Header } from "./ui/header";
const inter = Noto_Sans_SC({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://klc-app.vercel.app"),
  keywords: ["Kajang", "Church", "Church in Kajang", "abcodoaskdpqowkepqwoekqweqwok"],
  title: "Kajang Life Chapel",
  description: "Church in Kajang",
  openGraph: {
    description: "Church in Kajang",
    images: ["https://res.cloudinary.com/dk4nbfmhr/image/upload/v1720680635/b2zrwzbvwtoochfcjgo8.png"]
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
          <div className="bg-neutral-50">
            <Header />
            {children}
            <Footer />
            <a href={"https://wa.me/+60122876627?text="+encodeURIComponent("Hi, i came form klc website")} target="_blank">
              <Image className="fixed bottom-5 right-5 rounded-md" alt="Chat on WhatsApp" src={whatsApp} />
            </a>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
