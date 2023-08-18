import React from "react";
import {
  Text,
  Container,
  Image,
  Row,
  Col,
  Spacer,
  Card,
} from "@nextui-org/react";
import { BsArrowRight } from "react-icons/bs";
import Box from "reusables/Box";
import { styles } from "./Home.styles";
import TextLink from "../../reusables/TextLink";

const data = [
  {
    image: "/assets/bg-coal1.png",
    icon: "/assets/cart2-vector.png",
    title: "COAL LABORATORY",
    desc: "Highly trained and experienced Indonesian staff perform all work in duplicate, in accordance with internationally accepted standards: ASTM, British Standard (BS), and International Standards (ISO), that was the Geoservices coal laboratory begin.",
    url: "/coal",
  },
  {
    image: "/assets/bg-coal2.png",
    icon: "/assets/cart2-vector.png",
    title: "MINERAL LABORATORY",
    desc: "Highly trained and experienced Indonesian staff perform all work in duplicate, in accordance with internationally accepted standards: ASTM, British Standard (BS), and International Standards (ISO), that was the Geoservices coal laboratory begin.",
    url: "/#",
  },
  {
    image: "/assets/bg-coal3.png",
    icon: "/assets/cart2-vector.png",
    title: "GEOTHERMAL",
    desc: "Highly trained and experienced Indonesian staff perform all work in duplicate, in accordance with internationally accepted standards: ASTM, British Standard (BS), and International Standards (ISO), that was the Geoservices coal laboratory begin.",
    url: "/geothermal",
  },
];

const renderSectionRow = (
    title: string,
    desc: string,
    imageBackground: string,
    icon: string,
    isReverse: boolean,
    url?: string,
) => (
  <Row style={isReverse ? styles.sectionRowReverse : styles.sectionRow}>
    <Col span={16}>
      <Image
        src={imageBackground}
        objectFit="contain"
        containerCss={{
          borderRadius: "0",
        }}
      />
    </Col>
    <Col css={styles.sectionRowContent}>
      <Row align="center">
        <Image width={109} height={98} src={icon} containerCss={{ m: 0 }} />
      </Row>

      <Row>
        <Text css={styles.sectionRowTitle}>{title}</Text>
      </Row>
      <Spacer y={1} />

      <Row>
        <Text css={styles.sectionRowDesc}>{desc}</Text>
      </Row>

      <Row align="flex-end" css={{ height: "100%" }}>
        <Card
          isPressable
          variant="flat"
          css={{
            width: "fit-content",
            backgroundColor: "white",
          }}
        >
          {/* // @ts-ignore*/}
          <TextLink href={url} css={styles.sectionRowAction}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
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
                }}
              >
                View More
              </Text>
              <BsArrowRight color="#EC1C24" />
            </div>
          </TextLink>
        </Card>
      </Row>
    </Col>
  </Row>
);

const OurSpecialtySection = () => (
  <Container xl css={{ p: 0, overflow: "hidden" }}>
    <Container css={{ maxWidth: "1240px" }}>
      <Row align="center" gap={0} css={{ my: "$6" }}>
        <Box
          css={{ width: "56px", height: "3px", backgroundColor: "#363C9A" }}
        />
        <Text
          css={{
            fontStyle: "normal",
            fontWeight: "300",
            fontSize: "50px",
            lineHeight: "61px",
            color: "#E68E67",
            marginLeft: "36px",
          }}
        >
          Our Specialties
        </Text>
      </Row>
      {data.map((item, index) => {
        const { title, desc, image, icon, url } = item;
        return renderSectionRow(title, desc, image, icon, index % 2 === 1, url);
      })}
    </Container>
  </Container>
);

export default OurSpecialtySection;
