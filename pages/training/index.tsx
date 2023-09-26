import React from 'react'
import Header from 'module/BasicLayout/Header'
import Banner from './component/banner-training'
import Footer from "../../module/BasicLayout/Footer"
import BreadCrumb from './component/breadcrumb'
import Schedule from './component/schedule'

export default function Training() {
    return (
        <>
        <Header/>
        <Banner/>
        <div className='max-w-7xl mx-auto px-4 space-y-8'>
            <div className='mobile:hidden'>
                <BreadCrumb/>
            </div>
            <div>
                <Schedule/>
            </div>

        </div>
        <div className="pt-32">
            <Footer />
        </div>
        </>
    )

}
