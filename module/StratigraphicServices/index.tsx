import React from "react";
import Box from "reusables/Box";
import { Image, Text } from "@nextui-org/react";

const StratigraphicServices = () => {
  const image1 = "/assets/bg-coal-laboratory2.png";
  const vector1 = "/assets/research-vector.png";

  return (
    <Box
      css={{
        display: "grid",
        gridAutoRows: "1fr",
        gridTemplateColumns: "1fr 1fr",
        my: "$20",
        justifyItems: "center",
      }}
    >
      {/* first row */}
      <Box>
        <Image
          src={image1}
          objectFit="cover"
          height={600}
          containerCss={{
            borderRadius: "0",
          }}
          css={{}}
        />
      </Box>
      <Box
        css={{
          backgroundColor: "#F8F8F8",
          width: "100%",
          px: "136px",
          pt: "55px",
          pb: "35px",
        }}
      >
        <Image
          src={vector1}
          objectFit="cover"
          containerCss={{
            borderRadius: "0",
          }}
          css={{ width: "64px", height: "64px" }}
        />
        <Text
          css={{
            fontWeight: "700",
            fontSize: "20px",
            lineHeight: "24px",
            color: "#4F4F4F",
            my: "$10",
          }}
        >
          Rock Description
        </Text>
        <Text
          css={{
            fontWeight: "400",
            fontSize: "20px",
            lineHeight: "24px",
            color: "#828282",
            my: "$15",
          }}
        >
          Biostratigraphy (Exploration & Production Phase) <br />
          Lithostratigraphy <br />
          Chemostratigraphy <br />
          Environmental & Event Stratigraphy <br />
          Synthesis & Correlation <br />
        </Text>
      </Box>
    </Box>
  );
};

export default StratigraphicServices;
