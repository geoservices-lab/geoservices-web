import OilAndGasLayout from "module/BasicLayout/OilAndGasLayout";
import CoreAnalysis from "module/CoreAnalysis";
import { PageType } from "module/types";
import { CORE_ANALYSIS as PAGE } from "pageConstant/oil_and_gas";
import { getBreadcrumb } from "pageConstant";

const CoreAnalysisPage: PageType = CoreAnalysis;
CoreAnalysisPage.layout = OilAndGasLayout;
CoreAnalysisPage.title = PAGE.title;

export const getStaticProps = async () => {
  const imgBackground = "/assets/bg-energyevolution.png";

  return {
    props: {
      text: "CORE ANALYSIS",
      backgroundImage: imgBackground,
      breadcrumb: getBreadcrumb(PAGE.title),
      jumbotronShift: "0 -350px",
    },
  };
};

export default CoreAnalysisPage;
