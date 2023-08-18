import { default as CORE_ANALYSIS } from "./core_analysis";
import { default as GFE } from "./geochemistry_fluids_enviromental";
import { default as ROCK_DESCRIPTION } from "./rock_description";
import { default as STRATIGRAPGIC_SERVICES } from "./stratigraphic_services";
import { default as PVT } from "./pvt";
import { default as SOFTWARE } from "./software";
import { default as GEOLAB } from "./geolab";
import { generateBreadcrumb } from "reusables/utilities";

export { default as CORE_ANALYSIS } from "./core_analysis";
export { default as GFE } from "./geochemistry_fluids_enviromental";
export { default as ROCK_DESCRIPTION } from "./rock_description";
export { default as STRATIGRAPGIC_SERVICES } from "./stratigraphic_services";
export { default as PVT } from "./pvt";
export { default as SOFTWARE } from "./software";
const thisBreadcrumb = [
  {
    title: "Oil and Gas",
    url: "/oil_and_gas",
  },
];

const breadcrumb = {
  "Oil and Gas": thisBreadcrumb,
  ...generateBreadcrumb(CORE_ANALYSIS.breadcrumb, thisBreadcrumb),
  ...generateBreadcrumb(GFE.breadcrumb, thisBreadcrumb),
  ...generateBreadcrumb(ROCK_DESCRIPTION.breadcrumb, thisBreadcrumb),
  ...generateBreadcrumb(STRATIGRAPGIC_SERVICES.breadcrumb, thisBreadcrumb),
  ...generateBreadcrumb(PVT.breadcrumb, thisBreadcrumb),
  ...generateBreadcrumb(SOFTWARE.breadcrumb, thisBreadcrumb),
};

export default {
  title: "Oil and Gas",
  url: "/oil_and_gas",
  breadcrumb,
  CORE_ANALYSIS,
  GFE,
  ROCK_DESCRIPTION,
  STRATIGRAPGIC_SERVICES,
  PVT,
  SOFTWARE,
  GEOLAB,
};
