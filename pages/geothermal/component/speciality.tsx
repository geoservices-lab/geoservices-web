import React from "react";
import SanityImage from "../../../reusables/SanityImage/SanityImage.comp";

// const data = [
//   {
//     image: "https://source.unsplash.com/zAITDJYV09w",
//     title: "Our Services",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi odio repellendus iure dicta minus distinctio quia accusamus provident! Fugit, a?",
//     url: "/coal",
//   },
//   {
//     image: "https://source.unsplash.com/UXjYy04EvOc",
//     title: "Equipments",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi odio repellendus iure dicta minus distinctio quia accusamus provident! Fugitquia accusamus provident! Fugit, a?",
//     url: "/#",
//   },
// ];

const Speciality = ({ data }) => (
  <>
  <div className="max-w-7xl mx-auto">
      <div className="inline-flex items-center pb-4">
          <span className="mobile:hidden h-2 w-14 bg-blue"></span>
          <h1 className="desktop:text-[50px] desktop:ml-[60px] desktop:text-left ml-12 text-[32px] font-bold text-left leading-10 text-peach">
              Product and Services
          </h1>
      </div>
      <br /><br />
      {data && data.map((post, index) => (
          <div
          className={`desktop:flex ${index % 2 === 0 ? '' : 'desktop:flex-row-reverse'} grid-cols-1 rounded-md ${
            index % 2 === 0 ? 'bg-slate-100' : 'bg-slate-100'
            }`}
            >
              <div className="desktop:flex-auto w-full">
                  <SanityImage image={post && post.image} />
              </div>
              <div className="desktop:flex-auto w-full">
                  <div className="space-y-[20px] px-12 mr-4 pb-12">
                      <div className="mobile:hidden">
                          <SanityImage image={post && post.icon} style={{
                              width: 80
                          }} />
                          <h1 className="font-bold text-blue desktop:text-[20px] text-[18px] mt-[20px] leading-[19px] uppercase">{post.title}</h1>
                      </div>
                      <div className="desktop:hidden text-center inline-flex items-center gap-8">
                          <SanityImage image={post && post.icon} style={{
                              width: 80
                          }} />
                          <h1 className="font-bold text-blue desktop:text-[20px] text-[18px] mt-[20px] leading-[19px] uppercase">{post.title}</h1>
                      </div>
                      <br />
                      <div>
                          <div>
                              <p className="text-justify desktop:text-[18px] text-[16px] text-gray leading-8">{post.description}</p>
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

export default Speciality;
