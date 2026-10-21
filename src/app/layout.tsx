import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import { Footer } from "./components/footer";
import { SITE_URL } from "@/lib/site";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  style: ["normal"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  title: "Kayode Babalola",
  description: "Kayode Babalola - Frontend Engineer",
  openGraph: {
    title: "Kayode Babalola",
    description: "Kayode Babalola - Frontend Engineer",
    url: SITE_URL,
    siteName: "Kayode Babalola",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Kayode Babalola",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased min-h-screen w-full md:p-8 text-neutral-200 bg-neutral-950 pb-0`}
      >
        <div className="p-4 md:p-0 max-w-4xl mx-auto flex min-h-screen flex-col">
          <a href="#main-content" className="sr-only focus:not-sr-only focus:underline">
            Skip to content
          </a>
          <Navbar />
          <main id="main-content" className="flex-1" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
