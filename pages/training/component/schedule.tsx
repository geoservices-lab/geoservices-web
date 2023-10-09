import React from 'react'
'use client';

const posts = [
    {
      id: 1,
      title: 'Introduction to Exploration & Production Business',
      href: '/training/1',
      description:
        'May 17 @ 8:00 am - May 18 @ 5:00 pm',
    status:'To be announce',
    tags:'coal'
    },
    {
    id: 2,
    title: 'Coal Trading & Sourcing',
    href: '/training/1',
    description:
        'May 17 @ 8:00 am - May 18 @ 5:00 pm',
    status:'To be announce',
    tags:'coal'
    },
    {
    id: 3,
    title: 'Coal Trading & Sourcing',
    href: '/training/1',
    description:
        'May 17 @ 8:00 am - May 18 @ 5:00 pm',
    status:'To be announce',
    tags:'coal'
    },
    {
    id: 4,
    title: 'Oil Trading & Sourcing',
    href: '/training/1',
    description:
        'May 17 @ 8:00 am - May 18 @ 5:00 pm',
    status:'passed',
    tags:'oil and gas'
    },
    {
    id: 5,
    title: 'Oil Trading & Sourcing',
    href: '/training/1',
    description:
        'May 17 @ 8:00 am - May 18 @ 5:00 pm',
    status:'passed',
    tags:'oil and gas'
    },
]

const Schedule = () => {
    return(
        <>
        {/* <div className="flex justify-between h-20 text-[#828282] bg-[#DCF3FB] items-center px-4">
            <a href="/home-demo" type="button" className='text-center inline-flex gap-4 font-medium group hover:scale-110'>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ml-2 text-[#E68E67]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                </span>
                <p className='mobile:hidden'>Previous</p>
            </a>
            <div className='text-[24px]'>July 2022</div>
            <a href="/home-demo" type="button" className='text-center inline-flex gap-4 font-medium group hover:scale-110'>
                <p className='mobile:hidden'>Next</p>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-2 text-[#E68E67]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </span>
            </a>
        </div>
        <br /><br /><br /> */}

        <div className='grid desktop:grid-cols-3 grid-cols-1 gap-8 px-4 text-[#828282]'>
        {posts.map((post) => (
            <div key={post.id} className="max-w-sm p-6 bg-transparent border border-gray  rounded-lg shadow hover:shadow-xl hover:scale-105">
                <h5 className="mb-2 text-[21px] font-semibold tracking-tight">{post.title}</h5>
                <br />
                <p className="mb-3 font-normal dark:text-gray-400">{post.description}</p>
                <p className='font-semibold'>({post.status})</p>
                <div className="pt-4"></div>
                <p className='font-semibold'>Tags: <span>{post.tags}</span></p>
                <br />
                <a href={post.href} type="button" className="bg-transparent group hover:bg-[#E68E67] hover:text-[#fff] border border-slate-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                    Register
                    <svg className="w-3.5 h-3.5 ml-2 text-[#E68E67] group-hover:text-[#fff]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            
            </div>
        ))}
        </div>

        {/* <br /><br /><br /><br />
        <nav className='grid justify-items-center'>
            <ul className="inline-flex -space-x-px text-sm">
                <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 ml-0 leading-tight rounded-l-lg hover:bg-slate-200">Previous</a>
                </li>
                <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight hover:bg-slate-200">1</a>
                </li>
                <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight hover:bg-slate-200">2</a>
                </li>
                <li>
                <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                </li>
                <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight hover:bg-slate-200">...</a>
                </li>
                <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight hover:bg-slate-200">10</a>
                </li>
                <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight rounded-r-lg hover:bg-slate-200">Next</a>
                </li>
            </ul>
        </nav> */}
        </>
    )
}

export default Schedule