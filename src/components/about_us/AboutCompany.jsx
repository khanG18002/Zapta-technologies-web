import React from 'react'

const AboutCompany = () => {
    return (
        <>
            {/* Parent div  */}
            <div className='relative text-white'>

                {/* image */}
                <img
                    src="./src/assets/images/ AboutUs.webp" className="w-full" alt=" Image team member "
                />
                {/* text */}
                <div className='absolute top-4 font-thin text-center w-full md:top-24 space-y-4 '>
                    <h1 className='md:text-5xl font-bold '>About Us </h1>
                    <p className='md:text-xl font-light '>ZAPTA Technologies is your trusted partner for comprehensive digital
                        transformation solutions. From developing user-centric <br /> applications
                        and optimizing customer experiences to harnessing the power of data
                        analytics and artificial intelligence, we <br /> empower organizations to
                        stay ahead in today's rapidly evolving digital landscape.</p>


                </div>
            </div >
        </>
    )
}

export default AboutCompany
