"use client"
import { log } from 'node:console';
import React from 'react'

export default function Contact2() {

  const onSubmit = async (event:any) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "8725c7f6-b202-49ea-ad40-e6300fd56173");
console.log(formData)
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <div id='contactsection' className='lg:flex lg:flex-col lg:items-center lg:h-[50rem] lg:w-screen  lg:space-x-14 lg:pt-32 md:flex md:flex-col  md:items-center md:h-[45rem] md:w-screen md:pt-28 md:space-x-14 bg-[url(/bgimg3.jpg)] lg:bg-no-repeat  lg:bg-cover md:bg-no-repeat  md:bg-cover sm:flex sm:flex-col  sm:items-center sm:h-[45rem] sm:w-screen sm:pt-28 sm:space-x-14 sm:bg-no-repeat  sm:bg-cover flex flex-col  items-center h-[45rem] w-screen pt-28 space-x-14 bg-no-repeat  bg-cover'>
      <form onSubmit={onSubmit} className='lg:flex lg:flex-col lg:items-center lg:pb-20 lg:gap-y-4 md:flex md:flex-col md:items-center md:pb-14 md:gap-y-4 sm:flex sm:flex-col sm:items-center sm:pb-20 sm:gap-y-4 flex flex-col items-center pb-20 gap-y-4 overflow-hidden'>
       <h2 className='lg:text-4xl lg:font-extralight  overflow-hidden lg:pr-44 lg:pb-5 md:text-4xl md:font-extralight md:pr-44 md:pb-5 sm:text-4xl sm:font-extralight sm:pr-44 sm:pb-5 text-4xl font-extralight  pb-5'>Send me an email</h2>
       
       <div >
        <p className='lg:text-lg lg:font-extralight md:text-lg md:font-extralight sm:text-lg sm:font-extralight text-lg font-extralight'>Name</p>
       
        <input type="text" name='name' id='contactsec' className='lg:h-[48px] lg:w-[500px] md:h-[48px] md:w-[500px] sm:h-[48px] sm:w-[500px] h-[48px] w-[300px] overflow-hidden'/>
        
       </div>
       
        
       <div>
        <p className='lg:text-lg lg:font-extralight md:text-lg md:font-extralight sm:text-lg sm:font-extralight text-lg font-extralight'>Email</p>
        <input type="email" name='name' id='contactsec' className='lg:h-[48px] lg:w-[500px] md:h-[48px] md:w-[500px] sm:h-[48px] sm:w-[500px]
        h-[48px] w-[300px] overflow-hidden'/>
       </div>
         
       <div>
        <p className='lg:text-lg lg:font-extralight md:text-lg md:font-extralight sm:text-lg sm:font-extralight text-lg font-extralight'>Message</p>
        <textarea name="message"   id='contactsec' className='lg:h-[152px] lg:w-[500px] md:h-[152px] md:w-[500px] sm:h-[152px] sm:w-[500px] h-[152px] w-[300px] md:overflow-hidden'></textarea>
        
       </div>
       
       <button className='bg-black text-white lg:h-12 lg:w-40 lg:font-semibold  md:h-12 md:w-40 md:font-semibold sm:h-12 sm:w-40 sm:font-semibold rounded-xl h-12 w-40 font-semibold'>Send email</button>
       </form>
    </div>
  )
}
