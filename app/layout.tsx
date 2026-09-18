import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import SessionAuthProvider from "@/components/session-auth";

const nunito = Nunito({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "OdontoPro - Gestão de Clínicas Odontológicas",
    template: "%s | OdontoPro",
  },
  description:
    "O OdontoPro é uma plataforma completa para clínicas odontológicas: agenda, pacientes, profissionais e gestão do consultório em um só lugar.",
  keywords: [
    "odontologia",
    "clínica odontológica",
    "gestão de consultório",
    "agenda odontológica",
    "pacientes",
    "dentista",
  ],
  authors: [{ name: "OdontoPro" }],
  creator: "OdontoPro",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://odontopro.com.br",
    siteName: "OdontoPro",
    title: "OdontoPro - Gestão de Clínicas Odontológicas",
    description:
      "O OdontoPro é uma plataforma completa para clínicas odontológicas: agenda, pacientes, profissionais e gestão do consultório em um só lugar.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-br"
      className={`${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SessionAuthProvider>
          {children}
        </SessionAuthProvider>
      </body>
    </html>
  );
}
