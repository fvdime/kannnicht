"use client"

import useLoginModal from '@/hooks/useLoginModal'
import React, { useCallback, useState } from 'react'
import Input from '../Input'
import Modal from '../Modal'
import useRegisterModal from '@/hooks/useRegisterModal'
import { signIn } from 'next-auth/react'

const LoginModal = () => {

  const LoginModal = useLoginModal()
  const RegisterModal = useRegisterModal()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleToggle = useCallback(() => {
    if (isLoading) {
      return
    } 

    LoginModal.onClose()
    RegisterModal.onOpen()
  }, [isLoading, RegisterModal, LoginModal])

  const handleSubmit = useCallback(async() => {
    try {
      setIsLoading(true)

      await signIn('credentials', {email, password})

      LoginModal.onClose()
    } catch (error) {
      console.log(error)
    }finally{
      setIsLoading(false)
    }
  }, [LoginModal, email, password])

  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Input
      placeholder='Email'
      onChange={(e) => setEmail(e.target.value)}
      value={email}
      disabled={isLoading}
      type='email'
      />
      <Input
      placeholder='Password'
      onChange={(e) => setPassword(e.target.value)}
      value={password}
      disabled={isLoading}
      type='password'
      />
    </div>
    )

    const FooterContent = (
      <div className='text-gray-500 text-center mt-4'>
        <p>Don't have an account? 
        <span 
        onClick={handleToggle}
        className='text-white cursor-pointer hover:underline'> Sign Up</span>
        </p>
      </div>
      )

  return (
    <Modal 
    disabled={isLoading}
    isOpen={LoginModal.isOpen}
    title='Sign In'
    actionLabel='Sign In'
    onClose={LoginModal.onClose}
    onSubmit={handleSubmit}
    body={bodyContent}
    footer={FooterContent}
    />
  )
}

export default LoginModal