import React, {useEffect, useState} from 'react'
import Header from 'module/BasicLayout/Header'
import Banner from './component/banner-training'
import Footer from "../../module/BasicLayout/Footer"
import BreadCrumb from './component/breadcrumb'
import Schedule from './component/schedule'
import {useRouter} from "next/router";

export default function Training() {
    const [product, setProductData] = useState();

    const callAPI = async (setProductData: Function) => {
        try {
            const res = await fetch(`https://miib670e.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "training"]`);
            const data = await res.json();
            const currentPage = data.result;
            setProductData(currentPage);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        callAPI(setProductData);
    }, []);

    return (
        <>
        <Header/>
        <Banner/>
        <div className='max-w-7xl mx-auto px-4 space-y-8'>
            <div className='mobile:hidden'>
                <BreadCrumb/>
            </div>
            <div>
                <Schedule data={product}/>
            </div>

        </div>
        <div className="pt-28">
            <Footer />
        </div>
        </>
    )

}
