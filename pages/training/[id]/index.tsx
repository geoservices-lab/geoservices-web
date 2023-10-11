import Header from "module/BasicLayout/Header";
import React, {useEffect, useState} from "react";
import TrainingSection from "../component/training-page";
import Footer from "../../../module/BasicLayout/Footer"
import {useRouter} from "next/router";

export default function TrainingPage () {
    const router = useRouter();
    const [product, setProductData] = useState();

    const callAPI = async (setProductData: Function) => {
        try {
            const res = await fetch(`https://miib670e.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "training"]`);
            const data = await res.json();
            const currentPage = data.result.filter((item: any) => item.title === router.query.id.replaceAll('-', ' '));
            setProductData(currentPage[0]);
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
        <div className="mobile:mt-[40px] max-w-7xl mx-auto pt-14 px-8">
            <TrainingSection data={product} />
        </div>
        <div className="pt-28">
            <Footer />
        </div>
        </>
    )
}
