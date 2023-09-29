import React from 'react'

const SingleComment = () => {
  return (
    <div>
      <article className="p-6 mb-6 text-base rounded-lg bg-gray-900">
        <footer className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <p className="inline-flex items-center mr-3 font-semibold text-sm text-white">
              {/* <img
                className="mr-2 w-6 h-6 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                alt="Michael Gough" />*/} Michael Gough</p> 
                <p className="text-sm text-gray-400"><time>Feb 8, 2022</time></p>
          </div>
        </footer>
          <p className='text-white'>Very straight-to-point article. Really worth time reading. Thank you! But tools are just the
          instruments for the UX designers. The knowledge of the design tools are as important as the
          creation of the design strategy.</p>
      </article>
    </div>
  )
}

export default SingleComment