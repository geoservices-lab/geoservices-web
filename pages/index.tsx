import Home from "module/Home";
import BasicLayout from "module/BasicLayout";
import { PageType } from "module/types";
import { HOME as PAGE } from "pageConstant";

const HomePage: PageType = Home;
HomePage.layout = BasicLayout;
HomePage.title = PAGE.title;

export default HomePage;
