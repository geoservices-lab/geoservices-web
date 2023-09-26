import React from "react";
import Header from "../../../module/BasicLayout/Header";
import ImageJumbotron from "../../../reusables/ImageJumbotron";
import { Container } from "@nextui-org/react";
import BreadCrumbLine from "../../../reusables/BreadcrumbLine";
import Tab from "../../../reusables/Tab/Tab";
import Contact from "../../../reusables/Contact/Contact";
import Footer from "../../../module/BasicLayout/Footer";
import {useRouter} from "next/router";

const breadcrumbData = (title: string) => [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "News",
    url: "/news",
  },
  {
    title: title,
    url: "/#",
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
        "Established in 1977, the Geothermal Division has participated in drilling and scientific data collection pertaining to exploration wells in the Dieng Plateau, Kamojang, and other geothermal fields in Indonesia.\n" +
        "\n" +
        "The operation of subsurface instrumentation for geothermal well study began in 1978. All equipment is privately owned and operated by PT GEOSERVICES personnel. The engineers have been factory-trained by the Kuster Company (California) and the Geophysical Research Corporation (Oklahoma).\n" +
        "\n" +
        "In conjunction with associated divisions, the Geothermal Division provides a complete services package, including surface study, drilling, engineering, well study, and production testing.",
    },
  },
  {
    id: 2,
    title: "Services",
    key: "services",
    content: {
      data: [
        {
          id: 1,
          title: "WELL MEASUREMENT",
          content:
            "Static Formation Temperature Testing\n" +
            "Water Loss Testing\n" +
            "Injectivity Testing\n" +
            "Pressure Fall-off Testing\n" +
            "Pressure Build-up Testing\n" +
            "Pressure and Temperature Monitoring during heating-up periods\n" +
            "Pressure and Temperature Monitoring while flowing",
        },
        {
          id: 2,
          title: "PRODUCTION TESTING",
          content:
            "Flow Rate Measurement\n" +
            "Enthalpy Measurement\n" +
            "Pressure Build-up Testing\n" +
            "Gas, Water, & Condensate\n" +
            "Water and Gas Analysis\n" +
            "Sampling (field and laboratory)",
        },
        {
          id: 3,
          title: "CALIBRATION AND REPAIR",
          content: "Operation of Mechanical Downhole Equipment",
        },
        {
          id: 4,
          title: "VALVE MAINTENANCE",
          content:
            "Installation\n" +
            "Cleaning and Inspection\n" +
            "Routine Maintenance\n" +
            "Nitrogen Purging\n" +
            "Pressure Testing",
        },
        {
          id: 5,
          title: "H2S SAFETY MONITORING",
          content: "Safety and H2S",
        },
      ],
    },
  },
  {
    id: 3,
    title: "Equipment",
    key: "equipment",
    content: {
      data:
        "To meet the most challenging demands for geothermal engineering services, this division maintains a range of reliable downhole instruments and surface facilities that are supported by a comprehensive calibration workshop:\n" +
        "- Mathey hydraulic winch with stainless steel /carpenter wire up to 20,000ft(3 units)\n" +
        "- Kuster subsurface pressure, temperature, sampler and flowmeter (9 units)\n" +
        "- Chart Reader for pressure, temperature and flowmeter measurements (3 units)\n" +
        "- Calibrations Units, Dead Weight tester, Hot air, Oil bath, and Manometer\n" +
        "- H2S Monitoring System (2 units)",
    },
  },
];

const NewsDetail = () => {
  const { query } = useRouter();
  const title = query.id ? query.id.replaceAll("-", " ") : "";

  return (
    <div>
      <Header />
      <ImageJumbotron
        imageSrc={
          "https://www.geoservices.co.id/wp-content/uploads/2022/10/Geoservices-Booth-1300x720.jpg"
        }
        text={title}
      />
      <Container css={{ my: "10px", maxWidth: "1240px" }}>
        <BreadCrumbLine items={breadcrumbData(title)} />
        <div style={{
          fontSize: 18,
          color: "grey",
          lineHeight: 2,
          marginTop: 40,
          marginBottom: 40,
          padding: 7
        }}>
          {tabItems[0].content.data}
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default NewsDetail;
