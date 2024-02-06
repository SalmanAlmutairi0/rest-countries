import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='flex justify-center items-center h-60 '>
      <div className="flex flex-col items-center gap-5">

      <h1 className='text-3xl font-bold'>Page Not Found (404) </h1>
      <Link to={"/"}>
        <h1 className='text-2xl font-bold bg-black text-white px-5 py-2 rounded-md'>Go Back</h1>
      </Link>
      </div>
    </div>
  )
}
