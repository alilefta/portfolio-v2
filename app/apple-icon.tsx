import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";
export const runtime = "edge";

export default async function Icon() {
  // We can fetch the font here because it's a larger image
  const interSemiBold = await fetch(
    "https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.18/files/inter-latin-600-normal.woff",
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#09090b", // zinc-950
          color: "white",
          borderRadius: "36px", // Apple style squircle-ish
        }}
      >
        {/* Decorative Grid Background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, #3f3f46 1px, transparent 1px), linear-gradient(to bottom, #3f3f46 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            opacity: 0.2,
          }}
        />

        {/* Initials */}
        <div
          style={{
            fontSize: 96,
            fontWeight: 700,
            marginTop: -10, // Visual center adjustment
          }}
        >
          AM
        </div>

        {/* Subtle bottom text */}
        <div style={{ fontSize: 18, marginTop: 5, color: "#a1a1aa" }}>DEV</div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: interSemiBold,
          style: "normal",
          weight: 600,
        },
      ],
    },
  );
}
