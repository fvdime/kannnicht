"use client"

import useRegisterModal from '@/hooks/useRegisterModal'
import React, { useCallback, useState } from 'react'
import Input from '../Input'
import Modal from '../Modal'
import useLoginModal from '@/hooks/useLoginModal'
import axios from 'axios'
import toast from 'react-hot-toast'
import { signIn } from 'next-auth/react'

const RegisterModal = () => {

  const LoginModal = useLoginModal()
  const RegisterModal = useRegisterModal()
  
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleToggle = useCallback(() => {
    if (isLoading) {
      return
    } 

    RegisterModal.onClose()
    LoginModal.onOpen()
  }, [isLoading, RegisterModal, LoginModal])

  const handleSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      
      await axios.post('/api/register', {
        email,
        password,
        username,
      });

      setIsLoading(false)

      toast.success('Account created.');

      signIn('credentials', {
        email,
        password,
      });

      RegisterModal.onClose();
    } catch (error) {
      toast.error('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  }, [RegisterModal, username, email, password])

  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Input
      placeholder='Username'
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      disabled={isLoading}
      />
      <Input
      placeholder='Email'
      type='email'
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      disabled={isLoading}
      />
      <Input
      placeholder='Password'
      type='password'
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      disabled={isLoading}
      />
    </div>
    )

  const FooterContent = (
    <div className='text-gray-500 text-center mt-4'>
      <p>Already have an account?  
      <span 
        onClick={handleToggle}
        className='text-white cursor-pointer hover:underline'> Sign In</span>
      </p>
    </div>
  )

  return (
    <Modal 
    disabled={isLoading}
    isOpen={RegisterModal.isOpen}
    title='Create an account'
    actionLabel='Sign Up'
    onClose={RegisterModal.onClose}
    onSubmit={handleSubmit}
    body={bodyContent}
    footer={FooterContent}
    />
  )
}

export default RegisterModal