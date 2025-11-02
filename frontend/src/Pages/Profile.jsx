import React from 'react'
im

const Profile = () => {
  return (
    <div className='min-h-screen flex flex-col'>
        <div className='flex container mx-outo p-4 md:p-6 '>
            <div className='flex flex-col md:flex-row md:space-x-5 space-y-5 md:space'>
                {/** left section*/}
                <div className='w-full md:w-1/3 lg:w-1/4 shadow-md rounded-lg p-6'>
                <h2 className='text-sm md:text-lg font-bold mb-4 '>john doe</h2>
                <p className='text-sm text-gray-600 mb-4'>john@example.com</p>
                <button className='w-full bg-red-500 text-white py-2 rounded hover:bg-red-500'>logout</button>

                </div>
                <div>
                    {/**right section */}
                    <div className='w-full md:w-2/3 lg:w3/4'> 
                  
                    </div>
                </div>
            </div>
        </div>
      profile
    </div>
  )
}

export default Profile
