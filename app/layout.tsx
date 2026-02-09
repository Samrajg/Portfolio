import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FontLoader from "./components/FontLoader";
import { ThemeProvider } from "./components/ThemeProvider";

export const metadata: Metadata = {
  title: "Portfolio | Godwin - Full Stack Developer & AI/ML Enthusiast",
  description: "Portfolio of Godwin - Full Stack Developer and AI/ML Enthusiast. 3rd Year CSE Student at Kamaraj College of Engineering and Technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <FontLoader />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
