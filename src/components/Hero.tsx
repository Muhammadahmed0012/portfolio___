import backimg from "../../public/img3.png"
import img from "../../public/images1.jpg"
import img1 from "../../public/images2.jpg"
import img2 from "../../public/images3.jpg"
import { ChevronRight } from 'lucide-react';
import Image from "next/image"
import Footer from "./Footer";
import 'animate.css';
export default function Hero (){
    return(
        <main id="Hero_body">
          <Image src={backimg} alt="back" className="lg:h-full lg:w-screen h-full w-screen" />
          
          <ul id="line_content">
          <li id="line_1" className="hidden md:block lg:block"></li> <h3 id="line_2">SOME OF MY LATEST WORK</h3> <li className="hidden md:block lg:block" id="line_3"></li>
          </ul>
          <div  id="images_container">
            <div id="image1_div"  className="animate__animated animate__slideInLeft">
                <Image src={img} alt="img"  className="lg:w-[314px] lg:h-[184px]"/>
                <div className="pt-2 text-sm ">
                <h4>My UI design book</h4>
                
              <p >  Book</p>
              
              </div>
            </div>
            <div id="image2_div" className="animate__animated animate__slideInUp"> <Image src={img1} alt="img" className="lg:w-[314px] lg:h-[184px]"/>
            <div className="pt-2 text-sm">
              <h4>Creating a lean design system</h4>
             <p> Design system</p>
       
             </div>
            </div>
            <div id="image3_div" className="animate__animated animate__fadeInTopRight"> <Image src={img2} alt="img"  className="lg:w-[314px] lg:h-[184px] "/>
            <div className="pt-2 text-sm">
           <h4> Interior design news feed </h4>
           <p> Side project </p>
           
           </div>
            </div>
            
          </div>
         <Footer/>
        </main>
    )
}