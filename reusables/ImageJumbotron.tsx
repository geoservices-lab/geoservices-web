import React from "react";
import Box from "reusables/Box";
import { Image, Text } from "@nextui-org/react";
import { API_BASE_URL } from "../pageConstant/general";
import {createClient} from "@sanity/client";
import {useNextSanityImage} from "next-sanity-image";
import {useRouter} from "next/router";

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
    const router = useRouter();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const imageProps = imageSrc && useNextSanityImage(configuredSanityClient, imageSrc);

  return (
    <Box css={{ width: "100%", position: "relative" }}>
        <div
            style={{
                backgroundImage: `url(${imageProps && imageProps.src})`
            }} className="desktop:h-[391px] h-[240px] w-full object-fill bg-cover">
            <div className="mobile:mt-[80px] w-3/4 mx-auto py-16 desktop:w-full desktop:py-32 desktop:max-w-7xl">
                <h1 className="drop-shadow-lg font-extrabold text-white text-[32px] desktop:text-[70px] capitalize leading-none">
                    {text}
                </h1>
            </div>
        </div>
    </Box>
  );
};

export default ImageJumbotron;
