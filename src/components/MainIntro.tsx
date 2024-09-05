'use client'
import React, { useEffect } from 'react'
import AnimatedButton from './AnimatedButton'
import Hero from './Main/Hero'
import AboutMe from './Main/AboutMe'
import AboutWork from './Main/AboutWork'
import MyWork from './Main/MyWork'

const MainIntro = () => {
    useEffect(() => {
        setTimeout(() => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry => {
                  console.log(entry)
                  if(entry.isIntersecting){
                    entry.target.classList.add('show1')
                  }
                }))
              })
              const hiddenElemnets = document.querySelectorAll('.hidden1')
              hiddenElemnets.forEach((el) => {
                observer.observe(el)
              })
        }, 4000)
    }, [])
  return (
    <div className='text-white m-auto w-[100%] md:w-[80%] mt-32 flex flex-col items-start'>
        <Hero/>
        <AboutMe/>
        <AboutWork/>
        <MyWork/>
    </div>
  )
}

export default MainIntro