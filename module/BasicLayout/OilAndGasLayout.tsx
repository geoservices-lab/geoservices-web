import { Container } from "@nextui-org/react";
import React from "react";
import Box from "reusables/Box";
import BreadCrumbLine from "reusables/BreadcrumbLine";
import ImageJumbotron from "reusables/ImageJumbotron";
import Footer from "./Footer";
import Header from "./Header";
import { OilAndGasLayoutProps } from "./type";

const OilAndGasLayout = ({
  children,
  backgroundImage,
  text,
  breadcrumb,
  jumbotronShift,
}: OilAndGasLayoutProps) => {
  return (
    <>
      <Header />
      <Box>
        <ImageJumbotron
          imageSrc={backgroundImage}
          text={text}
          objectPosition={jumbotronShift}
        />
        <Container css={{ my: "10px", maxWidth: '1240px' }}>
          <BreadCrumbLine items={breadcrumb} />
          {children}
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default OilAndGasLayout;
