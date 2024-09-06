'use client'
import React from 'react'
import AnimatedButton from './AnimatedButton'
import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setRef, clearRef } from '@/app/GlobalRedux/Refs/refSlice'

const ContactMe = () => {
    const dispatch = useDispatch();
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    dispatch(setRef({ key: 'section4', ref: sectionRef }));

    return () => {dispatch(clearRef('section4'))}
  }, [dispatch])
    const email = 'aliazharmughal128@gmail.com';
  const subject = 'Hello!';
  const body = 'I would like to get in touch with you.';
  return (
    <div className='hidden1 logo w-full min-h-[80vh] max-w-[50%] m-auto flex flex-col justify-center items-center space-y-5' ref={sectionRef}>
        <p className='text-primary-color font-mono'><span className='text-sm text-primary-color font-thin'>04. </span>What's Next?</p>
        <p className='contactHeading text-heading-color text-6xl font-semibold font-calibre'>Get In Touch</p>
        <p className='text-[#8892af] font-calibre text-center text-lg'>I’m currently exploring new opportunities, and my inbox is always open. Whether you have a role to discuss or just want to connect, feel free to reach out, and I’ll do my best to get back to you!</p>
        <AnimatedButton text='Say Hello' link={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}/>
    </div>
  )
}

export default ContactMe