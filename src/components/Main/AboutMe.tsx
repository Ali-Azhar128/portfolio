import React from 'react'
import Heading from '../Heading'
import { BiRightArrow } from "react-icons/bi";

const AboutMe = () => {
  return (
    <div className='min-h-[90vh] flex flex-col items-start lg:flex-row lg:flex space-x-10 w-[85%] m-auto mt-6  space-y-6'>
      <div className='space-y-3 text-[#8892af] flex-1'>
        <Heading num='01.' heading='About Me'/>
        <p className='hidden1 logo'>
        Hello! My name is Ali Azhar and I enjoy creating things that live on the internet. My interest in web development started back in 2020 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
        </p>
        <p className='hidden1 logo'>
        Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
        </p>
        <p className='hidden1 logo'>
        I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.
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