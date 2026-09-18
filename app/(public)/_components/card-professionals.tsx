import { ArrowRight } from "lucide-react";
import { Card, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface Props {
  image: string;
  name: string;
  status: boolean;
  id: string;
}

export default function CardProfessional({ image, name, status, id }: Props) {
  return (
    <Link href={`/professionals/${id}`} className="group block rounded-2xl">
      <Card className="relative overflow-hidden rounded-2xl border-0 bg-brand-950 pb-0 ring-1 ring-white/10 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl group-hover:shadow-brand-950/40 group-hover:ring-brand-300">
        <img
          src={image}
          alt={name}
          className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Gradiente para leitura do texto sobre a foto */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-900/25 to-transparent" />

        {/* Badge de status */}
        <div className="absolute top-3 left-3">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold backdrop-blur ${
              status ? "bg-brand-500/90 text-white" : "bg-gray-900/60 text-white"
            }`}
          >
            <span
              className={`size-1.5 rounded-full ${status ? "bg-white" : "bg-gray-300"}`}
            />
            {status ? "Disponível" : "Indisponível"}
          </span>
        </div>

        {/* Nome + ação */}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
          <CardTitle className="line-clamp-2 text-lg leading-snug font-bold text-white drop-shadow">
            {name}
          </CardTitle>
          <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white shadow-lg transition-all duration-300 group-hover:translate-x-0.5 group-hover:bg-brand-400">
            <ArrowRight className="size-5" />
          </span>
        </div>
      </Card>
    </Link>
  );
}