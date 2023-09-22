import React from "react"
const posts = [
    {
      id: 1,
      title: 'Coal Trading & Sourcing',
      href: '/training-demo',
      description:
        'May 17 @ 8:00 am - May 18 @ 5:00 pm',
    },
    {
    id: 2,
    title: 'Coal Trading & Sourcing',
    href: '/training-demo',
    description:
        'May 17 @ 8:00 am - May 18 @ 5:00 pm',
    },
    {
    id: 3,
    title: 'Coal Trading & Sourcing',
    href: '/training-demo',
    description:
        'May 17 @ 8:00 am - May 18 @ 5:00 pm',
    },
    {
    id: 4,
    title: 'Coal Trading & Sourcing',
    href: '/training-demo',
    description:
        'May 17 @ 8:00 am - May 18 @ 5:00 pm',
    },
    {
    id: 5,
    title: 'Coal Trading & Sourcing',
    href: '/training-demo',
    description:
        'May 17 @ 8:00 am - May 18 @ 5:00 pm',
    },
]

const TrainingUpdate = () => {
    return (
        <>
        <div className="w-full bg-blue py-16">

            <div className="max-w-7xl container mx-auto">
                <div className="desktop:flex justify-between">
                <div className="inline-flex items-center pb-4">
                    <span className="mobile:hidden h-2 w-14 bg-white"></span>
                    <h1 className="desktop:text-[50px] desktop:ml-[60px] desktop:text-left ml-8 text-[36px] font-bold text-white capitalize">
                        upcoming training
                    </h1>
                </div>
                    <button type="button" className="mobile:hidden group bg-white hover:bg-peach hover:text-white border-b border-black font-medium rounded-md text-sm px-4 py-1 my-6 inline-flex items-center">
                            View More
                            <svg className="w-4 h-4 ml-4 text-peach group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                    </button>
                </div>
                <br /><br />
                <div
                id="scrollContainer"
                className="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mb-8 pb-8"
                >
                    {posts.map((post) => (
                    <div
                        className="flex-none mr-8">    
                        <div key={post.id} className="max-w-sm p-6 bg-transparent border border-white text-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <h5 className="mb-2 text-[24px] font-bold tracking-tight dark:text-white">{post.title}</h5>
                            <p className="mb-3 font-normal dark:text-gray-400">{post.description}</p>
                            <div className="py-4"></div>
                            <a href={post.href} type="button" className="text-white bg-transparent group hover:bg-peach border-b border-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                                Register
                                <svg className="w-3.5 h-3.5 ml-2 text-peach group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    ))}

                </div> 
                <div className="desktop:hidden pt-8 text-center">
                    <button type="button" className="group bg-white hover:bg-peach hover:text-white border-b border-black font-medium rounded-md text-sm px-4 py-2.5 inline-flex items-center">
                            View More
                            <svg className="w-4 h-4 ml-4 text-peach group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                    </button>
                </div>
                
            </div>

        </div>
        </>
    )
}

export default TrainingUpdate