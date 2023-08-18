import GFS from "module/GeochemistryFluidsEnviromental";
import { PageType } from "module/types";
import { GFE as PAGE } from "pageConstant/oil_and_gas";
import { getBreadcrumb } from "pageConstant";
import OilAndGasLayout from "module/BasicLayout/OilAndGasLayout";

const GFSPage: PageType = GFS;
GFSPage.layout = OilAndGasLayout;
GFSPage.title = PAGE.title;

export const getStaticProps = async () => {
  const imgBackground = "/assets/bg-mine1.png";

  return {
    props: {
      text: "Geochemistry, Fluid & Environmetal",
      backgroundImage: imgBackground,
      breadcrumb: getBreadcrumb(PAGE.title),
    },
  };
};

export default GFSPage;
