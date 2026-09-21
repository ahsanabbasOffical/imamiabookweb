import type { Metadata } from "next";
import "./globals.css";
import Preloader from "@/components/Preloader";

export const metadata: Metadata = {
  title: "Imamia Bookstore - Karachi",
  description: "Curated authentic Islamic literature, history, and biographies with Karachi delivery.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#fffdfa] text-gray-900 antialiased selection:bg-amber-900 selection:text-white">
        <Preloader />
        {children}
      </body>
    </html>
  );
}