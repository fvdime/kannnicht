"use client"
import { useCallback } from "react"
import { useRouter } from "next/navigation"
import Button from "./Button"

const Works = () => {

  const router = useRouter()

  const handleClick = useCallback(() => {
      router.push("/")
    },[router],)
  
  return (
    <div className='w-full'>
      <div className='w-full mb-4'>      
        <div className="p-6 border rounded-lg shadow  border-slate-500">
          <div className='flex flex-row '>
          <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Noteworthy technology acquisitions 2021</h5>
            <p className="mb-3 font-normal text-gray-300">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          </div>
          <div className='text-white text-2xl cursor-pointer'>
            ♡
          </div>
          </div>
            <div className='flex w-full justify-between items-center'>
              <p className='text-lg tracking-tight text-white'>
                <span className='text-gray-300 '>by </span>userone
              </p>
              <Button label="Read More" onClick={handleClick}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Works