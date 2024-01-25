import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Oss Web Studio | Agencia Digital | Creamos tu página web gratis | Edición de videos | Potenciamos tus redes sociales",
  description:
    "Creamos sitios web únicos, te ayudamos potenciando tus redes sociales y con creación de contenido",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
