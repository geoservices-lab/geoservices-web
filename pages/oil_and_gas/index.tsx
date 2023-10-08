import React, { useEffect, useState } from "react";
import { Container } from "@nextui-org/react";
import Header from "../../module/BasicLayout/Header";
import ImageJumbotron from "../../reusables/ImageJumbotron";
import BreadCrumbLine from "../../reusables/BreadcrumbLine";
import Footer from "../../module/BasicLayout/Footer";
import Link from "next/link";
import { useRouter } from "next/router";
import { PortableText } from "@portabletext/react";
import InfoCard from "../../reusables/InfoCard/InfoCard.comp";
import SanityImage from "../../reusables/SanityImage/SanityImage.comp";

const breadcrumbData = () => [
    {
        title: "Home",
        url: "/",
    },
    {
        title: "Oil and Gas",
        url: "/oil_and_gas",
        textColor: "rgb(230, 142, 103)",
    },
];

const OilandGas = () => {
    const router = useRouter();
    const routerArray = router.asPath.split('/');
    const [pageData, setPageData] = useState();
    const [contentData, setContentData] = useState();
    const [exploration, setExplorationData] = useState();
    const [laboratory, setLaboratoryData] = useState();
    const [services, setServicesData] = useState();
    const [software, setSoftwareData] = useState();
    const [training, setTrainingData] = useState();

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

    const callExplorationApi = async () => {
        try {
            const res = await fetch(`https://miib670e.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "pages"]`);
            const data = await res.json();
            const currentData = data.result.filter((item: any) => item.slug === 'exploration');
            setExplorationData(currentData[0]);
        } catch (err) {
            console.log(err);
        }
    };

    const callLaboratoryApi = async () => {
        try {
            const res = await fetch(`https://miib670e.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "pages"]`);
            const data = await res.json();
            const currentData = data.result.filter((item: any) => item.slug === 'geological-laboratory');
            setLaboratoryData(currentData[0]);
        } catch (err) {
            console.log(err);
        }
    };

    const callServicesApi = async () => {
        try {
            const res = await fetch(`https://miib670e.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "pages"]`);
            const data = await res.json();
            const currentData = data.result.filter((item: any) => item.slug === 'services' && item.parent === 'oil');
            setServicesData(currentData[0]);
        } catch (err) {
            console.log(err);
        }
    };

    const callSoftwareApi = async () => {
        try {
            const res = await fetch(`https://miib670e.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "pages"]`);
            const data = await res.json();
            const currentData = data.result.filter((item: any) => item.slug === 'software');
            setSoftwareData(currentData[0]);
        } catch (err) {
            console.log(err);
        }
    };

    const callTrainingApi = async () => {
        try {
            const res = await fetch(`https://miib670e.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "pages"]`);
            const data = await res.json();
            const currentData = data.result.filter((item: any) => item.slug === 'training' && item.parent === 'oil');
            setTrainingData(currentData[0]);
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
        callExplorationApi();
        callLaboratoryApi();
        callServicesApi();
        callSoftwareApi();
        callTrainingApi();
    }, []);

    const option = [
        {
            service: "Exploration",
            slug: "/exploration",
            banner: exploration && exploration.banner,
            introduction: exploration && exploration.description,
        },
        {
            service: "Laboratory",
            slug: "/oil_and_gas/geolab",
            banner: laboratory && laboratory.banner,
            introduction: laboratory && laboratory.description,
        },
        {
            service: "Software",
            slug: "/oil_and_gas/software",
            banner: software && software.banner,
            introduction: software && software.description,
        },
        {
            service: "Services",
            slug: "/oil_and_gas/services",
            banner: services && services.banner,
            introduction: services && services.description,
        },
        {
            service: "Training",
            slug: "/oil_and_gas/training",
            banner: training && training.banner,
            introduction: training && training.description,
        },
    ];

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
                <div>
                    <h1 className='capitalize font-bold text-[32px] mb-4'>Products and Services</h1>
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
                    </div>
                </div>
            </Container>
            <div className="pt-28">
                <Footer />
            </div>
        </div>
    );
};

export default OilandGas;
