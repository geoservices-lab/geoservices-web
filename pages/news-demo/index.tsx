import React from "react"
import Header from "module/BasicLayout/Header"
import Footer from "pages/home-demo/component/footer"
import NewsPage from "./component/news-card"
import Banner from "./component/banner"

export default function News() {
    return (
        <>
        <Header />
        <Banner/>
        <NewsPage />
        <div className="pt-32">
            <Footer />
        </div>
        
        </>
    )
}