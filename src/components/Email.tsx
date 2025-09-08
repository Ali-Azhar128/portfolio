'use client'
import React from 'react'
import { useEffect } from 'react';
import Link from 'next/link';

const Email = () => {
    useEffect(() => {
    
        const timer = setTimeout(() => {
          const listItem = document.querySelector('.emailLink');
          console.log(listItem, 'list')
    
        
              listItem?.classList.add('paused');
        }, 6000); // Adjust the duration to match your animation duration
    
        return () => {
          clearTimeout(timer);
        };
      }, []);
  return (
    <div className='emailLink hidden md:flex flex-col space-y-28 fixed bottom-0 right-0 items-center'>
        <div className='group w-min cursor-pointer transform rotate-90 text-gray-400 '>
            <Link className='duration-300 group-hover:text-primary-color group-hover:transition-transform group-hover:-translate-x-2' href={'/'}>aliazharmughal128@gmail.com</Link>
        </div>
        <div className='min-h-24 w-[1px] bg-gray-400'>
            
        </div>
        
    </div>
  )
}

export default Email