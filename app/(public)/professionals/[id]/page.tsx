import {
  MapPin,
  ArrowLeft,
  Camera,
  ThumbsUp,
  Briefcase,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { getProfessionalById } from "@/lib/data/professionals";

export default async function Page(props: PageProps<"/professionals/[id]">) {
  const { id } = await props.params;

  return <ProfessionalDetails id={id} />;
}

function StatusBadge({ status }: { status: boolean }) {
  return (
    <span
      className={`inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
        status ? "bg-brand-500 text-white" : "bg-gray-200 text-gray-600"
      }`}
    >
      <span
        className={`size-1.5 rounded-full ${status ? "bg-white" : "bg-gray-500"}`}
      />
      {status ? "Disponível" : "Indisponível"}
    </span>
  );
}

async function ProfessionalDetails({ id }: { id: string }) {
  const professional = getProfessionalById(id);

  if (!professional) {
    notFound();
  }

  const socials = [
    { href: professional.social.instagram, icon: Camera, label: "Instagram" },
    { href: professional.social.facebook, icon: ThumbsUp, label: "Facebook" },
    { href: professional.social.linkedin, icon: Briefcase, label: "LinkedIn" },
    { href: professional.social.whatsapp, icon: MessageCircle, label: "WhatsApp" },
  ].filter((social) => social.href);

  return (
    <section className="w-full py-12 sm:py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4">
        <Button
          variant="outline"
          nativeButton={false}
          render={<Link href="/#professionals" />}
          className="w-fit border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
        >
          <ArrowLeft className="size-4" />
          Voltar para profissionais
        </Button>

        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-12">
          {/* Imagem */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
            <img
              src={professional.image}
              alt={professional.name}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>

          {/* Texto */}
          <div className="flex flex-col gap-4">
            <StatusBadge status={professional.status} />

            <div className="flex flex-col gap-1">
              <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">
                {professional.name}
              </h1>
              <p className="text-base font-medium text-brand-300">
                {professional.area}
              </p>
            </div>

            <p className="text-base leading-relaxed text-brand-100/80">
              {professional.description}
            </p>

            <p className="flex items-center gap-1.5 text-sm text-brand-100/80 sm:text-base">
              <MapPin className="size-4 shrink-0 text-brand-300" />
              {professional.address}
            </p>

            {socials.length > 0 && (
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-brand-100/80">
                  Redes sociais:
                </span>
                {socials.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex size-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition-colors hover:bg-brand-500 hover:text-white hover:ring-brand-500"
                  >
                    <Icon className="size-5" />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}