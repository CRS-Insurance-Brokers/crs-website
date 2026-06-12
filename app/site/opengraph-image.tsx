import { ImageResponse } from "next/og";

/*
 * Branded social share card for every /site page. Statically generated at
 * build time. File-convention image: Next injects og:image + twitter:image
 * tags regardless of each page's own openGraph block.
 */
export const alt =
  "CRS Insurance Brokers — Specialist cover for high-risk trades";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#14102E",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: 24,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "rgba(237,234,226,0.55)",
            }}
          >
            CRS Insurance Brokers
          </div>
          <div style={{ width: 14, height: 14, background: "#E56C70" }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.015em",
              color: "#FFFFFF",
            }}
          >
            Specialist cover
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.015em",
              color: "rgba(237,234,226,0.85)",
            }}
          >
            for high-risk trades.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.15)",
            paddingTop: "32px",
          }}
        >
          <div style={{ fontSize: 26, color: "rgba(237,234,226,0.7)" }}>
            Demolition · Construction · Engineering · Manufacturing
          </div>
          <div style={{ fontSize: 24, color: "rgba(237,234,226,0.45)" }}>
            crs-ins.co.uk
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
