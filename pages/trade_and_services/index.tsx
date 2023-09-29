import React from "react";
import { Container } from "@nextui-org/react";
import Header from "../../module/BasicLayout/Header";
import ImageJumbotron from "../../reusables/ImageJumbotron";
import BreadCrumbLine from "../../reusables/BreadcrumbLine";
import Tab from "../../reusables/Tab/Tab";
import Contact from "../../reusables/Contact/Contact";
import Footer from "../../module/BasicLayout/Footer";
import Banner from "pages/about-us/Component/banner";

const breadcrumbData = () => [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Trade and Services",
    url: "/trade_and_services",
    textColor: "rgb(230, 142, 103)",
  },
];

const tabItems = [
  {
    id: 1,
    title: "Introduction",
    key: "introduction",
    content: {
      data:
        "PT GEOSERVICES started their Inspection Services (including Cargo Superintending) in 1989, 18 years after the company’s inception. The first shipment consisted of 65,000 tons of coal from the BHP Mines in South and East Kalimantan. In 2002, the company accounted for 45% of all Indonesian coal export superintending.\n" +
        "Inspection certificates from PT GEOSERVICES are widely recognized as having the assurance of integrity. They are accepted and valued by trading houses, sellers, buyers, producers, banks, and governments.\n" +
        "Based on the long-term success in coal superintending, PT GEOSERVICES have expanded their high quality services into other fields over the past decades.\n" +
        "PT GEOSERVICES is licensed by PERTAMINA to provide quality and quantity surveys for Crude Oil, Condensate, LPG, Petroleum Products, and Petrochemicals.",
    },
  },
  {
    id: 2,
    title: "Service",
    key: "service",
    content: {
      data: [
        {
          id: 1,
          title: "Scope of Services for Petroleum & Gas",
          content:
            "- Loading and discharging supervision" +
            "- Bunker / ROB survey\n" +
            "- Ship to ship transfer\n" +
            "- Pipe line transfer\n" +
            "- Pre-shipment inspection\n" +
            "- Sampling and expediting around the word\n" +
            "- Tanks cleanliness inspection\n" +
            "- Cargo inventory\n" +
            "- Cargoes Handled:\n" +
            "- Crude Oil & Condensates\n" +
            "- Refined petroleum products\n" +
            "- Liquefied Gas\n" +
            "- Chemicals\n" +
            "- Petrochemical products\n",
        },
        {
          id: 2,
          title: "Scope of Services for Metals and Minerals",
        },
        {
          id: 3,
          title: "Scope of Services for Agricultural Products",
        },
        {
          id: 4,
          title: "Scope of services for Collateral Management",
        },
        {
          id: 5,
          title: "Scope of services for Stock Monitoring",
        },
        {
          id: 6,
          title: "Scope of services for Palm Oil Inspection",
        },
      ],
    },
  },
  {
    id: 3,
    title: "Certificate",
    key: "certificate",
    content: {
      data: "certificate",
    },
  },
];

const TradeServices = () => {
  return (
    <div>
      <Header />
      <Banner/>
      <Container css={{ my: "10px", maxWidth: "1240px" }}>
        <BreadCrumbLine items={breadcrumbData()} />
        <Tab tabItems={tabItems} />
        {/* <Contact /> */}
      </Container>
      <div className="pt-28">
        <Footer />
      </div>
      
    </div>
  );
};

export default TradeServices;
