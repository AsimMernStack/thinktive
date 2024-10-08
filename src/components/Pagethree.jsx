import React from 'react'
import Pagethreereview from './Pagethreereview'

function Pagethree() {
  return (
    <div className=' flex w-full h-screen bg-white px-10 py-10'>
      <div className=' w-[20%] flex flex-col items-center p-10'>
        <h1 className='text-2xl font-semibold'>Excellent</h1>
        <div className='flex'>
          <span><img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" className='w-8'/></span>
          <span><img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" className='w-8'/></span>
          <span><img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" className='w-8'/></span>
          <span><img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" className='w-8'/></span>
          <span><img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" className='w-8'/></span>
        </div>
        <p>Based on <b>4 Review</b></p>
        <img src="https://cdn.trustindex.io/assets/platform/Google/logo.svg" className='w-32'/>
      </div>

      <Pagethreereview/>

    </div>
  )
}

export default Pagethree