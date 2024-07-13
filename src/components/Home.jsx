import React from 'react'
import LinkedinLogo from '../assets/linkedin.png'
import GithubLogo from '../assets/github.png'
import ME from '../assets/image-2.png'

const Home = () => {
    return (
        <div id='home' className='bg-primary h-screen w-full pt-28 text-button flex items-center justify-evenly'>
            
            <div className='w-1/2 pl-40'>
                <div className='text-xl text-hover'> HELLO ! </div>
                <br></br>
                <div className='text-6xl text-button font-bold'>
                    I'm <span className='text-hover'> Prabhjot Singh </span>
                </div>
                <br></br>
                <br></br>
                <div className='text-button text-xl'> A technology enthusiast passionate about developing innovative solutions with expertise in web development, project management, and user-centric design. </div>
                <br></br>
                <br></br>
                <div className='flex items-center'>
                    <a
                        href="https://www.linkedin.com/in/prabhjot-singh-105b8a24b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 w-40 text-xl mr-6 bg-secondary rounded-lg text-primary flex items-center justify-evenly hover:bg-hover hover:font-bold"
                    >
                        <img className='w-7' src={LinkedinLogo} alt='Icon' />
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/Prabhjot-84"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 w-40 text-xl bg-secondary rounded-lg text-primary flex items-center justify-evenly hover:bg-hover hover:font-bold"
                    >
                        <img className='w-7' src={GithubLogo} alt='Icon' />
                        Github
                    </a>
                </div>
            </div>

            <div className='w-1/2 '>
                <img className='w-[500px] mx-auto' src={ME} alt='Icon' />
            </div>

        </div>
    )
}

export default Home