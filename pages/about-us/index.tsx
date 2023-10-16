import React, {useEffect, useState} from 'react';
import Header from "../../module/BasicLayout/Header";
import Desc from './Component/desc-about';
import Footer from "../../module/BasicLayout/Footer";
import ImageJumbotron from "../../reusables/ImageJumbotron";
import Ourteam from './Component/our-team';
import History from './Component/history';
import Quotes from './Component/quotes';



export default function AboutUs() {
    const [pageData, setPageData] = useState();

    const callPageApi = async () => {
        try {
            const res = await fetch(`https://miib670e.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "pages"]`);
            const data = await res.json();
            const currentPage = data.result.filter((item: any) => item.slug === 'about-us');
            setPageData(currentPage[0]);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        callPageApi();
    }, []);

    return (
        <div>
            <Header />
            <ImageJumbotron
                imageSrc={pageData && pageData.banner}
                text={pageData && pageData.title}
            />
            <Quotes/>
            <br />
            <History/>
            <br />
            <hr className='max-w-7xl text-peach mx-auto'/>
            <br />
            <Ourteam/>
            
            {/* <Desc desc={pageData && pageData.description}/> */}
            <div className="pt-28">
                <Footer />
            </div>
        </div>
    )
}
