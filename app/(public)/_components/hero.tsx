import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <div className="grid w-full grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-8">
            <article className="flex flex-col items-center gap-5 text-center md:items-start md:gap-6 md:text-left">
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-500/20 px-3 py-1 text-xs font-semibold text-brand-100 ring-1 ring-brand-400/40">
                    Plataforma para clínicas odontológicas
                </span>

                <h1 className="font-heading text-3xl leading-tight font-bold text-white sm:text-4xl lg:text-5xl">
                    Encontre os melhores profissionais em{" "}
                    <span className="text-brand-300">um único local!</span>
                </h1>

                <p className="max-w-md text-base text-brand-100/80 sm:text-lg">
                    Nós somos uma plataforma para profissionais da saúde com foco em
                    agilizar seu atendimento de forma simplificada e organizada.
                </p>

                <Button
                    size="lg"
                    nativeButton={false}
                    render={<Link href="#professionals" />}
                    className="group/btn"
                >
                    Ver profissionais
                    <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-0.5" />
                </Button>
            </article>

            <div className="flex justify-center md:justify-end">
                <Image
                    src="/doctor-hero.png"
                    alt="Imagem Doutor"
                    width={695}
                    height={882}
                    priority
                    className="h-auto w-44 drop-shadow-2xl sm:w-56 md:w-80"
                />
            </div>
        </div>
    )

}