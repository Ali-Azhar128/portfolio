import React from 'react'
import Link from 'next/link'

type AnimatedButtonProps = {
    text: string;
    link: string;
  }

const AnimatedButton: React.FC<AnimatedButtonProps> = ( {text, link} ) => {
  return (
    <Link href={`${link}`} target='_blank' className='animatedBtn flex align-bottom border text-primary-color border-[#82f7e8] px-4 py-3 max-w-fit rounded-md transition-all duration-300 hover:translate-y-[-4px] hover:translate-x-[-4px] hover:shadow-custom-lg font-mono text-sm'>
       <p className='cursor-pointer min-w-fit font-thin'>{text}</p>
    </Link>
  )
}

export default AnimatedButton