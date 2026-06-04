export type ViaCepResponse = {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  erro?: boolean;
};

export function normalizeCep(value: string) {
  return value.replace(/\D/g, "").slice(0, 8);
}

export function formatCep(value: string) {
  const digits = normalizeCep(value);
  if (digits.length <= 5) return digits;
  return `${digits.slice(0, 5)}-${digits.slice(5)}`;
}

export async function fetchAddressByCep(cep: string): Promise<ViaCepResponse> {
  const normalized = normalizeCep(cep);
  if (normalized.length !== 8) {
    throw new Error("Informe um CEP válido com 8 dígitos.");
  }

  const response = await fetch(`https://viacep.com.br/ws/${normalized}/json/`);
  if (!response.ok) {
    throw new Error("Não foi possível consultar o CEP. Tente novamente.");
  }

  const data = (await response.json()) as ViaCepResponse;
  if (data.erro) {
    throw new Error("CEP não encontrado. Verifique e tente novamente.");
  }

  return data;
}

export function buildFullAddress(parts: {
  logradouro: string;
  numero: string;
  bairro: string;
  cidade: string;
  uf: string;
  cep: string;
}) {
  const street = [parts.logradouro, parts.numero].filter(Boolean).join(", ");
  const city = [parts.bairro, `${parts.cidade} - ${parts.uf}`].filter(Boolean).join(" — ");
  const cepFormatted = formatCep(parts.cep);
  return `${street} — ${city} — CEP ${cepFormatted}`;
}
