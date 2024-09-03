import React from 'react'
import Image from 'next/image'
import Share from '/public/share.jpg'
import pb from '/public/problemstatement.jpg'
import solution from '/public/solutions.jpg'
import Onboarding2 from '/public/Onboarding-screen-2.jpg'
import Onboarding3 from '/public/Onboarding-screen-3.jpg'
import Onboarding4 from '/public/Onboarding-screen-4.jpg'
import Footer from '../Footer'

const page = () => {
  return (
    <>
   <div className='bg-[#172e82] grid lg:grid-cols-12 h-[95vh] pb-12'>

<div className='flex flex-col justify-center items-start pt-32 mx-12 col-span-7 lg:col-span-6 h-full'>
  <div>
    <h1 className='text-3xl mx-16 text-white font-bold'>Share & Care</h1>
    <p className='mt-10 text-white mx-12'>Our mission is to empower individuals to freely share their thoughts, feelings, and experiences without fear of judgment. We strive to create a supportive and inclusive community where people care for each other, every voice is heard, and every person is valued. By fostering a culture of care, openness, and empathy, we aim to improve well-being for all.</p>
  </div>
</div>

<div className='mt-20 col-span-12 md:col-span-12 lg:col-span-6 sm:col-span-12 flex justify-center items-center'>
  <div className='mx-auto'>
    <Image className='' height={200} width={250} src={Share} />
  </div>
</div>

</div>


<div className='mt-10 grid lg:grid-cols-2 sm:grid-cols-1  '>
    <div>
    <h1 className='text-3xl mx-16 text-[#ff932e] font-bold mx-16'>Problem Statement

    </h1>
    <p className=' text-2xl mx-12 mt-8'>In today’s world, many individuals struggle with personal, emotional, and mental health challenges. However, the fear of judgment and social repercussions often hinders them from openly discussing these issues with friends and family, leading to isolation and unaddressed struggles. In addition, most of them cannot afford professional help. The lack of a safe and non-judgmental platform to share thoughts and seek advice aggravates these challenges, leaving individuals without the support and guidance they desperately need.</p>
   
    
    </div>
    <div>
        <Image className='md:mx-auto md:block sm:mx-auto sm:block mx-auto d-block mt-20 pb-36' width={600} src={pb} />
    </div>
   </div>

   <div className='mt-10 grid lg:grid-cols-2 sm:grid-cols-1'>
    <div>
    <Image className='md:mx-auto md:block sm:mx-auto sm:block mx-auto d-block mt-20 pb-36' width={600} src={solution} />
    </div>
    <div>
        <h1 className='text-3xl mx-16 text-[#ff932e] font-bold mx-16'>Solution</h1>

        <p className=' text-2xl mx-12 mt-8'>Share & Care represents an innovative initiative, aiming to cultivate a diverse community that welcomes both users and experts.</p>
<p className=' text-2xl mx-12 mt-8'>Within this platform, individuals are encouraged to openly share their personal challenges and emotions, all without the concern of judgment.</p>
<p className=' text-2xl mx-12 mt-8'>The app goes a step further by offering users the flexibility to seek guidance either anonymously or by utilizing a chosen username.</p>
<p className=' text-2xl mx-12 mt-8'>Share & Care stands out as an invaluable resource, particularly tailored to help those who are hesitant to share their personal issues, emotions, and thoughts within their immediate social circles.</p>
    </div>
   </div>

   <div className='text-4xl mt-8 text-center text-[#ff932e] font-extrabold'>Why Share & Care?
   </div>
   
   <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-5 sm:gap-0'>
    <div >
    <Image width={300} className='md:mx-auto md:block sm:mx-auto sm:block mx-auto d-block rounded-2xl mt-10' src={Onboarding2}/>
    </div>
    <div>
    <Image width={300} className='md:mx-auto md:block sm:mx-auto sm:block mx-auto d-block rounded-2xl mt-10' src={Onboarding3}/>
    </div>
    <div>
    <Image width={300} className='md:mx-auto md:block sm:mx-auto sm:block mx-auto d-block rounded-2xl mt-10' src={Onboarding4}/>
    </div>

   </div>
    

    
    <Footer/>
   


    </>
  )
}

export default page