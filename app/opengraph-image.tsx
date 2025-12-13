import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

// 1. Config
export const runtime = "nodejs";
export const alt = "Ali Mohsin | System Architect & Full Stack Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  // 2. Load Font (Using a reliable CDN link)
  const interSemiBold = await fetch(
    "https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.18/files/inter-latin-600-normal.woff",
  ).then((res) => {
    if (!res.ok) {
      throw new Error(`Failed to fetch font: ${res.status} ${res.statusText}`);
    }
    return res.arrayBuffer();
  });

  // 3. Load Avatar (Optional - safely handles missing file)
  let avatarData = null;
  try {
    // Make sure this path matches where your image actually is
    // If you don't have one, it will fall back to initials
    const avatarPath = join(process.cwd(), "public/images/avatars/avatar.jpg");
    const file = readFileSync(avatarPath);
    avatarData = `data:image/jpeg;base64,${file.toString("base64")}`;
  } catch (e) {
    // console.log("Avatar image not found, using fallback.");
  }

  return new ImageResponse(
    (
      // Container
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#09090b", // zinc-950
          fontFamily: "Inter",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Background Grid Pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, #27272a 1px, transparent 1px), linear-gradient(to bottom, #27272a 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            opacity: 0.2,
          }}
        />

        {/* Decorative Gradient Blob */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(0,0,0,0) 70%)",
            filter: "blur(40px)",
          }}
        />

        {/* TOP SECTION: Identity */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            zIndex: 10,
          }}
        >
          {avatarData ? (
            // Render Avatar Image
            <img
              src={avatarData}
              alt="Profile"
              width="100"
              height="100"
              style={{
                borderRadius: "24px", // squircle
                border: "2px solid #3f3f46", // zinc-700
                objectFit: "cover",
              }}
            />
          ) : (
            // Fallback Initials Logo
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "20px",
                background: "#18181b", // zinc-900
                border: "1px solid #27272a", // zinc-800
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "32px",
                fontWeight: 700,
              }}
            >
              AM
            </div>
          )}

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: "20px",
                textTransform: "uppercase",
                letterSpacing: "2px",
                color: "#a1a1aa", // zinc-400
                marginBottom: "4px",
              }}
            >
              System Architect
            </div>
            <div
              style={{
                fontSize: "20px",
                color: "#52525b", // zinc-600
                fontFamily: "monospace",
              }}
            >
              @alilefta
            </div>
          </div>
        </div>

        {/* MIDDLE: Main Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            zIndex: 10,
            marginTop: "auto",
          }}
        >
          <div
            style={{
              fontSize: "72px",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Ali Mohsin
          </div>
          <div
            style={{
              fontSize: "36px",
              color: "#a1a1aa", // zinc-400
              maxWidth: "800px",
              lineHeight: 1.4,
            }}
          >
            Bridging clinical precision with software architecture.
          </div>
        </div>

        {/* BOTTOM: Tech Stack Strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginTop: "60px",
            zIndex: 10,
          }}
        >
          {/* Tech Badges */}
          {["Next.js 15", ".NET Core", "Cloud Architecture", "Dental Tech"].map(
            (tech) => (
              <div
                key={tech}
                style={{
                  padding: "10px 24px",
                  background: "#18181b", // zinc-900
                  border: "1px solid #27272a", // zinc-800
                  borderRadius: "50px",
                  color: "#e4e4e7", // zinc-200
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                {tech}
              </div>
            ),
          )}
        </div>
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
