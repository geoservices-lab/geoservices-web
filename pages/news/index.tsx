import React from "react"
import Header from "module/BasicLayout/Header"
import Footer from "../../module/BasicLayout/Footer"
import NewsPage from "./component/news-card"
import Banner from "./component/banner"
import Awards from "./component/awards"
import Certificates from "./component/certificates"
import CompanyProfile from "./component/company-media"

export default function News() {
    return (
        <>
        <Header />
        <Banner/>
        <NewsPage />
        <Awards/>
        <Certificates/>
        <CompanyProfile/>
        <div className="pt-28">
            <Footer />
        </div>

        </>
    )
}
