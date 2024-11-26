import contactimg1 from "../../../../public/contacticons (2).png"
import contactimg2 from "../../../../public/contacticons (4).png"
import contactimg3 from "../../../../public/contacticons (3).png"
import contactimg4 from "../../../../public/contacticons (1).png"
import contactimg5 from "../../../../public/contactmages1.jpg"
import Image from "next/image"
import Contact2 from "./contact"
import Footer from "@/components/Footer"
function Contact() {
  return (
    <div>
    <div className="lg:flex lg:flex-row lg:justify-center lg:pt-20 md:flex md:flex-col md:items-center md:pt-20 sm:flex sm:flex-col sm:items-center sm:pt-14 flex flex-col items-center pt-8">
        <div className="lg:flex lg:flex-col lg:space-y-3 md:flex md:flex-col md:space-y-3 md:pr-32 sm:flex sm:flex-col sm:space-y-3 sm:pr-32 flex flex-col space-y-3 pl-4">
            <h1 className="lg:text-8xl lg:font-semibold md:text-8xl md:font-semibold sm:text-6xl sm:font-semibold text-6xl font-semibold   opacity-90 overflow-hidden">contact.</h1>
            <p className="lg:text-xl lg:font-light lg:w-96 md:text-xl md:font-light md:w-96 sm:text-xl sm:font-light sm:w-96 text-xl font-light w-80 opacity-75">Get in touch with me via social media or send me an email.</p>
            <div className="lg:flex lg:flex-col lg:space-y-5 lg:pt-5 md:flex md:flex-col md:space-y-5 md:pt-5 sm:flex sm:flex-col sm:space-y-5 sm:pt-5 flex flex-col space-y-3 pt-5">
           
            <a href="https://www.instagram.com/invites/contact/?igsh=y5tukgt88li&utm_content=kcipnpj" className="lg:flex lg:items-center lg:gap-x-2 md:flex md:items-center md:gap-x-2  sm:flex sm:items-center sm:gap-x-2 flex items-center gap-x-2 text-pink-900"><Image src={contactimg3} alt="contactimg1" height={50} width={50} />Instagram</a>
            <a href="https://www.facebook.com/raheel.rajput.3367?mibextid=ZbWKwL" className="lg:flex lg:items-center lg:gap-x-2 md:flex md:items-center md:gap-x-2 sm:flex sm:items-center sm:gap-x-2 flex items-center gap-x-2 text-[blue]"><Image src={contactimg2} alt="contactimg1" height={50} width={50}/>Facebook</a>
            <a href="" className="lg:flex lg:items-center lg:gap-x-2 md:flex md:items-center md:gap-x-2 sm:flex sm:items-center sm:gap-x-2 flex items-center gap-x-2 text-blue-400"><Image src={contactimg1} alt="contactimg1" height={50} width={50}/>Twitter</a>
            <a href="https://www.linkedin.com/in/itx-ahmed-arain-450a702b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="lg:flex lg:items-center lg:gap-x-2 md:flex md:items-center md:gap-x-2 sm:flex sm:items-center sm:gap-x-2 flex items-center gap-x-2 text-blue-900"><Image src={contactimg4} alt="contactimg1" height={50} width={50}/>Linkdin</a>
            </div>
           
        </div>
        <div className="lg:h-[500px] lg:w-[590px] md:h-[576px] md:w-[680px] sm:h-[530px] sm:w-[620px] h-[240px] w-[280px] "><Image src={contactimg5} alt="contactimg5"/> </div>
    </div>
    <Contact2/>
    <Footer/>
    </div>
  )
}

export default Contact