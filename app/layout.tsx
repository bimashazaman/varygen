import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { ClerkProvider } from '@clerk/nextjs'
import { ModalProvider } from '@/components/modal-provider'
import { ToasterProvider } from '@/components/toaster-provider'
import { CrispProvider } from '@/components/crisp-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'VaryGen',
  description: 'An AI tool',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <CrispProvider />
        <body className={inter.className}>
          <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
            <ModalProvider />
            <ToasterProvider />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
