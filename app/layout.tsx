import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/app/providers";
import Header from "@/components/ui/header/Header";
import NextBreadcrumb from "@/components/NextBreadcrumb";

export const metadata: Metadata = {
  title: "IT-JOBS",
  description: "Find your dream job in IT!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html lang="pl" className="dark">
    <html lang="pl" className="light">
      <body>
        <Providers>
          <Header />
          <NextBreadcrumb
              homeElement={'Home'}
              separator={<span> | </span>}
              activeClasses='text-amber-500'
              containerClasses='flex py-5 bg-gradient-to-r from-purple-600 to-blue-600'
              listClasses='hover:underline mx-2 font-bold'
              capitalizeLinks
          />
          <main className="p-8 container mx-auto">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
