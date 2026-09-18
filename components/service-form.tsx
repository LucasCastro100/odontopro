"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { InputField } from "@/components/input-field"
import { useToast } from "@/components/toast-provider"

interface ServiceFormProps {
  /** Chama o endpoint da rota pai */
  onSubmit: (data: { name: string; description: string; price: number }) => Promise<void> | void
  defaultValues?: { name?: string; description?: string; price?: number }
  submitLabel?: string
}

/**
 * Formulário de serviço completo, com submit e validação básica.
 * As chamadas de fetch ficam no pai (onSubmit) — cada rota usa seu endpoint.
 */
export function ServiceForm({
  onSubmit,
  defaultValues,
  submitLabel = "Salvar",
}: ServiceFormProps) {
  const [name, setName] = useState(defaultValues?.name ?? "")
  const [description, setDescription] = useState(defaultValues?.description ?? "")
  const [price, setPrice] = useState(defaultValues?.price?.toString() ?? "")
  const [isSaving, setIsSaving] = useState(false)
  const { showToast } = useToast()

  const isValid = name.trim() && price.trim()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!isValid) return

    setIsSaving(true)
    try {
      await onSubmit({
        name: name.trim(),
        description: description.trim(),
        price: Number(price),
      })
      showToast("Serviço salvo com sucesso!")
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <InputField
        id="service-name"
        label="Nome"
        value={name}
        onChange={setName}
        placeholder="Ex: Limpeza"
        required
      />
      <InputField
        id="service-description"
        label="Descrição"
        value={description}
        onChange={setDescription}
        placeholder="Ex: Profilaxia completa"
      />
      <InputField
        id="service-price"
        label="Preço"
        type="number"
        value={price}
        onChange={setPrice}
        placeholder="Ex: 150"
        required
      />

      <Button type="submit" disabled={isSaving || !isValid}>
        {isSaving ? "Salvando..." : submitLabel}
      </Button>
    </form>
  )
}