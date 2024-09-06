import MainIntro from "@/components/MainIntro"
import Hexagon from "@/components/hexagon"
import SocialLinks from "@/components/SocialLinks"
import Email from "@/components/Email"
import Navbar from "@/components/navbar"

const page =() => {

  
  return (
    <div className="flex flex-col max-w-[100%]">
      <Hexagon />
      <Navbar/>
      <div className="mx-10 mb-14">
        <MainIntro/>
        <SocialLinks/>
        <Email/>

      </div>
    
    </div>
    
  )
}

export default page