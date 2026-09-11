import "./globals.css";
import { nimbusSans } from "../../public/fonts";
import Grain from "@/components/Grain";
import TabTitle from "@/components/TabTitle";
import Background from "@/components/Background";
import Cursor from "@/components/Cursor";

export const metadata = {
  metadataBase: new URL("https://raiin-eta.vercel.app/"),

  title: {
    default: "RAIIN — Relax, Listen to the Rain",
    template: "%s — RAIIN",
  },

  description:
    "A calming rain experience designed to help you relax, focus, study, sleep, and simply enjoy the sound of rain.",

  keywords: [
    "rain sounds",
    "rain sounds for sleep",
    "rain sounds for studying",
    "relaxing rain",
    "rain ambience",
    "rain audio",
    "relaxation",
    "focus sounds",
    "sleep sounds",
    "ambient sounds",
    "RAIIN",
  ],

  applicationName: "RAIIN",

  authors: [{ name: "RAIIN" }],
  creator: "Wesley Marques",
  publisher: "RAIIN",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "RAIIN — Relax, Listen to the Rain",
    description:
      "A calming rain experience for relaxation, focus, study, and sleep.",
    url: "https://raiin-eta.vercel.app/",
    siteName: "RAIIN",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RAIIN — Relax, Listen to the Rain",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "RAIIN — Relax, Listen to the Rain",
    description:
      "A calming rain experience for relaxation, focus, study, and sleep.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://raiin-eta.vercel.app/",
  },

  category: "lifestyle",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${nimbusSans.className} h-dvh antialiased`}>
      <body className="h-dvh relative">
        <TabTitle />
        <Cursor />
        <Grain />
        <Background />
        {children}{" "}
      </body>
    </html>
  );
}
