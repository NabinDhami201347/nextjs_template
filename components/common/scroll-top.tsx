"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

const ScrollTop = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 50) setShow(true)
      else setShow(false)
    }

    window.addEventListener("scroll", handleWindowScroll)
    return () => window.removeEventListener("scroll", handleWindowScroll)
  }, [])

  const handleScrollTop = () => {
    window.scrollTo({ top: 0 })
  }

  return (
    <div
      className={`fixed right-10 z-50 bottom-6 hidden bg-gray-400 opacity-70 p-2 rounded-full flex-col gap-3 ${
        show ? "md:flex" : "md:hidden"
      }`}
    >
      <button
        aria-label="Scroll To Top"
        type="button"
        onClick={handleScrollTop}
      >
        <span className="cursor-pointer">
          <ArrowUp className="h-5 w-5 text-white" />
        </span>
      </button>
    </div>
  )
}

export default ScrollTop
