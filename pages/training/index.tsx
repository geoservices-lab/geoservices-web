import React, {useEffect, useState} from 'react'
import Header from 'module/BasicLayout/Header'
import Banner from './component/banner-training'
import Footer from "../../module/BasicLayout/Footer"
import BreadCrumb from './component/breadcrumb'
import Schedule from './component/schedule'

export default function Training() {
    const [pageData, setPageData] = useState();

    const callPageApi = async () => {
        try {
            const res = await fetch(`https://miib670e.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "training"]`);
            const data = await res.json();
            const currentPage = data.result;
            setPageData(currentPage);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        callPageApi();
    },[]);

    console.log(pageData);

    return (
        <>
            <Header/>
            <Banner/>
            <div className='max-w-7xl mx-auto px-4 space-y-8'>
                <div className='mobile:hidden'>
                    <BreadCrumb/>
                </div>
                <div>
                    <h1 className={'text-peach m-5'} style={{
                        fontSize: 20,
                        textTransform: 'uppercase'
                    }}>
                        Latest Training
                    </h1>
                    <Schedule data={pageData && pageData} />
                </div>

            </div>
            <div className="pt-28">
                <Footer />
            </div>
        </>
    )

}
