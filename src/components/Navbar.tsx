import img from "../../public/logo.png"
import Image from "next/image"
import { Instagram,  } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import 'animate.css';
import Sheets from "./Sheet";
export default function Navbar (){
    return(
        <nav id="Navbar_body" className="animate__animated animate__fadeInDownBig">
            <div id="Navbar_logo">
            <Image src={img} alt="img" height={70} width={70}/>
            <span>AHM<span>ED</span></span>
            </div>
            <div id="Navbar_anchors">
               <a href="/about">about</a>
                <a href="/portfolio" className="hover:text-stone-600">book</a>
                <a href="" className="hover:text-stone-600">portfolio</a>
                <a href="" className="hover:text-stone-600">blog</a>
                <a href="" className="hover:text-stone-600">contact</a>
                </div>
            <div id="Navbar_icons">
          <a href="https://www.instagram.com/invites/contact/?igsh=y5tukgt88li&utm_content=kcipnpj">  <Instagram size={32} color="white" strokeWidth={1.5} /></a>

         <a href="">  <Twitter size={32} color="white" strokeWidth={1.5} href=""/></a>

          <a  href="https://www.facebook.com/raheel.rajput.3367?mibextid=ZbWKwL">  <Facebook size={32} color="white" strokeWidth={1.5}/></a>

          <a href="https://www.linkedin.com/in/itx-ahmed-arain-450a702b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">  <Linkedin size={32} color="white" strokeWidth={1.5} /> </a>
            </div>
            <div id="Ham_burger"> <Sheets /></div>
           
        </nav>
    )
}