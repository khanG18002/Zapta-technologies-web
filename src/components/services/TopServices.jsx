import React from 'react'

const TopServices = () => {
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
                    <h1 className='md:text-5xl font-bold '>Services</h1>
                    <p className='md:text-xl font-light '>ZAPTA Technologies is a custom software design and development company offering a
                        comprehensive range of innovative and AI powered solutions. Our expert team is well versed in Website
                        development, Mobile application development, UI UX design, Quality assurance, MVP builder and Dedicated team
                        services.</p>


                </div>
            </div >
        </>
    )
}

export default TopServices
