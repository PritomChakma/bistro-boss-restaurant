import { Helmet } from "react-helmet-async";
import MenuBanner from "./MenuBanner";
import PopularMenu from "../Home/PopularMenu";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss / Menu</title>
      </Helmet>
      <MenuBanner></MenuBanner>
      <PopularMenu></PopularMenu>
      <MenuBanner></MenuBanner>
      <PopularMenu></PopularMenu>
      <MenuBanner></MenuBanner>
      <PopularMenu></PopularMenu>
      <MenuBanner></MenuBanner>
      <PopularMenu></PopularMenu>
      <MenuBanner></MenuBanner>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Menu;
