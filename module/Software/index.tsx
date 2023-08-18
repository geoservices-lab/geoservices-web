import React, {useEffect, useState} from "react";
import Box from "reusables/Box";
import { Card, Image, Text, Col, Row } from "@nextui-org/react";
import TextLink from "reusables/TextLink";
import { companies, composeEmailLink, products } from "./constants";
import Slider from "react-slick";

const openLightbox = (setLightBoxStatus: Function, setContent: Function, image: string, email?: any, desc: string) => () => {
    setContent({
        image,
        email: email ? email : {},
        desc
    });
    setLightBoxStatus(true);
};

const closeLightbox = (setLightBoxStatus: Function) => () => {
    setLightBoxStatus(false);
};

const renderLightbox = (
    isActive: boolean,
    setLightBoxStatus: Function,
    content: any
) => (
  <div style={{
      display: isActive ? 'block' : 'none',
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 999,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
  }}
    onClick={closeLightbox(setLightBoxStatus)}
  >
      <div style={{
          display: isActive ? 'block' : 'none',
          position: "absolute",
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1000,
          width: 800,
          backgroundColor: 'white',
          padding: 20,
      }}>
          <button style={{
              color: 'white',
              background: 'none',
              border: 'none',
              fontSize: 21,
              position: 'absolute',
              top: -40,
              right: 0
          }}>
              x
          </button>
          {content.image && <img src={content.image} style={{ width: 400 }}/>}
          <div style={{
              marginTop: 20,
              color: 'gray'
          }}>
              {content.desc}
          </div>
          <a href={content.email ? composeEmailLink(content.email) : composeEmailLink({
              to: 'quotation@geoservices.com',
              subject: '',
              body: ''
          })} style={{
              color: 'white',
              backgroundColor: '#363C9A',
              border: 'none',
              fontSize: 15,
              padding: '12px 20px',
              marginTop: 20,
              display: 'inline-block'
          }}>
              Request Quotation
          </a>
      </div>
  </div>
);

const apiToken = '2ec67e19c8e68e464b98e935cbc43d59ea77c11d983120eb3d234d097cd7aff18771692acaa390be0f09bae1a134c6205553c888c90a3a69687edc730d9e92106283f875b54b9530a41124eec5e7fa6410ba4685b12d5b879f2de1f4c87b280d1cf9f979b3b87a7f76fb8bed79acf4d8bf3ec2546666b60cd5c8c44619a79ad4';
const callAPI = async (setProductData) => {
    try {
        const res = await fetch(`http://localhost:1337/api/softwares?populate=*`, {
            headers: {
                Authorization: `Bearer ${apiToken}`
            }
        });
        const data = await res.json();
        console.log(data, '1');
        setProductData(data);
    } catch (err) {
        console.log(err);
    }
};

const Software = () => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const [isActive, setLightBoxStatus] = useState(false);
  const [content, setContent] = useState({});
  const [productData, setProductData] = useState([]);

  useEffect(() => {
      callAPI(setProductData);
  }, []);

  return (
      <>
          {renderLightbox(isActive, setLightBoxStatus, content)}
          <Box css={{ mb: "$40" }}>
              {/* Card #1 */}
              <Row
                  css={{
                      display: "grid",
                      gridAutoRows: "1fr",
                      gridTemplateColumns: "25% 1fr",
                      m: "$20 $0 $10 $0",
                      borderTop: "4px solid #E68E67",
                      boxShadow: "0px 4px 4px 0px #0000001A",
                      p: "44px 80px 44px 52px",
                  }}
              >
                  <Col span={4}>
                      <Text
                          css={{
                              fontWeight: "700",
                              fontSize: "20px",
                              lineHeight: "24px",
                              color: "#E68E67",
                          }}
                      >
                          Introduction
                      </Text>
                  </Col>
                  <Box>
                      <Text
                          css={{
                              fontWeight: "400",
                              fontSize: "20px",
                              lineHeight: 1.76,
                              color: "#828282",
                              textAlign: "right",
                          }}
                      >
                          PT GEOSERVICES also functions as a representative of software
                          companies whose products are being used by oil companies wordlwide.
                          Most of the products that we represent are standards of the energy
                          industry and we can attest from our own experience that they are
                          "benchmark" quality.
                      </Text>
                  </Box>
              </Row>
              {/* Card #2 */}
              <div>
                  <Text
                      css={{
                          fontWeight: "700",
                          fontSize: "20px",
                          lineHeight: "24px",
                          color: "$black",
                          marginTop: 80,
                          paddingBottom: 20
                      }}
                  >
                      Highlighted Products
                  </Text>
              </div>
              <Box
                  css={{
                      gridAutoRows: "1fr",
                      gridTemplateColumns: "1fr 1fr 1fr",
                      gridGap: "$10 $10",
                      my: "$10",
                      justifyItems: "center",
                  }}
              >
                  <Slider {...settings}>
                      {products?.map((item, index) => (
                          <div onClick={openLightbox(setLightBoxStatus, setContent, item.logo, item.desc)} style={{ overflow: 'hidden' }}>
                              <Image src={item?.logo} style={{ height: 160, objectFit: 'cover', marginLeft: index > 0 ? 20 : 0 }}/>
                              <div style={{
                                  marginTop: '10px',
                                  textAlign: 'center'
                              }}>
                                  {item.name}
                              </div>
                          </div>
                      ))}
                  </Slider>
              </Box>

              <div>
                  <Text
                      css={{
                          fontWeight: "700",
                          fontSize: "20px",
                          lineHeight: "24px",
                          color: "$black",
                          marginTop: 80,
                      }}
                  >
                      Principals
                  </Text>
              </div>
              <Box
                  css={{
                      display: "grid",
                      gridAutoRows: "1fr",
                      gridTemplateColumns: "1fr 1fr 1fr",
                      gridGap: "$10 $10",
                      my: "$10",
                      justifyItems: "center",
                  }}
              >
                  {companies?.map((item) => (
                      <Card key={item?.name} variant="bordered" css={{ borderRadius: 7 }}>
                          <Card.Body>
                              <Box
                                  css={{
                                      height: "100%",
                                      display: "grid",
                                      gridAutoColumns: "1fr",
                                      gridTemplateRows: "1fr auto",
                                  }}
                              >
                                  <Box css={{ display: "flex", alignItems: "center" }}>
                                      <Image src={item?.logo} style={{ height: 120 }} />
                                  </Box>
                                  <div style={{
                                      textAlign: 'center',
                                      marginTop: 20,
                                      marginBottom: 40,
                                      lineHeight: 1.5,
                                      fontSize: 15,
                                      paddingLeft: 10,
                                      paddingRight: 10
                                  }}>
                                      {item.desc}
                                  </div>
                                  <Box
                                      css={{
                                          display: "flex",
                                          justifyContent: "space-between",
                                          mx: "$5",
                                          height: "100%",
                                          alignItems: "end",
                                      }}
                                  >
                                      <TextLink href={composeEmailLink(item?.email)} style={{
                                          color: '#505AE5'
                                      }}>
                                          Request Quotation
                                      </TextLink>
                                      <a onClick={openLightbox(setLightBoxStatus, setContent, item.logo, item.email)} style={{
                                          color: '#505AE5',
                                          cursor: 'pointer'
                                      }}>View Details</a>
                                  </Box>
                              </Box>
                          </Card.Body>
                      </Card>
                  ))}
              </Box>

              <div>
                  <Text
                      css={{
                          fontWeight: "700",
                          fontSize: "20px",
                          lineHeight: "24px",
                          color: "$black",
                          marginTop: 80,
                      }}
                  >
                      Other Products
                  </Text>
              </div>
              <Box
                  css={{
                      display: "grid",
                      gridAutoRows: "1fr",
                      gridTemplateColumns: "1fr 1fr 1fr",
                      gridGap: "$10 $10",
                      my: "$10",
                      justifyItems: "center",
                      paddingBottom: 60
                  }}
              >
                  {productData.data && productData.data.map((item) => {
                      const imageUrl = `http://localhost:1337${item.attributes.image.data.attributes.url}`;
                      const contentDesc = item.attributes.description;

                      return(
                          <div onClick={openLightbox(setLightBoxStatus, setContent, imageUrl, '', contentDesc)}>
                              <Card
                                  key={item.attributes.title}
                                  variant="bordered"
                                  css={{ borderRadius: 0, borderWidth: 0 }}
                              >
                                  <Card.Body>
                                      <Box
                                          css={{
                                              height: "100%",
                                              display: "grid",
                                              gridAutoColumns: "1fr",
                                              gridTemplateRows: "1fr auto",
                                          }}
                                      >
                                          <Box css={{ display: "flex", alignItems: "center" }}>
                                              <Image src={imageUrl} style={{ height: 200 }}/>
                                          </Box>
                                          <Box
                                              css={{
                                                  marginTop: 12,
                                                  textAlign: 'center'
                                              }}
                                          >
                                              {item.attributes.title} by {item.attributes.principal}
                                              <div>
                                                  {item.attributes.location && item.attributes.location}
                                              </div>
                                          </Box>
                                      </Box>
                                  </Card.Body>
                              </Card>
                          </div>
                      )
                  })}
              </Box>

              {/* Card #3 */}
              <Box
                  css={{
                      display: "grid",
                      gridAutoRows: "1fr",
                      gridTemplateColumns: "25% 1fr",
                      my: "$10",
                      borderTop: "4px solid #E68E67",
                      boxShadow: "0px 4px 4px 0px #0000001A",
                      p: "44px 193px 44px 52px",
                  }}
              >
                  <Box>
                      <Text
                          css={{
                              marginTop: "5px",
                              fontWeight: "700",
                              fontSize: "20px",
                              color: "#E68E67",
                          }}
                      >
                          Contact us for details
                      </Text>
                  </Box>
                  <Box>
                      <Text
                          css={{
                              fontWeight: "400",
                              fontSize: "20px",
                              lineHeight: 1.8,
                              color: "#828282",
                          }}
                      >
                          <b>Jakarta Office</b>
                          <br />
                          Jl. Minangkabau Barat No. 34, <br />
                          Jakarta, Indonesia <br />
                          Phone : (021) 830 5555, 831 8989 <br />
                          Fax : (021) 831 1454 <br />
                          Email : softwareteam@geoservices.co.id <br />
                      </Text>
                  </Box>
              </Box>
          </Box>
      </>
  );
};

export default Software;
