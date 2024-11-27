import React from 'react'

const BrightCodeLab = () => {
    return (
        <>
            {/* parent */}
            <div className='py-20 px-8'>
                <h1 className='text-4xl  font-bold pb-3'>What is <span className='text-customBlue '>ZAPTA?</span></h1>

                {/* text */}
                <div className='flex flex-col-reverse md:flex-row space-x-5 items-center '>
                    <div>
                        <p className='w-96'>ZAPTA, an abbreviation for
                            <span className='text-customBlue'> "Zone of Advance Platforms and Tech
                                Applications" </span> stands out as a top-tier software development firm focused
                            on providing customized lifecycle solutions to cater to the unique needs
                            of our clients. Our reputation is built on a steadfast dedication to
                            excellence, reflected in our solutions that boast exceptional quality,
                            security , scalability, and affordability. ZAPTA has received numerous
                            accolades for its outstanding expertise in UI/UX Design, Custom Software
                            Development, Web Development, and MVP Development Our team consists of
                            highly experienced professionals who possess a diverse skill set,
                            including Technology Specialists, UI Designers, UX Engineers, Programmers,
                            DevOps Experts, Business Analysts, Software Architects, QA Engineers, and
                            Project Managers. This collective expertise allows us to provide long-term
                            solutions to clients across all industries, ensuring their success in an
                            everevolving technological landscape. Choose ZAPTA Technologies as your
                            trusted partner.</p>
                    </div >

                    {/* image */}
                    < div >
                        <img className='rounded-xl w-auto'
                            src="./src/assets/images/ZAPTA.webp" alt="" />
                    </div >
                </div>

            </div >

        </>
    )
}

export default BrightCodeLab
