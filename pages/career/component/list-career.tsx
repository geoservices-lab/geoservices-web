
import { Badge } from "flowbite-react"
import React from "react"

const posts = [
    {
      id: 1,
      title: 'Job Tittle Goes Here',
      location: 'Jakarta'
    },
    // More posts...
    {
        id: 2,
        title: 'Job Tittle Goes Here',
        location: 'Bandung'
    },
    {
        id: 3,
        title: 'Job Tittle Goes Here',
        location: 'Cikarang'
    },
    // More posts...
    {
        id: 4,
        title: 'Job Tittle Goes Here',
        location: 'Sofifi'
    },
    {
        id: 5,
        title: 'Job Tittle Goes Here',
        location: 'Banjarbaru'
    },
]
  
  const ListCareer = () => {
    return (
        <>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid mx-auto mt-10 grid-cols-1 gap-x-4 gap-y-[20px] desktop:gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none desktop:grid-cols-3">
            {posts.map((post) => (

            <div key={post.id} className="desktop:w-[353px] desktop:h-[153px] max-w-sm bg-slate-100 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 py-[16px] px-[16px]">
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
                <button type="button" className="group border-b bg-blue rounded-lg text-[12px] text-white px-4 py-1.5 mt-4 inline-flex items-center hover:scale-105">
                    View details
                    <svg className="w-3.5 h-3.5 ml-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </button>
            </div>
            
            ))}
            </div>
            
            <nav className='grid justify-items-center pt-32'>
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
            </nav>
        </div>
        </>

    )
  }
  
  export default ListCareer