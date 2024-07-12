import React from 'react'
import ProgressBar from './ProgressBar'

const About = () => {
    return (
        <div id='about' className='bg-secondary h-screen w-full px-28 pt-10'>

            <h1 className='text-5xl font-bold tracking-wider font-heading text-primary mb-12 text-center'> ABOUT </h1>


            <div className='flex items-center justify-around text-primary mb-10'>    

                <div className='flex items-center '>
                    <div className='font-bold text-xl '>
                        <h1> Date of Birth </h1>
                        <br></br>
                        <h1> Email </h1>
                        <br></br>
                        <h1> Download Resume </h1>
                    </div>

                    <div className='text-xl'>
                        <h1> &nbsp; : &nbsp;11 February 2003 </h1>
                        <br></br>
                        <h1> &nbsp; : &nbsp;prabhjotsingh1645@gmail.com </h1>
                        <br></br>
                        <h1> &nbsp; : &nbsp;Resume/CV </h1>
                    </div>
                </div>

                <div className='flex items-center '>
                    <div className='font-bold text-xl '>
                        <h1> Phone No. </h1>
                        <br></br>
                        <h1> From </h1>
                        <br></br>
                        <h1> Languages </h1>
                    </div>

                    <div className='text-xl'>
                        <h1> &nbsp; : &nbsp;8448035879 </h1>
                        <br></br>
                        <h1> &nbsp; : &nbsp;Delhi, India </h1>
                        <br></br>
                        <h1> &nbsp; : &nbsp;English, Hindi, Punjabi </h1>
                    </div>
                </div>
            
            </div>

            <div className='mb-12'>

                {/* <h1 className='text-3xl text-center font-bold tracking-wider font-heading text-primary mb-10'> WHAT I DO </h1> */}
                
                <div className="flex items-center justify-evenly text-center">
                    <div className="bg-primary text-secondary flex flex-col items-center justify-start rounded-md h-48 w-[21%] p-3 px-5 ">
                        <h1 className='w-full text-lg mb-5 py-2 px-3 border-b-2 border-secondary'> UI/UX Design </h1>
                        <span>I focus on creating intuitive and visually appealing interfaces to enhance user experience.</span>
                    </div>
                    <div className="bg-primary text-secondary flex flex-col items-center justify-start rounded-md h-48 w-[21%] p-3 px-5 ">
                        <h1 className='w-full text-lg mb-5 py-2 px-3 border-b-2 border-secondary'> Full Stack Developer </h1>
                        <span>I build dynamic web applications, handling both front-end and back-end development.</span>
                    </div>
                    <div className="bg-primary text-secondary flex flex-col items-center justify-start rounded-md h-48 w-[21%] p-3 px-5 ">
                        <h1 className='w-full text-lg mb-5 py-2 px-3 border-b-2 border-secondary'> Backend Developer </h1>
                        <span> I develop secure and efficient server-side applications and manage databases effectively.</span>
                    </div>
                    <div className="bg-primary text-secondary flex flex-col items-center justify-start rounded-md h-48 w-[21%] p-3 px-5 ">
                        <h1 className='w-full text-lg mb-5 py-2 px-3 border-b-2 border-secondary'> Git Version Control </h1>
                        <span> I use Git to manage code changes, collaborate, and maintain project history.</span>
                    </div>
                </div>

            </div>
                
            <div className='flex items-center justify-around text-primary px-8 '>
                <div className='flex flex-col items-center '>
                    <ProgressBar progress={90} />
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
                    <ProgressBar progress={70} />
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