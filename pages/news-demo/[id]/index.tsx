import React from "react"
import Header from "module/BasicLayout/Header"
import Banner from "../component/banner"
import Desc from "pages/about-us/Component/desc-about"
import Footer from "pages/home-demo/component/footer"

export default function PageNews () {
    return (
        <>
            <Header/>
            <Banner/>
            <Desc />
            <div className="mt-32">
                <Footer/>
            </div>
        </>
    )
}