import { Alert, Badge } from 'flowbite-react'
import React from 'react'
const posts = [
    {
      id: 1,
      title: 'Core Drilling',
      category: 'Upstream',
      href: '/news-demo/1',
      imageUrl:
      "https://source.unsplash.com/FXJf8y_cZA0",
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sequi ullam laborum animi modi quia inventore, tempora alias iusto deserunt.'
    },
    {
        id: 1,
        title: 'Core Drilling',
        category: 'Upstream',
        href: '/news-demo/1',
        imageUrl:
        "https://source.unsplash.com/FXJf8y_cZA0",
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sequi ullam laborum animi modi quia inventore, tempora alias iusto deserunt.'
      },
      {
        id: 1,
        title: 'Core Drilling',
        category: 'Upstream',
        href: '/news-demo/1',
        imageUrl:
        "https://source.unsplash.com/FXJf8y_cZA0",
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sequi ullam laborum animi modi quia inventore, tempora alias iusto deserunt.'
      },
]


const Search = () => {
    return(
        <>
        <div className='max-w-7xl mx-auto pt-12 mobile:px-8'>
            <Alert color="info">
                <span>
                    <p>
                    Search results for
                    <span className="font-medium ml-2">
                    “core drilling”
                    </span>
                    </p>
                </span>
            </Alert>

            <div className='flex-col space-y-8 pt-12 desktop:w-1/2'>
            {posts.map((post) => (
                <div>
                    <img src={post.imageUrl}/>
                    <h1 className="font-bold text-32">
                        {post.title}
                    </h1>
                    <p className='text-gray'>
                        {post.desc}
                    </p>
                    <br />
                    <span className="bg-blue text-white text-[12px] mr-2 px-2.5 py-1 rounded">{post.category}</span>
                    <br /><br />
                    <a href={post.href} type="button" className="group text-black hover:bg-peach hover:text-white border-b border-black font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                          Read More
                            <svg className="w-3.5 h-3.5 ml-2 text-peach group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                    </a>

                </div>
            ))}                
            </div>
            
        </div>
        </>
    )
}

export default Search