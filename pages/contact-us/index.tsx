import Header from 'module/BasicLayout/Header'
import React from 'react'
import Banner from './component/banner'
import ContactUs from './component/contact-us'
import Footer from "../../module/BasicLayout/Footer";

export default function ContactUS () {
    return (
        <>
        <Header/>
        <Banner/>
        <ContactUs/>
        <div className='pt-64'>
            <Footer/>
        </div>
        </>
    )
}
