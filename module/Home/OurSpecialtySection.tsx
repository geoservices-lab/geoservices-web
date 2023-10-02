import React from "react";
import SanityImage from "../../reusables/SanityImage/SanityImage.comp";

// const data = [
//   {
//     image: "/assets/bg-coal1.png",
//     icon: "/assets/cart2-vector.png",
//     title: "COAL LABORATORY",
//     desc: "Highly trained and experienced Indonesian staff perform all work in duplicate, in accordance with internationally accepted standards: ASTM, British Standard (BS), and International Standards (ISO), that was the Geoservices coal laboratory begin.",
//     url: "/coal",
//   },
//   {
//     image: "/assets/bg-coal2.png",
//     icon: "/assets/cart2-vector.png",
//     title: "MINERAL LABORATORY",
//     desc: "Highly trained and experienced Indonesian staff perform all work in duplicate, in accordance with internationally accepted standards: ASTM, British Standard (BS), and International Standards (ISO), that was the Geoservices coal laboratory begin.",
//     url: "/#",
//   },
//   {
//     image: "/assets/bg-coal3.png",
//     icon: "/assets/cart2-vector.png",
//     title: "Geological Lab",
//     desc: "Highly trained and experienced Indonesian staff perform all work in duplicate, in accordance with internationally accepted standards: ASTM, British Standard (BS), and International Standards (ISO), that was the Geoservices coal laboratory begin.",
//     url: "/geolab-demo",
//   },
// ];

const OurSpecialtySection = ({ data }: any) => {
    console.log(data && data.specialties);

    return (
        <>
            <div className="max-w-7xl mx-auto pt-32">
                <div className="inline-flex items-center pb-4">
                    <span className="mobile:hidden h-2 w-14 bg-blue"></span>
                    <h1 className="desktop:text-[50px] desktop:ml-[60px] desktop:text-left ml-8 text-[36px] font-bold text-peach">
                        Our Specialty
                    </h1>
                </div>
                <br /><br />
                {data && data.specialties.map((post: any, index: number) => (
                    <div
                        className={`desktop:flex ${index % 2 === 0 ? '' : 'desktop:flex-row-reverse'} grid-cols-1 rounded-md bg-slate-100`}
                    >
                        <div className="desktop:flex-auto w-full">
                            <SanityImage image={post.image} className="rounded-md w-full h-full" style={{
                                marginTop: 0,
                            }}/>
                        </div>
                        <div className="desktop:flex-auto w-full">
                            <div className="px-12 mr-4 pb-12 pt-12">
                                <div className="mobile:hidden">
                                    <SanityImage image={post.icon} style={{ marginTop: 0, width: 60 }}/>
                                    <h1 className="font-bold text-blue desktop:text-[20px] text-[18px] mt-[20px] leading-[19px] uppercase">{post.title}</h1>
                                </div>
                                <div className="desktop:hidden text-center inline-flex items-center gap-4">
                                    <SanityImage image={post.icon} style={{ marginTop: 12, width: 60 }}/>
                                    <h1 className="font-bold text-blue desktop:text-[20px] text-[18px] mt-[20px] leading-[19px] uppercase">{post.title}</h1>
                                </div>
                                <br />
                                <div>
                                    <div>
                                        <p className="text-justify desktop:text-[18px] text-[14px] text-gray leading-8 mb-4">{post.description}</p>
                                    </div>
                                </div>
                                <a href={post.url} type="button" className="group text-black bg-transparent hover:bg-peach hover:text-white border-b border-black font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    View More
                                    <svg className="w-3.5 h-3.5 ml-2 text-peach group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>
    );
}

export default OurSpecialtySection;
