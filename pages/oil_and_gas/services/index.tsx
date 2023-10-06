import React, { useEffect, useState } from "react";
import { Container } from "@nextui-org/react";
import Header from "../../../module/BasicLayout/Header";
import ImageJumbotron from "../../../reusables/ImageJumbotron";
import BreadCrumbLine from "../../../reusables/BreadcrumbLine";
import Footer from "../../../module/BasicLayout/Footer";
import Box from "../../../reusables/Box";
import SanityImageComp from "../../../reusables/SanityImage/SanityImage.comp";
import TextLink from "../../../reusables/TextLink";
import { PortableText } from "@portabletext/react";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import InfoCard from "../../../reusables/InfoCard/InfoCard.comp";

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
        title: "Services",
        url: "/oil_and_gas/services",
        textColor: "rgb(230, 142, 103)",
    },
];

const Services = () => {
    const [open, setOpen] = useState(false);
    const [pageData, setPageData] = useState();
    const [contentData, setContentData] = useState();
    const [activeIndex, setActiveIndex] = useState(0);

    const onOpenModal = (index: number) => {
        setActiveIndex(index);
        setOpen(true);
    }

    const onCloseModal = () => setOpen(false);

    const callPageApi = async () => {
        try {
            const res = await fetch(`https://miib670e.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "pages"]`);
            const data = await res.json();
            const currentPage = data.result.filter((item: any) => item.slug === 'services' && item.parent === 'oil');
            setPageData(currentPage[0]);
        } catch (err) {
            console.log(err);
        }
    };

    const callContentApi = async () => {
        try {
            const res = await fetch(`https://miib670e.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "services"]`);
            const data = await res.json();
            const content = data && data.result;
            const filtered = content.filter((item) => {
              return item.type === 'oil'
            });
            setContentData(filtered);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        callPageApi();
        callContentApi();
    }, []);

    console.log(contentData && contentData[activeIndex].featured_images);

    return (
        <div>
            <Modal open={open} onClose={onCloseModal} styles={{
                modal: {
                    width: 1200,
                    maxWidth: '80%',
                }
            }} center>
                <div className={"overflow-scroll h-[500px]"}>
                    {contentData && contentData[activeIndex].banner && <SanityImageComp image={contentData && contentData[activeIndex].banner} className={'h-[240px] max-w-[500px] mb-6'} style={{ marginTop: 0, objectFit: 'cover' }} />}
                    <h2 className={'text-[20px]'}>
                        {contentData && contentData[activeIndex].service}
                    </h2>
                    <div className="text-justify desktop:text-[15px] text-[12px] text-gray leading-8 pt-4">
                        <PortableText value={contentData && contentData[activeIndex].introduction} />
                    </div>
                    <div className={'mt-4 text-gray'}>
                        {contentData && contentData[activeIndex].products && <div className={'font-bold'}>Products :</div>}
                        {contentData && contentData[activeIndex].products && contentData[activeIndex].products.map((item, index) => (
                            <div key={index}>
                                {index + 1}. {item.product}
                            </div>
                        ))}
                    </div>
                    <div className={'flex'}>
                        {contentData && contentData[activeIndex].featured_images && contentData[activeIndex].featured_images.map((item, index) => (
                            <div className={'pr-4'}>
                                <SanityImageComp image={item} className={'h-[120px]'} />
                            </div>
                        ))}
                    </div>
                    <a className={"flex justify-between items-center bg-primary text-white p-4 mt-4 w-[300px]"} href={'mailto:info@geoservices.co.id'}>
                        Request Quotation
                        <svg className="w-3.5 h-3.5 ml-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </Modal>
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
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        marginTop: 20,
                        marginBottom: 20,
                    }}
                >
                    {contentData && contentData.map((item, index) => {
                        return (
                            <Box key={index} className={'w-full desktop:w-1/3 p-4'}>
                                <div className={'border relative p-4 h-[400px]'} style={{
                                    borderColor: 'gainsboro'
                                }}>
                                    {item.banner && <SanityImageComp image={item.banner} className={'h-[120px] w-full'} style={{
                                        marginTop: 0,
                                        width: '100%',
                                        objectFit: 'cover',
                                    }} />}
                                    <h3 style={{
                                        textAlign: 'center',
                                        lineHeight: 1.6,
                                        paddingTop: 12,
                                    }}>
                                        {item.service}
                                    </h3>
                                    <div className="overflow-hidden h-[140px] text-justify desktop:text-[15px] text-[12px] text-gray leading-8 pt-4">
                                        <PortableText value={item.introduction} />
                                    </div>
                                    <Box
                                        className={'absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full p-4'}
                                        css={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <TextLink href="mailto:info@geoservices.co.id" style={{
                                            color: '#505AE5',
                                        }}>
                                            Request Quotation
                                        </TextLink>
                                        <a onClick={() => onOpenModal(index)} style={{
                                            display: 'block',
                                            marginLeft: 20,
                                            color: '#505AE5',
                                            cursor: 'pointer'
                                        }}>View Details</a>
                                    </Box>
                                </div>
                            </Box>
                        )
                    })}
                </div>
            </Container>
            <div className="pt-28">
                <Footer />
            </div>
        </div>
    );
};

export default Services;
