import React from 'react'
import Header from 'module/BasicLayout/Header'
import Footer from 'module/BasicLayout/Footer'
import Banner from './component/banner-training'
import Calendar from './component/full-calendar'

export default function Training() {
    return (
        <>
            <Header/>
            <Banner/>
            <Calendar/>
            <br /><br /><br /><br />
            <Footer/>
        </>
    )

}
