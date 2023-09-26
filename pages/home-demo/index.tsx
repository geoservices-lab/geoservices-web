import React from "react"
import Header from "module/BasicLayout/Header"
import Features from "./component/features"
import HomeBanner from "./component/home-banner"
import Speciality from "./component/speciality"
import NewsUpdate from "./component/news-update"
import TrainingUpdate from "./component/training-update"
import Footer from "../../module/BasicLayout/Footer"

export default function Home() {
    return (
    <>
        <div>
            <Header />
            <HomeBanner />
            <Features />
        </div>
        <div className="mt-48">
            <Speciality />
            <div className="mt-48"></div>
            <NewsUpdate />
            <br /><br />
            <TrainingUpdate />
        </div>
        <footer>
            <Footer />
        </footer>
    </>
    )
}
