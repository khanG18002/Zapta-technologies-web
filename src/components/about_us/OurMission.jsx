import React from 'react'

const OurMission = () => {
    return (
        <>
            {/* parent  */}
            <div className='py-10'>

                {/* image */}
                <div className='relative text-white text-center'>
                    <img src="./src/assets/images/OurMission.webp" className="w-full" alt="" />

                    {/* child (text) */}
                    <div className='absolute top-3 space-y-2 w-full md:top-32 px-10 '>
                        <h1 className='text-xl md:text-4xl font-bold'>Our Mission</h1>
                        <p className='md:text-xl'>
                            To be a leading software company, driven by innovation
                            and dedication to empower businesses worldwide through
                            cutting-edge technologies.
                        </p>
                    </div>
                </div>



            </div>
        </>
    )
}

export default OurMission
