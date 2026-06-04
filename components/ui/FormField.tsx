import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

const fieldClass =
  "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink outline-none transition placeholder:text-slate-400 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20";

type FormFieldProps = {
  label: string;
  id: string;
  hint?: string;
  required?: boolean;
  className?: string;
  children: ReactNode;
};

export function FormField({ label, id, hint, required, className = "", children }: FormFieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-ink">
        {label}
        {required && <span className="ml-1 text-brand-orange">*</span>}
      </label>
      {children}
      {hint && <p className="mt-1.5 text-xs text-slate-500">{hint}</p>}
    </div>
  );
}

export function FormInput({
  id,
  className = "",
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { id: string }) {
  return <input id={id} name={id} className={`${fieldClass} ${className}`} {...props} />;
}

export function FormSelect({
  id,
  className = "",
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement> & { id: string; children: ReactNode }) {
  return (
    <select id={id} name={id} className={`${fieldClass} ${className}`} {...props}>
      {children}
    </select>
  );
}

export function FormTextarea({
  id,
  className = "",
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement> & { id: string }) {
  return (
    <textarea id={id} name={id} className={`${fieldClass} min-h-[100px] resize-y ${className}`} {...props} />
  );
}
