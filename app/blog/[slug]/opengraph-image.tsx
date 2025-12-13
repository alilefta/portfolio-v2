import { ImageResponse } from "next/og";
import { getPost } from "@/lib/blog"; // Ensure this import path is correct

// Route segment config
export const runtime = "nodejs";

// Image metadata
export const alt = "Blog Post | Ali Lefta";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const post = getPost(slug);

  // If post not found, return a generic fallback (optional)
  if (!post) {
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 48,
            background: "black",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
          }}
        >
          Ali Lefta | Engineering Log
        </div>
      ),
      { ...size },
    );
  }

  // Fetch a nice font (optional, but recommended for professional look)
  // We'll use a standard fetch here to get Inter from Google Fonts
  const interSemiBold = await fetch(
    new URL(
      "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZ9hAqw.woff2",
    ),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      // Image container (Using flexbox, CSS-in-JS style)
      <div
        style={{
          background: "#09090b", // zinc-950
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: '"Inter"',
        }}
      >
        {/* Background Grid Pattern (Simulated with simple CSS) */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "radial-gradient(circle at 25px 25px, #3f3f46 2%, transparent 0%), radial-gradient(circle at 75px 75px, #3f3f46 2%, transparent 0%)",
            backgroundSize: "100px 100px",
            opacity: 0.2,
          }}
        />

        {/* Category Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "8px 24px",
            background: "rgba(59, 130, 246, 0.2)", // blue-500/20
            border: "1px solid rgba(59, 130, 246, 0.5)",
            borderRadius: "50px",
            color: "#60a5fa", // blue-400
            fontSize: 20,
            fontWeight: 600,
            marginBottom: 30,
          }}
        >
          {post.metadata.category || "Engineering"}
        </div>

        {/* Post Title */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 900,
            color: "white",
            lineHeight: 1.1,
            marginBottom: 40,
            maxWidth: "900px",
            textShadow: "0 4px 20px rgba(0,0,0,0.5)",
          }}
        >
          {post.metadata.title}
        </div>

        {/* Footer: Author & Brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            marginTop: "auto",
          }}
        >
          {/* Author */}
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            {/* Avatar placeholder (circle) */}
            <div
              style={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                background: "#27272a", // zinc-800
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid #3f3f46",
                overflow: "hidden",
              }}
            >
              {/* You can load your actual avatar image here if you fetch it as ArrayBuffer, 
                 but for simplicity, we use an initial */}
              <span style={{ fontSize: 30, color: "#a1a1aa" }}>A</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 24, color: "white", fontWeight: 600 }}>
                Ali Lefta
              </span>
              <span style={{ fontSize: 18, color: "#a1a1aa" }}>
                System Architect
              </span>
            </div>
          </div>

          {/* Brand/Domain */}
          <div style={{ fontSize: 24, color: "#52525b", fontWeight: 600 }}>
            ali-Lefta.dev/blog
          </div>
        </div>
      </div>
    ),
    // ImageResponse options
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
