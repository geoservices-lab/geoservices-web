import React from "react";

const data = [
  { 
    image: "https://source.unsplash.com/zAITDJYV09w",
    title: "Our Services",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi odio repellendus iure dicta minus distinctio quia accusamus provident! Fugit, a?",
    url: "/coal",
  },
  {
    image: "https://source.unsplash.com/UXjYy04EvOc",
    title: "Equipments",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi odio repellendus iure dicta minus distinctio quia accusamus provident! Fugitquia accusamus provident! Fugit, a?",
    url: "/#",
  },
];

const Speciality = () => (
  <>
  <div className="max-w-7xl mx-auto">
      <div className="inline-flex items-center pb-4">
          <span className="mobile:hidden h-2 w-14 bg-blue"></span>
          <h1 className="desktop:text-[50px] desktop:ml-[60px] desktop:text-left ml-12 text-[32px] font-bold text-left leading-10 text-peach">
              Product and Services
          </h1>
      </div>
      <br /><br />
      {data.map((post, index) => (
          <div
          className={`desktop:flex ${index % 2 === 0 ? '' : 'desktop:flex-row-reverse'} grid-cols-1 rounded-md ${
            index % 2 === 0 ? 'bg-slate-100' : 'bg-slate-100'
            }`}
            >
              <div className="desktop:flex-auto w-full">
                  <img src={post.image} alt="" className="rounded-md w-full h-full"/>
              </div>
              <div className="desktop:flex-auto w-full">
                  <div className="space-y-[20px] px-12 mr-4 pb-12">
                      <div className="mobile:hidden">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[100px] h-[100px] mt-[20px] text-peach pt-8">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                          </svg>
                          <h1 className="font-bold text-blue desktop:text-[20px] text-[18px] mt-[20px] leading-[19px] uppercase">{post.title}</h1>
                      </div>
                      <div className="desktop:hidden text-center inline-flex items-center gap-8">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[50px] h-[50px] mt-[20px] text-peach">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                          </svg>
                          <h1 className="font-bold text-blue desktop:text-[20px] text-[18px] mt-[20px] leading-[19px] uppercase">{post.title}</h1>
                      </div>
                      <br />
                      <div>
                          <div>
                              <p className="text-justify desktop:text-[18px] text-[16px] text-gray leading-8">{post.desc}</p>
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
