import React from "react";
import { PortableText } from "@portabletext/react";

const Desc = ({ desc }: any) => {
    return (
        <>
            <div className='max-w-6xl mx-auto pt-14 mobile:px-8 text-justify space-y-4'>
                <div className="text-justify desktop:text-[18px] text-[16px] text-gray leading-8">
                    <PortableText
                        value={desc}
                    />
                </div>
                <div className="grid desktop:grid-cols-2 gap-4 mobile:grid-cols-1">
                    <img src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" alt="" />
                    <img src="https://plus.unsplash.com/premium_photo-1682144440391-bece4365baa3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" alt="" />
                </div>
            </div>
        </>
    )
}


export default Desc
