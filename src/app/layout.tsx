import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/components/providers/app.provider";
import { Noto_Sans_Thai } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const notoSansThai = Noto_Sans_Thai({
  display: "swap",
  subsets: ["thai"],
  variable: "--font-noto-sans-thai",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "antialiased",
          notoSansThai.variable,
          geistSans.variable,
          geistMono.variable
        )}
      >
        <AppProviders>
          <div className="flex flex-col min-h-[100dvh] font-sans">
            {children}
          </div>
          <Toaster />
        </AppProviders>
      </body>
    </html>
  );
}
