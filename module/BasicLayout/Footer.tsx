import React from "react";
import { Container, Row, Spacer, Text } from "@nextui-org/react";
import Image from "next/image";
import Box from "reusables/Box";

const Footer = () => {
  const logo = "/assets/logo2.png";

  return (
      <Row css={{ borderTop: '1px solid gainsboro' }}>
    <Row
      css={{
        mt: "$10",
        mb: "$40",
        display: "grid",
        gridAutoRows: "1fr",
        gridTemplateColumns: "50% 1fr 1fr",
          maxWidth: '1240px',
      }}
    >
      <Row
        css={{
          width: "fit-content",
          display: "flex",
          flexDirection: "column",
          left: "20%",
        }}
      >
        <Image
          src={logo}
          width="200px"
          height="60px"
          alt="logo"
          objectFit="contain"
        />
        <Text
          css={{
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "20px",
              marginTop: '12px',
              marginLeft: '7px'
          }}
        >
          Copyright © 2022 - PT Geoservices
        </Text>
      </Row>

      <Box css={{ paddingTop: '20px' }}>
        <Text css={{ fontSize: "16px", color: "#000000" }}>Jakarta Office</Text>
        <Spacer y={0.5} />
        <Text css={{ fontSize: "16px", color: "#828282", lineHeight: 1.5 }}>
          Jl. Minangkabau Barat No. 34,
            <br/>
          Jakarta, Indonesia
            <br/>
          Phone : (021) 830 5555, 831 8989
            <br/>
          Fax : (021) 831 1454
            <br/>
          Email : jktbranch@geoservices.co.id
        </Text>
      </Box>

      <Box css={{ paddingTop: '20px' }}>
        <Text css={{ fontSize: "16px", color: "#000000" }}>Bandung Office</Text>
        <Spacer y={0.5} />
        <Text css={{ fontSize: "16px", color: "#828282", lineHeight: 1.5 }}>
          Jl. Setiabudhi No. 81,

          {" "}
          Bandung, Jawa Barat, Indonesia
            <br/>
          Phone : (022) 203 1316, 203 5436
            <br/>
          Fax : (022) 203 8090
            <br/>
          Email : bdgoff@geoservices.co.id
        </Text>
      </Box>
    </Row>
      </Row>
  );
};

export default Footer;
