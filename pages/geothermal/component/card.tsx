import React from 'react'
import { PortableText } from "@portabletext/react"

const Product = ({ description }: any) => {
    return (
        <>
            <div className="border-t-4 border-peach shadow-md p-11">
                <h1 className=' text-peach font-bold text-[24px] capitalize leading-6'>General information</h1>
                <div className='desktop:text-left text-justify text-gray text-[16px] mt-4'>
                    <PortableText value={description} />
                </div>
            </div>
        </>
    )
}

export default Product
