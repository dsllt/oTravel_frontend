import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '../components/navbar'
import { inter } from '../components/font-styles'
import { cookies } from 'next/headers'
import { useState } from 'react'


export const metadata: Metadata = {
  title: 'OTravel',
  description: 'Encontre os melhores lugares na cidade',
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
    <html lang="en" data-theme="dim">
      <body className={inter.className}>
        <Navbar isLogged={isLogged} isAdmin={isAdmin} />
        {children}
      </body>
    </html>
  )
}
