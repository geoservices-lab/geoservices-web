import React, { useEffect, useState } from 'react'
import Header from 'module/BasicLayout/Header'
import ListCareer from './component/list-career'
import Footer from "../../module/BasicLayout/Footer";
import ImageJumbotron from "../../reusables/ImageJumbotron";

export default function Career () {
    const [pageData, setPageData] = useState();

    const callPageApi = async () => {
        try {
            const res = await fetch(`https://miib670e.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "pages"]`);
            const data = await res.json();
            const currentPage = data.result.filter((item: any) => item.slug === 'career');
            setPageData(currentPage[0]);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        callPageApi();
    }, []);

    return (
        <>
        <Header/>
        <ImageJumbotron imageSrc={pageData && pageData.banner} text={pageData && pageData.title} />
        <ListCareer/>
        <div className='pt-32'>
            <Footer/>
        </div>
        </>
    )
}
