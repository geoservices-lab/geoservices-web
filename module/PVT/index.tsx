import React from "react";
import Box from "reusables/Box";
import { Image, Text } from "@nextui-org/react";

const PVT = () => {
  const image1 = "/assets/bg-personlab1.png";
  const image2 = "/assets/bg-personlab2.png";
  const vector1 = "/assets/research-vector.png";
  const vector2 = "/assets/vector-pump.png";

  return (
    <Box css={{ mb: "$40" }}>
      <Box
        css={{
          display: "grid",
          gridAutoRows: "1fr",
          gridTemplateColumns: "auto auto",
          my: "$20",
          justifyItems: "center",
        }}
      >
        {/* first row */}
        <Box css={{ width: "100%" }}>
          <Image
            src={image1}
            objectFit="fill"
            height={600}
            containerCss={{
              borderRadius: "0",
            }}
            css={{
              width: "100%",
              height: "100%",
              display: "block",
              objectFit: "cover",
            }}
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
            ROUTINE PVT STUDY
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
            Sample Validity <br />
            Compositions (GC) <br />
            Constant Composition Expansion (CCE) <br />
            Differential Vaporization (DV) <br />
            Constant Volume Depletion (CVD) <br />
            Depletion Study <br />
            Separator Test <br />
            Viscosity <br />
            Water Analysis & Environment <br />
            Assay Analysis <br />
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
            src={vector2}
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
            SPECIALIZED PVT STUDY
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
            Swelling test <br />
            Slim tube test <br />
            Wax Appearance temperature <br />
          </Text>
        </Box>
        <Box css={{ width: "100%" }}>
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

      {/* Card #1 */}
      <Box
        css={{
          display: "grid",
          gridAutoRows: "1fr",
          gridTemplateColumns: "25% 1fr",
          my: "$10",
          borderTop: "4px solid #D3252C",
          boxShadow: "0px 4px 4px 0px #0000001A",
          p: "44px 193px 44px 52px",
        }}
      >
        <Box css={{ mr: "$10" }}>
          <Text
            css={{
              fontWeight: "700",
              fontSize: "20px",
              lineHeight: "24px",
              color: "#D3252C",
            }}
          >
            PVT with FULL VISUAL CELL EQUIPMENT
          </Text>
        </Box>
        <Box css={{}}>
          <Text
            css={{
              fontWeight: "400",
              fontSize: "20px",
              lineHeight: "24px",
              color: "#828282",
            }}
          >
            Vinci’s visual fluid eval <br />
            100% viewing of fluid sample in normal PVT Cell <br />
            Liquid deposit accuracy 0.005 ml <br />
            Temperature up to 200 degC <br />
            Pressure up to 25,000 psi <br />
            Mercury free operation <br />
            Video camera system for recording PVT experiments in real time
            <br />
            Precision positioning of Cell during swelling test <br />
          </Text>
        </Box>
      </Box>

      {/* Card #2 */}
      <Box
        css={{
          display: "grid",
          gridAutoRows: "1fr",
          gridTemplateColumns: "25% 1fr",
          my: "$10",
          borderTop: "4px solid #D3252C",
          boxShadow: "0px 4px 4px 0px #0000001A",
          p: "44px 193px 44px 52px",
        }}
      >
        <Box css={{ mr: "$10" }}>
          <Text
            css={{
              fontWeight: "700",
              fontSize: "20px",
              lineHeight: "24px",
              color: "#D3252C",
            }}
          >
            ON‐SITE MEASUREMENTS
          </Text>
        </Box>
        <Box css={{}}>
          <Text
            css={{
              fontWeight: "400",
              fontSize: "20px",
              lineHeight: "24px",
              color: "#828282",
            }}
          >
            Fluid sampling <br />
            On‐site Measurement <br />
            R‐SH, CS, CO2, mercury, moisture, H2S, CO2) <br />
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default PVT;
