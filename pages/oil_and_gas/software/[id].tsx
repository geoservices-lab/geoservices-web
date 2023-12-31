import { Image, Text, Container } from "@nextui-org/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Box from "reusables/Box";
import { useRouter } from "next/router";
import Header from "../../../module/BasicLayout/Header";
import ImageJumbotron from "../../../reusables/ImageJumbotron";
import Footer from "../../../module/BasicLayout/Footer";
import Modal from "../../../reusables/Modal/Modal";
import BreadCrumbLine from "../../../reusables/BreadcrumbLine";
import SanityImageComp from "../../../reusables/SanityImage/SanityImage.comp";
import { PortableText } from '@portabletext/react';
import InfoCard from "../../../reusables/InfoCard/InfoCard.comp";
import InfoCardListItem from "../../../reusables/InfoCardListItem/InfoCardListItem";

const breadcrumbData = (principal: string) => [
    {
        title: "Home",
        url: "/",
    },
    {
        title: "Oil and Gas",
        url: "/oil_and_gas",
    },
    {
        title: "Software",
        url: "/oil_and_gas/software",
    },
    {
        title: principal,
        url: "#",
        textColor: "rgb(230, 142, 103)",
    },
];

const SoftwareSub = () => {
    const router = useRouter();
    const [product, setProductData] = useState();
    const [otherDivision, setOtherDivision] = useState([]);
    const [isModalOpen, setModalStatus] = useState(false);
    const [modalProps, setModalProps] = useState({});

    const callAPI = async (setProductData: Function) => {
        try {
            const res = await fetch(`https://miib670e.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "software"]`);
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

    console.log(product && product);

    return (
        <>
            <Modal isModalOpen={isModalOpen} {...modalProps} />
            <Header />
            <ImageJumbotron
                imageSrc={product && product.banner}
                text={product && product.principal}
            />
            <Container css={{ my: "10px", maxWidth: "1240px" }}>
                <BreadCrumbLine items={product && breadcrumbData(product.principal)} />
                <h2>Highlighted Products</h2>
                <Box
                    css={{
                        marginTop: 30,
                        marginBottom: 40,
                        display: "flex",
                    }}
                >
                    {product && product.products && product.products.map(
                        (item, index) =>
                            index.toString() !== router.query.id && <div style={{
                                marginRight: 20,
                            }}>
                                <Link key={index + 'lab'} href='#'>
                                    <div>
                                        <SanityImageComp image={item.logo} style={{
                                            width: 300,
                                            height: 160,
                                            objectFit: 'contain',
                                            borderRadius: 12,
                                            marginTop: 0,
                                            border: '1px solid gainsboro',
                                            padding: 20,
                                        }} />
                                        <div style={{
                                            fontSize: 15,
                                            marginTop: 12,
                                            maxWidth: 240,
                                            lineHeight: 1.5,
                                        }}>
                                            {item.product}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                    )}
                </Box>
                <InfoCard title={"INTRODUCTION"}>
                    <div>
                        {product && product.description && <div style={{
                            lineHeight: 1.5,
                            paddingBottom: 5,
                            color: 'rgb(130, 130, 130)',
                        }}>
                            <PortableText
                                value={product.description}
                            />
                        </div>}
                    </div>
                </InfoCard>
                <h2>Other Software Principals</h2>
                <Box
                    css={{
                        marginTop: 30,
                        marginBottom: 40,
                        display: "flex",
                    }}
                >
                    {otherDivision && otherDivision.map(
                        (item, index) =>
                            index.toString() !== router.query.id && <div style={{
                                marginRight: 20,
                            }}>
                                <Link key={index + 'lab'} href={'/oil_and_gas/software/' + item.slug}>
                                    <div>
                                        <SanityImageComp image={item.logo} style={{
                                            width: 300,
                                            height: 160,
                                            objectFit: 'contain',
                                            borderRadius: 12,
                                            marginTop: 0,
                                            border: '1px solid gainsboro',
                                            padding: 20,
                                        }} />
                                        <div style={{
                                            fontSize: 15,
                                            marginTop: 12,
                                            maxWidth: 240,
                                            lineHeight: 1.5,
                                        }}>
                                            {item.principal}
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

export default SoftwareSub;
