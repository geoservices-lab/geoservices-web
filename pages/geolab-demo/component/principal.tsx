import React from 'react'
const posts = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, laboriosam!',
      imageUrl: "https://source.unsplash.com/FXJf8y_cZA0",
    },
    // More posts...
    {
        id: 2,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, laboriosam!',
        imageUrl: "https://source.unsplash.com/FXJf8y_cZA0",
    },
    {
        id: 3,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, laboriosam!',
        imageUrl: "https://source.unsplash.com/FXJf8y_cZA0",
    },
        // More posts...
        {
            id: 4,
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, laboriosam!',

            imageUrl: "https://source.unsplash.com/FXJf8y_cZA0",
        },
  ]


const Principal = () => {
    return(
        <>
        <h1 className='capitalize font-bold text-[24px] leading-[36px]'>principals</h1>
        <div className="grid mx-auto mt-10 grid-cols-1 gap-x-4 gap-y-4 border-t border-gray pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none desktop:grid-cols-3">
            {posts.map((post) => (
                <div key={post.id} className="max-w-sm rounded-lg shadow-md border-gray p-8">
                    <a>
                        <img className="rounded-lg w-full mb-4" src={post.imageUrl} alt="" />
                    </a>
                    <p className="text-[16px] text-justify font-normal mr-2 rounded">{post.title}</p>
                    <br />
                    <div className="flex justify-between">
                        <button className='hover:scale-105'>
                            <p className='text-blue capitalize'>request quotation</p>
                        </button>
                        <button className='hover:scale-105'>
                            <p className='text-blue capitalize'>view details</p>
                        </button>
                    </div>
                </div>  
            ))}
        </div>
        </>
    )
}

export default Principal