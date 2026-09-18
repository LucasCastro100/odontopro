import type { Metadata } from "next";
import ListProfessionals from "./_components/list-professionals";
import Hero from "./_components/hero";

export const metadata: Metadata = {
    title: "Home",
    description:
        "Conheça o OdontoPro: plataforma de gestão para clínicas odontológicas. Encontre profissionais, gerencie sua agenda e cuide do seu sorriso.",
};

export default function Page() {
    return (
        <>
            <Hero />
            <ListProfessionals />
        </>
    )
}