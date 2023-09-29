"use client"

import React, {useEffect} from 'react'
import SidebarLogo from './SidebarLogo'
import SidebarItem from './SidebarItem'
import SidebarShareButton from './SidebarShareButton'
import { signOut, useSession } from 'next-auth/react'
import SidebarLoginButton from './SidebarLoginButton'

const Sidebar = () => {

  const session = useSession()

  useEffect(() => {
    if (session?.status === 'authenticated') {
      console.log('authenticated')
    }
  }, [session?.status])
  

  const sidebarItems = [
    {
      label: "Home",
      href: "/",
      svg : "𖦹"
    },
    {
      label: "Notifications",
      href: "/notifications",
      svg : "❀"
    },
    {
      label: "Profile",
      href: "/user/1",
      svg : "•ﻌ•"
    },
    {
      label: "Home",
      href: "/s",
      svg : "୨୧"
    },
    {
      label: "Home",
      href: "/a",
      svg : "✩"
    },
    {
      label: "Home",
      href: "/b",
      svg : " ྀི"
    },
    {
      label: "Home",
      href: "/d",
      svg : "✿"
    },
  ]

  return (
    <div className='col-span-1 h-full pr-4 md:pr-6'>
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo/>
          {sidebarItems.map((item) => (
            <SidebarItem 
            key={item.href}
            href={item.href}
            label={item.label}
            svg={item.svg}
            />
            ))}
             {session?.status === 'authenticated' && (
            <SidebarItem onClick={() => signOut()} label='Logout' svg='✦' href='/'/>
            )} 
            {session?.status === 'authenticated' ? <SidebarShareButton/> : <SidebarLoginButton/>}
            
        </div>
      </div>
    </div>
  )
}

export default Sidebar