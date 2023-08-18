import React, { useState, useEffect } from "react";

import { Text, Container, Row, Spacer, Card, Image } from "@nextui-org/react";
import { BsArrowRight } from "react-icons/bs";
import Box from "reusables/Box";

import Slider from "react-slick";
import { API_BASE_URL, API_KEY } from "../../pageConstant/general";
import TextLink from "../../reusables/TextLink";

const news = [
  {
    image:
      "https://www.geoservices.co.id/wp-content/uploads/2022/10/Geoservices-Booth-1300x720.jpg",
    category: "News",
    title: "PT Geoservices at IPA 2022 Convention",
    action: "Read",
    url: "/news/pt-geoservices-ipa-2022-convention",
  },
  {
    image:
      "https://www.geoservices.co.id/wp-content/uploads/2019/04/Mineral-analysis.jpg",
    title:
      "Webinar Series With Theme ” The Age of Digital Transformation Part 2",
    category: "Event",
    action: "Read",
      url: "/news/pt-geoservices-ipa-2022-convention",
  },
  {
    image:
      "https://www.geoservices.co.id/wp-content/uploads/2019/04/Mineral-analysis.jpg",
    category: "Video",
    title: "Sludge Oil Liquefaction System (Sols) With Paralax(R)",
    action: "Watch",
      url: "/news/pt-geoservices-ipa-2022-convention",
  },
];

const settings = {
  dots: true,
  dotsClass: "slick-dots slick-thumb",
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const NewsItem = ({ category, title, action, url, image }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "100%",
        }}
      >
        <Image src={image} width={"50%"} height={340} objectFit={"cover"} />
        <div
          style={{
            padding: 40,
            background: "whitesmoke",
            width: "50%",
          }}
        >
          <Text
            css={{
              color: "#363C9A",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "14px",
              lineHeight: "18px",
              marginBottom: 20,
            }}
          >
            {category}
          </Text>
          <Text
            css={{
              color: "#000000",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "32px",
              lineHeight: "39px",
              marginBottom: 60,
            }}
          >
            {title}
          </Text>
          <TextLink
            style={{
              display: "flex",
            }}
            href={url}
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
              {action}
            </Text>
            <BsArrowRight color="#EC1C24" />
          </TextLink>
        </div>
      </div>
    </div>
  );
};

const LatestUpdateSection = () => {
  const [newsData, setNewsData] = useState([]);

  const callAPI = async (setNewsData) => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/news?populate=deep`, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      });
      const data = await res.json();
      setNewsData(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callAPI(setNewsData);
  }, []);

  return (
    <>
      <Box css={{ my: "$20", maxWidth: "1240px", margin: "80px auto" }}>
        {/* TITLE */}
        <Row align="center" gap={4} css={{ mb: "$6" }}>
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
            }}
          >
            Latest Update
          </Text>
        </Row>
        <div
          style={{
            padding: 20,
          }}
        >
          <Slider {...settings}>
            {/* {newsData && newsData.map((item, index) => (*/}
            {/*  <NewsItem*/}
            {/*    key={index}*/}
            {/*    category={'Video'}*/}
            {/*    title={item.attributes.title}*/}
            {/*    action={'Read'}*/}
            {/*    url={item.url || ""}*/}
            {/*    image={'https://www.geoservices.co.id/wp-content/uploads/2019/04/Mineral-analysis.jpg'}*/}
            {/*  />*/}
            {/* ))}*/}
            {news &&
              news.map((item, index) => (
                <NewsItem
                  key={index}
                  category={item.category}
                  title={item.title}
                  action={"Read"}
                  url={item.url || ""}
                  image={item.image}
                />
              ))}
          </Slider>
        </div>
      </Box>
    </>
  );
};

export default LatestUpdateSection;
