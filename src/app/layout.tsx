import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from './ui/navbar'
import { inter } from './ui/font-styles'

export const metadata: Metadata = {
  title: 'POAcoffee',
  description: 'Encontre os melhores cafés na cidade',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
