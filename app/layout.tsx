import Provider from "@/lib/Provider";
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const noto_sans = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Rayne Mallari | Front-End Developer",
  description: "My portfolio developed using Next 14",
  authors: [{ name: "Rayne Mallari" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${noto_sans.className} scrollbar-track scrollbar-thin scrollbar-thumb-gray-400 scrollbar-thumb-rounded-lg`}
      >
        <noscript>Enable Javascript to run this app.</noscript>
        <div id="root"></div>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
