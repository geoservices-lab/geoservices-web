import { Text, Container } from "@nextui-org/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Box from "reusables/Box";
import { useRouter } from "next/router";
import Header from "../../../module/BasicLayout/Header";
import ImageJumbotron from "../../../reusables/ImageJumbotron";
import Footer from "../../../module/BasicLayout/Footer";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import BreadCrumbLine from "../../../reusables/BreadcrumbLine";
import SanityImageComp from "../../../reusables/SanityImage/SanityImage.comp";
import InfoCard from "../../../reusables/InfoCard/InfoCard.comp";
import { PortableText } from "@portabletext/react";
import TextLink from "../../../reusables/TextLink";

const breadcrumbData = (labTitle: string) => [
    {
        title: "Home",
        url: "/",
    },
    {
        title: "Coal",
        url: "/coal",
    },
    {
        title: "Laboratory",
        url: "/coal/laboratory",
    },
    {
        title: labTitle,
        url: "#",
        textColor: "rgb(230, 142, 103)",
    },
];

const CoalLabSub = () => {
    const router = useRouter();
    const [product, setProductData] = useState();
    const [otherDivision, setOtherDivision] = useState([]);
    const [isModalOpen, setModalStatus] = useState(false);
    const [modalProps, setModalProps] = useState({});
    const [activeIndex, setActiveIndex] = useState(0);
    const [open, setOpen] = useState(false);

    const callAPI = async (setProductData: Function) => {
        try {
            const res = await fetch(`https://miib670e.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "geolab"]`);
            const data = await res.json();
            const currentPage = data.result.filter((item: any) => item.slug === router.query.id);
            const otherDivision = data.result.filter((item: any) => item.slug !== router.query.id);
            const curated = otherDivision.filter((item: any) => item.type === 'coal');
            setProductData(currentPage[0]);
            setOtherDivision(curated);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        callAPI(setProductData);
    }, []);

    const openProductDetail = (props) => () => {
        setModalStatus(true);
        setModalProps(props);
    };

    const onOpenModal = (index: number) => {
        setActiveIndex(index);
        setOpen(true);
    }

    const onCloseModal = () => setOpen(false);

    return (
        <>
            <Modal open={open} onClose={onCloseModal} styles={{ modal: { width: 1200, maxWidth: '80%' }}} center>
                {product && product.products[activeIndex].main_image && <SanityImageComp image={product && product.products[activeIndex].main_image} className={'h-[240px] max-w-[500px] mb-6'} style={{ marginTop: 0, objectFit: 'cover' }} />}
                <h2 className={'text-[20px]'}>
                    {product && product.products[activeIndex].product}
                </h2>
                <div className="text-justify desktop:text-[15px] text-[12px] text-gray leading-8 pt-4">
                    {product && product.products[activeIndex].description}
                </div>
                <div className={'flex'}>
                    {product && product.products[activeIndex].featured_images && product.products[activeIndex].featured_images.map((item, index) => (
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
            </Modal>
            <Header />
            <ImageJumbotron
                imageSrc={product && product.banner}
                text={product && product.division}
            />
            <Container css={{ my: "10px", maxWidth: "1240px" }}>
                <BreadCrumbLine items={breadcrumbData(product && product.division)} />
                <InfoCard title={'OVERVIEW'}>
                    <div style={{
                        fontSize: 15,
                        lineHeight: 2,
                    }}
                         className={'text-gray mt-4'}
                    >
                        <p>
                            {product && product.introduction}
                        </p>
                    </div>
                </InfoCard>
                <h2 style={{
                    color: 'rgb(230, 142, 103)',
                    textTransform: 'uppercase',
                    fontSize: 18,
                }}>
                    Highlighted Products
                </h2>
                <div className={'flex flex-wrap mt-[20px] mb-[40px]'}>
                    {product && product.products.map((item, index) => {
                        return (
                            <Box key={index} className={'desktop:w-1/3 pr-4 pb-4'}>
                                <div onClick={() => onOpenModal(index)} className={'cursor-pointer p-4 h-[260px] relative'} style={{
                                    borderColor: 'gainsboro'
                                }} onClick={() => onOpenModal(index)}>
                                    <div>
                                        {item.main_image ? <SanityImageComp image={item.main_image} className={'h-[160px]'} style={{
                                            marginTop: 0,
                                            width: '100%',
                                            objectFit: 'cover',
                                            borderRadius: 12,
                                        }} /> : <div className={'h-[160px] w-full bg-gray rounded-xl'}/>}
                                        <h3 style={{
                                            textAlign: 'center',
                                            lineHeight: 1.6,
                                            paddingTop: 12,
                                        }}>
                                            {item.product}
                                        </h3>
                                    </div>
                                </div>
                            </Box>
                        )
                    })}
                </div>
                <h2 style={{
                    color: 'rgb(230, 142, 103)',
                    textTransform: 'uppercase',
                    fontSize: 18,
                }}>Other Geological Laboratories</h2>
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
                                <Link key={index + 'lab'} href={'/coal/laboratory/' + item.slug}>
                                    <div>
                                        {item.banner ? <SanityImageComp image={item.banner} style={{
                                            width: 300,
                                            height: 160,
                                            objectFit: 'cover',
                                            borderRadius: 12,
                                            marginTop: 0,
                                        }} /> : <div style={{
                                            width: 300,
                                            height: 160,
                                            objectFit: 'cover',
                                            borderRadius: 12,
                                            marginTop: 0,
                                            background: 'gainsboro'
                                        }}/>}
                                        <div style={{
                                            fontSize: 15,
                                            marginTop: 12,
                                            maxWidth: 240,
                                            lineHeight: 1.5,
                                        }}>
                                            {item.division}
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

export default CoalLabSub;
