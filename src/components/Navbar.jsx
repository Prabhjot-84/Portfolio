import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className='flex items-center justify-between absolute top-0 left-0 w-full py-4 px-20'>

                <div className='text-button font-bold text-2xl text-secondary font-logo'>
                    Portfolio-84
                </div>
        
                <div className='flex items-center w-3/5 justify-between text-button text-xl'>
                    <div className='hover:cursor-pointer hover:text-hover p-4 m-4 hover:border-b-hover hover:border-b-2'> Home </div>
                    <div className='hover:cursor-pointer hover:text-hover p-4 m-4 hover:border-b-hover hover:border-b-2'> About </div>
                    <div className='hover:cursor-pointer hover:text-hover p-4 m-4 hover:border-b-hover hover:border-b-2'> Skills </div>
                    <div className='hover:cursor-pointer hover:text-hover p-4 m-4 hover:border-b-hover hover:border-b-2'> Projects </div>
                    <div className='hover:cursor-pointer hover:text-hover p-4 m-4 hover:border-b-hover hover:border-b-2'> Contact Me </div>
                </div>

            </div>
        </>
    )
}

export default Navbar