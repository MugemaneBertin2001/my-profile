// import React from 'react'

function TopHeader() {
  return (
    <div className='py-6 w-[90%] flex mx-auto'>
        <div className='w-1/2 text-start text-[13px] py-3'>
            Home / <span className='font-bold'>My Account</span> 
        </div>
        <div className='w-1/2 text-end text-[13px] py-3'>
            Welcome <span className='font-bold text-red-600 '> Abigael Michael</span>
        </div>
    </div>
  )
}

export default TopHeader