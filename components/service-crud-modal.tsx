"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import type { Service } from "@/lib/types"

interface ServiceCrudModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  /** null = criar novo | preenchido = editar */
  item: Service | null
  /** FUNÇÕES vêm de fora — cada rota decide o endpoint */
  onSave: (data: Omit<Service, "id">) => Promise<void> | void
  onDelete?: (id: string) => Promise<void> | void
}

/**
 * Modal CRUD de serviço que recebe as funções por props.
 * O modal não sabe qual endpoint chamar — cada rota passa
 * onSave/onDelete apontando para o endpoint dela.
 */
export function ServiceCrudModal({
  open,
  onOpenChange,
  item,
  onSave,
  onDelete,
}: ServiceCrudModalProps) {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [isSaving, setIsSaving] = useState(false)

  // Ao abrir: preenche com o item (edição) ou limpa (novo)
  useEffect(() => {
    if (open) {
      setName(item?.name ?? "")
      setDescription(item?.description ?? "")
      setPrice(item ? String(item.price) : "")
    }
  }, [open, item])

  async function handleSave() {
    setIsSaving(true)
    try {
      await onSave({ name, description, price: Number(price) })
      onOpenChange(false) // fecha se salvou com sucesso
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{item ? "Editar serviço" : "Adicionar serviço"}</SheetTitle>
          <SheetDescription>Preencha os dados abaixo</SheetDescription>
        </SheetHeader>

        <div className="flex flex-col gap-3 px-4">
          <Input
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Input
            type="number"
            placeholder="Preço"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <SheetFooter>
          {item && onDelete && (
            <Button
              variant="destructive"
              onClick={() => onDelete(item.id)}
            >
              Excluir
            </Button>
          )}
          <Button onClick={handleSave} disabled={isSaving}>
            {isSaving ? "Salvando..." : item ? "Salvar" : "Criar"}
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}