"use client"

import useLoginModal from "@/hooks/useLoginModal"
import { useCallback } from "react"

const SidebarLoginButton = () => {

  const LoginModal = useLoginModal()

  const handleCLick = useCallback(() => {
      LoginModal.onOpen()
    },[LoginModal],)
  
  return (
  <div onClick={handleCLick}>
      <div className="mt-6 lg:hidden rounded-full h-14 w-14 p-4 items-center flex justify-center bg-slate-600 hover:bg-opacity-10 transition cursor-pointer text-white">⋆</div>
      <div className="mt-6 hidden lg:block px-4 py-2 rounded-full bg-slate-600 cursor-pointer transition hover:bg-opacity-10">
        <p className="hidden lg:block text-white text-center font-semibold text-[20px]">Join</p>
      </div>
    </div>
  )
}

export default SidebarLoginButton