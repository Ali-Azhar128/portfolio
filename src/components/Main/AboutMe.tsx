import React from 'react'
import Heading from '../Heading'
import { BiRightArrow } from "react-icons/bi";
import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setRef, clearRef } from '@/app/GlobalRedux/Refs/refSlice';

const AboutMe = () => {
  const dispatch = useDispatch();
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    dispatch(setRef({ key: 'section1', ref: sectionRef }));

    return () => {dispatch(clearRef('section1'))}
  }, [dispatch])
  return (
    <div ref={sectionRef} className='min-h-[90vh] flex flex-col items-start lg:flex-row lg:flex space-x-10 w-[85%] m-auto mt-6  space-y-6'>
      <div className='space-y-3 text-[#8892af] flex-1'>
        <Heading num='01.' heading='About Me'/>
        <p className='hidden1 logo'>
        Hello! I'm Ali Azhar, and I’m passionate about building interactive web experiences. My journey into web development began in 2021 when I dived into creating small projects and experimenting with frontend technologies. That first spark ignited my curiosity about how the web works, and now, I enjoy crafting websites and applications using modern tools like React, Vue, and more!
        </p>
        <p className='hidden1 logo'>
        Fast-forward to today, and I’ve had the opportunity to work at a tech publication, a government organization, and various freelance projects. My main focus these days is developing responsive and user-friendly web applications using the MERN and MEVN stacks, with a strong emphasis on creating seamless digital experiences for users.
        </p>
        <p className='hidden1 logo'>
        I recently launched ShopEase, an e-commerce app built with the MERN stack, featuring admin-controlled order management and secure user authentication for a seamless shopping experience.
        </p>
        <div className='hidden1 logo flex leading-loose mt-5'>
          <ul className="list-disc">
            <li className="flex items-center">
            <BiRightArrow className="mr-2 text-xs text-primary-color" />
              Javscript (ES6+)
            </li>
            <li className="flex items-center">
            <BiRightArrow className="mr-2 text-xs text-primary-color" />
              React
            </li>
            <li className="flex items-center">
            <BiRightArrow className="mr-2 text-xs text-primary-color" />
              Node.js
            </li>
          </ul>
          <ul className='justify-self-center mx-auto'>
            <li className="flex items-center">
            <BiRightArrow className="mr-2 text-xs text-primary-color" />
                Typescript
              </li>
              <li className="flex items-center">
              <BiRightArrow className="mr-2 text-xs text-primary-color" />
                Next.js
              </li>
              <li className="flex items-center">
              <BiRightArrow className="mr-2 text-xs text-primary-color" />
                Vue.js
              </li>
          </ul>
        </div>
      </div>
      <div className='imageWrapper group relative hidden1 logo bg-transparent rounded-md '>
        <div className='imageBorderBelow border-2 border-primary-color bottom-0 right-0 relative transition-transform group-hover:translate-x-[3px] group-hover:translate-y-[3px] duration-200 h-72 w-72  z-0 rounded-md'>
        </div>
        <div className="imageContainer  bg-transparent  h-72 w-72 absolute -top-5 -left-5 transition-transform duration-200 hover:-translate-x-1 hover:-translate-y-1 z-10">
            <div className='img bg-no-repeat bg-cover inset-0 h-72 w-72 rounded-md'></div>
            
          </div>
      </div>
        
    </div>
  )
}

export default AboutMe