import type { Professional } from "@/lib/types";

export const professionals: Professional[] = [
  {
    id: "4cf94ecf-797c-4aff-bbb8-134d3eac1b0e",
    image: "/foto1.png",
    name: "Dra. Ana Souza",
    status: true,
    address: "Av. Paulista, 1000 - São Paulo, SP",
    area: "Ortodontia",
    description:
      "Especialista em alinhadores invisíveis e aparelhos ortodônticos fixos. Apaixonada por transformar sorrisos e devolver confiança aos pacientes por meio de um tratamento personalizado e humanizado.",
    social: {
      instagram: "https://instagram.com/ana.souza.odonto",
      facebook: "https://facebook.com/ana.souza.odonto",
      linkedin: "https://linkedin.com/in/ana-souza-odonto",
      whatsapp: "https://wa.me/5511999990001",
    },
  },
  {
    id: "b5fdb7c3-8e4f-481c-9049-8f0f9610715e",
    image: "/foto1.png",
    name: "Dr. Carlos Lima",
    status: true,
    address: "Rua Augusta, 500 - São Paulo, SP",
    area: "Implantodontia",
    description:
      "Implantodontista com mais de 15 anos de experiência em reabilitações orais completas. Utiliza tecnologia 3D para planejamento preciso e cirurgias guiadas com máxima segurança.",
    social: {
      instagram: "https://instagram.com/carlos.lima.implant",
      linkedin: "https://linkedin.com/in/carlos-lima-implant",
      whatsapp: "https://wa.me/5511999990002",
    },
  },
  {
    id: "11a30930-6f82-4916-87a1-a890152ef4a3",
    image: "/foto1.png",
    name: "Dra. Mariana Costa",
    status: false,
    address: "Av. Rio Branco, 300 - Rio de Janeiro, RJ",
    area: "Endodontia",
    description:
      "Endodontista dedicada ao tratamento de canal com foco em conforto e zero dor. Atua com microscopia para preservar ao máximo a estrutura dental e garantir resultados duradouros.",
    social: {
      instagram: "https://instagram.com/mariana.costa.odo",
      facebook: "https://facebook.com/mariana.costa.odo",
      whatsapp: "https://wa.me/5521999990003",
    },
  },
  {
    id: "a1be6ee4-9fa9-4bef-ae4c-0be640e90caf",
    image: "/foto1.png",
    name: "Dr. Rafael Oliveira",
    status: true,
    address: "Rua das Flores, 120 - Belo Horizonte, MG",
    area: "Odontopediatria",
    description:
      "Especialista em odontopediatria com atendimento lúdico e acolhedor para os pequenos. Acredita que uma boa primeira experiência no dentista constrói hábitos saudáveis para a vida toda.",
    social: {
      instagram: "https://instagram.com/rafael.oliveira.pedia",
      linkedin: "https://linkedin.com/in/rafael-oliveira-pedia",
      whatsapp: "https://wa.me/5531999990004",
    },
  },
  {
    id: "e0f54f53-cba8-483b-bc7b-695a437b6d6f",
    image: "/foto1.png",
    name: "Dra. Juliana Santos",
    status: true,
    address: "Av. Beira Mar, 800 - Fortaleza, CE",
    area: "Harmonização Facial",
    description:
      "Especialista em estética dental e harmonização facial. Combina técnica e sensibilidade para criar resultados naturais que valorizam cada sorriso de forma única.",
    social: {
      instagram: "https://instagram.com/juliana.santos.est",
      facebook: "https://facebook.com/juliana.santos.est",
      linkedin: "https://linkedin.com/in/juliana-santos-est",
      whatsapp: "https://wa.me/5585999990005",
    },
  },
  {
    id: "941289cb-e628-408a-89f7-748f51b35254",
    image: "/foto1.png",
    name: "Dr. Pedro Almeida",
    status: false,
    address: "Rua XV de Novembro, 250 - Curitiba, PR",
    area: "Periodontia",
    description:
      "Periodontista focado na saúde da gengiva e prevenção de doenças periodontais. Desenvolve planos de acompanhamento contínuos para manter a saúde bucal em dia.",
    social: {
      instagram: "https://instagram.com/pedro.almeida.perio",
      linkedin: "https://linkedin.com/in/pedro-almeida-perio",
      whatsapp: "https://wa.me/5541999990006",
    },
  },
  {
    id: "ad9a5ae1-c319-4e78-9908-15604ac4d978",
    image: "/foto1.png",
    name: "Dra. Camila Rocha",
    status: true,
    address: "Av. Afonso Pena, 700 - Belo Horizonte, MG",
    area: "Prótese Dentária",
    description:
      "Especialista em próteses dentárias e reabilitação oral estética. Une alta precisão digital e materiais de excelência para devolver função e beleza ao sorriso.",
    social: {
      instagram: "https://instagram.com/camila.rocha.proto",
      facebook: "https://facebook.com/camila.rocha.proto",
      whatsapp: "https://wa.me/5531999990007",
    },
  },
  {
    id: "40edd45c-c05b-4594-aa74-04598939cc54",
    image: "/foto1.png",
    name: "Dr. Bruno Ferreira",
    status: true,
    address: "Rua da Praia, 450 - Porto Alegre, RS",
    area: "Cirurgia Bucomaxilofacial",
    description:
      "Cirurgião bucomaxilofacial com experiência em cirurgias complexas e exodontias. Preza pela comunicação clara e pelo cuidado em todas as etapas do procedimento.",
    social: {
      instagram: "https://instagram.com/bruno.ferreira.buco",
      facebook: "https://facebook.com/bruno.ferreira.buco",
      whatsapp: "https://wa.me/5551999990008",
    },
  },
];

/** Processa o uuid (remove espaços e normaliza minúsculas) */
export function processId(rawId: string) {
  return rawId.trim().toLowerCase();
}

/** Busca um profissional pelo id (ex: em uma rota dinâmica `[id]`) */
export function getProfessionalById(rawId: string) {
  const id = processId(rawId);
  return professionals.find((professional) => professional.id === id);
}