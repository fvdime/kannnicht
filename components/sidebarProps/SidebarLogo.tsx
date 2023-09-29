"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

const SidebarLogo = () => {

  const router = useRouter()

  return (
    <div 
    onClick={() => router.push('/')}
    className='rounded-full h-16 w-16 p-4 flex items-center justify-center hover:bg-slate-500 hover:bg-opacity-10 transition cursor-pointer text-white text-2xl'>
      ✧❈✧
    </div>
  )
}

export default SidebarLogo