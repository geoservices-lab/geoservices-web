import React from 'react'
import Header from 'module/BasicLayout/Header'
import Footer from 'module/BasicLayout/Footer'
import Banner from '../component/banner-training'
import Example from '../component/full-calendar'

export default function Training() {
    return (
        <>
        <Header/>
        <Banner/>
        <Example/>
        <br /><br /><br /><br />
        <Footer/>
        </>
    )

}