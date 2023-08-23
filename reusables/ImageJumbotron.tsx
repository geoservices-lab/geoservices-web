import React from "react";
import Box from "reusables/Box";
import { Image, Text } from "@nextui-org/react";
import { API_BASE_URL } from "../pageConstant/general";
import {createClient} from "@sanity/client";
import {useNextSanityImage} from "next-sanity-image";

export interface ImageJumbotronProps {
  imageSrc: string;
  height?: string;
  objectPosition?: string;
  text: string;
}

const configuredSanityClient = createClient({
    projectId: "miib670e",
    dataset: "production",
    useCdn: true,
});

const ImageJumbotron = ({
  imageSrc,
  height = "391px",
  objectPosition = "0",
  text = "",
}: ImageJumbotronProps) => {
    const imageProps = useNextSanityImage(configuredSanityClient, imageSrc);

  return (
    <Box css={{ width: "100%", position: "relative" }}>
        <img
            src={API_BASE_URL + '/uploads/overlay_d705da266e.png'}
            style={{
                width: '100%',
                height: 390,
                position: 'absolute',
                zIndex: 1,
                objectFit: 'cover'
            }}
        />
      <Image
        src={imageProps && imageProps.src}
        objectFit="cover"
        height={height}
        containerCss={{
          borderRadius: "0",
          background: "rgba(0, 0, 0, 0.3)",
        }}
        css={{
          zIndex: "-1",
          objectPosition: `${objectPosition}`,
          position: "relative",
        }}
      />
      <Text
        css={{
          position: "absolute",
          top: "40%",
          left: "140px",
          color: "$white",
          // fontFamily: "Plus Jakarta Sans",
          fontStyle: "normal",
          fontWeight: "800",
          fontSize: "60px",
          lineHeight: "76px",
          width: "80%",
          textTransform: "uppercase",
            zIndex: 2
        }}
      >
        {text}
      </Text>
    </Box>
  );
};

export default ImageJumbotron;
