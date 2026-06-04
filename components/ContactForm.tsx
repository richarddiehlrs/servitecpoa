"use client";

import { useState } from "react";
import {
  brandOptions,
  buildWhatsAppRequestUrl,
  formatShift,
  productOptions,
  shiftHours,
  type ServiceRequestPayload,
  type ShiftOption,
} from "@/lib/contact-form";
import { formatCpf } from "@/lib/format";
import {
  fetchAddressByCep,
  formatCep,
  normalizeCep,
} from "@/lib/viacep";
import { FormField, FormInput, FormSelect, FormTextarea } from "@/components/ui/FormField";

const initialState: ServiceRequestPayload = {
  nome: "",
  telefone: "",
  cpf: "",
  cep: "",
  logradouro: "",
  numero: "",
  bairro: "",
  cidade: "",
  uf: "",
  complemento: "",
  produto: "",
  marca: "",
  defeito: "",
  observacao: "",
  turno: "manha",
};

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [cepLoading, setCepLoading] = useState(false);
  const [cepHint, setCepHint] = useState("");

  function updateField<K extends keyof ServiceRequestPayload>(
    key: K,
    value: ServiceRequestPayload[K],
  ) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setError("");
  }

  async function handleCepLookup(cepValue: string) {
    const digits = normalizeCep(cepValue);
    if (digits.length !== 8) return;

    setCepLoading(true);
    setCepHint("");

    try {
      const data = await fetchAddressByCep(digits);
      setForm((prev) => ({
        ...prev,
        cep: digits,
        logradouro: data.logradouro || prev.logradouro,
        bairro: data.bairro || prev.bairro,
        cidade: data.localidade || prev.cidade,
        uf: data.uf || prev.uf,
      }));
      setCepHint(
        data.logradouro
          ? "Endereço preenchido automaticamente. Informe o número e o complemento."
          : "CEP encontrado. Complete o logradouro e o número.",
      );
    } catch (lookupError) {
      setCepHint("");
      setError(
        lookupError instanceof Error
          ? lookupError.message
          : "Erro ao buscar CEP.",
      );
    } finally {
      setCepLoading(false);
    }
  }

  function handleCepChange(value: string) {
    const digits = normalizeCep(value);
    setForm((prev) => ({ ...prev, cep: digits }));
    setError("");
    if (digits.length < 8) {
      setCepHint("");
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const required: (keyof ServiceRequestPayload)[] = [
      "nome",
      "telefone",
      "cep",
      "logradouro",
      "numero",
      "bairro",
      "cidade",
      "uf",
      "produto",
      "marca",
      "defeito",
    ];

    const missing = required.filter((key) => !String(form[key]).trim());
    if (missing.length > 0) {
      setError("Preencha todos os campos obrigatórios, incluindo CEP e número.");
      return;
    }

    if (normalizeCep(form.cep).length !== 8) {
      setError("Informe um CEP válido com 8 dígitos.");
      return;
    }

    const url = buildWhatsAppRequestUrl(form);
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-emerald-200/80 bg-emerald-50 p-8 text-center sm:p-10">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
          Solicitação preparada
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          Abrimos o WhatsApp com sua mensagem e os dados do formulário. Confirme o envio
          para finalizar o agendamento da visita técnica.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setForm(initialState);
            setCepHint("");
          }}
          className="btn-outline-dark mt-8"
        >
          Nova solicitação
        </button>
      </div>
    );
  }

  return (
    <form
      id="solicitar-atendimento"
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-elegant sm:p-8 lg:p-10"
      noValidate
    >
      <div className="border-b border-slate-100 pb-6">
        <h3 className="font-display text-2xl font-semibold text-ink">
          Solicitar atendimento a domicílio
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          Informe o CEP para preencher o endereço automaticamente. Visitas das{" "}
          <strong>9h às 12h</strong> ou <strong>13h30 às 17h30</strong>.
        </p>
      </div>

      <fieldset className="mt-8">
        <legend className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-orange">
          Dados do cliente
        </legend>
        <div className="mt-4 grid gap-5 sm:grid-cols-2">
          <FormField label="Nome completo" id="nome" required>
            <FormInput
              id="nome"
              value={form.nome}
              onChange={(e) => updateField("nome", e.target.value)}
              placeholder="Seu nome"
              autoComplete="name"
              required
            />
          </FormField>
          <FormField label="Telefone / WhatsApp" id="telefone" required>
            <FormInput
              id="telefone"
              type="tel"
              value={form.telefone}
              onChange={(e) => updateField("telefone", e.target.value)}
              placeholder="(51) 99999-9999"
              autoComplete="tel"
              required
            />
          </FormField>
          <FormField
            label="CPF"
            id="cpf"
            hint="Opcional — informe apenas se precisar de nota fiscal."
            className="sm:col-span-2"
          >
            <FormInput
              id="cpf"
              value={form.cpf}
              onChange={(e) => updateField("cpf", formatCpf(e.target.value))}
              placeholder="000.000.000-00"
              inputMode="numeric"
              autoComplete="off"
            />
          </FormField>
        </div>
      </fieldset>

      <fieldset className="mt-10">
        <legend className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-orange">
          Local do atendimento
        </legend>
        <div className="mt-4 grid gap-5 sm:grid-cols-2">
          <FormField label="CEP" id="cep" required hint="Busca automática do endereço.">
            <div className="relative">
              <FormInput
                id="cep"
                value={formatCep(form.cep)}
                onChange={(e) => handleCepChange(e.target.value)}
                onBlur={() => void handleCepLookup(form.cep)}
                placeholder="00000-000"
                inputMode="numeric"
                autoComplete="postal-code"
                required
              />
              {cepLoading && (
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400">
                  Buscando...
                </span>
              )}
            </div>
          </FormField>
          <FormField label="Número" id="numero" required>
            <FormInput
              id="numero"
              value={form.numero}
              onChange={(e) => updateField("numero", e.target.value)}
              placeholder="Ex.: 1200"
              required
            />
          </FormField>
          <FormField label="Logradouro" id="logradouro" required className="sm:col-span-2">
            <FormInput
              id="logradouro"
              value={form.logradouro}
              onChange={(e) => updateField("logradouro", e.target.value)}
              placeholder="Rua, avenida..."
              required
            />
          </FormField>
          <FormField label="Bairro" id="bairro" required>
            <FormInput
              id="bairro"
              value={form.bairro}
              onChange={(e) => updateField("bairro", e.target.value)}
              required
            />
          </FormField>
          <div className="grid grid-cols-3 gap-3">
            <FormField label="Cidade" id="cidade" required className="col-span-2">
              <FormInput
                id="cidade"
                value={form.cidade}
                onChange={(e) => updateField("cidade", e.target.value)}
                required
              />
            </FormField>
            <FormField label="UF" id="uf" required>
              <FormInput
                id="uf"
                value={form.uf}
                onChange={(e) => updateField("uf", e.target.value.toUpperCase().slice(0, 2))}
                placeholder="RS"
                required
              />
            </FormField>
          </div>
          <FormField
            label="Complemento"
            id="complemento"
            hint="Casa, bloco, apartamento, torre, referências de acesso."
            className="sm:col-span-2"
          >
            <FormInput
              id="complemento"
              value={form.complemento}
              onChange={(e) => updateField("complemento", e.target.value)}
              placeholder="Ex.: Casa 2, Bloco B, Apto 302, fundos"
            />
          </FormField>
        </div>
        {cepHint && (
          <p className="mt-3 text-xs text-emerald-700" role="status">
            {cepHint}
          </p>
        )}
      </fieldset>

      <fieldset className="mt-10">
        <legend className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-orange">
          Aparelho e defeito
        </legend>
        <div className="mt-4 grid gap-5 sm:grid-cols-2">
          <FormField label="Produto" id="produto" required>
            <FormSelect
              id="produto"
              value={form.produto}
              onChange={(e) => updateField("produto", e.target.value)}
              required
            >
              <option value="">Selecione o produto</option>
              {productOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </FormSelect>
          </FormField>
          <FormField label="Marca" id="marca" required>
            <FormSelect
              id="marca"
              value={form.marca}
              onChange={(e) => updateField("marca", e.target.value)}
              required
            >
              <option value="">Selecione a marca</option>
              {brandOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </FormSelect>
          </FormField>
        </div>
        <div className="mt-5">
          <FormField label="Defeito apresentado" id="defeito" required>
            <FormTextarea
              id="defeito"
              value={form.defeito}
              onChange={(e) => updateField("defeito", e.target.value)}
              placeholder="Descreva o problema: não liga, vazamento, barulho, não gela..."
              required
            />
          </FormField>
        </div>
      </fieldset>

      <fieldset className="mt-10">
        <legend className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-orange">
          Turno de atendimento
        </legend>
        <p className="mt-2 text-sm text-slate-600">Selecione o período de preferência para a visita.</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {(Object.entries(shiftHours) as [ShiftOption, (typeof shiftHours)[ShiftOption]][]).map(
            ([value, option]) => {
              const selected = form.turno === value;
              return (
                <label
                  key={value}
                  className={`flex cursor-pointer items-center gap-4 rounded-2xl border p-4 transition ${
                    selected
                      ? "border-brand-orange bg-brand-orange/5 ring-2 ring-brand-orange/20"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="turno"
                    value={value}
                    checked={selected}
                    onChange={() => updateField("turno", value)}
                    className="h-4 w-4 border-slate-300 text-brand-orange focus:ring-brand-orange"
                  />
                  <span>
                    <span className="block font-semibold text-ink">{option.label}</span>
                    <span className="text-sm text-slate-500">{option.time}</span>
                  </span>
                </label>
              );
            },
          )}
        </div>
        <p className="mt-3 text-xs text-slate-500">
          Turno selecionado: <strong className="text-ink">{formatShift(form.turno)}</strong>
        </p>
      </fieldset>

      <div className="mt-8">
        <FormField label="Observações adicionais" id="observacao">
          <FormTextarea
            id="observacao"
            value={form.observacao}
            onChange={(e) => updateField("observacao", e.target.value)}
            placeholder="Horários alternativos, restrições de acesso, urgência..."
          />
        </FormField>
      </div>

      {error && (
        <p className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {error}
        </p>
      )}

      <div className="mt-8 flex flex-col gap-3 border-t border-slate-100 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-slate-500">
          Campos com <span className="text-brand-orange">*</span> são obrigatórios. CPF é opcional.
        </p>
        <button type="submit" className="btn-primary w-full sm:w-auto">
          Enviar solicitação via WhatsApp
        </button>
      </div>
    </form>
  );
}
