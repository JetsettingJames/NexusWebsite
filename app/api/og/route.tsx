import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)",
          backgroundSize: "100px 100px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "80px",
            backgroundColor: "white",
            borderRadius: "20px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 900,
              letterSpacing: "-0.05em",
              marginBottom: 20,
              background: "linear-gradient(to bottom right, #000, #666)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            AI Nexus
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#666",
              textAlign: "center",
              maxWidth: 800,
            }}
          >
            Where AI founders, researchers, and builders meet
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#999",
              marginTop: 40,
            }}
          >
            London • San Francisco • Boston
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
