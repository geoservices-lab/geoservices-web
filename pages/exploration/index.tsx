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
        title: "Exploration",
        url: "/exploration",
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
                            {contentData && contentData.map((post) => (
                                <Link href={`/exploration/${post.slug}`}>
                                <div key={post.id} className="max-w-md rounded-lg shadow-md border-gray cursor-pointer">
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

export default Exploration;
