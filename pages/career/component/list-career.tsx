import React, { useEffect, useState } from "react"
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'
import { PortableText } from "@portabletext/react";

  const ListCareer = () => {
      const [contentData, setContentData] = useState([]);
      const [open, setOpen] = useState(false);
      const [activeIndex, setActiveIndex] = useState(0);

      const onOpenModal = (index: number) => {
          setActiveIndex(index);
          setOpen(true);
      }

      const onCloseModal = () => setOpen(false);

      const callContentApi = async () => {
          try {
              const res = await fetch(`https://miib670e.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "career"]`);
              const data = await res.json();
              const content = data && data.result;
              setContentData(content);
          } catch (err) {
              console.log(err);
          }
      };

      useEffect(() => {
          callContentApi();
      }, []);

      return (
        <>
            <Modal open={open} onClose={onCloseModal} styles={{
                modal: {
                    width: 1000
                }
            }} center>
                <h2 style={{
                    fontSize: 18,
                    fontWeight: 'bold'
                }}>
                    {contentData[activeIndex] && contentData[activeIndex].title}
                </h2>
                <div className={"flex items-center mt-1 text-primary"}>
                    <span className={"mr-2"}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                    </span>
                    {contentData[activeIndex] && contentData[activeIndex].location}
                </div>
                <span className={"mt-2 mb-4 text-12 inline-block bg-primary text-white py-2 px-8 rounded-full"}>
                    {contentData[activeIndex] && contentData[activeIndex].division}
                </span>
                <div style={{
                    fontSize: 13.5,
                }}>
                    <PortableText
                        value={contentData[activeIndex] && contentData[activeIndex].Content}
                    />
                </div>
                <a className={"flex justify-between items-center bg-primary text-white p-4 mt-4 w-[300px]"} href={contentData[activeIndex] && contentData[activeIndex].url} target={'_blank'}>
                    Apply
                    <svg className="w-3.5 h-3.5 ml-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </Modal>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid mx-auto mt-10 grid-cols-1 gap-x-4 gap-y-[20px] desktop:gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none desktop:grid-cols-3">
                    {contentData && contentData.map((post: any, index: number) => (
                        <div key={index} className="desktop:w-[353px] desktop:h-[153px] max-w-sm bg-slate-100 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 py-[16px] px-[16px]">
                            <h1 className="text-gray text-[18px] font-normal mr-2">{post.title}</h1>
                            <p className="inline-flex items-center gap-4 text-blue text-[14px] mt-4">
                                <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                                </span>
                                {post.location}
                            </p>
                            <br />
                            <button onClick={() => onOpenModal(index)} className="group border-b bg-blue rounded-lg text-[12px] text-white px-4 py-1.5 mt-4 inline-flex items-center hover:scale-105">
                                View details
                                <svg className="w-3.5 h-3.5 ml-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>

    )
  }

  export default ListCareer
