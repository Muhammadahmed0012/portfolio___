import Image from "next/image";
import bolgImag_1 from "../../../../public/blogi.png"
import blogimg_2 from "../../../../public/blogimages01.webp"
import blogimg_3 from "../../../../public/blogimages02.webp"
import blogimg_4 from "../../../../public/blogimages03.jpg"
import blogimg_5 from "../../../../public/blogimages04.jpg"
import blogimg_6 from "../../../../public/blogimages05.webp"
import blogimg_7 from "../../../../public/blogimages06.jpg"
import blogimg_8 from "../../../../public/blogimages07.webp"
import blogimg_9 from "../../../../public/blogimages08.webp"
import blogimg_10 from "../../../../public/blogimages09.jpg"
import blogimg_11 from "../../../../public/blogimages10.jpg"
import Footer from "@/components/Footer";
function Blog() {
  return (
    <div>
    <div className="lg:flex lg:flex-col lg:items-center lg:gap-y-20 lg:pt-20 md:flex md:flex-col md:items-center md:gap-y-20 md:pt-20 sm:flex sm:flex-col sm:items-center sm:gap-y-20 sm:pt-20 flex flex-col items-center gap-y-14 pt-14">
     <div className="lg:flex lg:flex-col lg:items-center lg:space-y-7 md:flex md:flex-col md:items-center md:space-y-7 sm:flex sm:flex-col sm:items-center sm:space-y-4 flex flex-col items-center space-y-3">
        <Image src={blogimg_2} alt="bolgimg" id="blogImages" className="hovers lg:rounded-3xl  lg:mt-3 md:rounded-3xl  md:mt-3 sm:rounded-3xl  sm:mt-3 rounded-3xl  mt-3 lg:h-[400px] lg:w-[680px] md:h-[400px] md:w-[680px] sm:h-[350px] sm:w-[580px] h-[250px] w-[350px]"/>
        <h1 className="lg:text-5xl lg:font-light lg:w-[46rem] lg:ml-5 md:text-5xl md:font-light md:w-[46rem] md:ml-5 sm:text-4xl sm:font-light sm:w-[40rem] sm:ml-5 text-3xl font-light w-[25rem] pl-8 overflow-hidden opacity-85">Best free web design inspiration sites in 2024</h1>
        <p className="lg:text-xl lg:font-extralight lg:w-[42rem] md:text-xl md:font-extralight md:w-[42rem] sm:text-xl sm:font-extralight sm:w-[38rem] text-lg font-extralight w-[20rem] opacity-75  ">My go-to free web design inspiration sites with detailed breakdowns to help inspire you on your next web design project.</p>
        <Image src={bolgImag_1} alt="bolgimg" className="lg:h-14 lg:w-48 md:h-14 md:w-48 sm:h-14 sm:w-48  h-10 w-36 "/>
     </div>
     
     <div className="lg:flex lg:flex-col lg:items-center lg:space-y-7  md:flex md:flex-col md:items-center md:space-y-7 sm:flex sm:flex-col sm:items-center sm:space-y-4 flex flex-col items-center space-y-3">
     <Image src={blogimg_3} alt="bolgimg" id="blogImages" className="lg:rounded-3xl  lg:mt-3 md:rounded-3xl  md:mt-3 sm:rounded-3xl  sm:mt-3 rounded-3xl  mt-3 lg:h-[400px] lg:w-[680px] md:h-[400px] md:w-[680px] sm:h-[350px] sm:w-[580px] h-[250px] w-[350px]"/>
     <h1 className="lg:text-5xl lg:font-light lg:w-[46rem] lg:ml-5 md:text-5xl md:font-light md:w-[46rem] md:ml-5 sm:text-4xl sm:font-light sm:w-[40rem] sm:ml-5 text-3xl font-light w-[25rem] pl-8 overflow-hidden opacity-85 ">Best free icon sets for UI design in 2024</h1> 
     <p className="lg:text-xl lg:font-extralight opacity-75 lg:w-[42rem]  md:text-xl md:font-extralight md:w-[42rem] sm:text-xl sm:font-extralight sm:w-[38rem] text-lg font-extralight w-[20rem]">I’ve searched through hundreds of icon sets over the years and picked out the best free icon sets for UI design.</p>
     <Image src={bolgImag_1} alt="bolgimg" className="lg:h-14 lg:w-48 md:h-14 md:w-48 sm:h-14 sm:w-48  h-10 w-36"/>
     </div>
    
      <div className="lg:flex lg:flex-col lg:items-center lg:space-y-7 md:flex md:flex-col md:items-center md:space-y-7 sm:flex sm:flex-col sm:items-center sm:space-y-4 flex flex-col items-center space-y-3">
      <Image src={blogimg_4} alt="bolgimg" id="blogImages" className="lg:rounded-3xl  lg:mt-3 md:rounded-3xl  md:mt-3 sm:rounded-3xl  sm:mt-3 rounded-3xl  mt-3 lg:h-[400px] lg:w-[680px] md:h-[400px] md:w-[680px] sm:h-[350px] sm:w-[580px] h-[250px] w-[350px]"/>
      <h1 className="lg:text-5xl lg:font-light lg:w-[46rem] lg:ml-5 md:text-5xl md:font-light md:w-[46rem] md:ml-5 sm:text-4xl sm:font-light sm:w-[40rem] sm:ml-5 text-3xl font-light w-[25rem] pl-8 overflow-hidden opacity-85">How to design a logo – a step by step guide</h1>
      <p className="lg:text-xl lg:font-extralight opacity-75 lg:w-[42rem]  md:text-xl md:font-extralight md:w-[42rem] sm:text-xl sm:font-extralight sm:w-[38rem] text-lg font-extralight w-[20rem]">
      A logical step by step logo design process to design any type of logo in minutes not hours.</p>
      <Image src={bolgImag_1} alt="bolgimg" className="lg:h-14 lg:w-48 md:h-14 md:w-48 sm:h-14 sm:w-48  h-10 w-36"/>
      </div>

       <div className="lg:flex lg:flex-col lg:items-center lg:space-y-7 md:flex md:flex-col md:items-center md:space-y-7 sm:flex sm:flex-col sm:items-center sm:space-y-4 flex flex-col items-center space-y-3">
       <Image src={blogimg_5} alt="bolgimg" id="blogImages" className="lg:rounded-3xl  lg:mt-3 md:rounded-3xl  md:mt-3 sm:rounded-3xl  sm:mt-3 rounded-3xl  mt-3 lg:h-[400px] lg:w-[680px] md:h-[400px] md:w-[680px] sm:h-[350px] sm:w-[580px] h-[250px] w-[350px]"/>
        <h1 className="lg:text-5xl lg:font-light lg:w-[46rem] lg:ml-5 md:text-5xl md:font-light md:w-[46rem] md:ml-5 sm:text-4xl sm:font-light sm:w-[40rem] sm:ml-5 text-3xl font-light w-[25rem] pl-8 overflow-hidden opacity-85">Best design system examples in 2024</h1>
        <p className="lg:text-xl lg:font-extralight opacity-75 lg:w-[42rem]  md:text-xl md:font-extralight md:w-[42rem] sm:text-xl sm:font-extralight sm:w-[38rem] text-lg font-extralight w-[20rem]">
        Key things I’ve learned from studying top design system examples to help you build or improve your own design system.</p>
       <Image src={bolgImag_1} alt="bolgimg" className="lg:h-14 lg:w-48 md:h-14 md:w-48 sm:h-14 sm:w-48  h-10 w-36"/>
       </div> 
       
       <div className="lg:flex lg:flex-col lg:items-center lg:space-y-7 md:flex md:flex-col md:items-center md:space-y-7 sm:flex sm:flex-col sm:items-center sm:space-y-4 flex flex-col items-center space-y-3">
       <Image src={blogimg_6} alt="bolgimg" id="blogImages" className="lg:rounded-3xl  lg:mt-3 md:rounded-3xl  md:mt-3 sm:rounded-3xl  sm:mt-3 rounded-3xl  mt-3 lg:h-[400px] lg:w-[680px] md:h-[400px] md:w-[680px] sm:h-[350px] sm:w-[580px] h-[250px] w-[350px]"/>
         <h1 className="lg:text-5xl lg:font-light lg:w-[46rem] lg:ml-5 md:text-5xl md:font-light md:w-[46rem] md:ml-5 sm:text-4xl sm:font-light sm:w-[40rem] sm:ml-5 text-3xl font-light w-[25rem] pl-8 overflow-hidden opacity-85">16 little UI design tips that make a big impact</h1>
         <p className="lg:text-xl lg:font-extralight opacity-75 lg:w-[42rem]  md:text-xl md:font-extralight md:w-[42rem] sm:text-xl sm:font-extralight sm:w-[38rem] text-lg font-extralight w-[20rem]">  A step by step UI design case study to quickly fix an example user interface using logic-driven UI design tips.</p>
       <Image src={bolgImag_1} alt="bolgimg" className="lg:h-14 lg:w-48 md:h-14 md:w-48 sm:h-14 sm:w-48  h-10 w-36"/>
       </div> 


       <div className="lg:flex lg:flex-col lg:items-center lg:space-y-7 md:flex md:flex-col md:items-center md:space-y-7 sm:flex sm:flex-col sm:items-center sm:space-y-4 flex flex-col items-center space-y-3">
       <Image src={blogimg_7} alt="bolgimg" id="blogImages" className="lg:rounded-3xl  lg:mt-3 md:rounded-3xl  md:mt-3 sm:rounded-3xl  sm:mt-3 rounded-3xl  mt-3 lg:h-[400px] lg:w-[680px] md:h-[400px] md:w-[680px] sm:h-[350px] sm:w-[580px] h-[250px] w-[350px]"/>
         <h1 className="lg:text-5xl lg:font-light lg:w-[46rem] lg:ml-5 md:text-5xl md:font-light md:w-[46rem] md:ml-5 sm:text-4xl sm:font-light sm:w-[40rem] sm:ml-5 text-3xl font-light w-[25rem] pl-8 overflow-hidden opacity-85">Best free typefaces for UI design in 2024 </h1>
         <p className="lg:text-xl lg:font-extralight opacity-75 lg:w-[42rem]  md:text-xl md:font-extralight md:w-[42rem] sm:text-xl sm:font-extralight sm:w-[38rem] text-lg font-extralight w-[20rem]">My go-to sans serif free typefaces for optimal legibility and simplicity on your interface designs.</p>
       <Image src={bolgImag_1} alt="bolgimg" className="lg:h-14 lg:w-48 md:h-14 md:w-48 sm:h-14 sm:w-48  h-10 w-36"/>
       </div> 


       <div className="lg:flex lg:flex-col lg:items-center lg:space-y-7 md:flex md:flex-col md:items-center md:space-y-7 sm:flex sm:flex-col sm:items-center sm:space-y-4 flex flex-col items-center space-y-3">
       <Image src={blogimg_8} alt="bolgimg" id="blogImages" className="lg:rounded-3xl  lg:mt-3 md:rounded-3xl  md:mt-3 sm:rounded-3xl  sm:mt-3 rounded-3xl  mt-3 lg:h-[400px] lg:w-[680px] md:h-[400px] md:w-[680px] sm:h-[350px] sm:w-[580px] h-[250px] w-[350px]"/>
        <h1 className="lg:text-5xl lg:font-light lg:w-[46rem] lg:ml-5 md:text-5xl md:font-light md:w-[46rem] md:ml-5 sm:text-4xl sm:font-light sm:w-[40rem] sm:ml-5 text-3xl font-light w-[25rem] pl-8 overflow-hidden opacity-85">10 best Figma plugins for web design in 2024</h1>
        <p className="lg:text-xl lg:font-extralight opacity-75 lg:w-[42rem]  md:text-xl md:font-extralight md:w-[42rem] sm:text-xl sm:font-extralight sm:w-[38rem] text-lg font-extralight w-[20rem]">
        Top Figma plugins to help you design better websites, faster.</p>
       <Image src={bolgImag_1} alt="bolgimg" className="lg:h-14 lg:w-48 md:h-14 md:w-48 sm:h-14 sm:w-48  h-10 w-36"/>
       </div> 


       <div className="lg:flex lg:flex-col lg:items-center lg:space-y-7 md:flex md:flex-col md:items-center md:space-y-7 sm:flex sm:flex-col sm:items-center sm:space-y-4 flex flex-col items-center space-y-3">
       <Image src={blogimg_9} alt="bolgimg" id="blogImages" className="lg:rounded-3xl  lg:mt-3 md:rounded-3xl  md:mt-3 sm:rounded-3xl  sm:mt-3 rounded-3xl  mt-3 lg:h-[400px] lg:w-[680px] md:h-[400px] md:w-[680px] sm:h-[350px] sm:w-[580px] h-[250px] w-[350px]"/>
        <h1 className="lg:text-5xl lg:font-light lg:w-[46rem] lg:ml-5 md:text-5xl md:font-light md:w-[46rem] md:ml-5 sm:text-4xl sm:font-light sm:w-[40rem] sm:ml-5 text-3xl font-light w-[25rem] pl-8 overflow-hidden opacity-85">How to build a design system</h1>
         <p className="lg:text-xl lg:font-extralight opacity-75 lg:w-[42rem]  md:text-xl md:font-extralight md:w-[42rem] sm:text-xl sm:font-extralight sm:w-[38rem] text-lg font-extralight w-[20rem]">
         A step by step guide to build a design system with predefined styles, a component library, and usage guidelines.</p>
       <Image src={bolgImag_1} alt="bolgimg" className="lg:h-14 lg:w-48 md:h-14 md:w-48 sm:h-14 sm:w-48  h-10 w-36"/>
       </div> 


       <div className="lg:flex lg:flex-col lg:items-center lg:space-y-7 md:flex md:flex-col md:items-center md:space-y-7 sm:flex sm:flex-col sm:items-center sm:space-y-4 flex flex-col items-center space-y-3">
       <Image src={blogimg_10} alt="bolgimg" id="blogImages" className="lg:rounded-3xl  lg:mt-3 md:rounded-3xl  md:mt-3 sm:rounded-3xl  sm:mt-3 rounded-3xl  mt-3 lg:h-[400px] lg:w-[680px] md:h-[400px] md:w-[680px] sm:h-[350px] sm:w-[580px] h-[250px] w-[350px]"/>
         <h1 className="lg:text-5xl lg:font-light lg:w-[46rem] lg:ml-5 md:text-5xl md:font-light md:w-[46rem] md:ml-5 sm:text-4xl sm:font-light sm:w-[40rem] sm:ml-5 text-3xl font-light w-[25rem] pl-8 overflow-hidden opacity-85">UI design books you should read in 2024</h1>
         <p className="lg:text-xl lg:font-extralight opacity-75 lg:w-[42rem]  md:text-xl md:font-extralight md:w-[42rem] sm:text-xl sm:font-extralight sm:w-[38rem] text-lg font-extralight w-[20rem]">
         The most practical and useful UI design books to help you learn the how and why of user interface design.</p>
       <Image src={bolgImag_1} alt="bolgimg" className="lg:h-14 lg:w-48 md:h-14 md:w-48 sm:h-14 sm:w-48  h-10 w-36"/>
       </div> 


       <div className="lg:flex lg:flex-col lg:items-center lg:space-y-7 md:flex md:flex-col md:items-center md:space-y-7 sm:flex sm:flex-col sm:items-center sm:space-y-4 flex flex-col items-center space-y-3 pb-9">
       <Image src={blogimg_11} alt="bolgimg" id="blogImages" className="lg:rounded-3xl  lg:mt-3 md:rounded-3xl  md:mt-3 sm:rounded-3xl  sm:mt-3 rounded-3xl  mt-3 lg:h-[400px] lg:w-[680px] md:h-[400px] md:w-[680px] sm:h-[350px] sm:w-[580px] h-[250px] w-[350px]"/>
        <h1 className="lg:text-5xl lg:font-light lg:w-[46rem] lg:ml-5 md:text-5xl md:font-light md:w-[46rem] md:ml-5 sm:text-4xl sm:font-light sm:w-[40rem] sm:ml-5 text-3xl font-light w-[25rem] pl-8 overflow-hidden opacity-85">UX design books you should read in 2024</h1>
        <p className="lg:text-xl lg:font-extralight opacity-75 lg:w-[42rem]  md:text-xl md:font-extralight md:w-[42rem] sm:text-xl sm:font-extralight sm:w-[38rem] text-lg font-extralight w-[20rem]">The most useful and practical UX design books to help UX designers create seamless user experiences.</p>
       <Image src={bolgImag_1} alt="bolgimg" className="lg:h-14 lg:w-48 md:h-14 md:w-48 sm:h-14 sm:w-48  h-10 w-36"/>
       </div>  


    </div>
    <Footer/>
    </div>
  )
}

export default Blog;