import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MNM Labs",
  description: "MD Nahid Mia Production",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative overflow-x-hidden bg-linear-to-br from-[#020617] via-[#0f172a] to-[#312e81] flex flex-col">

        <div className="pointer-events-none absolute top-0 left-0 h-96 w-96 animate-[float_8s_ease-in-out_infinite] rounded-full bg-purple-500/20 blur-3xl"></div>

        <div className="pointer-events-none absolute top-1/3 left-1/2 h-96 w-96 animate-[float_10s_ease-in-out_infinite] rounded-full bg-cyan-500/20 blur-3xl"></div>

        <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 animate-[float_12s_ease-in-out_infinite] rounded-full bg-indigo-500/20 blur-3xl"></div>

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px]"></div>

        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar></Navbar>
          <main>
            {children}
          </main>
          <Footer></Footer>
        </div>

      </body>
    </html>
  );
}
