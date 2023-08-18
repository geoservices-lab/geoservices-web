import React, { useState } from "react";
import Box from "reusables/Box";
import { Card, Image, Text, Col, Row } from "@nextui-org/react";
import { composeEmailLink, products } from "./constants";
import Slider from "react-slick";

const openLightbox =
  (
      setLightBoxStatus: Function,
      setContent: Function,
      image: string,
      email?: any,
  ) =>
    () => {
      setContent({
      image,
        email: email ? email : {},
      });
      setLightBoxStatus(true);
    };

const closeLightbox = (setLightBoxStatus: Function) => () => {
  setLightBoxStatus(false);
};

const renderLightbox = (
    isActive: boolean,
    setLightBoxStatus: Function,
    content: any
) => (
  <div
    style={{
      display: isActive ? "block" : "none",
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 999,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
    }}
    onClick={closeLightbox(setLightBoxStatus)}
  >
    <div
      style={{
        display: isActive ? "block" : "none",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 1000,
        width: 800,
        backgroundColor: "white",
        padding: 20,
      }}
    >
      <button
        style={{
          color: "white",
          background: "none",
          border: "none",
          fontSize: 21,
          position: "absolute",
          top: -40,
          right: 0,
        }}
      >
        x
      </button>
      {content.image && <img src={content.image} />}
      <div
        style={{
          marginTop: 20,
          color: "gray",
        }}
      >
        Neuralog provides practical and intuitive solutions for the oil and gas
        industry. From scanning, digitizing and printing, to organizing and
        analyzing your data and getting answers about hydrocarbon reserves, each
        step of your workflow is supported with Neuralog Professional Solutions.
        <br />
        <br />
        Each Neuralog product contributes to your interpretation workflow.
        NeuraLog's automated digitizing tools set the industry standards for
        raster-to-vector conversion. NeuraMap calculates Volumetrics and
        Reserves for your digitized map; and also provides interactive map data
        capture tools. NeuraSection's powerful interpretation transforms logs,
        maps, and external data into custom cross sections and montages.
        NeuraScanner with NeuraView is a one-of-a-kind solution for capturing
        and storing valuable paper well logs.
        <br />
        <br />
        Logs can then be printed with the NeuraLaserColor high-speed log
        printer. Neuralog solutions are available to geoscience professionals
        around the world. Neuralog headquarters is located in Houston, Texas,
        the heartland of oil and gas.
        <br />
        <br />
        Neuralog also has direct representatives in North and South America and
        Europe. Neuralog products are used in Schlumberger/GeoQuest data
        conversion service centers worldwide and can be found in over 70
        countries.
      </div>
      <a
        href={
          content.email
            ? composeEmailLink(content.email)
            : composeEmailLink({
                to: "quotation@geoservices.com",
                subject: "",
                body: "",
            })
        }
        style={{
          color: "white",
          backgroundColor: "#363C9A",
          border: "none",
          fontSize: 15,
          padding: "12px 20px",
          marginTop: 20,
          display: "inline-block",
        }}
      >
        Request Quotation
      </a>
    </div>
  </div>
);

const Geolab = () => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const [isActive, setLightBoxStatus] = useState(false);
  const [content, setContent] = useState({});

  return (
    <>
      {renderLightbox(isActive, setLightBoxStatus, content)}
      <Box css={{ mb: "$40" }}>
        {/* Card #2 */}
        <div>
          <Text
            css={{
              fontWeight: "700",
              fontSize: "20px",
              lineHeight: "24px",
              color: "$black",
              marginTop: 80,
              paddingBottom: 20,
            }}
          >
            Highlighted Products
          </Text>
        </div>
        <Box
          css={{
            gridAutoRows: "1fr",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridGap: "$10 $10",
            my: "$10",
            justifyItems: "center",
          }}
        >
          <Slider {...settings}>
            {products?.map((item) => (
              <div
                onClick={openLightbox(setLightBoxStatus, setContent, item.logo)}
              >
                <Image src={item?.logo} />
                <div
                  style={{
                    marginTop: "10px",
                    textAlign: "center",
                  }}
                >
                  {item.name}
                </div>
              </div>
            ))}
          </Slider>
        </Box>
      </Box>
      <Box
        css={{
          display: "grid",
          gridAutoRows: "1fr",
          gridTemplateColumns: "25% 1fr",
          my: "$10",
          borderTop: "4px solid #E68E67",
          boxShadow: "0px 4px 4px 0px #0000001A",
          p: "44px 193px 44px 52px",
        }}
      >
        <Box>
          <Text
            css={{
              marginTop: "5px",
              fontWeight: "700",
              fontSize: "20px",
              color: "#E68E67",
            }}
          >
            Product Description
          </Text>
        </Box>
        <Box>
          <Text
            css={{
              fontWeight: "400",
              fontSize: "15px",
              lineHeight: 1.4,
              color: "#828282",
            }}
          >
            The Geological & Laboratory Services Division business streams
            covering:
            <br />
            <br />
            Biostratigraphic Analysis
            <br />
            Geochemistry Analysis
            <br />
            Rock Description & Sedimentology
            <br />
            Core Analysis
            <br />
            PVT Analysis
            <br />
            <br />
            PT GEOSERVICES internationally known for expertise and reliability
            in all areas of its activities. The growth of the company’s size and
            reputation has been rooted in the excellence of its employees. The
            foundation for this excellence is a long‐terms commitment to the
            development of skills and knowledge, including onshore training of
            local employees and interaction with expatriate consultants who
            relocate to Indonesia for varying periods of time.
            <br />
            <br />
            To facilitate technology transfer PT GEOSERVICES enter into Joint
            Venture of Technical Assistance agreements with foreign‐based
            companies that are recognized as leader in their respective fields.
            The combination of experienced personnel, modern instrumentation,
            extensive staff training and strict quality control procedures has
            gained PT GEOSERVICES worldwide acceptance. Dedication to
            maintaining these high standards in Indonesia ensures that the
            company’s services will enjoy international recognition for any
            years to come.
            <br />
            <br />
            PT GEOSERVICES has philosophy “excellent Services with High
            Professional Integrity”. The Company has gained a high reputation
            among major oil companies in Indonesia.
            <br />
            <br />
            Provider of services through our own laboratories & specialist
            personnel. Affiliations with the best Indonesian & overseas
            specialists, institutions, universities & services providers allow
            us to offer a comprehensive range of ‘state-of-the-art’ services.
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Geolab;
