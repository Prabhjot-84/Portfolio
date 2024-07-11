import React from 'react'
import ProgressBar from './ProgressBar'

const About = () => {
    return (
        <div className='bg-secondary h-screen w-full px-28 pt-12'>

            <div className='flex items-center'>    

                <div className='w-1/2 text-primary'>

                    <div>
                        <h1 className='text-5xl font-bold tracking-wider font-heading'> ABOUT </h1>
                        <br></br>
                        <span> Completed Bachelor of Technology in Computer Science, 2024</span>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>

                    <div className='flex items-center '>
                        <div className='font-bold text-xl '>
                            <h1> Date of Birth </h1>
                            <br></br>
                            <h1> Phone No. </h1>
                            <br></br>
                            <h1> Email </h1>
                            <br></br>
                            <h1> From </h1>
                            <br></br>
                            <h1> Languages </h1>
                        </div>

                        <div className='text-xl'>
                            <h1> &nbsp; : &nbsp;11 February 2003 </h1>
                            <br></br>
                            <h1> &nbsp; : &nbsp;8448035879 </h1>
                            <br></br>
                            <h1> &nbsp; : &nbsp;prabhjotsingh1645@gmail.com </h1>
                            <br></br>
                            <h1> &nbsp; : &nbsp;Delhi </h1>
                            <br></br>
                            <h1> &nbsp; : &nbsp;English, Hindi, Punjabi </h1>
                        </div>
                    
                    </div>

                </div>

                <div className='w-1/2'>
                    <div className="grid grid-cols-2 grid-rows-2 gap-6 p-4 text-center">
                        <div className="bg-primary text-button flex flex-col items-center justify-around rounded-md h-52 p-3 ">
                            <h1 className='text-white text-xl py-2 px-3 border-b-2'> UI/UX Design </h1>
                            <span>I focus on creating intuitive and visually appealing interfaces to enhance user experience.</span>
                        </div>
                        <div className="bg-primary text-button flex flex-col items-center justify-around rounded-md h-52 p-3 ">
                            <h1 className='text-white text-xl py-2 px-3 border-b-2'> Full Stack Developer </h1>
                            <span>I build dynamic web applications, handling both front-end and back-end development.</span>
                        </div>
                        <div className="bg-primary text-button flex flex-col items-center justify-around rounded-md h-52 p-3 ">
                            <h1 className='text-white text-xl py-2 px-3 border-b-2'> Backend Developer </h1>
                            <span> I develop secure and efficient server-side applications and manage databases effectively.</span>
                        </div>
                        <div className="bg-primary text-button flex flex-col items-center justify-around rounded-md h-52 p-3 ">
                            <h1 className='text-white text-xl py-2 px-3 border-b-2'> Git Version Control </h1>
                            <span> I use Git to manage code changes, collaborate with teams, and maintain project history.</span>
                        </div>
                    </div>
                </div>

            </div>
                
            <div className='flex items-center justify-around pt-8'>
                <div className='flex flex-col items-center '>
                    <ProgressBar progress={88} />
                    <h1 className='mt-4 text-xl'> HTML </h1>
                </div>
                <div className='flex flex-col items-center '>
                    <ProgressBar progress={85} />
                    <h1 className='mt-4 text-xl'> CSS </h1>
                </div>
                <div className='flex flex-col items-center '>
                    <ProgressBar progress={60} />
                    <h1 className='mt-4 text-xl'> Javascript </h1>
                </div>
                <div className='flex flex-col items-center '>
                    <ProgressBar progress={65} />
                    <h1 className='mt-4 text-xl'> React JS </h1>
                </div>
                <div className='flex flex-col items-center '>
                    <ProgressBar progress={50} />
                    <h1 className='mt-4 text-xl'> Node JS </h1>
                </div>
                <div className='flex flex-col items-center '>
                    <ProgressBar progress={70} />
                    <h1 className='mt-4 text-xl'> API </h1>
                </div>
                <div className='flex flex-col items-center '>
                    <ProgressBar progress={60} />
                    <h1 className='mt-4 text-xl'> Database </h1>
                </div>
            </div>

        </div>
    )
}

export default About