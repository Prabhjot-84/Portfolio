import React from 'react'
import UrTracker from '../assets/urtracker.png'
import Youtube from '../assets/youtube.png'
import Weather from '../assets/weather.png'
import Zoom from '../assets/zoom.png'
import Link from '../assets/link-1.png'
// import Img from '../assets/link-2.png'

const Projects = () => {
    return (
        <div id='portfolio' className='bg-primary h-fit w-full px-28 pt-16 text-button'>

            <h1 className='text-5xl text-center tracking-wider text-secondary font-heading mb-14'> PORTFOLIO </h1>

            <div className='flex justify-evenly items-center flex-wrap'>

                <div className='w-2/5 flex flex-col items-center justify-evenly mb-12'>
                    <img className='w-full h-64 rounded-lg' src={UrTracker} alt='project'/>
                    <div className='w-full text-secondary text-center flex flex-col items-center'>
                        <a href="https://urtracker.netlify.app/" target="_blank" rel="noopener noreferrer" className='text-2xl  p-3 border-b-2 border-b-secondary w-fit border-b-button flex items-center hover:text-gray-300 hover:border-b-gray-300'>
                            UrTracker&nbsp;<img className='w-6' src={Link} alt='Icon' />
                        </a>
                        <br></br>
                        <div className='text-sm'> React JS | Shadcn | Node JS | Express JS | Mongo DB | Chart JS </div> 
                    </div>
                </div>

                <div className='w-2/5 flex flex-col items-center justify-evenly mb-12'>
                    <img className='w-full h-64 rounded-lg' src={Zoom} alt='project'/>
                    <div className='w-full text-secondary text-center flex flex-col items-center'>
                        <a href="https://zoom-clone-plum-ten.vercel.app/" target="_blank" rel="noopener noreferrer" className='text-2xl p-3 border-b-2 border-b-secondary w-fit border-b-button flex items-center hover:text-gray-300 hover:border-b-gray-300'>
                            Zoom Clone&nbsp;<img className='w-6' src={Link} alt='Icon' />
                        </a>
                        <br></br>
                        <div className='text-sm'> Next JS | TypeScript | Clerk | getstream | shadcn | Tailwind CSS  </div> 
                    </div>
                </div>

                <div className='w-2/5 flex flex-col items-center justify-evenly mb-12'>
                    <img className='w-full h-64 rounded-lg' src={Weather} alt='project'/>
                    <div className='w-full text-secondary text-center flex flex-col items-center'>
                        <a href="https://weather-seven.netlify.app/" target="_blank" rel="noopener noreferrer" className='text-2xl  p-3 border-b-2 border-b-secondary w-fit border-b-button flex items-center hover:text-gray-300 hover:border-b-gray-300'>
                            Weather7&nbsp;<img className='w-6' src={Link} alt='Icon' />
                        </a>
                        <br></br>
                        <div className='text-sm'> React JS | CSS | RESTful API </div> 
                    </div>
                </div>

                <div className='w-2/5 flex flex-col items-center justify-evenly mb-12'>
                    <img className='w-full h-64 rounded-lg' src={Youtube} alt='project'/>
                    <div className='w-full text-secondary text-center flex flex-col items-center'>
                        <a href="https://youtube-clone-084.netlify.app/" target="_blank" rel="noopener noreferrer" className='text-2xl  p-3 border-b-2 border-b-secondary w-fit border-b-button flex items-center hover:text-gray-300 hover:border-b-gray-300'>
                            Youtube Lite&nbsp;<img className='w-6' src={Link} alt='Icon' />
                        </a>
                        <br></br>
                        <div className='text-sm'> React JS | Rapid API | Tailwind CSS | Material UI </div> 
                    </div>
                </div>

                {/* <div className='flex items-center justify-evenly'>
                    <div className='w-2/5 text-left text-secondary'>
                        <a href="https://github.com/Prabhjot-84" target="_blank" rel="noopener noreferrer" className='text-2xl  p-3 border-b-2 border-b-secondary w-fit border-b-button flex items-center hover:text-gray-300 hover:border-b-gray-300 hover:pl-4'>
                            UrTracker&nbsp;<img className='w-6' src={Link} alt='Icon' />
                        </a>
                        <br></br>
                        <div className='text-sm'> React JS | Shadcn | Node JS | Express JS | Mongo DB | Chart JS </div>
                        <br></br>
                        <div className='text-base'> - This application allows users to track and manage their expenses and income, with data stored securely in MongoDB. </div>
                        <br></br>
                        <span className='text-base'> - Employs Chart.js to provide visual representations of expenses and income, enhancing user insights and financial tracking. </span>
                    </div>
                    <img className='w-2/5 h-64 rounded-lg' src={Weather} alt='project'/>
                </div> */}

            </div>

        </div>
    )
}

export default Projects