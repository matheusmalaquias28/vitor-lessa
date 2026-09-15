const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  viewBox: "0 0 24 24",
};

export function Calendario({ size = 16 }) {
  return (
    <svg width={size} height={size} {...base} aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 11h18" />
    </svg>
  );
}

export function Relogio({ size = 16 }) {
  return (
    <svg width={size} height={size} {...base} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function Tela({ size = 16 }) {
  return (
    <svg width={size} height={size} {...base} aria-hidden="true">
      <rect x="2" y="4" width="20" height="13" rx="2" />
      <path d="M8 21h8" />
    </svg>
  );
}

export function Celular({ size = 19 }) {
  return (
    <svg width={size} height={size} {...base} aria-hidden="true">
      <rect x="6" y="2" width="12" height="20" rx="2.5" />
      <path d="M11 18h2" />
    </svg>
  );
}

export function Balao({ size = 19 }) {
  return (
    <svg width={size} height={size} {...base} aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" />
    </svg>
  );
}

export function Check({ size = 20, largura = 2.4 }) {
  return (
    <svg width={size} height={size} {...base} strokeWidth={largura} aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function Seta({ size = 18 }) {
  return (
    <svg width={size} height={size} {...base} strokeWidth={2.5} aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

export function Escudo({ size = 14 }) {
  return (
    <svg width={size} height={size} {...base} strokeWidth={2.4} aria-hidden="true">
      <path d="M12 3l8 3v6c0 5-3.4 8.4-8 9.9C7.4 20.4 4 17 4 12V6Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function Cadeado({ size = 14 }) {
  return (
    <svg width={size} height={size} {...base} strokeWidth={2.4} aria-hidden="true">
      <rect x="4" y="10" width="16" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

export function Lapis({ size = 24 }) {
  return (
    <svg width={size} height={size} {...base} strokeWidth={2} aria-hidden="true">
      <path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </svg>
  );
}

export function Fogo({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2c.6 3.4-1.4 4.6-2.8 6C7.4 9.6 6 11.3 6 14a6 6 0 0 0 12 0c0-2.6-1.3-4.4-2.6-6.2C14 6 13.4 4 12 2Z"
        fill="#FF5B04"
      />
      <path
        d="M12 13c.3 1.7-1.4 2-1.4 3.6A1.6 1.6 0 0 0 12 18a1.6 1.6 0 0 0 1.5-1.5c0-1.4-1-2-1.5-3.5Z"
        fill="#FFB01F"
      />
    </svg>
  );
}

export function Imagem({ size = 34 }) {
  return (
    <svg width={size} height={size} {...base} strokeWidth={1.6} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.8" />
      <path d="m21 15-5-5L5 21" />
    </svg>
  );
}
