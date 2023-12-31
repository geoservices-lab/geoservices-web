import React from "react";

const Banner = () => {
    return (
        <>
        <div
            style={{
            backgroundImage: "url('https://source.unsplash.com/KdeqA3aTnBY')"
            }} className="mobile:mt-[90px] desktop:h-[391px] h-[158px] w-full object-fill bg-cover grayscale">
                <div className="w-3/4 mx-auto py-14 desktop:py-32 desktop:max-w-7xl">
                    <h1 className="font-extrabold text-white text-[32px] desktop:text-[70px] capitalize leading-none">
                    Geoservices Training
                    </h1>
                </div>
        </div>
        </>
    )
}


export default Banner
