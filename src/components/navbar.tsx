'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Cross as Hamburger } from 'hamburger-react'
import AnimatedButton from './AnimatedButton'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { RootState } from '@/app/GlobalRedux/store'

const Navbar = () => {
  const [isInitialRender, setIsInitialRender] = useState(true);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  const refs = useSelector((state: RootState) => state.ref);

  const scrollToSection = (key: string) => {
    refs[key]?.current?.scrollIntoView({ behavior: 'smooth' });
  };


  useEffect(() => {
    console.log(refs, 'refs')
    
    const timer = setTimeout(() => {
        
      const listItems = document.querySelectorAll('.right li');
      listItems.forEach((li : Element) => {
    
          li.classList.add('paused');
      });
    }, 6000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    setIsInitialRender(false);
  
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY === 0) {
        setShowNavbar(true);
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
        if (currentScrollY > lastScrollY) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
      }
      setLastScrollY(currentScrollY);
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`nav box-border flex z-40 py-3 ${isAtTop ? '' : 'shadow-lg'} justify-between w-full px-12 align-middle font-mono fixed top-0 transition-all duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
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
                <li className='text-white' onClick={() => {scrollToSection('section1')}}>
                    <Link href={'/'} scroll={false} className='flex align-bottom space-x-1'>
                        <p className='text-primary-color'>01. </p>
                        <p className='text-gray-400 hover:text-primary-color transition-colors'>About</p>
                    </Link>
                </li>
                <li className='text-white' onClick={() => {scrollToSection('section2')}}>
                    <Link href={'/'} scroll={false} className='flex align-bottom space-x-1'>
                        <p className='text-primary-color'>02. </p>
                        <p className='text-gray-400 hover:text-primary-color transition-colors'>Experience</p>
                    </Link>
                </li>
                <li className='text-white' onClick={() => scrollToSection('section3')}>
                    <Link href={'/'} scroll={false} className='flex align-bottom space-x-1'>
                        <p className='text-primary-color'>03. </p>
                        <p className='text-gray-400 hover:text-primary-color transition-colors'>Work</p>
                    </Link>
                </li>
                <li className='text-white '>
                    <Link href={'/'} scroll={false} className='flex align-bottom space-x-1' onClick={() => scrollToSection('section4')}>
                        <p className='text-primary-color'>04. </p>
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