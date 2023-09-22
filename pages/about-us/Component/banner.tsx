import React from "react";

const Banner = () => {
    return (
        <>
        <div 
            style={{
            backgroundImage: "url('https://source.unsplash.com/FXJf8y_cZA0')"
            }} className="desktop:h-[391px] h-[158px] w-full object-fill bg-cover grayscale">
                <div className="w-3/4 mx-auto py-16 desktop:w-full desktop:py-32 desktop:max-w-7xl">
                    <h1 className="font-extrabold text-white text-[40px] desktop:text-[70px] capitalize leading-none">
                    About us
                    </h1>
                </div>
        </div>
        </>
    )
}


export default Banner