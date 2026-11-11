/**
 * Fonte única das informações institucionais do Santuário.
 * Altere aqui horários, contatos e links — os componentes apenas leem estes dados.
 * Não inclua informações que não tenham sido confirmadas pela administração.
 */

export const site = {
  name: "Santuário Santa Teresinha",
  fullName: "Santuário do Amor Misericordioso de Deus",
  city: "Taboão da Serra",
  state: "SP",
  tagline: "A vida com Jesus é mais feliz!",
  description:
    "Santuário Santa Teresinha — Santuário do Amor Misericordioso de Deus, em Taboão da Serra/SP. Confira os horários das Santas Missas, como chegar e os contatos.",

  /**
   * Endereço completo: PENDENTE de confirmação pela administração.
   * Quando confirmado, preencha `street` e `postalCode`; a seção de localização
   * e os dados estruturados (SEO) passam a exibi-lo automaticamente.
   */
  address: {
    street: null as string | null,
    postalCode: null as string | null,
  },

  phone: {
    label: "(11) 3434-9000",
    href: "tel:+551134349000",
    e164: "+551134349000",
  },
  whatsapp: {
    label: "(11) 94777-6209",
    href: "https://wa.me/5511947776209",
    e164: "+5511947776209",
  },

  /**
   * Horários de funcionamento (visitação/secretaria) — NÃO são os horários das missas.
   * PENDENTE de confirmação pela administração. Enquanto a lista estiver vazia,
   * a seção exibe o convite para consultar pelo WhatsApp.
   * Exemplo: { label: "Segunda a sexta-feira", hours: "8h às 18h" }
   */
  openingHours: [] as { label: string; hours: string }[],

  maps: {
    /** Busca pelo nome do local (sem coordenadas inventadas). */
    embed:
      "https://www.google.com/maps?q=Santu%C3%A1rio+Santa+Terezinha%2C+Tabo%C3%A3o+da+Serra+-+SP&output=embed",
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=Santu%C3%A1rio+Santa+Terezinha%2C+Tabo%C3%A3o+da+Serra+-+SP",
  },
} as const;

export const navigation = [
  { label: "Missas", href: "#missas" },
  { label: "Funcionamento", href: "#funcionamento" },
  { label: "Como chegar", href: "#como-chegar" },
  { label: "Contato", href: "#contato" },
  { label: "Santa Teresinha", href: "#santa-teresinha" },
] as const;

export type MassDay = {
  id: string;
  day: string;
  times: readonly string[];
};

export const massSchedule = {
  title: "Horários das Santas Missas",
  days: [
    {
      id: "domingo",
      day: "Domingo",
      times: ["7h30", "10h", "12h", "15h", "17h30", "19h"],
    },
    {
      id: "semana",
      day: "Segunda a Sexta-feira",
      times: ["7h", "10h", "12h", "15h", "18h", "20h"],
    },
    {
      id: "sabado",
      day: "Sábado",
      times: ["7h", "9h", "12h", "15h", "19h"],
    },
  ] satisfies MassDay[],
} as const;
