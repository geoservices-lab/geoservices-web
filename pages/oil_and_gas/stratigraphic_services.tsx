import StratigraphicServices from "module/StratigraphicServices";
import { PageType } from "module/types";
import { STRATIGRAPGIC_SERVICES as PAGE } from "pageConstant/oil_and_gas";
import { getBreadcrumb } from "pageConstant";
import OilAndGasLayout from "module/BasicLayout/OilAndGasLayout";

const StratigraphicServicesPage: PageType = StratigraphicServices;
StratigraphicServicesPage.layout = OilAndGasLayout;
StratigraphicServicesPage.title = PAGE.title;

export const getStaticProps = async () => {
  const imgBackground = "/assets/bg-equipment.png";

  return {
    props: {
      text: "Stratigraphic Services",
      backgroundImage: imgBackground,
      breadcrumb: getBreadcrumb(PAGE.title),
    },
  };
};

export default StratigraphicServicesPage;
