"use client"

import { Loader2, LogIn, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { handleRegister } from "../_actions/login";

// Ícone oficial do Google (G multicolor)
function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

// Ícone oficial do Outlook (O com envelope)
function OutlookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#0078D4"
        d="M7.5 6.5h10.5c.8 0 1.5.7 1.5 1.5v8c0 .8-.7 1.5-1.5 1.5H7.5c-.8 0-1.5-.7-1.5-1.5V8c0-.8.7-1.5 1.5-1.5z"
      />
      <path
        fill="#fff"
        d="M7.5 8l6 4.5 6-4.5-6 4.5-6-4.5z"
      />
      <path
        fill="#0078D4"
        d="M19.5 8l-6 4.5h-3l3-2.25 6-2.25z"
      />
      <path
        fill="#0078D4"
        d="M12.75 10.5L20 8v5.5c0 .55-.45 1-1 1h-8.25l2-4z"
      />
    </svg>
  );
}

export function LoginMenu() {
  const [loading, setLoading] = useState(false);

  async function handleGoogleLogin() {
    setLoading(true);
    try {
      await handleRegister("google");
    } catch {
      // redirect do NextAuth já cuida da navegação
    } finally {
      setLoading(false);
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="outline" className="hidden md:flex">
            {loading ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              <LogIn className="size-4" />
            )}
            <span className="hidden lg:inline">Login</span>
          </Button>
        }
      />
      <DropdownMenuContent className="w-64" align="end" sideOffset={8}>
        <DropdownMenuGroup>
          <DropdownMenuLabel>
            <div className="px-1 py-1">
              <p className="text-sm font-medium">Entrar no OdontoPro</p>
              <p className="text-xs text-muted-foreground">
                Escolha uma opção abaixo
              </p>
            </div>
          </DropdownMenuLabel>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            className="cursor-pointer gap-2 py-2"
            onClick={() => handleGoogleLogin()}
          >
            <GoogleIcon className="size-4 shrink-0" />
            Continuar com Google
            <span className="ml-auto rounded-md bg-brand/10 px-1.5 py-0.5 text-[10px] font-medium text-brand">
              disponível
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem
            disabled
            className="gap-2 py-2 opacity-50"
          >
            <OutlookIcon className="size-4 shrink-0" />
            Continuar com Outlook
            <span className="ml-auto rounded-md bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
              em breve
            </span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer gap-2 py-2 text-muted-foreground"
          onClick={() => window.location.reload()}
        >
          <X className="size-4" />
          Cancelar
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}