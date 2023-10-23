import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {ClerkProvider} from '@clerk/nextjs'

import {ModalProvider} from '@/components/modal-provider'
import {ToasterProvider} from '@/components/toaster-provider'
import {CrispProvider} from '@/components/crisp-provider'

const crispWebsiteID = process.env.CRISP_WEBSITE_ID || ''

const font = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'AI Platform',
    description: 'My AI Platform',
}

export default function RootLayout({
   children,
}: {
  children: React.ReactNode
}) {
  return (
      <ClerkProvider>
          <html lang="en">
          <CrispProvider crispWebsiteID={crispWebsiteID}/>
          <body className={font.className}>
          <ToasterProvider/>
          <ModalProvider/>
          {children}
          </body>
          </html>
      </ClerkProvider>
  )
}
