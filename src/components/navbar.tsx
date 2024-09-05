'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Cross as Hamburger } from 'hamburger-react'
import AnimatedButton from './AnimatedButton'

const Navbar = () => {
  const [isInitialRender, setIsInitialRender] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      const listItems = document.querySelectorAll('.right li');
      listItems.forEach((li : Element) => {
    
          li.classList.add('paused');
      });
    }, 6000); // Adjust the duration to match your animation duration

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <nav className='flex justify-between w-full px-12 py-8 align-middle font-mono'>
        <div className="logo">
            <svg className="hepta" viewBox="0 0 100 100">
                <polygon points="50,1 93,25 93,75 50,99 7,75 7,25" />
                <text x="50" y="50" dominantBaseline="middle" textAnchor="middle">A</text>
            </svg>
        </div>

        <div className='right flex items-center text-xs'>
            <div className="menu sm:flex md:hidden">
                <Hamburger color='white'/>
            </div>
            <ul className={`hidden items-center space-x-6 md:flex ${isInitialRender ? 'animate-fade-in' : ''}`}>
                <li className='text-white '>
                    <Link href={'/'} className='flex align-bottom space-x-1'>
                        <p className='text-primary-color'>01. </p>
                        <p className='text-gray-400 hover:text-primary-color transition-colors'>About</p>
                    </Link>
                </li>
                <li className='text-white'>
                    <Link href={'/'} className='flex align-bottom space-x-1'>
                        <p className='text-primary-color'>02. </p>
                        <p className='text-gray-400 hover:text-primary-color transition-colors'>Experience</p>
                    </Link>
                </li>
                <li className='text-white'>
                    <Link href={'/'} className='flex align-bottom space-x-1'>
                        <p className='text-primary-color'>03. </p>
                        <p className='text-gray-400 hover:text-primary-color transition-colors'>Work</p>
                    </Link>
                </li>
                <li className='text-white '>
                    <Link href={'/'} className='flex align-bottom space-x-1'>
                        <p className='text-primary-color'>01. </p>
                        <p className='text-gray-400 hover:text-primary-color transition-colors'>Contact</p>
                    </Link>
                </li>
                <li className='text-white'>
                    <AnimatedButton text='Resume' link='/resume'/>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar