import { Image, Text } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import Box from "reusables/Box";

const RockDescription = () => {
  const image1 = "/assets/bg-coal-laboratory1.png";
  const vector1 = "/assets/vector-mineral.png";
  const [product, setProductData] = useState([]);
  const [openTab, chooseTab] = useState(1);

  const apiToken =
    "2ec67e19c8e68e464b98e935cbc43d59ea77c11d983120eb3d234d097cd7aff18771692acaa390be0f09bae1a134c6205553c888c90a3a69687edc730d9e92106283f875b54b9530a41124eec5e7fa6410ba4685b12d5b879f2de1f4c87b280d1cf9f979b3b87a7f76fb8bed79acf4d8bf3ec2546666b60cd5c8c44619a79ad4";
  const callAPI = async (setProductData) => {
    try {
      const res = await fetch(`http://localhost:1337/api/geolabs?populate=*`, {
        headers: {
          Authorization: `Bearer ${apiToken}`,
        },
      });
      const data = await res.json();
      console.log(data, "1");
      setProductData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callAPI(setProductData);
  }, []);

  const data = product.data && product.data[0].attributes;
  // const images = data && data.images.data;
  const images = [];

  const handleTab = (index) => () => {
      chooseTab(index);
  }

  return (
    <>
      <Box
        css={{
          marginTop: 60,
          display: "flex",
        }}
      >
        {images &&
          images.map((item) => (
            <div>
              <Image
                src={"http://localhost:1337" + item.attributes.url}
                width={200}
                height={200}
                objectFit={"cover"}
              />
            </div>
          ))}
      </Box>

      <Box
        css={{
            marginTop: 120,
            marginBottom: 80,
          borderTop: "4px solid #E68E67",
          boxShadow: "0px 4px 4px 0px #0000001A",
          p: "44px 193px 44px 52px",
        }}
      >
        {/* first row */}
        <Box css={{
            position: 'relative',
            marginTop: -79.5
        }}>
          <Text
            css={{
              fontWeight: "700",
              fontSize: "16px",
              lineHeight: "24px",
                background: openTab === 1 ? "#E68E67" : 'white',
                color: openTab === 1 ? 'white' : "#E68E67",
                padding: '10px 20px',
                marginBottom: 20,
                display: 'inline-block',
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12
            }}
            onClick={handleTab(1)}
          >
            PRODUCT DESCRIPTION
          </Text>
            <Text
                css={{
                    fontWeight: "700",
                    fontSize: "16px",
                    lineHeight: "24px",
                    background: openTab === 2 ? "#E68E67" : 'white',
                    color: openTab === 2 ? 'white' : "#E68E67",
                    padding: '10px 20px',
                    marginBottom: 20,
                    marginLeft: 20,
                    display: 'inline-block',
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12
                }}
                onClick={handleTab(2)}
            >
                GENERAL INFORMATION
            </Text>
        </Box>
        <Box css={{}}>
            {openTab === 1 && <Text
            css={{
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "30px",
              color: "#828282",
                whiteSpace: "pre-line"
            }}
            dangerouslySetInnerHTML={{__html: data && data.Description}}
          >
          </Text>}
            {openTab === 2 && <Text
                css={{
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "30px",
                    color: "#828282",
                }}
            >
                {data && data.Laboratory}
            </Text>}
            {openTab === 2 && <Text
                css={{
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "30px",
                    color: "#828282",
                }}
            >
                Industry : {data && data.Industry}
            </Text>}
            {openTab === 2 && <Text
                css={{
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "30px",
                    color: "#828282",
                }}
            >
                Location : {data && data.Location}
            </Text>}
        </Box>
      </Box>
    </>
  );
};

export default RockDescription;
