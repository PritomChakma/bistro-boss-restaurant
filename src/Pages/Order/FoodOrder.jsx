import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css"; // Default styles for react-tabs
import bannerImg from "../../assets/shop/banner2.jpg";
// import useMenu from "../../Hook/useMenu";
import Cover from "../Shared/Cover/Cover";
import FoodTabs from "../Shared/FoodTabs";

import { useLoaderData } from "react-router-dom";
// import useMenu from "../../Hook/useMenu";

const FoodOrder = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const menu = useLoaderData()
  console.log(menu);
  // const [menu] = useMenu();
  // const [menu, setMenu]= useState([])
  // console.log(menu);
  const drinks = menu.filter((item) => item.category === "drinks");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");





  return (

    <div>
      {/* Banner */}
      <Cover
        img={bannerImg}
        title="OUR MENU"
        description="Would you like to try a dish?"
      ></Cover>

      {/* Tabs Section */}
      <div className="container mx-auto my-10 px-4">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          {/* Tab Titles */}
          <TabList className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6">
            <Tab className="px-4 py-2 text-sm md:text-base border rounded-lg cursor-pointer ">
              Salad
            </Tab>
            <Tab className="px-4 py-2 text-sm md:text-base border rounded-lg cursor-pointer">
              Pizza
            </Tab>
            <Tab className="px-4 py-2 text-sm md:text-base border rounded-lg cursor-pointer">
              Soups
            </Tab>
            <Tab className="px-4 py-2 text-sm md:text-base border rounded-lg cursor-pointer">
              Desserts
            </Tab>
            <Tab className="px-4 py-2 text-sm md:text-base border rounded-lg cursor-pointer">
              Drinks
            </Tab>
          </TabList>

          {/* Tab Panels */}
          <TabPanel>
            <FoodTabs items={salad}></FoodTabs>
          </TabPanel>
          <TabPanel>
            <FoodTabs items={pizza}></FoodTabs>
          </TabPanel>
          <TabPanel>
            <FoodTabs items={soup}></FoodTabs>
          </TabPanel>
          <TabPanel>
            <FoodTabs items={desserts}></FoodTabs>
          </TabPanel>
          <TabPanel>
            <FoodTabs items={drinks}></FoodTabs>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default FoodOrder;