// import React, { useEffect, useState } from "react";
import HeadingTitle from "../../Components/Heading/HeadingTitle";
import useMenu from "../../Hook/useMenu";
import MenuItems from "../Shared/FoodMenu/MenuItems";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category == "popular");

  return (
    <div>
      <HeadingTitle
        subHeading={"<---Check it out--->"}
        heading={"FROM OUR MENU"}
      ></HeadingTitle>

      <div className="grid md:grid-cols-2 gap-4 md:gap-10 my-10">
        {popular.map((items) => (
          <MenuItems key={items._id} items={items}></MenuItems>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
