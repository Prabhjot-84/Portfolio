import React from 'react'
import Mail from '../assets/mail.png'

const Form = () => {
    return (
        <div className='bg-button h-fit w-2/5 rounded-xl '>
            <h1 className='text-3xl w-full bg-primary rounded-t-xl px-10 py-7 font-bold text-secondary flex items-center justify-center mb-6'> Send me a Message&nbsp; <img className='bg-secondary h-fit w-10' src={Mail} alt='mail'/> </h1>
            <div className='px-10 pb-8'>
            <div className='flex flex-col mb-2'>
                <span className='mb-2 text-primary'> Full Name : </span>
                <input type='text' className='px-3 py-2 text-xl bg-secondary rounded-lg w-2/3' />
            </div>
            <div className='flex flex-col mb-2'>
                <span className='mb-2 text-primary'> Your Email : </span>
                <input type='text' className='px-3 py-2 text-xl bg-secondary rounded-lg w-2/3' />
            </div>
            <div className='flex flex-col mb-2'>
                <span className='mb-2 text-primary'> Subject : </span>
                <input type='text' className='px-3 py-2 text-xl bg-secondary rounded-lg w-2/3' />
            </div>
            <div className='flex flex-col mb-2'>
                <span className='mb-2 text-primary'> Description : </span>
                <textarea type='text' className='px-3 py-2 text-xl bg-secondary rounded-lg w-full' />
            </div>
            <button className='bg-primary text-secondary text-xl mt-6 px-4 py-3 rounded-lg hover:bg-hover hover:text-primary '> Send Message </button>
            </div>
        </div>
    )
}

export default Form