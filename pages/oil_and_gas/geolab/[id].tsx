import { Text, Container } from "@nextui-org/react";
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
import InfoCard from "../../../reusables/InfoCard/InfoCard.comp";
import { PortableText } from "@portabletext/react";
import TextLink from "../../../reusables/TextLink";

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
        title: "Geolab",
        url: "/oil_and_gas/geolab",
    },
    {
        title: labTitle,
        url: "#",
        textColor: "rgb(230, 142, 103)",
    },
];

const GeolabSub = () => {
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
      const curated = otherDivision.filter((item: any) => item.type === 'oil');
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

  console.log(product);

  return (
    <>
      <Modal isModalOpen={isModalOpen} {...modalProps} />
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
                          <div className={'border p-4 h-[400px] relative'} style={{
                              borderColor: 'gainsboro'
                          }}>
                              {item.main_image && <SanityImageComp image={item.main_image} className={'h-[120px]'} style={{
                                  marginTop: 0,
                                  width: '100%',
                                  objectFit: 'cover',
                              }} />}
                              <h3 style={{
                                  textAlign: 'center',
                                  lineHeight: 1.6,
                                  paddingTop: 12,
                              }}>
                                  {item.product}
                              </h3>
                              <div className="overflow-hidden h-[140px] text-justify desktop:text-[15px] text-[12px] text-gray leading-8 pt-4">
                                  {item.description}
                              </div>
                              <Box className={'flex justify-between absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full p-4'}>
                                  <TextLink href="mailto:info@geoservices.co.id" style={{
                                      color: '#505AE5'
                                  }}>
                                      Request Quotation
                                  </TextLink>
                                  <a onClick={() => onOpenModal(index)} style={{
                                      color: '#505AE5',
                                      cursor: 'pointer'
                                  }}>View Details</a>
                              </Box>
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
                    <Link key={index + 'lab'} href={'/oil_and_gas/geolab/' + item.slug}>
                      <div>
                        {item.banner && <SanityImageComp image={item.banner} style={{
                            width: 300,
                            height: 160,
                            objectFit: 'cover',
                            borderRadius: 12,
                            marginTop: 0,
                        }} />}
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

export default GeolabSub;
