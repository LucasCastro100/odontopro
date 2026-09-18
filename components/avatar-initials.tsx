"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface AvatarInitialsProps {
  name: string
  imageUrl?: string
  className?: string
}

/** Extrai até 2 iniciais de um nome completo */
function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part.charAt(0))
    .slice(0, 2)
    .join("")
    .toUpperCase()
}

/**
 * Avatar com iniciais automáticas (mesmo padrão do UserMenu).
 * Se imageUrl existir, mostra a foto; senão, cai no fallback.
 */
export function AvatarInitials({
  name,
  imageUrl,
  className,
}: AvatarInitialsProps) {
  const initials = getInitials(name)

  return (
    <Avatar className={cn("size-8 shrink-0", className)}>
      {imageUrl && <AvatarImage src={imageUrl} alt={name} />}
      <AvatarFallback className="bg-brand/10 text-sm font-semibold text-brand">
        {initials}
      </AvatarFallback>
    </Avatar>
  )
}