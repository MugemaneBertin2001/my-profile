// import React from 'react'

function LeftNav() {
  return (
            <div className='w-1/3 px-6' >
                <ul className='text-[18px]'>
                    <li className='font-bold pb-3'>
                        Manage my Account
                    </li>
                    <li>
                        <ul>
                            <li className='text-[16px] text-red-500 pb-3'>
                                My Profile
                            </li>
                            <li className='text-[16px] pb-3'>
                                Address Book
                            </li>
                            <li className='text-[16px] pb-3'>
                                My Payment Option
                            </li>
                        </ul>
                    </li>
                </ul>
                    
                <ul className='text-[18px]'>
                <li className='font-bold pb-3'>
                        My orders
                    </li>
                    <li className='text-[16px] pb-3'>My return </li>
                    <li className='text-[16px] pb-3'>
                        My cancellation
                    </li>
                </ul>
                <ul className='text-[18px]'> 
                <li className='font-bold pb-3'>
                        My Wishlist
                    </li>
                    
                </ul>
            </div>
  )
}

export default LeftNav