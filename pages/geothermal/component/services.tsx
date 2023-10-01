import React from 'react'
const posts = [
    {
      id: 1,
      title: 'Well Measurement',
      desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, laboriosam!',
      imageUrl: "https://source.unsplash.com/zAITDJYV09w",
    },
    // More posts...
    {
        id: 2,
        title: 'Production testing',
          desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, laboriosam!',
        imageUrl: "https://source.unsplash.com/zAITDJYV09w",
    },
    {
        id: 3,
        title: 'Calibration and repair',
         desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, laboriosam!',
        imageUrl: "https://source.unsplash.com/zAITDJYV09w",
    },
    // More posts...
    {
        id: 4,
        title: 'Valve maintenance',
         desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, laboriosam!',

        imageUrl: "https://source.unsplash.com/zAITDJYV09w",
    },
    {
        id: 3,
        title: 'H2S safe monitoring',
         desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, laboriosam!',
        imageUrl: "https://source.unsplash.com/DP0BP-x3MDU",
    },
    // More posts...
    {
        id: 4,
        title: 'Well Measurement',
         desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, laboriosam!',

        imageUrl: "https://source.unsplash.com/DP0BP-x3MDU",
    },
  ]


const Services = () => {
    return(
        <>
        <h1 className='capitalize font-bold text-[32px]'>services</h1>
        <div className="grid grid-cols-1 gap-x-4 gap-y-16 border-t border-gray pt-10 desktop:grid-cols-3 ">
            {posts.map((post) => (
                <div key={post.id} className="max-w-md rounded-lg shadow-md border-gray">
                    <a>
                        <img className="rounded-lg w-full mb-4" src={post.imageUrl} alt="" />
                    </a>
                    <div className='px-4'>
                        <h1 className="text-[16px] text-justify font-bold mr-2 capitalize">{post.title}</h1>
                        <p className='text-[14px] text-justify mt-4'>{post.desc}</p>
                        <br />
                        <div className="flex justify-between text-[14px] mb-8">
                            <button className='hover:scale-105'>
                                <p className='text-blue capitalize'>request quotation</p>
                            </button>
                            <button className='hover:scale-105'>
                                <p className='text-blue capitalize'>view details</p>
                            </button>
                        </div>
                    </div>
                        
                </div>  
            ))}
        </div>

        </>
    )
}

export default Services