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

    console.log(product && product);

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
                <Box
                    css={{
                        marginTop: 40,
                        marginBottom: 40,
                        borderTop: "4px solid #E68E67",
                        boxShadow: "0px 4px 4px 0px #0000001A",
                        p: "44px 193px 44px 52px",
                    }}
                >
                    <Box
                        css={{
                            position: "relative",
                        }}>
                    </Box>
                    <Box>
                        <h3 style={{
                            color: "#E68E67",
                            marginTop: 0,
                            paddingTop: 0,
                        }}>
                            SERVICES
                        </h3>
                        {product && product.services.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    style={{
                                        marginBottom: 20,
                                    }}>
                                    <Text
                                        css={{
                                            fontWeight: "600",
                                            fontSize: "18px",
                                            color: "#828282",
                                            whiteSpace: "pre-line",
                                            marginBottom: 7,
                                        }}
                                    >
                                        {index + 1}. {item.service}
                                    </Text>
                                    {item.description && <div style={{
                                        lineHeight: 1.5,
                                        paddingBottom: 5,
                                        color: 'rgb(130, 130, 130)',
                                    }}>
                                        <PortableText
                                            value={item.description}
                                        />
                                    </div>}
                                </div>
                            )
                        })}
                    </Box>
                </Box>
                {product && product.equipment_item &&
                <InfoCard title={"EQUIPMENT"}>
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
                <h2>Other Exploration Services</h2>
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
                                <Link key={index + 'lab'} href={'/oil_and_gas/exploration/' + item.slug}>
                                    <div>
                                        <SanityImageComp image={item.banner} style={{
                                            width: 300,
                                            height: 160,
                                            objectFit: 'cover',
                                            borderRadius: 12,
                                            marginTop: 0,
                                        }} />
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
            <Footer />
        </>
    );
};

export default ExplorationSub;
