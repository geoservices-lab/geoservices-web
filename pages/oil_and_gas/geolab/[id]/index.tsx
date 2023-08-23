import { Image, Text, Container } from "@nextui-org/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Box from "reusables/Box";
import { useRouter } from "next/router";
import Header from "../../../../module/BasicLayout/Header";
import ImageJumbotron from "../../../../reusables/ImageJumbotron";
import Footer from "../../../../module/BasicLayout/Footer";
import Modal from "../../../../reusables/Modal/Modal";
import BreadCrumbLine from "../../../../reusables/BreadcrumbLine";
import { API_KEY, API_BASE_URL } from "../../../../pageConstant/general";
import SanityImageComp from "../../../../reusables/SanityImage/SanityImage.comp";

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
  const [product, setProductData] = useState([]);
  const [otherDivision, setOtherDivision] = useState([]);
  const [openTab, chooseTab] = useState(1);
  const [isModalOpen, setModalStatus] = useState(false);
  const [modalProps, setModalProps] = useState({});

  const callAPI = async (setProductData: Function) => {
    try {
      const res = await fetch(`https://miib670e.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "geolab"]`);
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

  const data = product.data && product.data[router.query.id].attributes;
  const images = data && data.products;
  const banner = data && data.Banner && data.Banner.data.attributes.url;
  console.log(product);

  const openProductDetail = (props) => () => {
    setModalStatus(true);
    setModalProps(props);
  };

  return (
    <>
      <Modal isModalOpen={isModalOpen} {...modalProps} />
      <Header />
      <ImageJumbotron
        imageSrc={product && product.banner}
        text={product.division}
      />
      <Container css={{ my: "10px", maxWidth: "1240px" }}>
        <BreadCrumbLine items={breadcrumbData(product.division)} />
        <h2 style={{ marginTop: 40 }}>Highlighted Products</h2>
        <Box
          css={{
            marginTop: 30,
            display: "flex",
              flexWrap: "wrap"
          }}
        >
          {images &&
            images.map((item, index) => (
              <div
                key={index}
                onClick={openProductDetail({
                  title: item.title,
                  desc: item.description,
                  cover: API_BASE_URL + item.thumbnail.data.attributes.url,
                  images: item.images.data,
                })}
                style={{ marginRight: 20, marginBottom: 40 }}
              >
                <Image
                  src={API_BASE_URL + item.thumbnail.data.attributes.url}
                  width={270}
                  height={160}
                  objectFit={"cover"}
                  style={{
                    borderRadius: 12,
                      border: '1px solid gainsboro'
                  }}
                />
                <div style={{
                  fontSize: 15,
                  marginTop: 12,
                  maxWidth: 240,
                  lineHeight: 1.5,
                }}>
                  {item.title}
                </div>
              </div>
            ))}
        </Box>

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
                      GENERAL INFORMATION
                  </h3>
                  <Text
                      css={{
                          fontWeight: "400",
                          fontSize: "16px",
                          lineHeight: "30px",
                          color: "#828282",
                      }}
                  >
                      {product && product.division}
                  </Text>
                  <Text
                      css={{
                          fontWeight: "400",
                          fontSize: "16px",
                          lineHeight: "30px",
                          color: "#828282",
                      }}
                  >
                      Industry : Oil & Gas
                  </Text>
                  <Text
                      css={{
                          fontWeight: "400",
                          fontSize: "16px",
                          lineHeight: "30px",
                          color: "#828282",
                      }}
                  >
                      PIC : {product && product.pic}
                  </Text>
                  <Text
                      css={{
                          fontWeight: "400",
                          fontSize: "16px",
                          lineHeight: "30px",
                          color: "#828282",
                      }}
                  >
                      E-mail : {product && product.pic_email}
                  </Text>
                  <Text
                      css={{
                          fontWeight: "400",
                          fontSize: "16px",
                          lineHeight: "30px",
                          color: "#828282",
                      }}
                  >
                      Location : {product && product.address}
                  </Text>
              </Box>
          </Box>

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
                      PRODUCTS
                  </h3>
                  {product.products && product.products.map((item, index) => {
                      return (
                          <div
                              key={index}
                              style={{
                              marginBottom: 20,
                          }}>
                              <Text
                                  css={{
                                      fontWeight: "600",
                                      fontSize: "20px",
                                      color: "#828282",
                                      whiteSpace: "pre-line",
                                      marginBottom: 7,
                                  }}
                              >
                                  {index + 1}. {item.product}
                              </Text>
                              <Text
                                  css={{
                                      fontWeight: "400",
                                      fontSize: "14px",
                                      lineHeight: "30px",
                                      color: "#828282",
                                      whiteSpace: "pre-line",
                                  }}
                              >
                                  {item.description}
                              </Text>
                          </div>
                      )
                  })}
              </Box>
          </Box>
        <h2>Other Geolab Laboratories</h2>
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
                        <SanityImageComp image={item.banner} style={{
                            width: 300,
                            height: 160,
                            objectFit: 'cover',
                            borderRadius: 12,
                        }} />
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
      <Footer />
    </>
  );
};

export default GeolabSub;
