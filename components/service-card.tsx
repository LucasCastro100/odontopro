import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Service } from "@/lib/types"

interface ServiceCardProps {
  service: Service
}

/**
 * Exemplo de componente de Card recebendo uma interface via props.
 * Pode ser usado como componente server (sem "use client").
 */
export function ServiceCard({ service }: ServiceCardProps) {
  const price = service.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle>{service.name}</CardTitle>
        <CardDescription>{service.description}</CardDescription>
      </CardHeader>

      <CardContent>
        <p className="text-2xl font-semibold text-brand">{price}</p>
      </CardContent>

      <CardFooter className="justify-end">
        <Button variant="outline" size="sm">Editar</Button>
      </CardFooter>
    </Card>
  )
}