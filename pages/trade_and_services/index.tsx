import React, {useEffect, useState} from "react"
import Header from "module/BasicLayout/Header"
import BreadCrumb from "../geothermal/component/breadcrumb"
import Product from "../geothermal/component/card"
import Speciality from "../geothermal/component/speciality"
import Services from "../geothermal/component/services"
import Footer from "module/BasicLayout/Footer"
import Enviromental from "./component/enviromental"
import ImageJumbotron from "../../reusables/ImageJumbotron";

const Geothermal = () => {
  const [pageData, setPageData] = useState();

  const callPageApi = async () => {
    try {
      const res = await fetch(`https://miib670e.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "trade"]`);
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
            <BreadCrumb slug={'Trade and Services'}/>
          </div>
          <Product description={pageData && pageData.description}/>
          <div className="pt-14">
            <Speciality data={pageData && pageData.specialties}/>
          </div>
          <div className="pt-14 space-y-8">
            <Services data={pageData && pageData.services}/>
            <Enviromental data={pageData && pageData.equipments}/>
          </div>
        </div>
        <div className="pt-24">
          <Footer/>
        </div>

      </>
  )
}
export default Geothermal
