"use client"

import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react'

interface SidebarItemProps {
  label: string,
  href: string,
  svg: string,
  onClick?: () => void;
}

const SidebarItem = ({label, href, svg, onClick}: SidebarItemProps) => {

  const router = useRouter()

  const handleClick = useCallback(() => {
    if (onClick) {
      return onClick()
    }

    if (href) {
      router.push(href)
    }
  }, [router, onClick, href])

  return (
    <div
      onClick={handleClick}
     className='flex flex-row items-center'>
      <div className="relative rounded-full h-14 w-12 flex items-center justify-center p-4 hover:bg-slate-400 hover:bg-opacity-10 cursor-pointer lg:hidden">
      {/* <svg className="transition duration-75 text-gray-400  group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
          <path d={svg}/>
        </svg> */}
        <p className='text-xl text-slate-200 font-semibold'>{svg}</p>
      </div>
      <div className="relative lg:flex hidden items-center gap-4 p-4 rounded-full hover:bg-slate-400 hover:bg-opacity-10 cursor-pointer">
      {/* <svg className="transition duration-75 text-white  group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
          <path d={svg}/>
        </svg> */}
        <p className='text-xl text-slate-200 font-semibold'>{svg}</p>
        <p className='text-white hidden lg:block text-xl'>{label}</p>
      </div>
    </div>
  )
}

export default SidebarItem