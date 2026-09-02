import { ImageResponse } from "next/og";
import { getPost } from "@/lib/blog";
import { getCategoryTitle } from "@/lib/taxonomy";

export const runtime = "nodejs";
export const alt = "Engineering notebook entry by Ali Lefta";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  const title = post?.metadata.title || "Engineering notebook";
  const category = getCategoryTitle(post?.metadata.category || "Engineering");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#f4efe5",
          color: "#171714",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ width: 36, height: "100%", background: "#2457e6" }} />
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "62px 72px 54px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "2px solid #171714", paddingBottom: 18 }}>
            <div style={{ display: "flex", fontSize: 19, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#2457e6" }}>
              Engineering notebook
            </div>
            <div style={{ display: "flex", fontSize: 18, color: "#68675f" }}>
              Ali Lefta / Field record
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", maxWidth: 1000 }}>
            <div style={{ display: "flex", marginBottom: 25 }}>
              <span style={{ display: "flex", background: "#f2cc3d", padding: "8px 14px", fontSize: 18, fontWeight: 700 }}>
                {category}
              </span>
            </div>
            <div style={{ display: "flex", fontSize: title.length > 62 ? 58 : 70, lineHeight: 1.06, letterSpacing: "-0.025em", fontWeight: 800 }}>
              {title}
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid #c9c3b7", paddingTop: 18, fontSize: 17, color: "#68675f" }}>
            <span style={{ display: "flex" }}>Product engineering · Frontend systems · Architecture</span>
            <span style={{ display: "flex", color: "#df654b", fontWeight: 700 }}>alilefta.dev</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
