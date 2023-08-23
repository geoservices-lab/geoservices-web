import {BreadcrumbMapProps, BreadcrumbProps} from "../reusables/types";
import { createClient } from "@sanity/client";
import { useNextSanityImage } from "next-sanity-image";

export const configuredSanityClient = createClient({
    projectId: "miib670e",
    dataset: "production",
    useCdn: true,
});

export const generateSanityImageUrl = (image: any) => {
    const imageProps = useNextSanityImage(configuredSanityClient, image);
    return imageProps;
};
