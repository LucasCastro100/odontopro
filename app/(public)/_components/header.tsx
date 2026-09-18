"use client"

import Link from "next/link";
import { LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProfessionalsSheet from "./professionals-sheet";
import { LoginMenu } from "./login-menu";
import { useSession } from "next-auth/react";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const {data: session, status} = useSession(); // Use the useSession hook to get the session data
  
  return (
    <header className="sticky top-0 z-50 border-b-4 border-brand-400 bg-brand-100 shadow-lg">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 p-4">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo-odonto.png" alt="OdontoPro" className="h-10 w-auto" />
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm text-gray-700">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-brand-700">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ProfessionalsSheet session={session} />

          {status === "loading" ? (
            <></>
          ) : session ? (
            <Button variant="outline" className="hidden md:flex" nativeButton={false} render={<Link href="/dashboard" />}>
              <LayoutDashboard className="size-4" />
              <span className="hidden lg:inline">Painel</span>
            </Button>
          ) : (
            <LoginMenu />
          )}
        </div>
      </div>
    </header>
  );
}