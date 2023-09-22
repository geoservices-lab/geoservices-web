import React, { useState, useEffect } from "react";
import { API_BASE_URL, API_KEY } from "../../pageConstant/general";

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

const NewsUpdate = ({ category, title, action, url, image }:any) => {
    const [pageData, setPageData] = useState();
    const [contentData, setContentData] = useState();

    const callPageApi = async () => {
        try {
            const res = await fetch(`https://miib670e.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "news"]`);
            const data = await res.json();
            const currentPage = data.result.filter((item: any) => item.slug === 'training');
            setPageData(currentPage[0]);
        } catch (err) {
            console.log(err);
        }
    };

    const callContentApi = async () => {
        try {
            const res = await fetch(`https://miib670e.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "training"]`);
            const data = await res.json();
            const content = data && data.result;
            setContentData(content);
        } catch (err) {
            console.log(err);
        }
    };

    console.log(contentData && contentData);

    useEffect(() => {
        callPageApi();
        callContentApi();
    }, []);

    return (
        <>
            <div
                className="flex-none mr-8 md:pb-4"
                >
                <div className="max-w-xs bg-slate-100 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 py-[20px] px-[16px]">
                <a href={url}>
                    <img className="rounded-lg w-full mb-4" src={image} alt="" />
                </a>
                <span className="bg-blue text-white text-[12px] mr-2 px-2.5 py-1 rounded">{category}</span>
                <br />
                <div className="space-y-4 mt-4">
                    <h5 className="text-[28px] font-normal text-gray-900 dark:text-white">{title}</h5>
                    <a href={url} type="button" className="group text-black bg-transparent hover:bg-peach hover:text-white border-b border-black font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
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
    const [newsData, setNewsData] = useState([]);

  const callAPI = async ({setNewsData}:any) => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/news?populate=deep`, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      });
      const data = await res.json();
      setNewsData(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callAPI(setNewsData);
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
                {news &&
                    news.map((item, index) => (
                        <NewsUpdate
                        key={index}
                        category={item.category}
                        title={item.title}
                        action={item.action}
                        url={item.url || ""}
                        image={item.image}
                        />
                    ))}
              </div>
        </div>
        </>
    )
}

export default LatestUpdateSection
