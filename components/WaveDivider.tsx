type WaveDividerProps = {
  /** Cor de preenchimento da onda (seção de baixo) */
  fill?: string;
  className?: string;
};

export function WaveDivider({ fill = "#f5f2ec", className = "" }: WaveDividerProps) {
  return (
    <div className={`relative -mt-px w-full leading-none ${className}`} aria-hidden>
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="block h-14 w-full sm:h-20 lg:h-24"
      >
        <path
          fill={fill}
          d="M0,48 C240,88 480,8 720,48 C960,88 1200,8 1440,48 L1440,100 L0,100 Z"
        />
      </svg>
    </div>
  );
}
