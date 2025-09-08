import AnimatedButton from '@/components/AnimatedButton'
import Email from '@/components/Email'
import SocialLinks from '@/components/SocialLinks'
import React from 'react'
import Link from 'next/link'
import { LuLinkedin, LuGithub } from 'react-icons/lu'
import { FaInstagram } from 'react-icons/fa'
import { FiTwitter } from 'react-icons/fi'
import Navbar from '@/components/navbar'

const NotFound = () => {
  return (
    <>
            <Navbar/>
            <div className='h-[85vh] flex flex-col justify-center items-center space-y-2 w-[85%] m-auto'>
            <h1 className='text-primary-color font-bold font-mono text-8xl'>404</h1>
            <p className='text-heading-color text-3xl font-mono'>Not Found</p>

            <Link href={'/'} className='p-4 border border-primary-color rounded-md text-primary-color'>Go Home</Link>
            <div className='md:flex flex-col space-y-6 fixed bottom-0 left-10 items-center'>
            <Link href={'https://linkedin.com/in/ali-azhar128'} target='_blank' className=' group w-min cursor-pointer'>
                <LuLinkedin className='text-xl text-gray-400 duration-300 group-hover:text-primary-color group-hover:transition-transform group-hover:-translate-y-1'/>
            </Link>
            <Link href={'https://github.com/Ali-Azhar128'} target='_blank'  className='group w-min cursor-pointer'>
                <LuGithub className='text-xl text-gray-400 duration-300 group-hover:text-primary-color group-hover:transition-transform group-hover:-translate-y-1'/>
            </Link>
            <Link href={'https://www.instagram.com/ali.azhar128/'} target='_blank' className=' group w-min cursor-pointer'>
                <FaInstagram className='text-xl text-gray-400 duration-300 group-hover:text-primary-color group-hover:transition-transform group-hover:-translate-y-1'/>
            </Link>
            <Link href={'https://x.com/wannabedev128'} target='_blank' className=' group w-min cursor-pointer'>
                <FiTwitter className='text-xl text-gray-400 duration-300 group-hover:text-primary-color group-hover:transition-transform group-hover:-translate-y-1'/>
            </Link>
            
            <div className='min-h-24 w-[1px] bg-gray-400'>
                
            </div>
            <div className=' md:flex flex-col space-y-28 fixed bottom-0 right-0 items-center'>
            <div className='group w-min cursor-pointer transform rotate-90 text-gray-400 '>
                <Link className='duration-300 group-hover:text-primary-color group-hover:transition-transform group-hover:-translate-x-2' href={'/'}>aliazharmughal128@gmail.com</Link>
            </div>
            <div className='min-h-24 w-[1px] bg-gray-400'>
                
            </div>
            
        </div>
            
        </div>

            
        </div>
    </>
  )
}

export default NotFound