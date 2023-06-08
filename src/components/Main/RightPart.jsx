// import React from 'react'

function RightPart() {
  return (
    <div className='w-2/3 p-6 shadow-lg items-center '>
        <div className='text-orange-500 font-bold w-[90%] mx-auto'>
            Edit your Profile
        </div>
        <div className='flex w-[90%] space-x-10 mt-3 mx-auto'>
            <div className='space-y-3 items-center w-1/2'>
                <p>
                    First Name
                </p>
                <input type="text" className="h-8 bg-gray-200 rounded-[4px] p-4 w-[100%]" placeholder='Abigael' />
            </div>
            <div className='space-y-3 items-center w-1/2'>
                <p>
                    Last Name
                </p>
                <input type="text"placeholder='Michael' className="h-8 bg-gray-200 rounded-[4px] p-4 w-[100%]" />
            </div>   
        </div>
        <div className='flex w-[90%] space-x-10 mt-3 mx-auto'>
            <div className='space-y-3 w-1/2'>
                <p>
                    Email
                </p>
                <input type="email" className="h-8 bg-gray-200 rounded-[4px] p-4 w-[100%]" placeholder='michaelAmana250@gmail.com' />
            </div>
            <div className='space-y-3 w-1/2'>
                <p>
                    Address
                </p>
                <input type="text" className="h-8 bg-gray-200 rounded-[4px] p-4 w-[100%]" placeholder='Kingstone, 5236, United State'/>
           </div>
            
        </div>
        <div className='flex w-[90%] space-x-10 mt-3 mx-auto'>
            <div className="w-1/2" >

            </div>
            
            <div className='w-1/2 space-x-[10%]'>
                    <button className=' text-dark p-2 text-[15px] hover:bg-gray-500 rounded font-bold w-[45%]'>
                        Cancel
                    </button>
                    <button className='bg-orange-500 text-white p-2 font-bold text-[15px] rounded w-[45%]'>
                        Save Changes
                    </button>
            </div>

                </div>
    </div>
  )
}

export default RightPart