"use client"

import getCurrentUser from '@/actions/getCurrentUser'
import Navbar from '@/components/Navbar'
import useUser from '@/hooks/useUser'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

const page = async () => {

  const {data: session } = useSession()

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`/api/users/${session?.user?.userId}/posts`)
      const data = await res.json()

      setPosts(data)
    }
  
    if (session?.user?.userId) fetchPosts()
  }, [])
  return (
    <>
      <Navbar label={currentUser?.username || 'username'} backArrow/>
    </>
  )
}

export default page