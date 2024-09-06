'use client'
import Heading from "../Heading"
import Link from "next/link"
import { LuGithub } from "react-icons/lu"
import { FiExternalLink } from "react-icons/fi";
import ProjectShowcase from "./ProjectShowcase";
import { useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { setRef, clearRef } from "@/app/GlobalRedux/Refs/refSlice";



const MyWork = () => {
  const dispatch = useDispatch();
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    dispatch(setRef({ key: 'section3', ref: sectionRef }));

    return () => {dispatch(clearRef('section3'))}
  }, [dispatch])


  return (
    <div className="hidden1 logo w-[95%] min-h-[80vh] mx-auto flex flex-col" ref={sectionRef}>
        <Heading num="03." heading="Some Things I've Built"/>

        <ProjectShowcase name="ShopEase" description="ShopEase is a full-stack e-commerce platform I built to master the MERN stack. Unlike basic tutorials, this project dives deep, covering everything from MongoDB integration to advanced features like admin order management. By the end, I deployed a fully functional store that highlights my expertise and serves as a standout piece in my portfolio." path="/assets/Shop-Ease.png" linkToGithub="https://github.com/Ali-Azhar128" linkToProject="https://shopease-2wtu.onrender.com" technologies={['React.js', 'MongoDB', 'Express', 'JWT']} leftAligned={true}/>
        <div className="mt-4 md:mt-32"></div>
        <ProjectShowcase name="Flixx Movie App" description="Flixx is a movie app that pulls data from the TMDB API, featuring a responsive design and smooth navigation with Swiper.js. It highlights my front-end development skills, combining HTML, CSS, and JavaScript to create an engaging user experience." path="/assets/Flixx.png" linkToGithub="https://github.com/Ali-Azhar128/CineFlix" linkToProject="https://github.com/Ali-Azhar128/CineFlix" 
        technologies={['Javascript', 'CSS', 'HTML', 'Swiper.js']} leftAligned={false}/>
        <div className="mt-4 md:mt-32"></div>
        <ProjectShowcase name="Jobs Portal" description="Flixx is a movie app that pulls data from the TMDB API, featuring a responsive design and smooth navigation with Swiper.js. It highlights my front-end development skills, combining HTML, CSS, and JavaScript to create an engaging user experience." path="/assets/Jobs-Rental.png" linkToGithub="https://github.com/Ali-Azhar128" linkToProject="https://github.com/Ali-Azhar128" 
        technologies={['Vue.js', 'JSON Server', 'Tailwind', 'Vuex']} leftAligned={true}/>

    </div>
  )
}

export default MyWork