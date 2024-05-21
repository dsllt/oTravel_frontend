import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '../components/navbar'
import { cookies } from 'next/headers'
import UserProvider from '../context/userContext'

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
      <body suppressHydrationWarning={true}>
        <UserProvider>
          <Navbar isLogged={isLogged} isAdmin={isAdmin} />
          {children}
        </UserProvider>
      </body>
    </html>
  )
}
