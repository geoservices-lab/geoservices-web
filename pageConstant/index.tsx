import { BreadcrumbMapProps } from "reusables/types";
import { generateBreadcrumb } from "reusables/utilities";
import { default as OIL_AND_GAS } from "./oil_and_gas";

export { default as HOME } from "./home";
export { default as OIL_AND_GAS } from "./oil_and_gas";

const thisBreadcrumb = [
  {
    title: "Home",
    url: "/",
    textColor: "#363C9A",
  },
];

const breadcrumb: BreadcrumbMapProps = {
  // HOME,
  ...generateBreadcrumb(OIL_AND_GAS.breadcrumb, thisBreadcrumb),
};

export const getBreadcrumb = (key: string) => breadcrumb[key];
