import React, { useEffect, useState } from "react";
import { Container } from "@nextui-org/react";
import Header from "../../module/BasicLayout/Header";
import ImageJumbotron from "../../reusables/ImageJumbotron";
import BreadCrumbLine from "../../reusables/BreadcrumbLine";
import Footer from "../../module/BasicLayout/Footer";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import InfoCard from "../../reusables/InfoCard/InfoCard.comp";
import SanityImage from "../../reusables/SanityImage/SanityImage.comp";
import SanityImageComp from "../../reusables/SanityImage/SanityImage.comp";
import {Modal} from "react-responsive-modal";
import 'react-responsive-modal/styles.css';

const breadcrumbData = () => [
    {
        title: "Home",
        url: "/",
    },
    {
        title: "Trade and Services",
        url: "/coal",
        textColor: "rgb(230, 142, 103)",
    },
];

const Trade = () => {
    const [pageData, setPageData] = useState();
    const [contentData, setContentData] = useState();
    const [laboratory, setLaboratoryData] = useState();
    const [open, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const callPageApi = async () => {
        try {
            const res = await fetch(`https://miib670e.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "trade"]`);
            const data = await res.json();
            const currentPage = data.result;
            setPageData(currentPage[0]);
        } catch (err) {
            console.log(err);
        }
    };

    const callContentApi = async () => {
        try {
            const res = await fetch(`https://miib670e.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "trade"]`);
            const data = await res.json();
            const content = data && data.result;
            setContentData(content[0]);
        } catch (err) {
            console.log(err);
        }
    };

    const callLaboratoryApi = async () => {
        try {
            const res = await fetch(`https://miib670e.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "pages"]`);
            const data = await res.json();
            const currentData = data.result.filter((item: any) => item.slug === 'water-services');
            setLaboratoryData(currentData[0]);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        callPageApi();
        callContentApi();
        callLaboratoryApi();
    }, []);

    const option = [
        {
            service: "Water Services",
            slug: "/enviromental/laboratory",
            banner: laboratory && laboratory.banner,
            introduction: laboratory && laboratory.description,
        },
    ];

    const onOpenModal = (index: number) => {
        setActiveIndex(index);
        setOpen(true);
    }

    const onCloseModal = () => setOpen(false);

    return (
        <div>
            <Modal open={open} onClose={onCloseModal} styles={{ modal: { width: 1200, maxWidth: '80%' }}} center>
                {contentData && contentData.services && contentData.services.length > 0 && contentData.services[activeIndex].icon && <SanityImageComp image={contentData && contentData.services[activeIndex].icon} className={'h-[240px] max-w-[500px] mb-6'} style={{ marginTop: 0, objectFit: 'cover' }} />}
                <h2 className={'text-[20px]'}>
                    {contentData && contentData.services && contentData.services[activeIndex].title}
                </h2>
                <div className="text-justify desktop:text-[15px] text-[12px] text-gray leading-8 pt-4">
                    {contentData && contentData.services && contentData.services[activeIndex].description}
                </div>
                <a className={"flex justify-between items-center bg-primary text-white p-4 mt-4 w-[300px]"} href={'mailto:info@geoservices.co.id'}>
                    Request Quotation
                    <svg className="w-3.5 h-3.5 ml-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </Modal>
            <Header />
            <ImageJumbotron
                imageSrc={pageData && pageData.image}
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
                <div>
                    <h1 className='capitalize font-bold text-[32px] mb-4'>Trade and Services</h1>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-16 border-t border-gray pt-10 desktop:grid-cols-3 ">
                        {option && option.map((post, index) => (
                            <Link href={`/${post.slug}`}>
                                <div key={index} className="max-w-md rounded-lg shadow-md border-gray cursor-pointer">
                                    {post.banner && <SanityImage image={post.banner} className={'rounded-xl'} style={{ marginTop: 0, height: 160, objectFit: 'cover' }}/>}
                                    <div className='px-4'>
                                        <h1 className="text-[18px] text-justify text-gray font-bold mr-2 capitalize mt-4 mb-2">{post.service}</h1>
                                        <div className={'h-[150px] overflow-hidden text-gray'}>
                                            {post.introduction && <PortableText value={post.introduction} />}
                                        </div>
                                        <br />
                                        <div className="flex justify-end text-[14px] mb-4">
                                            <button className='hover:scale-105'>
                                                <p className='text-blue capitalize'>view details</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                        {contentData && contentData.services.map((post, index) => (
                                <div key={index} className="max-w-md rounded-lg shadow-md border-gray cursor-pointer">
                                    {post.icon && <SanityImage image={post.icon} className={'rounded-xl'} style={{ marginTop: 0, height: 160, objectFit: 'cover' }}/>}
                                    <div className='px-4'>
                                        <h1 className="text-[18px] text-justify text-gray font-bold mr-2 capitalize mt-4 mb-2">{post.title}</h1>
                                        <div className={'h-[150px] overflow-hidden text-gray'}>
                                            {post.description && <div>{post.description} </div>}
                                        </div>
                                        <br />
                                        <div className="flex justify-end text-[14px] mb-4">
                                            <button className='hover:scale-105' onClick={() => onOpenModal(index)}>
                                                <p className='text-blue capitalize'>view details</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                        ))}
                    </div>
                </div>
            </Container>
            <div className="pt-28">
                <Footer />
            </div>
        </div>
    );
};

export default Trade;
