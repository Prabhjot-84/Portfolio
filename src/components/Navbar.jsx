import React from 'react';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
        <div className='flex items-center justify-between absolute top-0 left-0 w-full py-4 px-20'>
            <div className='text-button font-bold text-2xl font-logo'>
            Portfolio-84
            </div>

            <div className='flex items-center w-3/5 justify-between text-button text-xl'>
            <div
                onClick={() => scrollToSection('home')}
                className='hover:cursor-pointer hover:text-hover p-4 m-4 hover:border-b-hover hover:border-b-2'
            >
                Home
            </div>
            <div
                onClick={() => scrollToSection('about')}
                className='hover:cursor-pointer hover:text-hover p-4 m-4 hover:border-b-hover hover:border-b-2'
            >
                About
            </div>
            <div
                onClick={() => scrollToSection('about')}
                className='hover:cursor-pointer hover:text-hover p-4 m-4 hover:border-b-hover hover:border-b-2'
            >
                Skills
            </div>
            <div
                onClick={() => scrollToSection('portfolio')}
                className='hover:cursor-pointer hover:text-hover p-4 m-4 hover:border-b-hover hover:border-b-2'
            >
                Portfolio
            </div>
            <div
                onClick={() => scrollToSection('contact')}
                className='hover:cursor-pointer hover:text-hover p-4 m-4 hover:border-b-hover hover:border-b-2'
            >
                Contact Me
            </div>
            </div>
        </div>
    </>
  );
};

export default Navbar;
