import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = "ServitecPoa — Consertos em Eletrodomésticos";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0f1419",
          color: "white",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ width: 48, height: 3, background: "#f97316", marginBottom: 32 }} />
        <p style={{ fontSize: 22, letterSpacing: 4, textTransform: "uppercase", color: "#f97316", margin: 0 }}>
          Porto Alegre
        </p>
        <h1 style={{ fontSize: 72, fontWeight: 500, margin: "16px 0 0", lineHeight: 1.05 }}>
          Servitec<span style={{ color: "#f97316" }}>Poa</span>
        </h1>
        <p style={{ fontSize: 36, marginTop: 12, color: "#94a3b8", fontFamily: "system-ui" }}>
          Consertos Em Eletrodomésticos
        </p>
        <p style={{ fontSize: 22, marginTop: 40, color: "#64748b", maxWidth: 700, fontFamily: "system-ui" }}>
          Nacionais e importados · Atendimento a domicílio · {siteConfig.phoneDisplay}
        </p>
      </div>
    ),
    { ...size },
  );
}
