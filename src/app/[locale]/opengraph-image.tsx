import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";
import { defaultLocale, isLocale, locales } from "@/i18n/config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = profile.name[defaultLocale];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// The default OG font has no Cyrillic glyphs, so ship Inter (covers Kazakh letters).
const font = await readFile(join(process.cwd(), "src/assets/fonts/Inter-Bold.ttf"));

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: param } = await params;
  const locale = isLocale(param) ? param : defaultLocale;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 96,
          background: "#0c0a09",
          color: "#f5f5f4",
          fontFamily: "Inter",
        }}
      >
        <div style={{ fontSize: 36, color: "#a5b4fc" }}>{profile.role[locale]}</div>
        <div style={{ fontSize: 96, marginTop: 16, letterSpacing: -2 }}>
          {profile.name[locale]}
        </div>
        <div style={{ fontSize: 28, marginTop: 48, color: "#a8a29e" }}>
          kk · ru · en
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Inter", data: font, weight: 700, style: "normal" }] },
  );
}
