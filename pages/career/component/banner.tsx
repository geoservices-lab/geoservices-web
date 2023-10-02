import React from "react";

const Banner = ({ image }) => {
    return (
        <>
        <div
        style={{
        backgroundImage: "url('https://source.unsplash.com/FXJf8y_cZA0')"
        }} className="desktop:h-[391px] h-[158px] w-full object-fill bg-cover">
            <div className="backdrop-blur-md w-full h-full">
                <div className="w-3/4 mx-auto py-16 desktop:w-full desktop:py-32 desktop:max-w-7xl">
                    <h1 className="font-extrabold text-white text-[40px] desktop:text-[70px] tracking-wider capitalize">
                    Career
                    </h1>
                </div>
            </div>
        </div>
        </>
    )
}


export default Banner
