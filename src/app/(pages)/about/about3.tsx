import Image from "next/image"
import Img4 from "../../../../public/featured.jpg"
export default function About3 (){
    return(
        <div id="about_4" className="sm:absolute sm:top-0 ">
            <div className="md:space-y-5 sm:space-y-5 space-y-4 sm:pl-20 pl-5">
               <h2 className="md:text-4xl md:font-extralight sm:text-4xl sm:font-extralight text-4xl font-extralight overflow-hidden">Featured here & there</h2> 
               <p className="md:text-lg md:font-extralight sm:text-lg sm:font-extralight text-lg font-extralight relative  w-96 overflow-hidden">Ive been lucky enough to have my work featured in books, magazines and websites around the world. Ive also spoken at various design events and enjoy sharing my love of design on social media.</p>
               <a href="" className="md:text-lg md:font-extralight underline md:space-y-14 sm:text-lg sm:font-extralight  sm:space-y-14 text-lg font-extralight  space-y-14">View featured work</a>
            </div>
            <div id="about_4_img" className="" ><Image src={Img4} alt="img4" height={700} width={700}/></div>
        </div>
    )
}