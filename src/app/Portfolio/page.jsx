"use client"
import React from 'react'
import Image from 'next/image'
import Portfolio1 from '/public/portfolio1.png'
import Hangry from '/public/Hangry.jpg'
import ShareCare from '/public/Share & Care.jpg'
import Integration from '/public/Integration-1-1.jpg'
import B2Gig from '/public/New-Project-2.jpg'
import Footer from '../Footer'
import Link from 'next/link'

const Page = () => {
  return (
    <>
    <div className='mt-24'>
    <div  className='bg-[#00145b] grid lg:grid-cols-2 sm:grid-cols-1'>
      <div className='sm:mx-20 text-center mx-0 sm:mx-36  order-2 md:order-1'>

      <p className='pt-40 sm:text-5xl text-2xl font-bold text-white'>We Are A Leading
      <span className='block text-[#6ec1e4] mt-3'>App Development </span> <span className='block mt-3'>Company</span></p>

      <div className='mt-5 mb-56'>
        <button className='btn  bg-[#dd8339]  text-white p-2  rounded-3xl'> <span className='px-4'>Request A Free Consultation</span></button>
      </div>
      </div>
      <div className='md:order-2 order-1'>
        <Image className='md:mx-auto md:block sm:mx-auto sm:block mx-auto d-block lg:mt-20  '   width={400} src={Portfolio1}/>
      </div>
    </div>
    <div className='mx-0 sm:mx-36'>
      <h1 className='text-center text-4xl mt-10 font-bold'>Our Portfolio</h1>
    </div>
    <div className=' grid lg:grid-cols-2 sm:grid-cols-1 mx-0 sm:mx-36'>
    <div className='md:px-3 mt-10 '>
      <h1 className=' sm:text-3xl text-2xl  font-bold text-center md:text-start'>Hangry with Friends</h1>
      <p className='mt-5 px-2'>Hangry With Friends is the result of the frustration that many people face when trying to decide where to dine with their kids, family, friends, coworkers, and others. The founders recognized this common challenge and set out to create a solution to make the dining decision process more enjoyable.</p>
      <div className='mt-5 px-2'>
        <p className='text-start '><Link href="\Hangry">Read More</Link></p>
      </div>
    </div>

    <div className=''>
      <div className=''>

    <Image width={300} className='md:mx-auto md:block sm:mx-auto sm:block mx-auto d-block rounded-2xl mt-10' src={Hangry}/>
      </div>
    </div>
    </div>
   
    <div className='grid lg:grid-cols-2 sm:grid-cols-1 mt-20 mx-0 sm:mx-36'>
      <div className=''>
        <Image className='md:mx-auto md:block sm:mx-auto sm:block mx-auto d-block' width={300} src={ShareCare}/>
      </div>
      <div>
        <h1 className='text-3xl font-bold pt-5 text-center md:text-start'>Share & Care</h1>
        <p className='mt-5'>Our mission is to empower individuals to freely share their thoughts, feelings, and experiences without fear of judgment. We strive to create a supportive and inclusive community where people care for each other, every voice is heard, and every person is valued. By fostering a culture of care, openness, and empathy, we aim to improve well-being for all.</p>
        <div className='mt-5'>
        <p><Link href="\Share&care">Read More</Link></p>
      </div>
      </div>
    </div>

    <div className=' grid lg:grid-cols-2 sm:grid-cols-1 mx-0 sm:mx-36'>
    <div className=' mt-10'>
      <h1 className=' text-3xl font-bold text-center md:text-start'>Pointse
      </h1>
      <p className='mt-5'>Pointse, first platform where local vendors can unlock the power of seamless integration. We understand the challenges you face as a local business owner, and that’s why we have brought together three essential components: a loyalty program, human resource management, and business analytics, all in one platform that offers unmatched convenience and efficiency.</p>
      <div className='mt-5'>
        <p><Link href="\Pointse">Read More</Link></p>
      </div>
    </div>

    <div className=''>
    <Image width={300} className=' md:mx-auto md:block sm:mx-auto sm:block mx-auto d-block rounded-2xl mt-10' src={Integration}/>
    </div>
    </div>


    <div className='grid lg:grid-cols-2 sm:grid-cols-1 mt-20 mx-0 sm:mx-36'>
      <div className='mx-20'>
        <Image className='md:mx-auto md:block sm:mx-auto sm:block mx-auto d-block' width={300} src={B2Gig}/>
      </div>
      <div className='pt-20 md:pt-0'>
        <h1 className='text-3xl font-bold text-center md:text-start'>B2Gig</h1>
        <p className='mt-5'>Lorem ipsum dolor sit amet consectetur. Nunc auctor lectus nibh sit ut turpis leo rhoncus amet. Id egestas in purus volutpat at gravida ut. Cursus scelerisque quam imperdiet morbi. Pellentesque vitae pharetra tempus libero dignissim. Bibendum consectetur suspendisse nulla id commodo tincidunt aliquet odio. Ridiculus orci duis laoreet duis arcu.</p>
        <div className='mt-5'>
        <p><Link href="\Big2">Read More</Link></p>
      </div>
      </div>
    </div>

    <div className='bg-blue-950'>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 mt-20 pt-20 mx-0 sm:mx-36'>
          <div>
            <h1 className='text-center text-2xl text-white font-bold'>Get In Touch</h1>

            <div className='pt-6' >
              <form className=''>
               <div className='text-center'>

                <input className='w-[80%] mx-2 p-2' placeholder='Name' type='name'/>
                <input className='w-[80%] mx-2 mt-4 p-2' placeholder='Email' type='name'/>
                <input className='w-[80%] mx-2 mt-4 p-2' placeholder='Phone' type='name'/>
               <textarea className=' w-[80%] mt-4 h-[250px]' placeholder='Lets us know your project requirements'>
               </textarea>

               </div>
               <div className='text-center mt-3 pb-7'>

               <button  className='bg-[#ff932e] w-[20%] p-2  text-white font-bold' type=''>Submit</button>
               </div>

              </form>
            </div>
          </div>
          <div>
<img src="cont.webp" alt="" />
          </div>
        </div>
<Footer/>
    </div>
    </div>
    </>
  )
}

export default Page