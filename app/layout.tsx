/**
 * Root Layout Component
 * 
 * This is the root layout for the Next.js 13+ app directory structure.
 * It provides:
 * - Global HTML structure and metadata
 * - Font loading and optimization
 * - Theme provider setup for dark/light mode
 * - Language context provider for internationalization
 * - Global error handling
 * - Performance monitoring and analytics
 * 
 * This layout wraps all pages and is rendered on every route.
 */

import type { Metadata, Viewport } from "next"
import { Inter, Noto_Kufi_Arabic } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import ErrorBoundary from "@/components/error-boundary"

// Font configurations with optimization
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Improves loading performance
  variable: "--font-inter",
})

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  display: "swap", // Improves loading performance
  variable: "--font-noto-kufi-arabic",
})

// SEO and social media metadata
export const metadata: Metadata = {
  title: {
    default: "Obai Ahmed - Data Scientist Portfolio",
    template: "%s | Obai Ahmed",
  },
  description: "Professional portfolio of Obai Ahmed, showcasing expertise in data science, machine learning, and analytics. Explore projects, skills, and experience in transforming data into actionable insights.",
  keywords: [
    "data scientist",
    "machine learning",
    "analytics",
    "portfolio",
    "Obai Ahmed",
    "data analysis",
    "artificial intelligence",
    "python",
    "statistics"
  ],
  authors: [{ name: "Obai Ahmed" }],
  creator: "Obai Ahmed",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://obai-ahmed.vercel.app",
    title: "Obai Ahmed - Data Scientist Portfolio",
    description: "Professional portfolio showcasing data science expertise, machine learning projects, and analytical insights.",
    siteName: "Obai Ahmed Portfolio",
    images: [
      {
        url: "/Obai_no_background.png",
        width: 1200,
        height: 630,
        alt: "Obai Ahmed - Data Scientist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Obai Ahmed - Data Scientist Portfolio",
    description: "Professional portfolio showcasing data science expertise and machine learning projects.",
    images: ["/Obai_no_background.png"],
    creator: "@obai_ahmed", // Replace with actual Twitter handle
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
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
}

// Viewport configuration for responsive design
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
}

interface RootLayoutProps {
  children: React.ReactNode
}

/**
 * Root Layout Component
 * 
 * Provides the foundational structure and context providers for the entire application.
 * All pages inherit this layout and its configurations.
 */
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning 
      className={`${inter.variable} ${notoKufiArabic.variable}`}
    >
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/android-chrome-192x192.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ErrorBoundary>
          {/* Theme provider for dark/light mode functionality */}
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange={false}
          >
            {/* Language provider for internationalization support */}
            <LanguageProvider>
              {/* Main application content */}
              {children}
              
              {/* Performance monitoring and analytics */}
              <Analytics />
              <SpeedInsights />
            </LanguageProvider>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}