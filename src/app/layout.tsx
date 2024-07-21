import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '../components/navbar'
import { cookies } from 'next/headers'
import UserProvider from '../context/userContext'
import { LoginModal } from '@ui/login/login-modal'
import { ProfileModal } from '@ui/profile/profile-modal'

export const metadata: Metadata = {
  title: 'OTravel',
  description: 'Encontre os melhores lugares na cidade',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let isLogged = true;
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
      <body suppressHydrationWarning={true} className='h-screen overflow-hidden flex flex-col bg-zinc-950 text-zinc-50 '>
        <UserProvider>
          <div className='fixed top-0 left-0 right-0 z-50'>
            <Navbar isLogged={isLogged} isAdmin={isAdmin} />
          </div>
          <div className='flex-1 overflow-y-auto pt-16'>
            {children}
          </div>
          <LoginModal />
          <ProfileModal />
        </UserProvider>
      </body>
    </html>
  )
}
