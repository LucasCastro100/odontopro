import CardProfessional from "./card-professionals";
import { ProfessionalsSlider } from "./professionals-slider";
import { professionals } from "@/lib/data/professionals";

export default function ListProfessionals() {
  return (
    <section id="professionals" className="w-full py-12 sm:py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4">
        <div className="flex flex-col gap-2 sm:items-center sm:text-center">
          <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
            Profissionais
          </h2>
          <p className="text-sm text-brand-200 sm:text-base">
            Conheça a equipe de especialistas prontos para cuidar do seu sorriso.
          </p>
        </div>

        <ProfessionalsSlider>
          {professionals.map((professional) => (
            <div
              key={professional.id}
              data-slide
              className="w-[80%] shrink-0 snap-start sm:w-[48%] md:w-[31%] lg:w-[23%] xl:w-[19%]"
            >
              <CardProfessional {...professional} />
            </div>
          ))}
        </ProfessionalsSlider>
      </div>
    </section>
  );
}