import React from "react";

const Quotes = () => {
    return (
        <>
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-7xl desktop:flex">
                <img className="desktop:w-1/4 w-1/2 rounded-md " src="https://source.unsplash.com/7YVZYZeITc8" alt="dashboard image"/>
                <div>
                <h2 className="mb-4 desktop:text-[32pt] text-[24pt] tracking-wide font-extrabold text-peach">Foreword</h2>
                <blockquote className="p-4 my-4 border-l-4 border-peach">
                    <p className="dekstop:text-[21pt] text-[12pt] italic font-medium leading-relaxed text-gray">" Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, illo suscipit porro beatae nostrum animi alias tempore quibusdam sunt aliquam non reiciendis quos, unde vel? "</p>
                </blockquote>
                    <p className="mb-6 font-light text-gray text-[14pt]">- Peter Pratama ( President )</p>
                </div>
            </div>
        </>
    )
}

export default Quotes 