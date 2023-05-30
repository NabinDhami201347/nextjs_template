"use client"

import { ThemeProvider } from "next-themes"

import ScrollTop from "@/components/common/scroll-top"

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <ScrollTop />
        {children}
      </ThemeProvider>
    </>
  )
}

export default Providers
