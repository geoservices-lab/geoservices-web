import Header from 'module/BasicLayout/Header'
import React from 'react'
import Banner from './component/banner'
import BreadCrumb from './component/breadcrumb'
import Product from './component/card-product'
import Highlight from './component/highlight'
import Principal from './component/principal'
import AccordionFlush from './component/accordion'
import Footer from "../../module/BasicLayout/Footer"


export default function Geolab () {
    return (
        <>
            <Banner/>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='mobile:hidden'>
                    <BreadCrumb/>
                </div>

                <br /><br />
                <Product/>
                <br /><br />
                <Highlight/>
                <br /><br />
                <Principal/>
                <br /><br />
                {/* <AccordionFlush/> */}
            </div>
            <div className="pt-32">
                <Footer/>
            </div>
        </>
    )
}
