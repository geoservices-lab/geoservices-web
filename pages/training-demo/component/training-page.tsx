import React from 'react'
import { Badge } from 'flowbite-react';

const TrainingSection = () => {
    return(
        <>
            <a href="/training-demo" type="button" className='text-center inline-flex gap-4 font-medium group hover:scale-110'>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ml-2 text-[#E68E67]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                </span>
                <p className='mobile:hidden'>All event</p>
            </a>

            <h1 className='text-[#828282] desktop:text-[48px] text-[36px] font-bold py-8'>
                Coal Trading & Sourcing
            </h1>

            <div className='desktop:flex flex-col-1'>
                <div className='desktop:w-1/2 w-full'>
                    <div>
                        <h5 className='font-bold text-[#828282]'>Start Date</h5>
                        <p>May 17, 2023</p>
                    </div>
                    <div>
                        <h5 className='font-bold text-[#828282]'>End Date</h5>
                        <p>To be announce</p>
                    </div>
                </div>
                <br />
                <div className='desktop:w-1/2 w-full'>
                    <div>
                        <h5 className='font-bold text-[#828282]'>Venue</h5>
                        <p>Jakarta</p>
                    </div>
                    <div>
                        <h5 className='font-bold text-[#828282]'>Time</h5>
                        <p>00:00 - 00:01 WIB</p>
                    </div>
                </div>
                <br />
                <div className="desktop:w-1/2 w-full">
                    <button type="button" className='flex py-2.5 px-4 w-[250px] justify-between bg-[#363C9A] text-white rounded-md hover:scale-110'>
                        <p>Google calendar</p>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </span>
                    </button>
                    <br />
                    <button type="button" className='flex py-2.5 px-4 w-[250px] justify-between bg-[#363C9A] text-white rounded-md hover:scale-110'>
                        <p>iCal Export</p>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
            <br /><br />
            <hr className='py-4'/>
            <h5 className='font-bold text-[#828282] pb-4'>Contact</h5>
            <ul className='grid desktop:grid-cols-2 desktop:w-1/2 grid-cols-1'>
                <li className="pb-3 sm:pb-4">
                    <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="https://source.unsplash.com/FXJf8y_cZA0" alt="person 1"/>
                        </div>
                        <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Yesda Nababan
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@geoservices.co.id
                        </p>
                        </div>
                    </div>
                </li>
                <li className="pb-3 sm:pb-4">
                    <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="https://source.unsplash.com/FXJf8y_cZA0" alt="person 1"/>
                        </div>
                        <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Mardiah
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@geoservices.co.id
                        </p>
                        </div>
                    </div>
                </li>
                <li className="pb-3 sm:pb-4">
                    <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="https://source.unsplash.com/FXJf8y_cZA0" alt="person 1"/>
                        </div>
                        <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Ratna
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@geoservices.co.id
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
            <br /><br />

            <div className='space-y-4'>
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Event Tags
                </p>
                <div className='grid grid-cols-4 desktop:grid-cols-8 gap-4'>
                <Badge color="info">
                    Coal
                </Badge>
                <Badge color="failure">
                    Oil and Gas
                </Badge>
                <Badge color="success">
                    software
                </Badge>
                <Badge color="warning">
                    Geothermal
                </Badge>
                </div>
            </div>
        </>
    )
}

export default TrainingSection