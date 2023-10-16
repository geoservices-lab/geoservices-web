import React from 'react'
import SanityImageComp from "../../../reusables/SanityImage/SanityImage.comp";

const Services = ({ data }) => {
    return(
        <>
        <h1 className='capitalize font-bold text-[32px]'>services</h1>
        <div className="grid grid-cols-1 gap-x-4 border-t border-gray desktop:grid-cols-3 ">
            {data && data.map((post) => (
                <div key={post.id} className="max-w-md rounded-lg shadow-md border-gray mt-12">
                    <div>
                        {post.icon && <SanityImageComp image={post.icon} className="rounded-xl h-[200px]" style={{ marginTop: 0, objectFit: 'cover' }} />}
                    </div>
                    <div className='px-4'>
                        <h1 className="text-[16px] text-justify font-bold mr-2 capitalize mt-6">{post.title}</h1>
                        <p className='text-[14px] text-justify mt-4 h-[80px] overflow-hidden'>{post.description}</p>
                        <br />
                        <div className="flex justify-end text-[14px] mb-8">
                            <button className='hover:scale-105'>
                                <p className='text-blue capitalize'>view details</p>
                            </button>
                        </div>
                    </div>

                </div>
            ))}
        </div>

        </>
    )
}

export default Services
