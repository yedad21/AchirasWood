import type { Metadata } from "next";
import { Cinzel, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JOHNNY + Joey | Tesoros Artesanales en Maderas Nobles y Moissanita",
  description:
    "No vendemos objetos de madera; facilitamos la inmortalización de momentos. Cada pieza que sale de nuestro taller está diseñada para ser un tesoro definitivo.",
  icons: {
    icon: "/images/icono-carita.svg",
    shortcut: "/images/icono-carita.svg",
    apple: "/images/icono-carita.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${cinzel.variable} ${montserrat.variable}`}>
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
