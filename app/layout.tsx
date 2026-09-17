import type { Metadata } from "next";
import { Rubik, Open_Sans, Noto_Sans_Devanagari } from "next/font/google";
import "leaflet/dist/leaflet.css";
import "./globals.css";
import { LocaleProvider } from "@/components/LocaleProvider";
import { LOGO_ICON_URL } from "@/lib/assets";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const notoDevanagari = Noto_Sans_Devanagari({
  variable: "--font-noto-devanagari",
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "TechPaila",
  description:
    "Interactive map of the schools offering technical and vocational education in Nepal.",
  icons: {
    icon: [{ url: LOGO_ICON_URL, type: "image/svg+xml" }],
    apple: [{ url: LOGO_ICON_URL, type: "image/svg+xml" }],
    shortcut: LOGO_ICON_URL,
  },
  openGraph: {
    title: "TechPaila",
    description:
      "Interactive map of the schools offering technical and vocational education in Nepal.",
    images: [
      { url: LOGO_ICON_URL, width: 240, height: 240, alt: "TechPaila" },
    ],
  },
  twitter: {
    card: "summary",
    title: "TechPaila",
    description:
      "Interactive map of the schools offering technical and vocational education in Nepal.",
    images: [LOGO_ICON_URL],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${rubik.variable} ${openSans.variable} ${notoDevanagari.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
