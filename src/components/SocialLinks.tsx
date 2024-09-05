'use client'
import React from 'react'
import { useEffect } from 'react';
import { LuGithub } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";

const SocialLinks = () => {
    useEffect(() => {
    
        const timer = setTimeout(() => {
          const listItem = document.querySelector('.socialLinks');
    
        
              listItem?.classList.add('paused');
        }, 6000); // Adjust the duration to match your animation duration
    
        return () => {
          clearTimeout(timer);
        };
      }, []);
  return (
    <div className='socialLinks hidden md:flex flex-col space-y-6 fixed bottom-0 items-center'>
        <div className='group w-min cursor-pointer'>
            <LuGithub className='text-xl text-gray-400 duration-300 group-hover:text-primary-color group-hover:transition-transform group-hover:-translate-y-1'/>
        </div>
        <div className=' group w-min cursor-pointer'>
            <FaInstagram className='text-xl text-gray-400 duration-300 group-hover:text-primary-color group-hover:transition-transform group-hover:-translate-y-1'/>
        </div>
        <div className=' group w-min cursor-pointer'>
            <FiTwitter className='text-xl text-gray-400 duration-300 group-hover:text-primary-color group-hover:transition-transform group-hover:-translate-y-1'/>
        </div>
        <div className=' group w-min cursor-pointer'>
            <LuLinkedin className='text-xl text-gray-400 duration-300 group-hover:text-primary-color group-hover:transition-transform group-hover:-translate-y-1'/>
        </div>
        <div className='min-h-24 w-[1px] bg-gray-400'>
            
        </div>
        
    </div>
  )
}

export default SocialLinks