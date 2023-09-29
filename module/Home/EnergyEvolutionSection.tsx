import React from "react";
import {
  Text,
  Container,
  Image,
  Row,
  Col,
  Card,
} from "@nextui-org/react";
import Box from "reusables/Box";
import { useNextSanityImage } from "next-sanity-image";

const EnergyEvolutionSection = ({ configuredSanityClient, data }: any) => {
  const imageProps = data && useNextSanityImage(configuredSanityClient, data.image);
  const imgCart = "/assets/cart-vector.png";
  const imgResearch = "/assets/research-vector.png";
  const imgSearch = "/assets/search-vector.png";

  return (
    <>
      <div 
        style={{
        backgroundImage: `url(${imageProps && imageProps.src})`,
        }} className="h-[680px] w-full object-fill bg-cover">
          <div className="backdrop-blur-sm w-full h-full relative">
             <div className="max-w-7xl w-full mx-auto py-32 px-8">
                <h1 className="font-extrabold text-[40px] desktop:text-[70px] capitalize">
                {data && data.title}
                </h1>
                <p className="pt-8 font-normal text-justify text-[14px] desktop:text-[20px] desktop:w-1/2">
                {data && data.description}
                </p>
            </div>  
          </div>
      </div>

      <div
      className="relative w-4/5 bg-white rounded-xl px-8 gap-12 text-justify mx-auto -mt-64 desktop:-mt-[140px] desktop:flex flex-col-3 desktop:max-w-7xl" 
      >
          <div className="flex-col">
              <div className="gap-4 desktop:gap-4 inline-flex items-center">
                  <div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 mt-[20px] text-peach">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                      </svg>
                  </div>
                  <div className="items-center">
                      <h1 className="font-bold text-blue text-[14px] mt-[20px] leading-[19px] py-8 desktop:text-[18px]">SINCE 1971</h1>
                  </div>
              </div>
              <div>
                  <div>
                      <p className="text-[14px] text-gray leading-6 desktop:text-[18px]">
                      Founded in 1971 to offer services to the mining industry, PT
                      Geoservices evolved into a fully integrated exploration
                      services company.</p>
                  </div>
              </div>
          </div>

          <div className="flex-col">
              <div className="gap-4 desktop:gap-4 inline-flex items-center">
                  <div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 mt-[20px] text-peach">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                      </svg>
                  </div>
                  <div className="items-center">
                      <h1 className="font-bold text-blue text-[14px] mt-[20px] leading-[19px] py-8 desktop:text-[18px]">1500+ PEOPLE</h1>
                  </div>
              </div>
              <div>
                  <div>
                      <p className="text-[14px] text-gray leading-6 desktop:text-[18px]">
                          Employing more than 1500 people, some of which are expert in
                          specialized fields from a number of foreign countries,
                      </p>
                  </div>
              </div>  
          </div>

          <div className="flex-col">
              <div className="gap-4 desktop:gap-4 inline-flex items-center">
                  <div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 mt-[20px] text-peach">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                      </svg>
                  </div>
                  <div className="items-center">
                      <h1 className="font-bold text-blue text-[14px] mt-[20px] leading-[19px] py-8 desktop:text-[18px]">OUR FOCUS</h1>
                  </div>
              </div>
              <div>
                  <div>
                      <p className="text-[14px] text-gray leading-6 desktop:text-[18px]">
                          Our specialties are mapping surveys, geology, geophysics,
                          downhole measurements, borehole drilling, laboratories
                          analysis, and cargo superintending
                      </p>
                  </div>
              </div>
          </div>
      
      </div>
      {/* <Box css={{ position: "relative", background: "black" }}>
        <Image
          src={imageProps && imageProps.src}
          objectFit="cover"
          height="680px"
          containerCss={{
            width: "100%",
            borderRadius: "0",
          }}
          css={{ zIndex: "-1", opacity: 1 }}
        />
        <Container
          css={{
            position: "absolute",
            top: "0",
            left: "0",
          }}
        >
          <Row
            css={{
              position: "relative",
              paddingTop: "120px",
              left: "5%",
              display: "block",
              gridAutoRows: "1fr",
              overflowWrap: "break-word",
            }}
            gap={2}
          >
            <Text
              css={{
                fontSize: "60px",
                fontWeight: "800",
                lineHeight: "76px",
                letterSpacing: "0em",
                textAlign: "left",
                color: "$black",
                marginTop: "7px",
              }}
            >
                {data && data.title}
            </Text>
          </Row>
          <Row
            css={{
              paddingTop: 20,
              position: "relative",
              left: "5%",
              display: "block",
              width: 600,
              overflowWrap: "break-word",
            }}
            gap={2}
          >
            <Text
              css={{
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: 1.8,
                color: "$black",
              }}
            >
                {data && data.description}
            </Text>
          </Row>
        </Container>
      </Box> */}

      {/* <Container
        css={{ top: "-150px", position: "relative", maxWidth: "1240px" }}
      >
        <Row
          css={{
            display: "grid",
            gridAutoColumns: "1fr",
            gridTemplateColumns: "1fr 1px 1fr 1px 1fr",
          }}
        >
          <Col>
            <Card
              variant="bordered"
              css={{
                minHeight: "200px",
                borderRadius: "$lg 0px 0px $lg",
                overflow: "hidden",
                border: "none",
              }}
            >
              <Container>
                <Row align="center">
                  <Col css={{ width: "fit-content", height: "120px" }}>
                    <Image
                      width={109}
                      height={98}
                      src={imgSearch}
                      containerCss={{ m: 0, marginTop: "20px" }}
                    />
                  </Col>
                  <Col>
                    <Text
                      css={{
                        color: "#363C9A",
                        marginTop: 20,
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "16px",
                        lineHeight: "19px",
                        letterSpacing: "0.01em",
                      }}
                    >
                      SINCE 1971
                    </Text>
                  </Col>
                </Row>
                <Row>
                  <Text
                    css={{
                      color: "#828282",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "20px",
                      lineHeight: 1.5,
                      mx: "$7",
                    }}
                  >
                    Founded in 1971 to offer services to the mining industry, PT
                    Geoservices evolved into a fully integrated exploration
                    services company.
                  </Text>
                </Row>
              </Container>
            </Card>
          </Col>

          <Col css={{ height: "100%", backgroundColor: "$white" }}>
            <Container
              css={{
                my: "30px",
                p: 0,
                height: "100%",
                backgroundColor: "#E0E0E0",
              }}
            />
          </Col>

          <Col>
            <Card
              variant="bordered"
              css={{
                minHeight: "200px",
                borderRadius: "0px 0px 0px 0px",
                overflow: "hidden",
                border: "none",
              }}
            >
              <Container>
                <Row align="center">
                  <Col css={{ width: "fit-content", height: "120px" }}>
                    <Image
                      width={109}
                      height={98}
                      src={imgCart}
                      containerCss={{ m: 0, marginTop: "20px" }}
                    />
                  </Col>
                  <Col>
                    <Text
                      css={{
                        color: "#363C9A",
                        marginTop: 20,
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "16px",
                        lineHeight: "19px",
                        letterSpacing: "0.01em",
                      }}
                    >
                      1500++ PEOPLE
                    </Text>
                  </Col>
                </Row>
                <Row>
                  <Text
                    css={{
                      color: "#828282",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "20px",
                      lineHeight: 1.5,
                      mx: "$7",
                    }}
                  >
                    Employing more than 1500 people, some of which are expert in
                    specialized fields from a number of foreign countries,
                  </Text>
                </Row>
              </Container>
            </Card>
          </Col>

          <Col css={{ height: "100%", backgroundColor: "$white" }}>
            <Container
              css={{
                my: "30px",
                p: 0,
                height: "100%",
                backgroundColor: "#E0E0E0",
              }}
            />
          </Col>

          <Col>
            <Card
              variant="bordered"
              css={{
                minHeight: "200px",
                border: "none",
                borderRadius: "0 $lg $lg 0",
                overflow: "hidden",
              }}
            >
              <Container>
                <Row align="center">
                  <Col css={{ width: "fit-content", height: "120px" }}>
                    <Image
                      width={109}
                      height={98}
                      src={imgResearch}
                      containerCss={{ m: 0, marginTop: "20px" }}
                    />
                  </Col>
                  <Col>
                    <Text
                      css={{
                        color: "#363C9A",
                        marginTop: 20,
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "16px",
                        lineHeight: "19px",
                        letterSpacing: "0.01em",
                      }}
                    >
                      OUR FOCUS
                    </Text>
                  </Col>
                </Row>
                <Row>
                  <Text
                    css={{
                      color: "#828282",

                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "20px",
                      lineHeight: 1.5,
                      mx: "$7",
                    }}
                  >
                    Our specialties are mapping surveys, geology, geophysics,
                    downhole measurements, borehole drilling, laboratories
                    analysis, and cargo superintending
                  </Text>
                </Row>
              </Container>
            </Card>
          </Col>
        </Row>
      </Container> */}
    </>
  );
};

export default EnergyEvolutionSection;
