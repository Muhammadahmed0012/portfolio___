import Image from "next/image"
import aboutimg from "../../public/about.png"
export default function About1 (){
    return(
        <div>
     <Image src={aboutimg} alt="aboutimg"/>
     hello
        </div>
    )
}