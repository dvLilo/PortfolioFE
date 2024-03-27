import type { Metadata } from "next"
import { Inter } from "next/font/google"

import Transition from "@components/transition/Transition"

import "@app/globals.scss"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ḻimꞻỵy",
  description: "Hello, Mom <3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Transition>
          {children}
        </Transition>
      </body>
    </html>
  );
}
