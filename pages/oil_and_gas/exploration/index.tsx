import React, { useEffect, useState } from "react";
import { Container } from "@nextui-org/react";
import Header from "../../../module/BasicLayout/Header";
import ImageJumbotron from "../../../reusables/ImageJumbotron";
import BreadCrumbLine from "../../../reusables/BreadcrumbLine";
import Contact from "../../../reusables/Contact/Contact";
import Footer from "../../../module/BasicLayout/Footer";
import BoxItem from "../../../reusables/BoxItem/BoxItem";
import { useRouter } from "next/router";

const breadcrumbData = () => [
    {
        title: "Home",
        url: "/",
    },
    {
        title: "Oil and Gas",
        url: "/oil_and_gas",
    },
    {
        title: "Exploration",
        url: "/oil_and_gas/exploration",
        textColor: "rgb(230, 142, 103)",
    },
];

const Exploration = () => {
    const router = useRouter();
    const routerArray = router.asPath.split('/');
    const [pageData, setPageData] = useState();
    const [contentData, setContentData] = useState();

    const callPageApi = async () => {
        try {
            const res = await fetch(`https://miib670e.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "pages"]`);
            const data = await res.json();
            const currentPage = data.result.filter((item: any) => item.slug === routerArray[routerArray.length - 1]);
            setPageData(currentPage[0]);
        } catch (err) {
            console.log(err);
        }
    };

    const callContentApi = async () => {
        try {
            const res = await fetch(`https://miib670e.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "exploration"]`);
            const data = await res.json();
            const content = data && data.result;
            setContentData(content);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        callPageApi();
        callContentApi();
    }, []);

    return (
        <div>
            <Header />
            <ImageJumbotron
                imageSrc={pageData && pageData.banner}
                text={pageData && pageData.title}
            />
            <Container css={{ my: "10px", maxWidth: "1240px" }}>
                <BreadCrumbLine items={breadcrumbData()} />
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        marginTop: 20,
                        marginBottom: 20,
                    }}
                >
                    {contentData && contentData.map((item, index) => {
                        return <BoxItem key={index} label={item.service} url={`/oil_and_gas/exploration/${item.slug}`} />;
                    })}
                </div>
            </Container>
            <div className="pt-28">
                <Footer />
            </div>
        </div>
    );
};

export default Exploration;
