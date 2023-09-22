import React from "react";

const HomeBanner = () => {
    return (
        <>
        <div 
            style={{
            backgroundImage: "url('https://source.unsplash.com/FXJf8y_cZA0')"
            }} className="h-[680px] w-full object-fill bg-cover">
                <div className="max-w-6xl desktop:w-full w-3/4 mx-auto py-32">
                    <h1 className="font-extrabold text-[40px] desktop:text-[70px] capitalize">
                    The energy evolution
                    </h1>
                    <p className="pt-8 font-normal text-justify text-[16px] desktop:text-[20px] desktop:w-1/2">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam architecto iste libero, consequuntur nemo vero veniam soluta quidem amet voluptatum.
                    </p>
                </div>
                
        </div>
        </>
    )
}


export default HomeBanner