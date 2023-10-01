import React, { useState, useEffect } from "react";
import { API_BASE_URL, API_KEY } from "../../pageConstant/general";
import SanityImage from "../../reusables/SanityImage/SanityImage.comp";

const news = [
    {
      image:
        "https://www.geoservices.co.id/wp-content/uploads/2022/10/Geoservices-Booth-1300x720.jpg",
      category: "News",
      title: "PT Geoservices at IPA 2022 Convention",
      action: "Watch",
      url: "/news/pt-geoservices-ipa-2022-convention",
    },
    {
      image:
        "https://www.geoservices.co.id/wp-content/uploads/2019/04/Mineral-analysis.jpg",
      title:
        "Webinar Series With Theme ” The Age of Digital Transformation Part 2",
      category: "Event",
      action: "Read",
        url: "/news/pt-geoservices-ipa-2022-convention",
    },
    {
      image:
        "https://www.geoservices.co.id/wp-content/uploads/2019/04/Mineral-analysis.jpg",
      category: "Video",
      title: "Sludge Oil Liquefaction System (Sols) With Paralax(R)",
      action: "Watch",
        url: "/news/pt-geoservices-ipa-2022-convention",
    },
    {
      image:
        "https://www.geoservices.co.id/wp-content/uploads/2022/10/Geoservices-Booth-1300x720.jpg",
      category: "News",
      title: "PT Geoservices at IPA 2022 Convention",
      action: "Watch",
      url: "/news/pt-geoservices-ipa-2022-convention",
    },
    {
      image:
        "https://www.geoservices.co.id/wp-content/uploads/2019/04/Mineral-analysis.jpg",
      title:
        "Webinar Series With Theme ” The Age of Digital Transformation Part 2",
      category: "Event",
      action: "Read",
        url: "/news/pt-geoservices-ipa-2022-convention",
    },
    {
      image:
        "https://www.geoservices.co.id/wp-content/uploads/2019/04/Mineral-analysis.jpg",
      category: "Video",
      title: "Sludge Oil Liquefaction System (Sols) With Paralax(R)",
      action: "Watch",
        url: "/news/pt-geoservices-ipa-2022-convention",
    },

  ];

const NewsUpdate = ({ category, title, action, url, banner }:any) => {
    return (
        <>
            <div
                className="flex-none mr-8 md:pb-4 scrolling-touch"
            >
                <div className="relative max-w-xs bg-slate-100 rounded-lg shadow-md py-[20px] px-[16px]"
                style={{
                    height: 500,
                }}>
                <a className="block" href={url}>
                    {banner && <SanityImage
                        image={banner}
                        style={{
                            height: 160,
                            objectFit: 'cover',
                            marginTop: 0,
                            marginBottom: 20,
                        }}
                    />}
                </a>
                <span className="bg-blue text-white text-[12px] mr-2 px-2.5 py-1 rounded uppercase">{category}</span>
                <br />
                <div className="space-y-4 mt-4">
                    <h5 className="text-[24px] font-normal text-gray-900">{title}</h5>
                </div>
                    <div className="absolute bottom-0 pb-4">
                        <a href={url} type="button" className="group text-black bg-transparent hover:bg-peach hover:text-white border-b border-black font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center">
                            {action}
                            <svg className="w-3.5 h-3.5 ml-2 text-peach group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
            </div>
            </div>
        </>
    )
}

const LatestUpdateSection = () => {
    const [contentData, setContentData] = useState();

    const callContentApi = async () => {
        try {
            const res = await fetch(`https://miib670e.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "news"]`);
            const data = await res.json();
            const content = data && data.result;
            setContentData(content);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        callContentApi();
    }, []);

    return(
        <>
        <div className="max-w-7xl container mx-auto desktop:py-32">
            <div className="inline-flex items-center pb-4">
                <span className="mobile:hidden h-2 w-14 bg-blue"></span>
                <h1 className="desktop:text-[50px] desktop:ml-[60px] desktop:text-left ml-16 text-[36px] font-bold text-center leading-10 text-peach">
                    Latest Update
                </h1>
            </div>
            <br /><br />
            <div
                className="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mb-8 pb-8"
                >
                {contentData &&
                    contentData.map((item, index) => {
                        return (
                            <NewsUpdate
                                key={index}
                                category={item.category}
                                title={item.title}
                                action={'Read More'}
                                url={item.slug ? `/news/${item.slug}` : "/"}
                                banner={item.banner}
                            />
                        )
                    })}
              </div>
        </div>
        </>
    )
}

export default LatestUpdateSection
