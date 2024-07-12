import React from 'react'
import Phone from '../assets/phone.png'
import Email from '../assets/email.png'
import Location from '../assets/location.png'
import Form from './Form'

const Contact = () => {
  return (
    <div id='contact' className='bg-secondary h-screen w-full flex justify-around px-28 pt-20 text-primary'>
      
      <div className='w-2/5 pt-6'>
        <h1 className='font-large text-6xl mb-10'> Get in Touch </h1>
        <h2 className='text-2xl mb-20 font-bold'> Let's work together </h2>
        
        <div className='flex flex-col items-start justify-evenly'>
          
          <div className='flex items-center justify-start mb-8'>
            <div className='bg-button p-1 mr-4 rounded-md flex items-center justify-center'> <img className='w-14' src={Phone} alt='icon'/> </div>
            <div>
              <h3> Phone </h3>
              <h1 className='font-semibold text-2xl'> (+91) 8448035879 </h1>
            </div>
          </div>

          <div className='flex items-center justify-start mb-8 '>
            <div className='bg-button p-1 mr-4 rounded-md flex items-center justify-center'> <img className='w-14' src={Email} alt='icon'/> </div>
            <div>
              <h3> Email </h3>
              <h1 className='font-semibold text-2xl'> prabhjotsingh1645@gmail.com </h1>
            </div>
          </div>

          <div className='flex items-center justify-start'>
            <div className='bg-button p-1 mr-4 rounded-md flex items-center justify-center'> <img className='w-14' src={Location} alt='icon'/> </div>
            <div>
              <h3> Location </h3>
              <h1 className='font-semibold text-2xl'> Delhi, India </h1>
            </div>
          </div>

        </div>

      </div>

      <Form />

    </div>
  )
}

export default Contact