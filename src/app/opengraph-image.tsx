import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} — ${site.fullName}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PETAL = "M0 5C-23-1-27-34 0-45C27-34 23-1 0 5Z";
const layers = [
  { n: 5, s: 1, r: 0, fill: "#f1cbc8" },
  { n: 5, s: 0.76, r: 36, fill: "#e8b7b4" },
  { n: 5, s: 0.53, r: 12, fill: "#dc9f9b" },
  { n: 3, s: 0.32, r: 40, fill: "#cc8782" },
];

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(180deg, #651e27, #47121a)",
          color: "#f8f3e9",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 28,
            border: "2px solid #b39456",
            borderRadius: 28,
            display: "flex",
          }}
        />
        <svg width="150" height="150" viewBox="-50 -50 100 100">
          {layers.flatMap((layer, li) =>
            Array.from({ length: layer.n }, (_, i) => (
              <path
                key={`${li}-${i}`}
                d={PETAL}
                transform={`rotate(${layer.r + (360 / layer.n) * i}) scale(${layer.s})`}
                fill={layer.fill}
                stroke="#b96f6b"
                strokeWidth={0.8 / layer.s}
              />
            )),
          )}
        </svg>
        <div style={{ fontSize: 78, marginTop: 30, letterSpacing: 1 }}>
          {site.name}
        </div>
        <div
          style={{
            width: 120,
            height: 2,
            background: "#b39456",
            margin: "26px 0",
          }}
        />
        <div style={{ fontSize: 34, color: "#d9c79d", fontStyle: "italic" }}>
          {site.fullName}
        </div>
        <div
          style={{
            fontSize: 22,
            marginTop: 18,
            letterSpacing: 6,
            fontFamily: "sans-serif",
            opacity: 0.8,
          }}
        >
          {`${site.city.toUpperCase()} — ${site.state}`}
        </div>
      </div>
    ),
    size,
  );
}
