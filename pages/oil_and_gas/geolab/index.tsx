import React, { useEffect, useState } from "react";
import { Container } from "@nextui-org/react";
import Header from "../../../module/BasicLayout/Header";
import ImageJumbotron from "../../../reusables/ImageJumbotron";
import BreadCrumbLine from "../../../reusables/BreadcrumbLine";
import Contact from "../../../reusables/Contact/Contact";
import Footer from "../../../module/BasicLayout/Footer";
import BoxItem from "../../../reusables/BoxItem/BoxItem";
import InfoCard from "../../../reusables/InfoCard/InfoCard.comp";
import { PortableText } from "@portabletext/react";

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
        title: "Geolab",
        url: "/oil_and_gas/geolab",
        textColor: "rgb(230, 142, 103)",
    },
];

const Geolab = () => {
    const [pageData, setPageData] = useState();
    const [contentData, setContentData] = useState();

    const callPageApi = async () => {
        try {
            const res = await fetch(`https://miib670e.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "pages"]`);
            const data = await res.json();
            const currentPage = data.result.filter((item: any) => item.slug === 'geological-laboratory');
            setPageData(currentPage[0]);
        } catch (err) {
            console.log(err);
        }
    };

    const callContentApi = async () => {
        try {
            const res = await fetch(`https://miib670e.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "geolab"]`);
            const data = await res.json();
            const content = data && data.result;
            const cureated = content.filter((item) => item.type === 'oil');
            setContentData(cureated);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        callPageApi();
        callContentApi();
    }, []);
    console.log(pageData);

    return (
        <div>
            <Header />
            <ImageJumbotron
                imageSrc={pageData && pageData.banner}
                text={pageData && pageData.title}
            />
            <Container css={{ my: "10px", maxWidth: "1240px" }}>
                <BreadCrumbLine items={breadcrumbData()} />
                <InfoCard title={'OVERVIEW'}>
                    <div style={{
                        fontSize: 15,
                        lineHeight: 2,
                    }}
                         className={'text-gray mt-4'}
                    >
                        <PortableText value={pageData && pageData.description} />
                    </div>
                </InfoCard>
                <div className={'flex flex-wrap pt-[20px] mobile:justify-center'}>
                    {contentData && contentData.map((item, index) => {
                        return <BoxItem key={index} label={item.division} url={`/oil_and_gas/geolab/${item.slug}`} />;
                    })}
                </div>
            </Container>
            <div className="pt-28">
                <Footer />
            </div>

        </div>
    );
};

export default Geolab;
