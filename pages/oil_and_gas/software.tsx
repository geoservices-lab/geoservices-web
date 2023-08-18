import Software from "module/Software";
import { PageType } from "module/types";
import { SOFTWARE as PAGE } from "pageConstant/oil_and_gas";
import { getBreadcrumb } from "pageConstant";
import OilAndGasLayout from "module/BasicLayout/OilAndGasLayout";

const SoftwarePage: PageType = Software;
SoftwarePage.layout = OilAndGasLayout;
SoftwarePage.title = PAGE.title;

export const getStaticProps = async () => {
  const imgBackground = "/assets/bg-software.png";

  return {
    props: {
      text: "Software",
      backgroundImage: imgBackground,
      breadcrumb: getBreadcrumb(PAGE.title),
    },
    revalidate: 10,
  };
};

export default SoftwarePage;
