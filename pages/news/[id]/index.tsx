import React, {useEffect, useState} from "react"
import Header from "module/BasicLayout/Header"
import Banner from "../component/banner"
import Desc from "pages/about-us/Component/desc-about"
import Footer from "../../../module/BasicLayout/Footer"
import {useRouter} from "next/router";
import ImageJumbotron from "../../../reusables/ImageJumbotron";

export default function PageNews () {
    const router = useRouter();
    const [news, setNewsData] = useState();

    const callAPI = async () => {
        try {
            const res = await fetch(`https://miib670e.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "news"]`);
            const data = await res.json();
            const currentPage = data.result.filter((item: any) => item.slug === router.query.id);
            setNewsData(currentPage[0]);
        } catch (err) {
            console.log(err);
        }
    };

    console.log(news);

    useEffect(() => {
        callAPI();
    }, []);

    return (
        <>
            <Header/>
            <ImageJumbotron
                imageSrc={news && news.banner}
                text={news && news.title}
            />
            <Desc desc={news && news.content}/>
            <div className="pt-28">
                <Footer/>
            </div>
        </>
    )
}
