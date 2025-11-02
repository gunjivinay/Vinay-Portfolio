import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import NoFlashScript from '@/components/NoFlashScript'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Gunji Vinaykumar | Full Stack Developer',
  description: 'Results-driven Full Stack Developer with proven experience in fintech applications and multi-tenant SaaS platforms. Portfolio showcasing projects, skills, and experience.',
  keywords: 'Full Stack Developer, React, Next.js, Node.js, TypeScript, Fintech, SaaS, Portfolio',
  authors: [{ name: 'Gunji Vinaykumar' }],
  openGraph: {
    title: 'Gunji Vinaykumar | Full Stack Developer',
    description: 'Full Stack Developer specializing in fintech and SaaS applications',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="light">
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  var initialTheme = theme || systemTheme;
                  document.documentElement.classList.remove('light', 'dark');
                  document.documentElement.classList.add(initialTheme);
                  // Mark as loaded immediately for faster content display
                  setTimeout(function() {
                    document.documentElement.setAttribute('data-loaded', 'true');
                  }, 0);
                } catch (e) {}
              })();
            `,
          }}
        />
        <ThemeProvider>
          <NoFlashScript />
          <Navigation />
          <main className="relative">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
