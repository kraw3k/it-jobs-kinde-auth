import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/app/providers";
import Header from "@/components/ui/header/Header";

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
    <html lang="en" className="light">
      <body>
        <Providers>
          <Header />
          <main className="p-8 flex flex-col">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
