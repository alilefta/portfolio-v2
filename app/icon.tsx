import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Lightweight runtime
export const runtime = "edge";

export default function Icon() {
  return new ImageResponse(
    (
      // Image container
      <div
        style={{
          fontSize: 20,
          background: "#09090b", // zinc-950
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          borderRadius: "6px", // Slight rounding
          fontWeight: 800,
          fontFamily: "sans-serif",
        }}
      >
        A
      </div>
    ),
    {
      ...size,
    },
  );
}
