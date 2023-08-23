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
    console.log(data);

  const imageProps = useNextSanityImage(configuredSanityClient, data.image);
  const imgCart = "/assets/cart-vector.png";
  const imgResearch = "/assets/research-vector.png";
  const imgSearch = "/assets/search-vector.png";

  console.log(imageProps);

  return (
    <>
      <Box css={{ position: "relative", background: "black" }}>
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
                {data.title}
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
                {data.description}
            </Text>
          </Row>
        </Container>
      </Box>

      <Container
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
      </Container>
    </>
  );
};

export default EnergyEvolutionSection;
