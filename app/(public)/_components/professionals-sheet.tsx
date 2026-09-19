"use client"

import Link from "next/link";
import { BadgeCheck, LogIn, LayoutDashboard, Menu, Stethoscope, TrendingUp } from "lucide-react";
import type { Session } from "next-auth";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LoginMenu } from "./login-menu";

const beneficios = [
  {
    icon: BadgeCheck,
    title: "Autonomia",
    description: "Gerencie sua agenda e seus pacientes do seu jeito.",
  },
  {
    icon: Stethoscope,
    title: "Clínica equipada",
    description: "Estrutura completa para atender com excelência.",
  },
  {
    icon: TrendingUp,
    title: "Crescimento",
    description: "Parceria para evoluir sua carreira todos os anos.",
  },
];

interface ProfessionalsSheetProps {
  session: Session | null;
}

export default function ProfessionalsSheet({ session }: ProfessionalsSheetProps) {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button variant="default">
            <Menu className="size-4" />
            <span className="hidden sm:inline">Para profissionais</span>
          </Button>
        }
      />
      <SheetContent side="right">
        <SheetHeader className="border-b border-gray-100 pb-4">
          <SheetTitle>Seja um profissional OdontoPro</SheetTitle>
          <SheetDescription>
            Junte-se à nossa equipe e atenda com a melhor tecnologia do mercado.
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-1 flex-col gap-6 p-4">
          {beneficios.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                <Icon className="size-5" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{title}</h4>
                <p className="text-sm text-gray-600">{description}</p>
              </div>
            </div>
          ))}
        </div>

        <SheetFooter className="flex flex-col gap-3 border-t border-gray-100">
          {session ? (
            <SheetClose
              nativeButton={false}
              render={<Link href="/dashboard" />}>
              <Button variant="outline" className="w-full md:hidden">
                <LayoutDashboard className="size-4" />
                Painel
              </Button>
            </SheetClose>
          ) : (
            <LoginMenu />
          )}
          <SheetClose
            render={<Button className="w-full">Quero fazer parte</Button>}
          />
          <p className="text-center text-xs text-gray-500">
            Enviaremos o formulário de inscrição para o seu e-mail.
          </p>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}