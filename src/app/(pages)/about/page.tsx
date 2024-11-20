import Image from "next/image"
import Aboutimg from "../../../../public/aboutImages1.jpg"
import 'animate.css';
import About2 from "./about2";
import About3 from "./about3";

export default function About (){
    return(
        <div id="about_container" className="overflow-hidden">
          <div className="md:absolute md:left-14 md:top-28 md:space-y-9 overflow-hidden sm:flex sm:flex-col sm:pl-20 sm:pt-20 sm:space-y-3 flex flex-col pl-16 pt-16 space-y-3">
          <h1 className="md:font-bold md:text-8xl sm:font-bold sm:text-7xl overflow-hidden font-bold text-5xl ">about.</h1>
          <p className="md:font-extralight md:text-xl font-[proxima nova light, Helvetica Neue, Helvetica, Arial, Sans-serif] sm:font-extralight sm:text-xl font-extralight text-xl ">Im web developer based in sindh mirpurkhas</p>
          <p className="w-96 md:font-extralight md:text-xl font-[proxima nova light, Helvetica Neue, Helvetica, Arial, Sans-serif] sm:font-extralight sm:text-xl font-extralight text-xl">Since 2005, Ive enjoyed turning complex problems into simple, beautiful and intuitive designs. When Im not pushing pixels, you ll find me cooking, gardening or working out in the park.</p>
         
         </div>
         <div className="overflow-hidden "><Image src={Aboutimg} alt="aboutImg" height={500} width={500} className="lg:absolute lg:right-20 lg:top-52  lg:w-[40rem] md:absolute md:top-[33rem] md:right-16 md:-z-50 sm:flex sm:pl-32 pl-5"/></div>
         <div className="lg:overflow-hidden" id="about_skills">
         <h2 className="lg:absolute lg:top-[40rem] lg:left-[36rem] lg:font-bold lg:text-7xl overflow-hidden md:absolute md:top-[54rem] md:left-[26rem] md:font-bold md:text-5xl ">My Skills</h2>
           <ul className="lg:flex lg:gap-6 lg:absolute lg:top-[48rem] lg:left-24 lg:justify-around lg:items-end md:flex md:absolute md:top-[58rem] md:left-16 md:items-end md:gap-4 text-white shadow-xl shadow-white opacity-95 overflow-hidden">
           
            <li className="lg:h-[400px] lg:w-[168px] bg-[#91CBC4] w-10 lg:rounded-t-[15px] lg:text-6xl lg:flex lg:flex-col lg:items-center lg:justify-end lg:gap-y-5 
             md:h-[380px] md:w-[150px]   md:rounded-t-[13px] md:text-5xl md:flex md:flex-col md:items-center md:justify-end md:gap-y-4     animate__animated animate__slideInUp">95% <span className="lg:text-lg lg:font-semibold lg:pb-3 md:text-lg md:font-semibold md:pb-3">Next js</span></li>

            <li className="lg:h-[350px] lg:w-[168px] bg-[#EAC5BB] rounded-t-[15px] lg:text-6xl lg:flex lg:flex-col lg:items-center lg:justify-end lg:gap-y-5 
            md:h-[320px] md:w-[150px]  md:rounded-t-[13px] md:text-5xl md:flex md:flex-col md:items-center md:justify-end md:gap-y-5  animate__animated animate__slideInUp">93% <span className="lg:text-lg lg:font-semibold lg:pb-3 md:text-lg md:font-semibold md:pb-3">HTML</span></li>

            <li className="lg:h-[300px] lg:w-[168px] bg-[#98ADAC] rounded-t-[15px] lg:text-6xl lg:flex lg:flex-col lg:items-center lg:justify-end lg:gap-y-5 
             md:h-[320px] md:w-[150px]  md:rounded-t-[13px] md:text-5xl md:flex md:flex-col md:items-center md:justify-end md:gap-y-5 animate__animated animate__slideInUp"> 85% <span className="lg:text-lg lg:font-semibold lg:pb-3 md:text-lg md:font-semibold md:pb-3">Tailwind CSS</span></li>

            <li className="lg:h-[250px] lg:w-[168px] bg-[#CBA26D] rounded-t-[15px] lg:text-6xl lg:flex lg:flex-col lg:items-center lg:justify-end lg:gap-y-5 
            md:h-[320px] md:w-[150px]  md:rounded-t-[13px] md:text-5xl md:flex md:flex-col md:items-center md:justify-end md:gap-y-5 animate__animated animate__slideInUp">80% <span className="lg:text-lg lg:font-semibold lg:pb-3 md:text-lg md:font-semibold md:pb-3">Type Script</span></li>

            <li className="lg:h-[200px] lg:w-[168px] bg-[#D56160] rounded-t-[15px] lg:text-6xl lg:flex lg:flex-col lg:items-center lg:justify-end lg:gap-y-5
             md:h-[320px] md:w-[150px]  md:rounded-t-[13px] md:text-5xl md:flex md:flex-col md:items-center md:justify-end md:gap-y-5 animate__animated animate__slideInUp">65% <span className="lg:text-lg lg:font-semibold lg:pb-3 md:text-lg md:font-semibold md:pb-3">Python</span></li>
           </ul>
        </div>

         <div><About2/></div>
         <div><About3/></div>
        
        </div>
        
    )
}
