import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from './ui/navbar'
import { inter } from './ui/font-styles'
import { cookies } from 'next/headers'
import { useState } from 'react'


export const metadata: Metadata = {
  title: 'POAcoffee',
  description: 'Encontre os melhores cafés na cidade',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let isLogged = false;
  let isAdmin = false;
  const cookieStore = cookies()
  const tokenCookie = cookieStore.get('token')
  const isAdminCookie = cookieStore.get('isAdmin')

  if (tokenCookie != undefined) {
    isLogged = true;
    if (isAdminCookie?.value === 'true') {
      isAdmin = true
    }
  }

  return (
    <html lang="en" data-theme="pastel">
      <body className={inter.className}>
        <Navbar isLogged={isLogged} isAdmin={isAdmin} />
        {children}
      </body>
    </html>
  )
}
