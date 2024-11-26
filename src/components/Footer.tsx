export default function Footer (){
    return(
        <div id="Footers" className="md:flex md:justify-around md:items-center bg-[#f5f5f5] h-20 text-slate-800">
            <div id="footers_title" className="md:flex md:justify-center lg:items-center sm:flex sm:justify-center sm:items-center 
                flex justify-center items-center "><a href="">@2024 Muhamad Ahmed</a></div>
        <div  className="md:flex sm:hidden  hidden md:justify-center md:items-center gap-11">
           
           <a href="/about">about</a>
            <a href="/book">book</a>
            <a href="/portfolio">portfolio</a>
        <a href="/blog">blog</a>
            <a href="/contact">contact</a>
            
        </div>
         

        </div>
    )
}