import { ImageResponse } from "next/og";

export const alt = "Suhail Yazdan — UI/UX Designer, Front-End Developer, Trainer and Mentor";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "76px",
          background: "linear-gradient(135deg, #f5f3ee 0%, #ffffff 58%, #d8f7f1 100%)",
          color: "#18181b",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", color: "#087f73", fontSize: 24, fontWeight: 700, letterSpacing: 5 }}>
          KREATIVE GRAFIX
        </div>
        <div style={{ display: "flex", marginTop: 36, fontSize: 68, fontWeight: 700, letterSpacing: -3 }}>
          Suhail Yazdan
        </div>
        <div style={{ display: "flex", marginTop: 18, color: "#087f73", fontSize: 40, fontWeight: 700 }}>
          UI/UX Designer
        </div>
        <div style={{ display: "flex", marginTop: 20, color: "#52525b", fontSize: 27 }}>
          Front-End Development · Training &amp; Mentoring
        </div>
        <div
          style={{
            position: "absolute",
            right: 74,
            bottom: 64,
            width: 14,
            height: 14,
            borderRadius: 99,
            background: "#10bfaa",
            boxShadow: "0 0 0 18px rgba(16,191,170,0.14)",
          }}
        />
      </div>
    ),
    size
  );
}
