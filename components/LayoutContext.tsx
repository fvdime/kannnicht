import React from 'react'
import Sidebar from './sidebarProps/Sidebar'
import Featured from './sidebarProps/Featured'

const Layout: React.FC<{ children: React.ReactNode }> = ({children}) => {
  return (
    <div className='h-screen bg-slate-700'>
          <div className='container h-full mx-auto xl:px-30 max-w-6xl'>
            <div className='grid grid-cols-4 h-full'>
              <Sidebar/>
              <div className='col-span-3 lg:col-span-3 border-x-2 border-slate-600'>
                {children}
              </div>
              {/* <Featured/> */}
            </div>
          </div>
        </div>
  )
}

export default Layout