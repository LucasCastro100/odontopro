"use client"

import { createContext, useContext } from "react"

interface Clinic {
  id: string
  name: string
}

const ClinicContext = createContext<Clinic | null>(null)

/**
 * Provider de clínica logada.
 * Envolva a árvore (ex: layout do painel) e use useClinic() nos filhos.
 */
export function ClinicProvider({
  clinic,
  children,
}: {
  clinic: Clinic
  children: React.ReactNode
}) {
  return <ClinicContext.Provider value={clinic}>{children}</ClinicContext.Provider>
}

export function useClinic() {
  const ctx = useContext(ClinicContext)
  if (!ctx) {
    throw new Error("useClinic deve ser usado dentro de <ClinicProvider>")
  }
  return ctx
}