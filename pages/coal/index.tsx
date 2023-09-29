import React from "react";
import { Container } from "@nextui-org/react";
import Header from "../../module/BasicLayout/Header";
import ImageJumbotron from "../../reusables/ImageJumbotron";
import BreadCrumbLine from "../../reusables/BreadcrumbLine";
import Contact from "../../reusables/Contact/Contact";
import Footer from "../../module/BasicLayout/Footer";
import BoxItem from "../../reusables/BoxItem/BoxItem";

const breadcrumbData = () => [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Coal and Minerals",
    url: "/coal",
    textColor: "rgb(230, 142, 103)",
  },
];

const menu = [
  {
    id: 1,
    label: "Coal Laboratory",
    url: "/coal/laboratory",
  },
  {
    id: 2,
    label: "Marine Superintending",
    url: "/coal/marine_superintending",
  },
  {
    id: 3,
    label: "Mechanical Sampling Systems",
    url: "/coal/mechanical_sampling_systems",
  },
  {
    id: 4,
    label: "Equipment Supply",
    url: "/coal/equipment_supply",
  },
  {
    id: 5,
    label: "Lube and Fuel Analysis",
    url: "/coal/lube_and_fuel_analysis",
  },
  {
    id: 6,
    label: "Training",
    url: "/coal/training",
  },
];

const Coal = () => {
  return (
    <div>
      <Header />
      {/*<ImageJumbotron*/}
      {/*  imageSrc={*/}
      {/*    "https://strapi-g3gp.onrender.com/uploads/overlay_d705da266e.png"*/}
      {/*  }*/}
      {/*  text={"Coal and Minerals"}*/}
      {/*/>*/}
      <Container css={{ my: "10px", maxWidth: "1240px" }}>
        <BreadCrumbLine items={breadcrumbData()} />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          {menu.map((item, index) => {
            return <BoxItem key={index} label={item.label} url={item.url} />;
          })}
        </div>
        <Contact />
      </Container>
      <div className="pt-28">
        <Footer />
      </div>
      
    </div>
  );
};

export default Coal;
