import React from 'react';
import Header from "../../module/BasicLayout/Header";
import Banner from './Component/banner';
import Desc from './Component/desc-about';
import Footer from 'pages/home-demo/component/footer';

export default function AboutUs() {
    return (
        
        <div>
            <Header />
            <Banner />
            <Desc />
            <br /><br />
            <Footer />
        </div>
    )
}
