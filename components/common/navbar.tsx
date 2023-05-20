"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Typewriter from "typewriter-effect"

import Menu from "../shared/Menu"
import ThemeToggle from "./theme-toggle"

const Navbar = () => {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <Link href="/" className="flex">
          ~{pathname}
          <Typewriter
            options={{
              strings: "",
              autoStart: true,
              loop: true,
              delay: 300,
            }}
          />
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <ThemeToggle />
            <Menu />
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
