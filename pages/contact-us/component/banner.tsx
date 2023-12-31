import React from "react";

const Banner = () => {
    return (
        <>
        <div 
            style={{
            backgroundImage: "url('https://source.unsplash.com/kN_kViDchA0')"
            }} className="desktop:h-[391px] h-[158px] w-full bg-bottom grayscale">
                <div className="dekstop:w-full w-3/4 mx-auto py-16 desktop:w-full desktop:py-32 max-w-7xl">
                    <h1 className="font-extrabold text-white text-[40px] desktop:text-[70px] capitalize leading-none">
                    Contact us
                    </h1>
                </div>
        </div>
        </>
    )
}


export default Banner