import Image from "next/image"
import aboutimg from "../../../../public/aboutImages1.png"
import Image3 from "../../../../public/shot.png"
export default function About2 (){
    return(
        <div className="lg:flex lg:justify-center lg:items-center md:flex md:flex-col md:items-center sm:flex sm:flex-col sm:items-center flex flex-col items-center" id="about_2">
            <div className=" lg:absolute lg:top-[90rem] lg:left-32  lg:space-y-5 md:absolute md:top-[87rem] md:space-y-5 sm:absolute sm:top-[79rem] sm:space-y-5 absolute top-[79rem] space-y-5 overflow-hidden">
                <h2 className="lg:text-4xl lg:font-extralight md:text-4xl md:font-extralight  sm:text-4xl sm:font-extralight text-4xl font-extralight overflow-hidden">Part designer</h2>
                <ul className="lg:space-y-2 lg:text-lg lg:font-extralight md:space-y-2 md:text-lg md:font-extralight sm:space-y-2 sm:text-lg sm:font-extralight  space-y-2 text-lg font-extralight">
                    <li>UI design</li>
                    <li>UX design</li>
                    <li>Design Systems</li>
                    <li>Interaction design</li>
                    <li>"Making it pop"</li>
                    <li></li>
                </ul>
            </div >
      
<div className="lg:absolute lg:top-[87rem] md:absolute md:top-[103rem] sm:absolute sm:top-[103rem] absolute top-[95rem] overflow-hidden"><Image src={aboutimg} alt="aboutImg" />  </div>

            <div className="lg:absolute lg:top-[90rem] lg:right-32 lg:space-y-5 md:absolute md:top-[126rem] md:space-y-5 sm:absolute sm:top-[126rem] sm:space-y-5 absolute top-[118rem] space-y-5 overflow-hidden ">
                <h2 className="lg:text-4xl lg:font-extralight md:text-4xl md:font-extralight  sm:text-4xl sm:font-extralight text-4xl font-extralight overflow-hidden">Part coder</h2>
                <ul className="lg:space-y-2 lg:text-lg lg:font-extralight md:space-y-2 md:text-lg md:font-extralight sm:space-y-2 sm:text-lg sm:font-extralight  space-y-2 text-lg font-extralight">
                    <li>Front-end development</li>
                    <li>HTML / CSS</li>
                    <li>JavaScript (kinda)</li>
                    <li>Swearing at my computer</li>
                    <li>Eating pizza</li>
                </ul>
            </div>
        </div>
    )
}