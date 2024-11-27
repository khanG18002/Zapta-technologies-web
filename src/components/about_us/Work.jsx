import React from 'react'

const Work = () => {
    return (
        <>
            {/* parent */}
            <div className='py-20 px-8'>
                <h1 className='text-4xl  font-bold pb-3'>What <span className='text-customBlue '>We Do </span></h1>

                {/* text */}
                <div className='flex flex-col-reverse md:flex-row space-x-5 items-center '>
                    <div className='max-w-[50%] lg:text-xl'>
                        <div>
                            At ZAPTA Technologies, we proudly lead the charge in innovation,
                            setting the industry standards for tackling even the most intricate
                            business challenges. Our unwavering commitment to excellence drives
                            us to provide unparalleled expertise and comprehensive business
                            solutions, that redefine success for our clients. We believe in going
                            beyond the ordinary, which is why we offer round-the-clock support and
                            monitoring to ensure your business stays ahead of the curve.
                        </div>
                        <br />
                        <div>
                            Our exceptional team is a dynamic mix of seasoned professionals
                            each a master in their respective fields. From the earliest stages of
                            research and development, through the intricacies of requirement
                            engineering and business analysis, to the artistry of UI/UX design, and
                            the meticulous craft of software architecture, our experts stand ready
                            to transform your vision into reality. We excel in custom website and
                            mobile app development.
                        </div>
                    </div >

                    {/* image */}
                    < div className=' w-[50%]' >
                        <img className='rounded-xl w-full'
                            src="./src/assets/images/Work.webp" alt="" />
                    </div >
                </div>

            </div >

        </>
    )
}

export default Work
