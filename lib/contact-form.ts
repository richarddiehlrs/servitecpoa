import { allBrands, siteConfig } from "./site";
import { buildFullAddress, formatCep } from "./viacep";
import { getWhatsAppUrl } from "./whatsapp";

export const productOptions = [
  "Geladeira / Freezer",
  "Adega",
  "Máquina de lavar",
  "Lava e seca",
  "Lava-louças",
  "Fogão / Cooktop (premium)",
  "Forno",
  "Secadora",
  "Coifa / Depurador",
  "Outro",
] as const;

export const brandOptions = [...allBrands, "Outra"] as const;

export const shiftHours = {
  manha: { label: "Manhã", time: "9h às 12h" },
  tarde: { label: "Tarde", time: "13h30 às 17h30" },
} as const;

export type ShiftOption = keyof typeof shiftHours;

export type ServiceRequestPayload = {
  nome: string;
  telefone: string;
  cpf: string;
  cep: string;
  logradouro: string;
  numero: string;
  bairro: string;
  cidade: string;
  uf: string;
  complemento: string;
  produto: string;
  marca: string;
  defeito: string;
  observacao: string;
  turno: ShiftOption;
};

export function formatShift(turno: ShiftOption) {
  const slot = shiftHours[turno];
  return `${slot.label} (${slot.time})`;
}

export function buildServiceRequestMessage(data: ServiceRequestPayload) {
  const endereco = buildFullAddress({
    logradouro: data.logradouro,
    numero: data.numero,
    bairro: data.bairro,
    cidade: data.cidade,
    uf: data.uf,
    cep: data.cep,
  });

  const lines = [
    "*Solicitação pelo site*",
    "",
    "*Dados do cliente*",
    `Nome: ${data.nome}`,
    `Telefone: ${data.telefone}`,
  ];

  if (data.cpf.trim()) {
    lines.push(`CPF (nota fiscal): ${data.cpf.trim()}`);
  }

  lines.push(
    "",
    "*Local do atendimento*",
    `CEP: ${formatCep(data.cep)}`,
    `Endereço: ${endereco}`,
  );

  if (data.complemento.trim()) {
    lines.push(`Complemento: ${data.complemento.trim()}`);
  }

  lines.push(
    "",
    "*Aparelho*",
    `Produto: ${data.produto}`,
    `Marca: ${data.marca}`,
    `Defeito: ${data.defeito}`,
    "",
    "*Agendamento*",
    `Turno preferencial: ${formatShift(data.turno)}`,
  );

  if (data.observacao.trim()) {
    lines.push("", `Observações: ${data.observacao.trim()}`);
  }

  return lines.join("\n");
}

export function buildWhatsAppRequestUrl(data: ServiceRequestPayload) {
  return getWhatsAppUrl(buildServiceRequestMessage(data));
}
