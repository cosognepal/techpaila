import type { Metadata } from "next";
import { Rubik, Open_Sans } from "next/font/google";
import "leaflet/dist/leaflet.css";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TechPaila",
  description:
    "Interactive map of the schools offering technical and vocational education in Nepal.",
  icons: {
    icon: [{ url: "/techpaila-icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/techpaila-icon.svg", type: "image/svg+xml" }],
    shortcut: "/techpaila-icon.svg",
  },
  openGraph: {
    title: "TechPaila",
    description:
      "Interactive map of the schools offering technical and vocational education in Nepal.",
    images: [{ url: "/techpaila-icon.svg", width: 240, height: 240, alt: "TechPaila" }],
  },
  twitter: {
    card: "summary",
    title: "TechPaila",
    description:
      "Interactive map of the schools offering technical and vocational education in Nepal.",
    images: ["/techpaila-icon.svg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${rubik.variable} ${openSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
