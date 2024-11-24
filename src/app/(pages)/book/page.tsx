import Image from "next/image"
import img2 from "../../../../public/(1).jpg"
import 'animate.css';
import Book2 from "./book2";
import Footer from "@/components/Footer";
export default function Book (){
    return(
        <div>
        <div className="lg:flex justify-center lg:pt-40 lg:space-x-32 ">
            <div className="lg:flex lg:flex-col lg:space-y-5 md:flex md:flex-col md:space-y-5 md:pt-20 md:pl-20 sm:flex sm:flex-col sm:space-y-5 sm:pt-20 sm:pl-20 flex flex-col space-y-2 pt-10 pl-10">
            <span className="lg:text-sm lg:font-semibold md:text-sm md:font-semibold sm:text-sm sm:font-semibold text-sm font-semibold opacity-85">UI DESIGN</span>
            <h1 className="lg:text-8xl lg:font-bold md:text-8xl md:font-bold sm:text-8xl sm:font-bold text-6xl font-bold overflow-hidden opacity-90">book.</h1>
            <p className="lg:text-xl lg:font-extralight lg:w-96 md:text-xl md:font-extralight md:w-[45rem]  sm:text-xl sm:font-extralight sm:w-[40rem] text-xl font-thin w-[22rem] overflow-hidden opacity-85">Learn a logic-driven approach to design intuitive, accessible, and beautiful interfaces using quick and practical guidelines.</p>
            <a href=""><button className="lg:h-12 lg:w-40 bg-black text-white lg:text-lg lg:font-semibold lg:rounded-[10px] md:h-12 md:w-40 md:text-lg md:font-semibold md:rounded-[10px] sm:h-12 sm:w-40 sm:text-lg sm:font-semibold sm:rounded-[10px] h-12 w-80 text-lg font-semibold mt-5 rounded-[10px] opacity-80">Get the book</button></a>
           
            </div>
            <div className="md:flex md:justify-center sm:flex sm:justify-center flex justify-center pt-12 animate__animated animate__slideInRight"><Image src={img2} alt="img2"height={440} width={540} /></div>
        
        </div>
        <Book2/>
        <Footer/>
        </div>
    )
}