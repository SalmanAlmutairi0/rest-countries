import React from 'react'
import loadingImg from '../../assets/loading-circle.png'
export default function LoadingScreen() {
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-slate-600 flex items-center justify-center bg-opacity-50'>
        <img src={loadingImg} alt="loading" 
            className='w-20 h-20 animate-spin '
        />
    </div>
  )
}
