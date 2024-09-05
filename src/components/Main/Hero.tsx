import AnimatedButton from "../AnimatedButton"

const Hero = () => {
  return (
    <div className="min-h-[95vh]">
        <div className='hidden1 logo text-primary-color font-mono font-extralight'>Hi, my name is</div>
        <div className='bigHeading hidden1 logo text-6xl text-heading-color mt-4 font-extrabold'>
            Ali Azhar.
        </div>
        <div className='smallHeading min-w-fit hidden1 logo text-6xl text-[#8892af] mt-4 font-extrabold'>
            I build things for the web.
        </div>
        <div className='hidden1 logo font-sans text-[#8892af] mt-4 max-w-lg'>
            I'm a software engineer specializing in building and occasionally designing exceptional digital experiences. I focus on creating accessible, user-centered products that are both innovative and impactful. I'm passionate about turning ideas into reality through thoughtful design and robust code, constantly pushing the boundaries of what’s possible on the web.
        </div>
        <div className='hidden1 logo mt-4'>
            <AnimatedButton text='Check Out My Projects!' link='https://github.com/Ali-Azhar128'/>
        </div>
    </div>
  )
}

export default Hero