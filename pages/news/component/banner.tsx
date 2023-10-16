import React from "react";

const Banner = ({ title }: any) => {
    return (
        <>
        <div
            style={{
            backgroundImage: "url('https://source.unsplash.com/FXJf8y_cZA0')"
            }} className="desktop:h-[391px] h-[158px] w-full object-fill bg-cover grayscale">
                <div className="desktop:w-full w-3/4 mx-auto py-16 desktop:py-32 max-w-7xl">
                    <h1 className="font-extrabold text-white text-[40px] desktop:text-[70px] capitalize leading-none">
                        Media and Information
                    </h1>
                </div>
        </div>
        </>
    )
}


export default Banner
