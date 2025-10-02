import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeSwitcher } from "@/components/theme-switcher";
import ActiveSectionContextProvider from "@/context/activeSectionContext";
import type { Metadata } from "next";
import { Montserrat as Geist, Geist_Mono } from "next/font/google";
import { WebSite, WithContext } from "schema-dts";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Site configuration
const SITE_CONFIG = {
  name: "Joseph Opio",
  title: "Joseph Opio | Computer Science Teacher",
  description:
    "Computer Science Teacher at XCL Education, Malaysia. Teaching A Level, O Level, IGCSE, AP, IB, and GCSE Computer Science. Sharing insights about education and technology.",
  url: "https://www.josephopio.com",
  image: "/images/me.png",
  twitter: "@josephopio", // Replace with actual Twitter handle
} as const;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    template: `%s | ${SITE_CONFIG.name}`,
    default: SITE_CONFIG.title,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "Joseph Opio",
    "Computer Science Teacher",
    "XCL Education",
    "IGCSE Computer Science",
    "A Level Computer Science",
    "Programming Teacher",
    "Malaysia Education",
    "Cambridge Computer Science",
    "IB Computer Science",
    "AP Computer Science",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    locale: "en_US",
    images: [
      {
        url: SITE_CONFIG.image,
        width: 800,
        height: 800,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: SITE_CONFIG.twitter,
    creator: SITE_CONFIG.twitter,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.image],
  },
};

const jsonLd: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_CONFIG.url}/#website`,
  url: SITE_CONFIG.url,
  name: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  inLanguage: "en-US",
  potentialAction: [
    {
      "@type": "ReadAction",
      target: [SITE_CONFIG.url],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="!scroll-smooth">
      <ActiveSectionContextProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} bg-background dark:bg-background dark:text-foreground !scroll-smooth font-sans antialiased transition-colors duration-300 ease-in-out`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="text-foreground flex min-h-screen flex-col">
              {/* Header */}
              <Navigation />
              <main>{children}</main>

              {/* Footer */}
              <Footer />
            </div>
            <ThemeSwitcher />
          </ThemeProvider>
        </body>
      </ActiveSectionContextProvider>
    </html>
  );
}
