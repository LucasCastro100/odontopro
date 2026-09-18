"use client"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

/**
 * Qual ação o modal representa.
 * A flag controla o botão e a função que será chamada:
 * - "save"   → botão "Salvar"     → onSave
 * - "edit"   → botão "Atualizar"  → onEdit
 * - "delete" → botão "Excluir"    → onDelete
 */
export type CrudMode = "save" | "edit" | "delete"

interface CrudModalProps {
  /** Componente controlado: estado "open" vem do pai */
  open: boolean
  onOpenChange: (open: boolean) => void
  /** Flag que controla o botão que será renderizado */
  mode: CrudMode
  title: string
  description?: string
  /** Conteúdo do card (formulário, detalhes, confirmação...) */
  children?: React.ReactNode
  /** Funções que cada rota passa — apontam para o endpoint daquela rota */
  onSave?: () => void | Promise<void>
  onEdit?: () => void | Promise<void>
  onDelete?: () => void | Promise<void>
  /** Deixa o botão desabilitado enquanto processa */
  isSubmitting?: boolean
}

// Config centralizada: a flag → (label, variant)
const MODE_CONFIG: Record<
  CrudMode,
  { label: string; variant: "default" | "destructive" }
> = {
  save: { label: "Salvar", variant: "default" },
  edit: { label: "Atualizar", variant: "default" },
  delete: { label: "Excluir", variant: "destructive" },
}

export function CrudModal({
  open,
  onOpenChange,
  mode,
  title,
  description,
  children,
  onSave,
  onEdit,
  onDelete,
  isSubmitting = false,
}: CrudModalProps) {
  const { label, variant } = MODE_CONFIG[mode]

  // A flag decide QUAL função o botão chama
  const handler =
    mode === "save" ? onSave : mode === "edit" ? onEdit : onDelete

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          {description && <SheetDescription>{description}</SheetDescription>}
        </SheetHeader>

        <Card className="mx-4 border-none shadow-none">
          <CardContent className="flex flex-col gap-3 pt-4">
            {children}
          </CardContent>
        </Card>

        <SheetFooter>
          <Button
            variant={variant}
            onClick={handler}
            disabled={!handler || isSubmitting}
          >
            {isSubmitting ? "Processando..." : label}
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}