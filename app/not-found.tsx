import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-brand-50 via-white to-brand-100 px-4">
      <div className="flex flex-col items-center gap-8 text-center">
        {/* Ilustração */}
        <div className="relative">
          <div className="absolute inset-0 animate-pulse rounded-full bg-brand-200/50 blur-3xl" />
          <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 shadow-2xl shadow-brand-500/30">
            <span className="text-7xl font-bold text-white">404</span>
          </div>
        </div>

        {/* Ícone de busca */}
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-100 text-brand-600">
          <Search className="h-8 w-8" />
        </div>

        {/* Texto */}
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Página não encontrada
          </h1>
          <p className="max-w-md text-lg text-gray-500">
            Ops! Parece que essa página saiu para um intervalo odontológico. 
            Ela pode ter sido movida ou não existe mais.
          </p>
        </div>

        {/* Botões */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button variant="outline" size="lg" nativeButton={false} render={<Link href="/" />}>
            <ArrowLeft className="h-4 w-4" />
            Voltar ao início
          </Button>
          <Button size="lg" nativeButton={false} render={<Link href="/dashboard" />}>
            Acessar painel
          </Button>
        </div>

        {/* Decoração */}
        <div className="mt-8 flex gap-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="h-2 w-2 rounded-full bg-brand-400"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
