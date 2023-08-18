import React from "react";

import {
  Text,
  Container,
  Row,
  Col,
  Spacer,
  Card,
  Image,
} from "@nextui-org/react";
import { BsArrowRight } from "react-icons/bs";
import Box from "reusables/Box";

const UpcomingTrainingSection = () => {
  const imgBackground = "/assets/bg-training.png";

  return (
    <Row
      css={{
        width: "100%",
        position: "relative",
        background: '#505AE5',
      }}
    >
      {/*<Image*/}
      {/*  src={imgBackground}*/}
      {/*  objectFit="fill"*/}
      {/*  height="400px"*/}
      {/*  containerCss={{*/}
      {/*    width: "100%",*/}
      {/*    borderRadius: "0",*/}
      {/*  }}*/}
      {/*  css={{ zIndex: "-1", opacity: 0.4 }}*/}
      {/*/>*/}
      <Box css={{
          maxWidth: '1240px',
          margin: '0 auto',
          paddingTop: 40,
          paddingBottom: 80
      }}>
        {/* TITLE */}
        <Row justify="space-between" align="center" css={{pr: '50px'}}>
          <Row align="center" gap={4} css={{ my: "$6" }}>
            <Box
              css={{ width: "56px", height: "3px", backgroundColor: "#F2F2F2" }}
            />
            <Text
              css={{
                fontStyle: "normal",
                fontWeight: "300",
                fontSize: "50px",
                lineHeight: "61px",
                color: "#F2F2F2",
              }}
            >
              Upcoming Training
            </Text>
          </Row>

          <Card
            isPressable
            css={{
              width: "200px",
              my: "$6",
              p: "10px 10px 10px 10px",
            }}
          >
            <Container
              css={{
                p: 0,
                width: "fit-content",
                display: "flex",
                flexDirection: "column",
                flexFlow: "initial",
                alignItems: "center",
              }}
            >
              <Text css={{ mr: "$10" }}>View All</Text>
              <BsArrowRight color="#EC1C24" />
            </Container>
          </Card>
        </Row>

        <Box
          css={{
            display: "grid",
            gridAutoColumns: "1fr",
            gridTemplateColumns: "1fr 1fr 1fr",
          }}
        >
          {/* CARD 1 */}
          <Col
            css={{
              px: "$5",
              height: "100%",
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Card
              css={{
                backgroundColor: "transparent",
                height: "100%",
                border: "1px white solid",
                borderRadius: "10px",
                p: "10px 10px 10px 20px",
                maxWidth: '400px',
              }}
            >
              <Row css={{ pt: "$10" }}>
                <Text
                  css={{
                    color: "#F2F2F2",

                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "24px",
                    lineHeight: "29px",
                  }}
                >
                  Konversi Batubara
                </Text>
              </Row>
              <Spacer y={1} />

              <Row>
                <Text
                  css={{
                    color: "#F2F2F2",

                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "19px",
                  }}
                >
                  May 17 @ 8:00 am - May 18 @ 5:00 pm
                </Text>
              </Row>

              <Spacer y={2} />
              <Row align="flex-end" css={{ height: "100%" }}>
                <Card
                  isPressable
                  variant="flat"
                  css={{
                    width: "fit-content",
                    backgroundColor: "transparent",
                    p: "10px 10px 10px 10px",
                  }}
                >
                  <Container
                    css={{
                      p: 0,
                      width: "fit-content",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      css={{
                        mr: "$10",
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "16px",
                        lineHeight: "20px",
                        color: "#F2F2F2",
                      }}
                    >
                      Register
                    </Text>
                    <BsArrowRight color="#EC1C24" />
                  </Container>
                </Card>
              </Row>
            </Card>
          </Col>

          {/* CARD 2 */}
          <Col
            css={{
              px: "$5",
              height: "100%",
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Card
              css={{
                backgroundColor: "transparent",
                height: "100%",
                border: "1px white solid",
                borderRadius: "10px",
                p: "10px 10px 10px 20px",
                maxWidth: '400px'
              }}
            >
              <Row css={{ pt: "$10" }}>
                <Text
                  css={{
                    color: "#F2F2F2",

                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "24px",
                    lineHeight: "29px",
                  }}
                >
                  Jaminan Mutu Data Hasil Pengujian
                </Text>
              </Row>
              <Spacer y={1} />

              <Row>
                <Text
                  css={{
                    color: "#F2F2F2",

                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "19px",
                  }}
                >
                  May 17 @ 8:00 am - May 18 @ 5:00 pm
                </Text>
              </Row>

              <Spacer y={2} />
              <Row align="flex-end" css={{ height: "100%" }}>
                <Card
                  isPressable
                  variant="flat"
                  css={{
                    width: "fit-content",
                    backgroundColor: "transparent",
                    p: "10px 10px 10px 10px",
                  }}
                >
                  <Container
                    css={{
                      p: 0,
                      width: "fit-content",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      css={{
                        mr: "$10",
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "16px",
                        lineHeight: "20px",
                        color: "#F2F2F2",
                      }}
                    >
                      Register
                    </Text>
                    <BsArrowRight color="#EC1C24" />
                  </Container>
                </Card>
              </Row>
            </Card>
          </Col>

          {/* CARD 3 */}
          <Col
            css={{
              px: "$5",
              height: "100%",
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Card
              css={{
                backgroundColor: "transparent",
                height: "100%",
                border: "1px white solid",
                borderRadius: "10px",
                p: "10px 10px 10px 20px",
                maxWidth: '400px'
              }}
            >
              <Row css={{ pt: "$10" }}>
                <Text
                  css={{
                    color: "#F2F2F2",

                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "24px",
                    lineHeight: "29px",
                  }}
                >
                  Geofisika untuk eksplorasi emas
                </Text>
              </Row>
              <Spacer y={1} />

              <Row>
                <Text
                  css={{
                    color: "#F2F2F2",

                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "19px",
                  }}
                >
                  May 17 @ 8:00 am - May 18 @ 5:00 pm
                </Text>
              </Row>

              <Spacer y={2} />
              <Row align="flex-end" css={{ height: "100%" }}>
                <Card
                  isPressable
                  variant="flat"
                  css={{
                    width: "fit-content",
                    backgroundColor: "transparent",
                    p: "10px 10px 10px 10px",
                  }}
                >
                  <Container
                    css={{
                      p: 0,
                      width: "fit-content",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      css={{
                        mr: "$10",
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "16px",
                        lineHeight: "20px",
                        color: "#F2F2F2",
                      }}
                    >
                      Register
                    </Text>
                    <BsArrowRight color="#EC1C24" />
                  </Container>
                </Card>
              </Row>
            </Card>
          </Col>
        </Box>
      </Box>
    </Row>
  );
};

export default UpcomingTrainingSection;
