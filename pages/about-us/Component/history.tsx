import React from "react";

const History = () => {
    return (
        <>
            <div className="gap-16 items-center py-8 mx-auto max-w-7xl grid grid-cols-1 desktop:grid-cols-2 px-8">
                <div>
                    <h2 className="mb-4 desktop:text-[32pt] text-[24pt] tracking-wide font-extrabold text-peach">Our History</h2>
                    <p className="font-light text-gray text-[14pt] text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias quae in optio nam necessitatibus! In magni laboriosam impedit nisi cum, est molestiae eos odit aliquid. Cumque minus reiciendis labore, quod ullam quisquam blanditiis itaque, possimus omnis, ducimus consequatur suscipit? Magnam perspiciatis iure aliquid ducimus eos aliquam voluptates accusantium harum ipsum. Distinctio nisi, sit assumenda harum quae autem cupiditate a beatae eius quam natus esse et, temporibus facilis, asperiores praesentium suscipit nulla eligendi quos sequi quod error iste. Tempora, at? Ipsa minima ut sit maiores unde dignissimos, nemo esse cum minus beatae voluptatum? Voluptatem autem aliquam quam officia iusto quisquam? <br />
                    <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus cumque impedit est vel architecto corporis recusandae possimus quod, cum distinctio quibusdam qui accusantium voluptatum tenetur fugiat, autem unde veritatis atque iste? Pariatur, quas! Dignissimos ex voluptatum adipisci a, tempora non corrupti, inventore reprehenderit ipsum totam officiis expedita aliquam odit ducimus!</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1"/>
                    <img className="mt-16 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2"/>
                </div>
            </div>
        </>
    )
}

export default History