"use client"

import React, { useCallback } from 'react'
import Button from './Button'

interface ModalProps {
  isOpen?: boolean, 
  title?: string,
  body?: React.ReactElement,
  footer?: React.ReactElement,
  actionLabel: string,
  disabled?: boolean,
  onClose: () => void,
  onSubmit: () => void
}

const Modal: React.FC<ModalProps> = ({isOpen, title, body, footer, actionLabel, disabled, onClose, onSubmit}) => {

  const handleClose = useCallback(() => {
    if (disabled) {
      return;      
    }
    onClose()
  }, [disabled, onClose])

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;      
    }
    onSubmit()
  }, [disabled, onSubmit])

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus-outline-none bg-slate-600 bg-opacity-70">
        <div className="relative w-full lg:w-3/6 my-8 mx-auto lg:max-w-3xl h-full lg:h-auto">
          <div className="h-full lg:h-auto border-0 rounded-lg shadow-lg relative flex flex-col  w-full bg-slate-900 outline-none focus:outline-none">
            <div className="flex items-center justify-between p-10 rounded-t">
              <h3 className="text-2xl font-semibold text-white">{title}</h3>
              <button 
              type="button"
              onClick={handleClose}
              className="text-gray-300 bg-transparent rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center hover:bg-gray-600 hover:text-white" data-modal-hide="defaultModal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                </button>
            </div>
            <div className="relative p-10 flex-auto">{body}</div>
            <div className="flex flex-col p-10 gap-2">
              <Button disabled={disabled} label={actionLabel} secondary fullWidth large onClick={handleSubmit}/>
              {footer}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal