import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "The Tonbo Bunch";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "linear-gradient(135deg, #020617 0%, #1a1a2e 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          color: "#f5f0e8",
          fontFamily: "system-ui",
          fontWeight: "bold",
        }}
      >
        <div
          style={{
            fontSize: 80,
            marginBottom: 20,
            textAlign: "center",
            fontWeight: "900",
            letterSpacing: "0.05em",
          }}
        >
          The Tonbo Bunch
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#f97316",
            marginBottom: 20,
            letterSpacing: "0.1em",
          }}
        >
          Neo-Heisei Soul Rock
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#a89880",
            textAlign: "center",
          }}
        >
          平成の熱狂を、令和のビートで。
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
