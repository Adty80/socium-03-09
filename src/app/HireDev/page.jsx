"use client"
import React from 'react'
import Image from 'next/image'
import Hire from '/public/hire.png'

const page = () => {
  return (
    <>
    <div className="bg-[#00145b] h-fit"> 
                <div className="grid grid-cols-1  md:grid-cols-2 place-items-center place-content-center px-4 md:px-8 lg:px-32 py-10">
                    <div className="text-3xl md:text-5xl lg:text-6xl text-white font-bold">Your Vision, Our Expertise:<span className='font-bold text-blue-400'>Hire the Best Web Developers with Socium</span>
                        <p className='text-sm text-blue-200 mt-5'> Bring your ideas to life without breaking a sweat! Socium’s expert web developers are on time and light on the pocket, making the hiring process hassle-free and effortless.</p>
                        <button className='mt-10 bg-yellow-600 hover:bg-orange-600 font-semibold text-lg px-6 py-2 rounded-full'>Hire A Developer</button>
                    </div>
                    <div className="mt-8 md:mt-0"><Image src={Hire} height={600} width={600} /></div>
                </div>
            </div>

            {/* -----------Accordian------------ */}


            {/* -----------Accordian end------------ */}

            {/* ----------By Skills---------- */}
            <div className="h-fit py-10 bg-gray-100">
            <h1 className='text-4xl font-bold text-center'>Web Development Services We Offer</h1>
            <div className=" flex mt-10 flex-wrap justify-center">
    <div className=" h-44 p-2 mx-5 mb-5 rounded-xl  w-36 border text-center bg-white shadow-lg shadow-gray-400 hover:bg-blue-200 sm:w-44 md:w-52 lg:w-60">
     
        <img src="icons8-apple-50.png" className='mx-auto block ' style={{height:"100px",width:"100px"}} alt="" />
        <h1 className='text-2xl mt-6 md:text-3xl lg:text-3xl'>IOS</h1>
    </div>

    <div className="h-44  mx-5 mb-5 rounded-xl w-36 border text-center bg-white shadow-lg shadow-gray-400 hover:bg-blue-200 sm:w-44 p-2 md:w-52 lg:w-60">
 
    <img src="icons8-blockchain-96.png" className='mx-auto block' style={{height:"100px",width:"100px"}} alt="" />
        <h1 className='text-2xl mt-6 md:text-3xl lg:text-3xl'>Blockchain</h1>
    </div>

    <div className="h-44 mx-5 mb-5 rounded-xl w-36 border text-center bg-white shadow-lg shadow-gray-400 hover:bg-blue-200 p-2 sm:w-44 md:w-52 lg:w-60">
 
    <img src="icons8-react-80.png" className='mx-auto block' style={{height:"100px",width:"100px"}} alt="" />
        <h1 className='text-2xl mt-6 md:text-3xl lg:text-3xl'>React.js</h1>
    </div>

    <div className="h-44 mx-5 mb-5 rounded-xl w-36 border text-center bg-white shadow-lg shadow-gray-400 hover:bg-blue-200  p-2 sm:w-44 md:w-52 lg:w-60">
 
    <img src="icons8-java-94.png" className='mx-auto block' style={{height:"100px",width:"100px"}} alt="" />
        <h1 className='text-2xl mt-6 md:text-3xl lg:text-3xl'>Java</h1>
    </div>

    <div className="h-44 mx-5 mb-5 rounded-xl w-36 border text-center bg-white shadow-lg shadow-gray-400 hover:bg-blue-200  p-2 sm:w-44 md:w-52 lg:w-60">
 
    <img src="icons8-react.gif" className='mx-auto block' style={{height:"100px",width:"100px"}} alt="" />
        <h1 className='text-2xl mt-6 md:text-3xl lg:text-3xl'>React Native</h1>
    </div>

    <div className="h-44 mx-5 mb-5 rounded-xl w-36 border text-center bg-white shadow-lg shadow-gray-400 hover:bg-blue-200  p-2 sm:w-44 md:w-52 lg:w-60">
 
    <img src="icons8-Nodejs-96.png" className='mx-auto block' style={{height:"100px",width:"100px"}} alt="" />
        <h1 className='text-2xl mt-6 md:text-3xl lg:text-3xl'>Node.js</h1>
    </div>

    <div className="h-44 mx-5 mb-5 rounded-xl w-36 border text-center bg-white shadow-lg shadow-gray-400 hover:bg-blue-200  p-2 sm:w-44 md:w-52 lg:w-60">
 
    <img src="icons8-android-144.png" className='mx-auto block' style={{height:"100px",width:"100px"}} alt="" />
        <h1 className='text-2xl mt-6 md:text-3xl lg:text-3xl'>Android</h1>
    </div>

    <div className="h-44 mx-5 mb-5 rounded-xl w-36 border text-center bg-white shadow-lg shadow-gray-400 hover:bg-blue-200  p-2  sm:w-44 md:w-52 lg:w-60">
 
    <img src="icons8-Angular-144.png" className='mx-auto block' style={{height:"100px",width:"100px"}} alt="" />
        <h1 className='text-2xl mt-6 md:text-3xl lg:text-3xl'>Angular</h1>
    </div>

    <div className="h-44 mx-5 mb-5 rounded-xl w-36 border text-center bg-white shadow-lg shadow-gray-400 hover:bg-blue-200  p-2 sm:w-44 md:w-52 lg:w-60">
 
    <img src="icons8-php-logo-80.png" className='mx-auto block' style={{height:"100px",width:"100px"}} alt="" />
        <h1 className='text-2xl mt-6 md:text-3xl lg:text-3xl'>PHP</h1>
    </div>

    <div className="h-44 mx-5 mb-5 rounded-xl w-36 border text-center bg-white shadow-lg shadow-gray-400 hover:bg-blue-200  p-2 sm:w-44 md:w-52 lg:w-60">
 
    <img src="icons8-python-144.png" className='mx-auto block' style={{height:"100px",width:"100px"}} alt="" />
        <h1 className='text-2xl mt-6 md:text-3xl lg:text-3xl'>Python</h1>
    </div>

    <div className="h-44 mx-5 mb-5 rounded-xl w-36 border text-center bg-white shadow-lg shadow-gray-400 hover:bg-blue-200  p-2 sm:w-44 md:w-52 lg:w-60">
 
    <img src="icons8-spring-boot-144.png" className='mx-auto block' style={{height:"100px",width:"100px"}} alt="" />
        <h1 className='text-2xl mt-6 md:text-3xl lg:text-3xl'>SpringBoot</h1>
    </div>

    <div className="h-44 mx-5 mb-5 rounded-xl w-36 border text-center bg-white shadow-lg shadow-gray-400 hover:bg-blue-200  p-2 sm:w-44 md:w-52 lg:w-60">
 
    <img src="icons8-aws-144.png" className='mx-auto block' style={{height:"100px",width:"100px"}} alt="" />
        <h1 className='text-2xl mt-6 md:text-3xl lg:text-3xl'>AWS</h1>
    </div>

    <div className="h-44 mx-5 mb-5 rounded-xl w-36 border text-center bg-white shadow-lg shadow-gray-400 hover:bg-blue-200  p-2 sm:w-44 md:w-52 lg:w-60">
 
    <img src="icons8-wordpress-144.png" className='mx-auto block' style={{height:"100px",width:"100px"}} alt="" />
        <h1 className='text-2xl mt-6 md:text-3xl lg:text-3xl'>WordPress</h1>
    </div>

    <div className="h-44 mx-5 mb-5 rounded-xl w-36 border text-center bg-white shadow-lg shadow-gray-400 hover:bg-blue-200  p-2 sm:w-44 md:w-52 lg:w-60">
 
    <img src="icons8-sql-96.png" className='mx-auto block' style={{height:"100px",width:"100px"}} alt="" />
        <h1 className='text-2xl mt-6 md:text-3xl lg:text-3xl'>SQL</h1>
    </div>

    <div className="h-44 mx-5 mb-5 rounded-xl w-36 border text-center bg-white shadow-lg shadow-gray-400 hover:bg-blue-200  p-2 sm:w-44 md:w-52 lg:w-60">
 
    <img src="icons8-net-64.png" className='mx-auto block' style={{height:"100px",width:"100px"}} alt="" />
        <h1 className='text-2xl mt-6 md:text-3xl lg:text-3xl'>.NET</h1>
    </div>

    <div className="h-44 mx-5 mb-5 rounded-xl w-36 border text-center bg-white shadow-lg shadow-gray-400 hover:bg-blue-200 sm:w-44 md:w-52 lg:w-60">
 
    <img src="icons8-salesforce-144.png" className='mx-auto block' style={{height:"100px",width:"100px"}} alt="" />
        <h1 className='text-2xl mt-6 md:text-3xl lg:text-3xl'>Salesforce</h1>
    </div>

    <div className="h-44 mx-5 mb-5 rounded-xl w-36 border text-center bg-white shadow-lg shadow-gray-400 hover:bg-blue-200  p-2 sm:w-44 md:w-52 lg:w-60">
 
    <img src="icons8-laravel-96.png" className='mx-auto block' style={{height:"100px",width:"100px"}} alt="" />
        <h1 className='text-2xl mt-6 md:text-3xl lg:text-3xl'>Laravel</h1>
    </div>

    <div className="h-44 mx-5 mb-5 rounded-xl w-36 border text-center bg-white shadow-lg shadow-gray-400 hover:bg-blue-200  p-2 sm:w-44 md:w-52 lg:w-60">
 
    <img src="icons8-azure-144.png" className='mx-auto block' style={{height:"100px",width:"100px"}} alt="" />
        <h1 className='text-2xl mt-6 md:text-3xl lg:text-3xl'>Azure</h1>
    </div>
</div>
</div>
            {/* ----------By Skills end---------- */}
    </>
  )
}

export default page;