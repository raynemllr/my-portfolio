import Topbar from "@/components/shared/Topbar";
import Provider from "@/lib/Provider";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
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
    <html lang="en">
      <body
        className={`${roboto.className} scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-rounded scrollbar-thumb-rounded-lg`}
      >
        <Topbar />
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
