import React from "react"
import Banner from "./component/banner"
import Header from "module/BasicLayout/Header"
import BreadCrumb from "./component/breadcrumb"
import Highlight from "./component/highlight"
import Product from "./component/card"
import Speciality from "./component/speciality"
import Services from "./component/services"
import Footer from "module/BasicLayout/Footer"
import Equipments from "./component/equipments"

const Geothermal = () => {
    return (
        <>
        <Header/>
        <Banner/>
        <div className='max-w-7xl mx-auto px-4 space-y-8'>
            <div className='mobile:hidden'>
                <BreadCrumb/>
            </div>
            <Product/>
            <div className="pt-14">
                <Speciality/>
            </div>
            <div className="pt-14 space-y-8">
                <Services/>
                <Equipments/>
            </div>
        </div>
        <div className="pt-24">
            <Footer/>
        </div>

        </>
    )
}
export default Geothermal