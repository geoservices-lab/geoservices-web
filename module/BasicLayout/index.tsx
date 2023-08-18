import { Container } from "@nextui-org/react";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { BasicLayoutProps } from "./type";

const BasicLayout = ({ children }: BasicLayoutProps) => {
  return (
    <>
      <Header />
      <Container xl css={{ m: 0, p: 0 }}>
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default BasicLayout;
