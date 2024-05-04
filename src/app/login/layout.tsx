import type { Metadata } from 'next'


export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" data-theme="dim">
      <body >
        {children}
      </body>
    </html>
  )
}
