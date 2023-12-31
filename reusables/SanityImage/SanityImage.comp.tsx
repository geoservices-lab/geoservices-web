import React from "react";
import {createClient} from "@sanity/client";
import {useNextSanityImage} from "next-sanity-image";

const configuredSanityClient = createClient({
    projectId: "miib670e",
    dataset: "production",
    useCdn: true,
});

const SanityImage = ({ image, style, width, height, className }: any) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const imageProps = image && useNextSanityImage(configuredSanityClient, image);

    return (
        <img
            alt={imageProps.src}
            src={imageProps ? imageProps.src : ''}
            width={width ? width : 200}
            height={height ? height : 120}
            className={className}
            style={{
                width: '100%',
                objectFit: 'contain',
                marginTop: 40,
                ...style,
            }}
        />
    );
};

export default SanityImage;
