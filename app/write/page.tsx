import Navbar from '@/components/Navbar'
import Write from '@/components/Write'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar label='Write'/>
      <Write/>
    </div>
  )
}

export default page