import React, { useEffect, useState } from "react";
import HeadingTitle from "../../Components/Heading/HeadingTitle";
import MenuItems from "../Shared/FoodMenu/MenuItems";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const menuItems = data.filter((item) => item.category == "popular");
        setMenu(menuItems);
      });
  }, []);
  console.log(menu);
  return (
    <div>
      <HeadingTitle
        subHeading={"<---Check it out--->"}
        heading={"FROM OUR MENU"}
      ></HeadingTitle>

      <div className="grid md:grid-cols-2 gap-4 md:gap-10">
        {menu.map((items) => (
          <MenuItems key={items._id} items={items}></MenuItems>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
