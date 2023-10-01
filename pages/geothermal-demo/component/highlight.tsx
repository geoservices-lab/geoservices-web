import React from 'react'
const posts = [
    {
      id: 1,
      title: 'Core analysis',
      href: '/geolab-demo/core-analysis',
      imageUrl: "https://source.unsplash.com/FXJf8y_cZA0",
    },
    // More posts...
    {
        id: 2,
        title: 'Sludge Oil Liquefaction System (Sols) With Paralax(R)',
        href: '/news-demo/1',
        imageUrl: "https://source.unsplash.com/FXJf8y_cZA0",
    },
    {
        id: 3,
        title: 'Sludge Oil Liquefaction System (Sols) With Paralax(R)',
        href: '/news-demo/1',
        imageUrl: "https://source.unsplash.com/FXJf8y_cZA0",
    },
    // More posts...
    {
        id: 4,
        title: 'Sludge Oil Liquefaction System (Sols) With Paralax(R)',
        href: '/news-demo/1',
        imageUrl: "https://source.unsplash.com/FXJf8y_cZA0",
    },
    {
        id: 1,
        title: 'Core analysis',
        href: '/geolab-demo/core-analysis',
        imageUrl: "https://source.unsplash.com/FXJf8y_cZA0",
      },
      // More posts...
      {
          id: 2,
          title: 'Sludge Oil Liquefaction System (Sols) With Paralax(R)',
          href: '/news-demo/1',
          imageUrl: "https://source.unsplash.com/FXJf8y_cZA0",
      },
      {
          id: 3,
          title: 'Sludge Oil Liquefaction System (Sols) With Paralax(R)',
          href: '/news-demo/1',
          imageUrl: "https://source.unsplash.com/FXJf8y_cZA0",
      },
      // More posts...
      {
          id: 4,
          title: 'Sludge Oil Liquefaction System (Sols) With Paralax(R)',
          href: '/news-demo/1',
          imageUrl: "https://source.unsplash.com/FXJf8y_cZA0",
      },
  ]

const Highlight = () =>{
    return(
        <>
        <h1 className='capitalize font-bold text-[24px] text-peach'>highlight services</h1>
        <div
            className="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start"
            >
            {posts.map((post) => (
            <div
            className="flex-none mr-4 md:pb-4"
            >
            <div key={post.id} className="max-w-[250px] rounded-lg dark:bg-gray-800 dark:border-gray-700">
                <a href={post.href}>
                    <img className="rounded-lg mb-4" src={post.imageUrl} alt="" />
                </a>
                <p className="text-[16px] font-normal mr-2 rounded dark:text-blue-300">{post.title}</p>
                <br />
            </div>
            </div>
            ))}
        </div>
        </>
    )
}

export default Highlight