import React from "react";

const Features = () => {
    return (
        <>
            <div
            className="w-4/5 bg-white rounded-xl px-8 gap-12 text-justify mx-auto -mt-64 desktop:-mt-[140px] desktop:flex flex-col-3 desktop:max-w-7xl" 
            >
                <div className="flex-col">
                    <div className="gap-4 desktop:gap-4 inline-flex items-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[50px] h-[50px] mt-[20px] text-peach">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                            </svg>
                        </div>
                        <div className="items-center">
                            <h1 className="font-bold text-blue text-[16px] mt-[20px] leading-[19px] py-8">SINCE 1971</h1>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className="text-[16px] text-gray leading-6 desktop:text-[18px]">
                            Founded in 1971 to offer services to the mining industry, PT
                            Geoservices evolved into a fully integrated exploration
                            services company.</p>
                        </div>
                    </div>
                </div>

                <div className="flex-col">
                    <div className="gap-4 desktop:gap-4 inline-flex items-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[50px] h-[50px] mt-[20px] text-peach">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                            </svg>
                        </div>
                        <div className="items-center">
                            <h1 className="font-bold text-blue text-[16px] mt-[20px] leading-[19px] py-8">1500+ PEOPLE</h1>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className="text-[16px] text-gray leading-6 desktop:text-[18px]">
                                Employing more than 1500 people, some of which are expert in
                                specialized fields from a number of foreign countries,
                            </p>
                        </div>
                    </div>  
                </div>

                <div className="flex-col">
                    <div className="gap-4 desktop:gap-4 inline-flex items-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[50px] h-[50px] mt-[20px] text-peach">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                            </svg>
                        </div>
                        <div className="items-center">
                            <h1 className="font-bold text-blue text-[16px] mt-[20px] leading-[19px] py-8">OUR FOCUS</h1>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className="text-[16px] text-gray leading-6 desktop:text-[18px]">
                                Our specialties are mapping surveys, geology, geophysics,
                                downhole measurements, borehole drilling, laboratories
                                analysis, and cargo superintending
                            </p>
                        </div>
                    </div>
                </div>
            
            </div>
        </>
    )
}


export default Features