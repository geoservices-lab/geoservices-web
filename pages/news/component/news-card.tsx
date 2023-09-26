
import React from "react"

const posts = [
    {
      id: 1,
      title: 'Sludge Oil Liquefaction System (Sols) With Paralax(R)',
      category: 'Upstream',
      href: '/news-demo/1',
      imageUrl:
      "https://source.unsplash.com/FXJf8y_cZA0",
    },
    // More posts...
    {
        id: 2,
        title: 'Sludge Oil Liquefaction System (Sols) With Paralax(R)',
        category: 'Upstream',
        href: '/news-demo/1',
        imageUrl:
        "https://source.unsplash.com/FXJf8y_cZA0",
    },
    {
        id: 3,
        title: 'Sludge Oil Liquefaction System (Sols) With Paralax(R)',
        category: 'Upstream',
        href: '/news-demo/1',
        imageUrl:
        "https://source.unsplash.com/FXJf8y_cZA0",
    },
        // More posts...
        {
            id: 4,
            title: 'Sludge Oil Liquefaction System (Sols) With Paralax(R)',
            category: 'Upstream',
            href: '/news-demo/1',
            imageUrl:
            "https://source.unsplash.com/FXJf8y_cZA0",
        },
        {
            id: 5,
            title: 'Sludge Oil Liquefaction System (Sols) With Paralax(R)',
            category: 'Upstream',
            href: '/news-demo/1',
            imageUrl:
            "https://source.unsplash.com/FXJf8y_cZA0",
        },
  ]
  
  const newsPage = () => {
    return (
        <>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid mx-auto mt-10 grid-cols-1 gap-x-4 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none desktop:grid-cols-3">
            {posts.map((post) => (

            <div key={post.id} className="desktop:w-[361px] desktop:h-[512px] max-w-sm bg-slate-100 rounded-lg shadow-md py-[20px] px-[16px]">
                <a href={post.href}>
                    <img className="rounded-lg w-full mb-4" src={post.imageUrl} alt="" />
                </a>
                <span className="bg-blue text-white text-[12px] mr-2 px-2.5 py-1 rounded">{post.category}</span>
                <br />
                <div className="space-y-4 mt-4">
                    <a href={post.href}>
                        <h5 className="text-[28px] font-normal text-gray-900 dark:text-white">{post.title}</h5>
                    </a>
                    <a href={post.href} type="button" className="group text-black bg-transparent hover:bg-peach hover:text-white border-b border-black font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            View More
                            <svg className="w-3.5 h-3.5 ml-2 text-peach group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                    </a>
                </div>
            </div>
            
            ))}
            </div>
        </div>
        </>

    )
  }
  
  export default newsPage