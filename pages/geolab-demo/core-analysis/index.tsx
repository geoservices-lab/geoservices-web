import Header from 'module/BasicLayout/Header'
import React from 'react'
import Banner from '../component/banner-ca'
import BreadCrumb from '../component/breadcrumb-ca'
import ProductCA from '../component/product-ca'

export default function CoreAnalysis () {
    return(
        <>
        <Header/>
        <Banner/>
        <div className="mobile:hidden">
            <BreadCrumb/>
        </div>
        
        <div className='pb-32'>
            <ProductCA/>
        </div>

        </>
    )
}