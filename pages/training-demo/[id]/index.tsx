import Header from "module/BasicLayout/Header";
import React from "react";
import TrainingSection from "../component/training-page";
import Footer from "pages/home-demo/component/footer";

export default function TrainingPage () {
    return (
        <>
        <Header/>
        <div className="max-w-7xl mx-auto pt-14 px-8">
            <TrainingSection/>
        </div>
        <div className="pt-32">
            <Footer />
        </div>
        </>
    )
}