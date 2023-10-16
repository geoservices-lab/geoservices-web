
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
            <div className="grid mx-auto mt-10 grid-cols-1 gap-x-4 gap-y-8 desktop:grid-cols-3">
            {posts.map((post) => (

            <div key={post.id} className="max-w-sm bg-slate-100 rounded-lg shadow-md">
                <a href={post.href}>
                    <img className="rounded-lg w-full mb-4" src={post.imageUrl} alt="" />
                </a>
                <div className="px-4">
                    <span className="bg-blue text-white text-[12px] mr-2 px-2.5 py-1 rounded">{post.category}</span>
                    <br />
                    <div className="py-4">
                        <a href={post.href}>
                            <h5 className="text-[18pt] font-normal text-gray-900 dark:text-white">{post.title}</h5>
                        </a>
                        <br />
                        <a href={post.href} type="button" className="group text-black bg-transparent hover:bg-peach hover:text-white border-b border-black font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center">
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
        </div>
        </>

    )
  }
  
  export default newsPage