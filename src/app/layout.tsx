import type { Metadata, Viewport } from 'next';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'SkyTrust Global Services Inc — Software Engineering & Cybersecurity',
    template: '%s | SkyTrust Global Services Inc',
  },
  description: 'Enterprise software engineering, cloud architecture, DevOps, and embedded cybersecurity. SkyTrust delivers world-class technology solutions and 24/7 security operations.',
  keywords: ['software development', 'cloud architecture', 'cybersecurity', 'DevOps', 'network security', 'compliance', 'SOC 2', 'HIPAA', 'threat monitoring', 'penetration testing'],
  authors: [{ name: 'SkyTrust Global Services Inc' }],
  creator: 'SkyTrust Global Services Inc',
  publisher: 'SkyTrust Global Services Inc',
  metadataBase: new URL('https://skytrustinc.com'),
  icons: {
    icon: [
      { url: '/logo.png', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://skytrustinc.com',
    siteName: 'SkyTrust Global Services Inc',
    title: 'SkyTrust Global Services Inc — Software Engineering & Cybersecurity',
    description: 'Enterprise software engineering, cloud architecture, and embedded cybersecurity. Enterprise infrastructure protected.',
    images: [{ url: '/logo.png', width: 800, height: 600, alt: 'SkyTrust Global Services Inc' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SkyTrust Global Services Inc — Software Engineering & Cybersecurity',
    description: 'Enterprise software engineering, cloud architecture, and embedded cybersecurity. Enterprise infrastructure protected.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export const viewport: Viewport = {
  themeColor: '#050810',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="shortcut icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="canonical" href="https://skytrustinc.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'SkyTrust Global Services Inc',
              url: 'https://skytrustinc.com',
              logo: 'https://skytrustinc.com/logo.png',
              description: 'Enterprise software engineering, cloud architecture, and cybersecurity services including network security, cloud protection, compliance consulting, and 24/7 threat monitoring.',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-469-267-5806',
                contactType: 'customer service',
                email: 'info@skytrustinc.com',
                availableLanguage: 'English',
              },
              address: {
                '@type': 'PostalAddress',
                streetAddress: '11498 Luna Rd, Suite 104',
                addressLocality: 'Farmers Branch',
                addressRegion: 'TX',
                postalCode: '75234',
                addressCountry: 'US',
              },
              sameAs: [
                'https://twitter.com/skytrustinc',
                'https://linkedin.com/company/skytrustinc',
              ],
            }),
          }}
        />
      </head>
      <body>
        <Header />
        <main style={{ paddingTop: 'var(--header-height)' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
