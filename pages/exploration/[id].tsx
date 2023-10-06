import { Image, Text, Container } from "@nextui-org/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Box from "reusables/Box";
import { useRouter } from "next/router";
import Header from "../../module/BasicLayout/Header";
import ImageJumbotron from "../../reusables/ImageJumbotron";
import Footer from "../../module/BasicLayout/Footer";
import Modal from "../../reusables/Modal/Modal";
import BreadCrumbLine from "../../reusables/BreadcrumbLine";
import SanityImageComp from "../../reusables/SanityImage/SanityImage.comp";
import { PortableText } from '@portabletext/react';
import InfoCard from "../../reusables/InfoCard/InfoCard.comp";
import InfoCardListItem from "../../reusables/InfoCardListItem/InfoCardListItem";

const breadcrumbData = (labTitle: string) => [
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
    },
    {
        title: labTitle,
        url: "#",
        textColor: "rgb(230, 142, 103)",
    },
];

const ExplorationSub = () => {
    const router = useRouter();
    const [product, setProductData] = useState();
    const [otherDivision, setOtherDivision] = useState([]);
    const [isModalOpen, setModalStatus] = useState(false);
    const [modalProps, setModalProps] = useState({});

    const callAPI = async (setProductData: Function) => {
        try {
            const res = await fetch(`https://miib670e.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "exploration"]`);
            const data = await res.json();
            const currentPage = data.result.filter((item: any) => item.slug === router.query.id);
            const otherDivision = data.result.filter((item: any) => item.slug !== router.query.id);
            setProductData(currentPage[0]);
            setOtherDivision(otherDivision);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        callAPI(setProductData);
    }, []);

    console.log(product);

    return (
        <>
            <Modal isModalOpen={isModalOpen} {...modalProps} />
            <Header />
            <ImageJumbotron
                imageSrc={product && product.banner}
                text={product && product.service}
            />
            <Container css={{ my: "10px", maxWidth: "1240px" }}>
                <BreadCrumbLine items={product && breadcrumbData(product.service)} />
                <InfoCard title={'OVERVIEW'}>
                    <div style={{
                        fontSize: 15,
                        lineHeight: 2,
                    }}
                         className={'text-gray'}
                    >
                        <div className="text-justify desktop:text-[15px] text-[12px] text-gray leading-8 pt-2">
                            <PortableText value={product && product.introduction} />
                        </div>
                    </div>
                </InfoCard>
                {product && product.equipment_item && <InfoCard title={"EQUIPMENT"}>
                    {product.equipment_item.map((item: any, index: number) => {
                        return(
                            <li key={index} style={{
                                lineHeight: 2,
                                color: 'grey'
                            }}>
                                {item.equipment}
                            </li>
                        )
                    })}
                </InfoCard>}
                <h2 style={{
                    color: 'rgb(230, 142, 103)',
                    textTransform: 'uppercase',
                    fontSize: 18,
                }}>
                    Other Exploration Services
                </h2>
                <Box className={'flex mt-[30px] mb-[40px] flex-wrap'}>
                    {otherDivision && otherDivision.map(
                        (item, index) =>
                            index.toString() !== router.query.id && <div className={'w-full desktop:w-1/3 pr-4 mb-12'}>
                                <Link key={index + 'lab'} href={'/exploration/' + item.slug}>
                                    <div>
                                        {item.banner ? <SanityImageComp
                                            image={item.banner}
                                            width={200}
                                            height={160}
                                            style={{
                                            width: '100%',
                                            height: 160,
                                            objectFit: 'cover',
                                            borderRadius: 12,
                                            marginTop: 0,
                                        }} /> : <div style={{
                                            width: '100%',
                                            height: 160,
                                            objectFit: 'cover',
                                            borderRadius: 12,
                                            marginTop: 0,
                                            backgroundColor: 'gainsboro',
                                        }}/>}
                                        <div style={{
                                            fontSize: 15,
                                            marginTop: 12,
                                            maxWidth: 240,
                                            lineHeight: 1.5,
                                        }}>
                                            {item.service}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                    )}
                </Box>
            </Container>
            <div className="pt-28">
                <Footer />
            </div>

        </>
    );
};

export default ExplorationSub;
