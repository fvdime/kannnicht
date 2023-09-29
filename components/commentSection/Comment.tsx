"use client"

import React from 'react'
import SingleComment from './SingleComment'
import Button from '../Button'

const Comment = () => {

  const handleSubmit = () => {}

  return (
    <div className="p-8">
      <h2 className='text-white mb-8 text-xl '>Comment Section</h2>
      <form className="mb-6">
        <div className="py-2 px-4 mb-4 rounded-lg rounded-t-lg border  bg-gray-800 border-gray-700">
          <label  className="sr-only">Your comment</label>
          <textarea className="px-0 w-full text-sm  border-0 focus:ring-0 text-white placeholder-gray-400 bg-gray-800"
          placeholder="Write a comment..." required></textarea>
        </div>
        <div className='self-end'>
          <Button onClick={handleSubmit} label='Post Comment'/>
        </div>
      </form>
      <SingleComment/>
    </div>
  )
}

export default Comment