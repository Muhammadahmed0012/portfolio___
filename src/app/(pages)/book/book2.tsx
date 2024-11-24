import Image from "next/image"
import book1 from "../../../../public/bookimg1.png"
import book2 from "../../../../public/bookimg2.png"
export default function Book2 (){
    return(
        <div className="lg:mt-24 md:mt-20 sm:mt-20 mt-12">
            <div className="lg:flex lg:justify-center lg:items-center md:flex md:justify-center md:items-center sm:flex sm:justify-center sm:items-center flex justify-center items-center">
            <div className="h-[1px] lg:w-80 md:w-60 sm:w-44 w-5 bg-slate-300"></div>
            <span className="lg:font-semibold lg:text-lg lg:p-10 md:font-semibold md:text-lg md:p-8 sm:font-semibold sm:text-lg sm:p-8 font-semibold text-sm p-3 text-gray-600">Some pages from the book</span>
            <div className="h-[1px] lg:w-80 md:w-60 sm:w-44 w-5 bg-slate-300"></div>
            </div>
            <div className="lg:flex lg:flex-row lg:justify-center md:flex md:justify-center  md:items-center sm:flex sm:flex-col sm:items-center flex flex-col items-center">
                <div>
             <Image src={book1} alt="book1" className="lg:h-[470px] lg:w-[600px] md:h-[480px] md:w-[700px] sm:h-[350px] sm:w-[500px] h-[300px] 
             w-[400px]"  />
                </div>
                <div>
                <Image src={book2} alt="book1" className="lg:h-[470px] lg:w-[600px] md:h-[480px] md:w-[700px] sm:h-[350px] sm:w-[500px] 
                h-[300px] w-[400px]"/> 
                </div>
            </div>
        </div>
    )
}