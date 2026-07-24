import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import PageLoader from "@/components/PageLoader";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Ghazi Abdul Mateen Hussain — Web Developer",
  description:
    "Portfolio of Ghazi Abdul Mateen Hussain, a Web Developer and Computer Science student building responsive, high-quality web experiences.",
  keywords: [
    "Ghazi Abdul Mateen Hussain",
    "Web Developer",
    "Frontend Developer",
    "Portfolio",
    "React Developer",
    "Computer Science Student",
  ],
  authors: [{ name: "Ghazi Abdul Mateen Hussain" }],
  openGraph: {
    title: "Ghazi Abdul Mateen Hussain — Web Developer",
    description:
      "Portfolio of Ghazi Abdul Mateen Hussain, a Web Developer and Computer Science student building responsive, high-quality web experiences.",
    type: "website",
  },
  robots: "index, follow",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#05060b",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-body bg-base text-ink antialiased selection:bg-primary/30`}
      >
        <PageLoader />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
