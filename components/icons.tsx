type IconProps = { className?: string };

export function IconRefrigerator({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 3h12a1 1 0 011 1v16a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1zM9 7h6M9 11h6" />
    </svg>
  );
}

export function IconWasher({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <circle cx="12" cy="13" r="5" />
      <path strokeLinecap="round" d="M8 3h8a1 1 0 011 1v2H7V4a1 1 0 011-1zM7 6h10v14a1 1 0 01-1 1H8a1 1 0 01-1-1V6z" />
    </svg>
  );
}

export function IconStove({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <circle cx="9" cy="10" r="1.5" fill="currentColor" />
      <circle cx="15" cy="10" r="1.5" fill="currentColor" />
      <circle cx="9" cy="15" r="1.5" fill="currentColor" />
      <circle cx="15" cy="15" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function IconWine({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 3h8v5c0 3.5-2 6-4 8v5H8v-5c-2-2-4-4.5-4-8V3z" />
      <path strokeLinecap="round" d="M9 21h6" />
    </svg>
  );
}

export function IconMicrowave({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path strokeLinecap="round" d="M15 10v4M7 10h4" />
    </svg>
  );
}

export function IconHome({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5L12 4l9 6.5V20a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1v-9.5z" />
    </svg>
  );
}

export function IconTool({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a4 4 0 105.4 5.4L8 24 0 24l0-8 8.6-8.7z" />
    </svg>
  );
}

export function IconShield({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l8 3v6c0 5-3.5 9-8 9s-8-4-8-9V6l8-3z" />
    </svg>
  );
}

export function IconCheck({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function IconGlobe({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
    </svg>
  );
}

export function IconDocument({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 4h8l4 4v12a1 1 0 01-1 1H7a1 1 0 01-1-1V5a1 1 0 011-1z" />
      <path strokeLinecap="round" d="M16 4v4h4M9 13h6M9 17h4" />
    </svg>
  );
}

const serviceIconMap = {
  refrigerator: IconRefrigerator,
  washer: IconWasher,
  stove: IconStove,
  microwave: IconMicrowave,
  home: IconHome,
  tool: IconTool,
  wine: IconWine,
} as const;

export type ServiceIconKey = keyof typeof serviceIconMap;

export function ServiceIcon({
  name,
  className,
}: {
  name: ServiceIconKey;
  className?: string;
}) {
  const Icon = serviceIconMap[name];
  return <Icon className={className} />;
}

const featureIconMap = {
  home: IconHome,
  check: IconCheck,
  shield: IconShield,
  tool: IconTool,
  globe: IconGlobe,
  document: IconDocument,
} as const;

export type FeatureIconKey = keyof typeof featureIconMap;

export function FeatureIcon({
  name,
  className,
}: {
  name: FeatureIconKey;
  className?: string;
}) {
  const Icon = featureIconMap[name];
  return <Icon className={className} />;
}
