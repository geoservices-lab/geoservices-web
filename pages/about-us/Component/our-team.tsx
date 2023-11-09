import React from "react";

const posts1 = [
    {
      name: 'Ong Han Lin',
      tittle: 'Founder',
      imageUrl: "https://source.unsplash.com/7YVZYZeITc8",
    },
    {
    name: 'Durban Latief',
    tittle: 'Founder / ...',
    imageUrl: "https://source.unsplash.com/jmURdhtm7Ng",
    },    
]


const posts = [
    {
      name: 'Peter A. Pranama, MBA',
      tittle: 'President',
      imageUrl: "../assets/pak peter.png",
    },
    {
    name: 'Arifin Pranoto',
    tittle: 'Vice President',
    imageUrl: "../assets/pak peter.png",
    },
    {
    name: 'Danundra Sutesio',
    tittle: 'Director',
    imageUrl: "../assets/pak peter.png",
    },
    
]

const Ourteam = () => {
    return (
        <>
        <div>
            <div className="py-8 px-4 max-w-7xl mx-auto text-left">
                <div className="mx-auto mb-8 px-4">
                    <h2 className="mb-4 desktop:text-[32pt] text-[24pt] tracking-wide font-extrabold text-peach">Founder</h2>
                    <p className="font-light text-gray text-[14pt] text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt impedit ducimus nemo! Iure, porro nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem temporibus asperiores labore repellendus eveniet esse magnam nemo fugiat mollitia? Veritatis. <br /><br />Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, aliquid quaerat. Dicta placeat reiciendis exercitationem maiores ea, delectus reprehenderit dolorem ipsam quo alias, mollitia sapiente iste sed quos impedit architecto quaerat illo provident est eveniet. Inventore eaque architecto corrupti enim.</p>
                </div>
                
                <div className="grid gap-8 desktop:gap-16 max-w-xl mx-auto grid-cols-2 desktop:py-8">
                    {posts1.map((post) => (
                    <div className="text-center text-white bg-peach rounded-md">
                        <img className="mx-auto rounded-md" src={post.imageUrl} alt="Bonnie Avatar"/>
                        <div className="py-2">
                            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                            {post.name}
                            </h3>
                            <p>{post.tittle}</p>
                        </div>
                    </div>
                    ))}
                </div>
                <br /><br />
                <div className="mx-auto mb-8 px-4">
                    <h2 className="mb-4 desktop:text-[32pt] text-[24pt] tracking-wide font-extrabold text-peach">Management Team</h2>
                    <p className="font-light text-gray text-[14pt] text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt impedit ducimus nemo! Iure, porro nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem temporibus asperiores labore repellendus eveniet esse magnam nemo fugiat mollitia? Veritatis.</p>
                </div>
                <div className="grid gap-8 desktop:gap-16 max-w-4xl mx-auto grid-cols-2 desktop:grid-cols-3 desktop:py-8">
                    {posts.map((post) => (
                    <div className="bg-peach rounded-md">
                        <img className="rounded-t" src={post.imageUrl} alt="Bonnie Avatar"/>
                        <div className="my-2 ml-4 text-white">
                            <h3 className="text-2xl font-bold tracking-tight">
                            {post.name}
                            </h3>
                            <p>{post.tittle}</p>
                        </div>
                    </div>
                    ))}
                </div>
                
            </div>
        </div>
        </>
    )
}

export default Ourteam