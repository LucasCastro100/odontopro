/**
 * Tipos de domínio compartilhados entre componentes.
 * Coloque aqui as interfaces usadas em mais de um componente.
 */
export interface Service {
  id: string
  name: string
  description: string
  price: number
}

export interface Professional {
  id: string
  image: string
  name: string
  status: boolean
  address: string
  area: string
  description: string
  social: {
    instagram?: string
    facebook?: string
    linkedin?: string
    whatsapp?: string
  }
}