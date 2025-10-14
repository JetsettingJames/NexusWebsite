import { ImageResponse } from "next/og";
import { siteMetadata } from "@/lib/metadata";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const fontFamily =
  "Inter, 'Plus Jakarta Sans', 'SF Pro Display', 'Helvetica Neue', Helvetica, Arial, sans-serif";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const eyebrow =
    searchParams.get("eyebrow") ?? siteMetadata.name;
  const title =
    searchParams.get("title") ??
    "Curated meetups, demos & hackathons";
  const description =
    searchParams.get("description") ?? siteMetadata.locations;

  const domain = siteMetadata.baseUrl.replace(/^https?:\/\//, "");

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
          padding: "72px",
          background:
            "radial-gradient(circle at 10% 20%, rgba(56,189,248,0.35), transparent 55%), radial-gradient(circle at 90% 15%, rgba(249,115,22,0.35), transparent 45%), linear-gradient(135deg, #05060a, #0f172a)",
          color: "#f8fafc",
          position: "relative",
          overflow: "hidden",
          fontFamily,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "-20% -20% auto auto",
            width: "60%",
            height: "60%",
            background:
              "radial-gradient(circle at center, rgba(255,255,255,0.08), transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: "auto auto -30% -15%",
            width: "55%",
            height: "55%",
            background:
              "radial-gradient(circle at center, rgba(99,102,241,0.25), transparent 70%)",
          }}
        />
        <div
          style={{
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <div
            style={{
              fontSize: 28,
              fontWeight: 600,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "rgba(248, 250, 252, 0.7)",
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              fontSize: 84,
              fontWeight: 800,
              lineHeight: 1,
              marginTop: 36,
              maxWidth: "90%",
              letterSpacing: "-0.04em",
            }}
          >
            {title}
          </div>
          {description ? (
            <div
              style={{
                marginTop: 44,
                fontSize: 36,
                color: "rgba(226, 232, 240, 0.82)",
                maxWidth: "72%",
                lineHeight: 1.3,
              }}
            >
              {description}
            </div>
          ) : null}
          <div
            style={{
              marginTop: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: 30,
              color: "rgba(203, 213, 225, 0.9)",
            }}
          >
            <span
              style={{
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              {domain}
            </span>
            <span
              style={{
                fontWeight: 500,
                letterSpacing: "0.08em",
              }}
            >
              {siteMetadata.locations}
            </span>
          </div>
        </div>
      </div>
    ),
    size
  );
}
