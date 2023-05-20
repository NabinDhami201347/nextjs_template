"use client"

import { motion, useScroll } from "framer-motion"
import { ThemeProvider } from "next-themes"

import ScrollTop from "@/components/common/scroll-top"

const Providers = ({ children }: { children: React.ReactNode }) => {
  const { scrollYProgress } = useScroll()
  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <ScrollTop />
        {children}
      </ThemeProvider>
    </>
  )
}

export default Providers
