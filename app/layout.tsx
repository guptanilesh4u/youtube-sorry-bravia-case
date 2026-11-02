import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CLAIM Ready — A Free Warranty Claim Checklist",
  description:
    "A free checklist for anyone about to file a warranty claim. Decided on facts, in writing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} h-full antialiased selection:bg-[#DCF3EA] selection:text-[#065F43]`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col font-sans bg-[#FFFFFF] text-[#363C47]"
      >
        {children}
      </body>
    </html>
  );
}
