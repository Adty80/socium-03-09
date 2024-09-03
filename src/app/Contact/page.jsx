"use client"
import React from 'react'
import Footer from '../Footer'


const page = () => {
  return (
    <>
    <div className='bg-blue-950 '>
    <div className='grid lg:grid-cols-2 sm:grid-cols-1 pt-20 mx-0 sm:mx-36 mt-24'>
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

           <button  className='bg-[#ff932e] w-[20%] p-2 rounded-full text-white font-bold' type=''>Submit</button>
           </div>

          </form>
        </div>
      </div>
      <div>
<img src="./i-2.webp" alt="" />
      </div>

    </div>
<Footer/>
</div>
</>
  )
}

export default page