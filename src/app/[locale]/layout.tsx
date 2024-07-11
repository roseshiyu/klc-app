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
    images: ["https://scontent.fkul8-3.fna.fbcdn.net/v/t39.30808-6/330848718_5986069698102537_190477537028308587_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=OPJDleBHt5cQ7kNvgFX96L-&_nc_ht=scontent.fkul8-3.fna&oh=00_AYDI1IwYWF77iLhnune52o3c5-LUD5SnxGIu-gBLeN5IpQ&oe=66846E0A"]
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
