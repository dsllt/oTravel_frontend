import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "../components/navbar/navbar";
import UserProvider from "../context/userContext";

export const metadata: Metadata = {
  title: "OTravel",
  description: "Encontre os melhores lugares na cidade",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dim">
      <body
        suppressHydrationWarning={true}
        className="h-screen overflow-hidden flex flex-col bg-zinc-950 text-zinc-50 "
      >
        <UserProvider>
          <div className="fixed top-0 left-0 right-0 z-50">
            <Navbar />
          </div>
          <div className="flex-1 overflow-y-auto pt-16">{children}</div>
        </UserProvider>
      </body>
    </html>
  );
}
