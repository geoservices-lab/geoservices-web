import React from "react";
import {createClient} from "@sanity/client";
import {useNextSanityImage} from "next-sanity-image";

const configuredSanityClient = createClient({
    projectId: "miib670e",
    dataset: "production",
    useCdn: true,
});

const SanityImage = ({ image, style }: any) => {
    const imageProps = useNextSanityImage(configuredSanityClient, image);
    return (
        <img src={imageProps ? imageProps.src : ''} width={200} height={120} style={{
            width: '100%',
            objectFit: 'contain',
            marginTop: 40,
            ...style,
        }} />
    );
};

export default SanityImage;
