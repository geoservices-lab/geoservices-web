import React from 'react'
import { Badge } from 'flowbite-react';

const TrainingSection = ({ data }) => {
    console.log(data);

    return(
        <>
            <a href="/training" type="button" className='text-center inline-flex gap-4 font-medium group hover:scale-110'>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ml-2 text-[#E68E67]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                </span>
                <p className='mobile:hidden'>All event</p>
            </a>

            <h1 className='text-[#828282] desktop:text-[48px] text-[36px] font-semibold py-8'>
                {data && data.title}
            </h1>

            <div className='desktop:flex flex-col-1'>
                <div className='desktop:w-1/2 w-full'>
                    <div>
                        <h5 className='font-bold text-[#828282]'>Start Date</h5>
                        <p>
                            {data && data.start_date}
                        </p>
                    </div>
                    <div>
                        <h5 className='font-bold text-[#828282]'>End Date</h5>
                        <p>
                            {data && data.end_date}
                        </p>
                    </div>
                </div>
                <br />
                <div className='desktop:w-1/2 w-full'>
                    <div>
                        <h5 className='font-bold text-[#828282]'>Venue</h5>
                        <p>
                            {data && data.venue}
                        </p>
                    </div>
                    <div>
                        <h5 className='font-bold text-[#828282]'>Time</h5>
                        <p>10:00 - 11:00 WIB</p>
                    </div>
                </div>
                <br />
                <div className="desktop:w-1/2 w-full">
                    <a href='mailto:info@geoservices.co.id' type="button" className='flex py-2.5 px-4 desktop:w-[250px] w-full justify-between bg-[#363C9A] text-white rounded-md hover:scale-110'>
                        <p>Get Formulir and Brocure</p>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </span>
                    </a>
                    <br />

                </div>
            </div>
            <br /><br />
            <hr className='py-4'/>
            <h5 className='font-bold text-[#828282] pb-4 text-[14pt]'>Descriptions</h5>
            <p className='text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dolores optio debitis odit eum aut, praesentium officia explicabo soluta sed architecto quo eius perferendis libero rem sequi unde, animi esse? Magni inventore dolores, officiis architecto perferendis cupiditate? Corrupti, error alias!</p>
            <br />
            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum nam fuga aperiam in culpa. Explicabo eaque et adipisci distinctio repudiandae voluptatibus inventore enim reprehenderit.</p>
            <br /><br />
            <div className='space-y-4'>
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Training Tags
                </p>
                <div className='grid grid-cols-2 desktop:grid-cols-8 gap-4'>
                <Badge color="info">
                    {data && data.tags[0]}
                </Badge>
                <Badge color="failure">
                    Oil and Gas
                </Badge>
                </div>
            </div>
            <br /><br />
            <hr className='py-4'/>
            <h5 className='font-bold text-[#828282] pb-4 text-[14pt]'>Contact Us</h5>
            <ul className='grid desktop:grid-cols-2 desktop:w-1/2 grid-cols-1'>
                <li className="pb-3 sm:pb-4">
                    <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="https://source.unsplash.com/FXJf8y_cZA0" alt="person 1"/>
                        </div>
                        <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Geoservices
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            info@geoservices.co.id
                        </p>
                        </div>
                    </div>
                </li>
            </ul>
            <br />

            <ul className='grid desktop:grid-cols-2 desktop:w-1/2 grid-cols-1 gap-4'>
                <li>
                    <div>
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Phone
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            (021) 830 5555
                        </p>
                    </div>
                </li>
                <li>
                    <div>
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Fax
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            (021) 830 5555
                        </p>
                    </div>
                </li>
            </ul>

        </>
    )
}

export default TrainingSection
