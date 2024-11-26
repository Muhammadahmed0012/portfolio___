import Image from "next/image"
import portimg from "../../../../public/portfolioimg1.jpg"
import Portfolio2 from "./portfolio"
export default function Portfolio(){
    return(
        <div>
            

        <div className="lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-x-24 lg:pt-32 md:flex md:flex-col md:items-center  md:gap-y-10 md:pt-32 sm:flex sm:flex-col sm:items-center  sm:gap-y-10 sm:pt-20 flex flex-col items-center  gap-y-5 pt-12 ">
            <div className="lg:flex lg:flex-col lg:gap-y-10 lg:pl-6 md:flex md:flex-col md:gap-y-7 md:pl-6 sm:flex sm:flex-col sm:gap-y-7 sm:pl-10 flex flex-col gap-y-7 pl-7">
            <h1 className="lg:text-8xl lg:font-bold md:text-8xl md:font-bold sm:text-7xl sm:font-bold text-6xl font-bold opacity-90 overflow-hidden">portfolio.</h1>
            <p className="lg:text-xl lg:font-light md:text-xl md:font-light sm:text-xl sm:font-light text-xl font-light opacity-90 ">Check out some of my latest design case studies.</p>
            <p className="lg:text-lg lg:font-extralight lg:w-[28rem] md:text-lg md:font-extralight md:w-[50rem] sm:text-lg sm:font-extralight sm:w-[40rem] text-lg font-extralight w-[22rem]">I’ve worked for startups, agencies, corporations, and government and have led projects to design products used by millions of people.</p>
            </div>
            <div className="lg:h-[440px] lg:w-[590px] md:w-[680px] md:h-[507px] sm:w-[680px] sm:h-[507px] w-[400px] h-[407px]">
                <Image src={portimg} alt="portimg"/>
            </div>
        </div>
         
      <Portfolio2/>
        </div>
    )
}