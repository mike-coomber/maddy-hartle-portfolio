import type { Metadata } from "next";
import { Vollkorn } from "next/font/google";
import "./globals.css";
import Footer from "../components/footer";

const volkhorn = Vollkorn({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "maddy hartle",
  description:
    "Art Director specializing in visual  identity, illustration and motion.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={volkhorn.className}>{children}</body>
    </html>
  );
}
