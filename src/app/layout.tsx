import type { Metadata } from "next";

import "./globals.css";
import {
  LanguageProvider,
} from "@/lib/i18n/LanguageContext";

export const metadata: Metadata = {
  title: "Real Estate Sales Analytics",
  description:
    "Interactive real estate sales analytics dashboard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}