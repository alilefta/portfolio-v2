import { readFileSync } from "fs";
import { join } from "path";
import { ImageResponse } from "next/og";

export const socialImageAlt =
  "Ali Lefta — Product Engineer Building Dependable Software";

export const socialImageSize = {
  width: 1200,
  height: 630,
};

export async function getPortfolioSocialImage() {
  const interSemiBold = await fetch(
    "https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.18/files/inter-latin-600-normal.woff",
  ).then((response) => {
    if (!response.ok) {
      throw new Error(
        `Failed to fetch social-image font: ${response.status} ${response.statusText}`,
      );
    }

    return response.arrayBuffer();
  });

  let avatarData: string | null = null;

  try {
    const avatarPath = join(
      process.cwd(),
      "public/images/avatars/avatar1.jpg",
    );
    avatarData = `data:image/jpeg;base64,${readFileSync(avatarPath).toString("base64")}`;
  } catch {
    avatarData = null;
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflow: "hidden",
          padding: 72,
          background: "#f5f1e8",
          color: "#171714",
          fontFamily: "Inter",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            backgroundImage:
              "linear-gradient(to right, rgba(23,23,20,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(23,23,20,0.08) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -90,
            right: -70,
            width: 420,
            height: 420,
            display: "flex",
            borderRadius: 210,
            background: "#2f5be7",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {avatarData ? (
            // ImageResponse requires a native image element for embedded data URLs.
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={avatarData}
              alt=""
              width={108}
              height={108}
              style={{
                border: "3px solid #171714",
                objectFit: "cover",
                filter: "grayscale(1)",
              }}
            />
          ) : (
            <div
              style={{
                width: 108,
                height: 108,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "3px solid #171714",
                background: "#f6d13a",
                fontSize: 34,
                fontWeight: 700,
              }}
            >
              AL
            </div>
          )}
          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            <div
              style={{
                color: "#2f5be7",
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              Product engineer / software maker
            </div>
            <div style={{ color: "#68685f", fontSize: 20 }}>@alilefta</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div
            style={{
              display: "flex",
              fontSize: 80,
              fontWeight: 700,
              letterSpacing: -4,
              lineHeight: 1,
            }}
          >
            Ali Lefta<span style={{ color: "#2f5be7" }}>.</span>
          </div>
          <div
            style={{
              display: "flex",
              maxWidth: 850,
              color: "#55554e",
              fontSize: 38,
              lineHeight: 1.25,
            }}
          >
            Difficult workflows. Dependable products.
          </div>
        </div>

        <div style={{ display: "flex", gap: 14 }}>
          {["Next.js 16", ".NET", "Product design", "Systems"].map(
            (label) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  padding: "10px 20px",
                  border: "2px solid #171714",
                  background: "#f6d13a",
                  fontSize: 18,
                  fontWeight: 700,
                }}
              >
                {label}
              </div>
            ),
          )}
        </div>
      </div>
    ),
    {
      ...socialImageSize,
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
