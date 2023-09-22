
import React from "react"

const posts = [
    {
      id: 1,
      title: 'Sludge Oil Liquefaction System (Sols) With Paralax(R)',
      href: '/news-demo/1',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
        "https://source.unsplash.com/FXJf8y_cZA0",
      },
    },
    // More posts...
    {
        id: 2,
        title: 'Sludge Oil Liquefaction System (Sols) With Paralax(R)',
    },
    {
        id: 3,
        title: 'Sludge Oil Liquefaction System (Sols) With Paralax(R)',
    },
    // More posts...
    {
        id: 4,
        title: 'Sludge Oil Liquefaction System (Sols) With Paralax(R)',
    },
    {
        id: 5,
        title: 'Sludge Oil Liquefaction System (Sols) With Paralax(R)',
    },
]
  
  const ProductCA = () => {
    return (
        <>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid mx-auto mt-10 grid-cols-1 gap-x-4 gap-y-[20px] desktop:gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none desktop:grid-cols-3">
            {posts.map((post) => (

            <div key={post.id} className="desktop:w-[353px] desktop:h-[153px] max-w-sm bg-slate-100 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 py-[20px] px-[16px]">
                <h1 className="text-gray text-[24px] font-normal mr-2">{post.title}</h1>
            </div>
            
            ))}
            </div>
        </div>
        </>

    )
  }
  
  export default ProductCA