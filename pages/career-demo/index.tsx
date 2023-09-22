import React from 'react'
import Banner from './component/banner'
import Header from 'module/BasicLayout/Header'
import ListCareer from './component/list-career'
import Footer from 'pages/home-demo/component/footer'


export default function Career () {
    return (
        <>
        <Header/>
        <Banner/>
        <ListCareer/>
        <div className='pt-32'>
            <Footer/>
        </div>
        </>
    )
}