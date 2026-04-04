import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const editorial = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-editorial",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Manvasam — Industrial Coconut Products for Global Markets",
  description:
    "Premium desiccated coconut, coconut chips, oils & derivatives. 33+ years of vertically integrated supply from Tamil Nadu to the world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${editorial.variable} ${body.variable}`}>
      <body className="grain-overlay">{children}</body>
    </html>
  );
}
