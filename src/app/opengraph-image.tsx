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
        <svg
          width="84"
          height="110"
          viewBox="0 0 40 52"
          fill="none"
          stroke="#dcc89a"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <path d="M20 2v15M14.5 7.5h11" />
          <path d="M27 24.6A13.5 13.5 0 1 0 33.5 36" />
          <path d="M20 28a8 8 0 1 0 8 8c0-3-2.2-5.2-5-5.2" />
          <path d="M20 33a3 3 0 1 0 3 3" />
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
