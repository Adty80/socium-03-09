import React from 'react'
import Image from 'next/image'
import Hangry1 from '/public/hangry1.jpg'
import Onboarding from '/public/Onboarding.jpg'
import Hangry from '/public/Hangry.jpg'
import Onboarding2 from '/public/Onboarding-screen-2.jpg'
import Onboarding3 from '/public/Onboarding-screen-3.jpg'
import Onboarding4 from '/public/Onboarding-screen-4.jpg'
import Footer from '../Footer'
 

const page = () => {
  return (
   <>
   <div className='bg-[#172e82] grid lg:grid-cols-2 sm:grid-cols-1   '>

     <div className='pt-32 mx-12 '>
        <div>

        <h1 className='text-3xl mx-16 text-white font-bold '>Hangry with Friends</h1>

        <p className='mt-10 text-white mx-12'>Hangry With Friends is the result of the frustration that many people face when trying to decide where to dine with their kids, family, friends, coworkers, and others. The founders recognized this common challenge and set out to create a solution to make the dining decision process more enjoyable.</p>
        </div>
     </div>
     <div className='mt-20'>
     <Image className='  md:mx-auto md:block sm:mx-auto sm:block mx-auto d-block ' width={500} src={Hangry1} />
     </div>

   </div>
   <div className='mt-10 grid lg:grid-cols-2 sm:grid-cols-1  '>
    <div>
    <h1 className='text-3xl mx-16 text-[#ff932e] font-bold mx-16'>The Challenge:

    </h1>
    <p className=' text-2xl mx-12 mt-8'>App Functionality: The central challenge was to develop an app that effectively fulfilled its intended purpose. This required meticulous planning and execution of its features.</p>
    <p className=' text-2xl mx-12 mt-8'>User Experience (UX) and User Interface (UI): Creating an intuitive and visually appealing UX/UI proved a formidable task, as it directly influenced how users interacted with the app.</p>
    <p className=' text-2xl mx-12 mt-8'>Notifications: The incorporation of various notification systems, such as push notifications, email notifications, and text notifications, was imperative to keep users engaged and well-informed.</p>
    <p className=' text-2xl mx-12 mt-8'>Unique Features: Hangry With Friends aspired to introduce features that set it apart from existing dining-related apps, necessitating innovative problem-solving.</p>
    
    </div>
    <div>
        <Image className='md:mx-auto md:block sm:mx-auto sm:block mx-auto d-block mt-20 pb-36' width={600} src={Onboarding} />
    </div>
   </div>
   <h1 className='text-4xl text-center text-[#ff932e] font-extrabold '>The Solution
   </h1>
   <div className='mt-10 grid lg:grid-cols-2 sm:grid-cols-1'>
    <div>

   <h1 className=' text-4xl mx-12 mt-8 font-bold text-black'>Socium Collaborated Closely with the Hangry With Friends Team to Address these Challenges:</h1>
    
   <p className=' text-2xl mx-12 mt-8'>UX/UI Enhancement: Socium played a key role in refining the app's UX/UI, ensuring seamless navigation and user satisfaction.</p>
    <p className=' text-2xl mx-12 mt-8'>Problem Solving: Socium identified and addressed problem areas, leveraging their technical expertise to improve the app's functionality.</p>
    <p className=' text-2xl mx-12 mt-8'>Innovative Features: Socium's technical skills enabled the incorporation of innovative features, setting Hangry With Friends apart from other apps.</p>
    <p className=' text-2xl mx-12 mt-8'>Project Management: Socium effectively managed the project's scope, ensuring it remained on track and facilitated clear communication between their team and Hangry With Friends.</p>
    </div>

   <div>
   <Image width={600} className='md:mx-auto md:block sm:mx-auto sm:block mx-auto d-block rounded-2xl mt-10' src={Hangry}/>
   </div>
   </div>
   <div className='text-4xl mt-8 text-center text-[#ff932e] font-extrabold'>The Result</div>
   <div>
    <p className='px-20 mt-10  '>
    As a result of this collaboration, Hangry With Friends now offers an exceptional solution for groups to decide on dining options easily. It provides practical dining choices and includes engaging social features such as restaurant voting and integrated commentary, enhancing mealtime conversations. Hangry With Friends has effectively resolved the age-old problem of deciding where to eat, leaving everyone satisfied rather than “hangry.”
    </p>
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