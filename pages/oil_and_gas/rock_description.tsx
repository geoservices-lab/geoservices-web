import RockDescription from "module/RockDescription";
import { PageType } from "module/types";
import { ROCK_DESCRIPTION as PAGE } from "pageConstant/oil_and_gas";
import { getBreadcrumb } from "pageConstant";
import OilAndGasLayout from "module/BasicLayout/OilAndGasLayout";

const RockDescriptionPage: PageType = RockDescription;
RockDescriptionPage.layout = OilAndGasLayout;
RockDescriptionPage.title = PAGE.title;

export const getStaticProps = async () => {
  const imgBackground = "/assets/bg-rock.png";

  return {
    props: {
      text: "Organic Rock Geochemistry Analyses",
      backgroundImage: imgBackground,
      breadcrumb: getBreadcrumb(PAGE.title),
    },
  };
};

export default RockDescriptionPage;
