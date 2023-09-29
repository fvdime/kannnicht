"use client"
import { useRouter } from "next/navigation"
import React, { useCallback } from "react"

interface NavbarProps{
  label: string,
  backArrow?: boolean
}
 

const Navbar: React.FC<NavbarProps> = ({label, backArrow}) => {

  const router = useRouter()

  const handleBack = useCallback(() => {
    router.back()
  }, [router])

  return (
    <div className="border-b-2 border-slate-600 p-4">
      <div className="flex flex-row items-center gap-2">
        {
          backArrow && (
            <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"/>
</svg>
            )
        }
        <h1 className="text-white font-semibold text-xl">{label}</h1>
      </div>
    </div>
  )
}

export default Navbar