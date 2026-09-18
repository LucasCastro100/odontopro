"use client"

import { useEffect, useState } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { ServiceCard } from "@/components/service-card"
import type { Service } from "@/lib/types"

interface ServicesListProps {
  endpoint?: string
}

/**
 * Lista de serviços com estados:
 * - null (carregando) → skeletons
 * - array vazio → mensagem de vazio
 * - com dados → grid de ServiceCard
 */
export function ServicesList({ endpoint = "/api/services" }: ServicesListProps) {
  const [services, setServices] = useState<Service[] | null>(null)

  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data: Service[]) => setServices(data))
      .catch(() => setServices([]))
  }, [endpoint])

  if (services === null) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-32 w-full" />
        ))}
      </div>
    )
  }

  if (services.length === 0) {
    return <p className="text-muted-foreground">Nenhum serviço cadastrado.</p>
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  )
}