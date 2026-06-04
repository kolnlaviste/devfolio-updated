import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ScrollProgress from "@/components/scroll-progress";
import SpotifyWidget from "@/components/spotify-widget";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Koln Laviste — Full Stack Developer",
  description:
    "I'm Koln, a full-stack developer from Cebu City, Philippines. I build modern web applications with a focus on clean code and great user experience.",
  keywords: [
    "Full Stack Developer",
    "Web Developer",
    "Frontend",
    "Backend",
    "React",
    "Next.js",
    "TypeScript",
    "Philippines",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${geistMono.variable}`}
    >
      <body className="antialiased transition-colors">
        <ThemeProvider>
          <ScrollProgress />
          {children}
          <SpotifyWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
