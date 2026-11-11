import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} — ${site.fullName}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          background: "linear-gradient(180deg, #47121a, #2c0b11)",
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
        <div style={{ fontSize: 78, letterSpacing: 1 }}>
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
