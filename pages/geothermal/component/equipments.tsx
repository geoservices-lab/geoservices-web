import React from 'react'
import SanityImageComp from "../../../reusables/SanityImage/SanityImage.comp";

const Equipments = ({ data }) => {
    return(
        <>
        <h1 className='capitalize font-bold text-[32px]'>Equipments</h1>
        <div className="grid grid-cols-1 gap-x-4 gap-y-16 border-t border-gray pt-10 desktop:grid-cols-3">
            {data && data.map((post) => (
                <div key={post.id} className="max-w-md rounded-lg shadow-md border-gray">
                    <div>
                        {post.icon ?
                            <SanityImageComp image={post.icon} className="rounded-xl h-[200px]" style={{ marginTop: 0, objectFit: 'cover' }} />
                            : <div className={'h-[200px] w-full bg-gray rounded-xl'} />
                        }
                    </div>
                    <div className='px-4'>
                        <h1 className="text-[14px] text-justify font-bold mr-2 capitalize mt-6">{post.title}</h1>
                        <p className='text-[14px] text-justify mt-4'>{post.description}</p>
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

export default Equipments
