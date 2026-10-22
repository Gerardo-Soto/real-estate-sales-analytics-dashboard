import type { Metadata } from "next";

import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}