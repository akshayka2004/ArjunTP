import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono, Outfit } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arjun T P — MCA Student & Software Developer",
  description:
    "Portfolio of Arjun T P, MCA student at Saintgits College of Engineering. Software developer and AI/ML enthusiast building practical, high-impact digital solutions.",
  keywords: [
    "Arjun T P",
    "Arjun TP",
    "MCA Student",
    "Software Developer",
    "AI/ML",
    "Saintgits College of Engineering",
    "Python",
    "Java",
    "Kerala Developer",
  ],
  authors: [{ name: "Arjun T P" }],
  creator: "Arjun T P",
  openGraph: {
    title: "Arjun T P — MCA Student & Software Developer",
    description:
      "I build software that turns ideas into useful solutions. Explore projects, internships, technical skills, and certifications.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#FAFAF9",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${plusJakartaSans.variable} ${outfit.variable} ${jetbrainsMono.variable} font-sans bg-[#FAFAF9] text-[#0D1117] min-h-screen selection:bg-blue-100 selection:text-blue-900`}
      >
        {children}
      </body>
    </html>
  );
}
