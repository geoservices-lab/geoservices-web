import React from "react";
import Box from "reusables/Box";
import { Image, Text } from "@nextui-org/react";

const GeochemistryFluidsEnviromental = () => {
  const image1 = "/assets/bg-coal-laboratory1.png";
  const image2 = "/assets/bg-offshore1.png";
  const vector1 = "/assets/vector-pump.png";

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
          Geochemistry, Fluid & Environmetal{" "}
        </Text>
        <Text
          css={{
            fontWeight: "400",
            fontSize: "20px",
            lineHeight: "24px",
            color: "#828282",
            my: "$10",
          }}
        >
          Maturity Analyses <br />
          Source Rock Evaluation <br />
          Seep & Outcrop Sampling <br />
          Oil & Gas Analyses <br />
          Source Rock to Oil/Gas Correlation <br />
          Fingerprints Analysis <br />
          Reservoir Fluid (PVT) Analysis <br />
          CO2 swelling and slim tube study <br />
          Water & Environmental <br />
        </Text>
      </Box>

      {/* second row */}
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
          Synthesis and Interpretation
        </Text>
        <Text
          css={{
            fontWeight: "400",
            fontSize: "20px",
            lineHeight: "24px",
            color: "#828282",
            my: "$10",
          }}
        >
          Exploration & Development phase <br />
          Stratigraphic <br />
          Correlation & Sequence Interpretation <br />
          Geochemical basin Modeling & Petroleum <br />
          System Interpretation <br />
        </Text>
      </Box>
      <Box>
        <Image
          src={image2}
          objectFit="cover"
          height={600}
          containerCss={{
            borderRadius: "0",
          }}
          css={{}}
        />
      </Box>
    </Box>
  );
};

export default GeochemistryFluidsEnviromental;
