'use client'
import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux';
import { setRef, clearRef } from '@/app/GlobalRedux/Refs/refSlice';
import Heading from '../Heading'
import { BiRightArrow } from "react-icons/bi";
import Exp from '@/data/WorkExp'

const AboutWork = () => {
  const dispatch = useDispatch();
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    dispatch(setRef({ key: 'section2', ref: sectionRef }));

    return () => {dispatch(clearRef('section4'))}
  }, [dispatch])
    const [id, setId] = useState(0)
  return (
    <div className='min-h-[90vh] flex flex-col items-start space-x-10 w-[85%] lg:w-[70%] mt-10 lg:mt-0 m-auto space-y-6' ref={sectionRef}>
        
      <div className='text-[#8892af] w-full'>
        <Heading num='02.' heading="Where I've Worked"/>
      </div>
      <div className='hidden1 logo flex flex-col lg:flex-row items-start space-x-4 w-full overflow-hidden'>
        <ul className='tabList flex lg:flex-col w-full whitespace-nowrap text-nowrap mb-6 overflow-x-auto'>
            {Exp.map((el) => {
                return <li key={el.id}>
                <div onClick={() => {

                        const ul = document.querySelector('.JD');
                        setTimeout(() => {
                            ul?.classList.add('desc')

                        }, 100)
                        
                        ul?.classList.remove('desc')
                    
                       
                        
                        console.log(el.id, 'id')
                    setId(el.id - 1)}} className={`${id === el.id - 1 ? 'border-primary-color' : 'border-[#233554]'} ${id === el.id - 1 ? 'text-primary-color' : 'text-[#8892af]'} min-w-fit lg:border-l-2 lg:border-b-0 border-b-2 py-2 whitespace-nowrap px-6 cursor-pointer hover:text-primary-color bg-transparent hover:bg-[#112240] transition-colors duration-150 font-mono text-sm font-thin`}>{el.name}</div>
            </li>
            })}
        </ul>
        <ul className='JD flex flex-col items-start h-[100%] self-start box-border m-0 transition-opacity duration-1000 desc opacity-0'>
            <p className='text-md text-heading-color mb-1 text-lg'>{Exp[id].role}</p>
            <p className='text-[#8892af] mb-4 text-xs font-mono'>{Exp[id].duration}</p>
            {Exp[id === 0 ? 0 : id].work.map((e) => {
                return  <li className={'flex mb-4 text-[#8892af] text-base'}>
                <BiRightArrow className="mr-2  text-primary-color text-xl p-0"/>
              {e.description}
            </li>
            })}
        </ul>
      </div>


        
    </div>
  )
}

export default AboutWork