import React, {useEffect, useState} from "react"
import Banner from "./component/banner"
import Header from "module/BasicLayout/Header"
import BreadCrumb from "./component/breadcrumb"
import Product from "./component/card"
import Speciality from "./component/speciality"
import Services from "./component/services"
import Footer from "module/BasicLayout/Footer"
import Equipments from "./component/equipments"
import ImageJumbotron from "../../reusables/ImageJumbotron";

const Geothermal = () => {
    const [pageData, setPageData] = useState();

    const callPageApi = async () => {
        try {
            const res = await fetch(`https://miib670e.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "geothermal"]`);
            const data = await res.json();
            setPageData(data.result[0]);
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
        <ImageJumbotron imageSrc={pageData && pageData.image} text={pageData && pageData.title} />
        <div className='max-w-7xl mx-auto px-4 space-y-8'>
            <div className='mobile:hidden'>
                <BreadCrumb/>
            </div>
            <Product description={pageData && pageData.description}/>
            <div className="pt-14">
                <Speciality data={pageData && pageData.specialties}/>
            </div>
            <div className="pt-14 space-y-8">
                <Services data={pageData && pageData.services}/>
                <Equipments data={pageData && pageData.equipments}/>
            </div>
        </div>
        <div className="pt-24">
            <Footer/>
        </div>

        </>
    )
}
export default Geothermal
