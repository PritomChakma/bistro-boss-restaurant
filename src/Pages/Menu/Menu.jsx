import { Helmet } from "react-helmet-async";
import HeadingTitle from "../../Components/Heading/HeadingTitle";
import useMenu from "../../Hook/useMenu";
import Cover from "../Shared/Cover/Cover";
import bannerImg from "../../assets/menu/banner3.jpg"
import MenuCategory from "./MenuCategory";
import dessertImg from "../../assets/menu/dessert-bg.jpeg"; 
import pizzaImg from "../../assets/menu/pizza-bg.jpg"; 
import saladImg from "../../assets/menu/salad-bg.jpg"; 
import soupImg from "../../assets/menu/soup-bg.jpg"; 

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizzas = menu.filter((item) => item.category === "pizza"); 
  const salad = menu.filter((item) => item.category === "salad"); 
  const soup = menu.filter((item) => item.category === "soup"); 

  return (
    <div>
      <Helmet>
        <title>Bistro Boss / Menu</title>
      </Helmet>
      {/* Banner */}
      <Cover
        img={bannerImg} 
        title="OUR MENU"
        description="Would you like to try a dish?"
      ></Cover>
      <HeadingTitle
        subHeading="---Don't miss---"
        heading="TODAY'S OFFER"
      ></HeadingTitle>
      <MenuCategory item={offered}></MenuCategory>

      {/* Dessert */}
      <Cover
        img={dessertImg} 
        title="DESSERTS"
        description="Desserts are sweet treats that bring joy with their variety of flavors and textures, from creamy ice creams to rich cakes and flaky tarts. Perfect for satisfying any sweet tooth!"
      ></Cover>
      <MenuCategory item={desserts}></MenuCategory>

      {/* Pizza */}
      <Cover
        img={pizzaImg} 
        title="PIZZAS"
        description="Savor the irresistible flavors of our freshly baked pizzas, loaded with delicious toppings and served hot to satisfy your cravings!"
      ></Cover>
      <MenuCategory item={pizzas}></MenuCategory> 
      {/* salad */}
      <Cover
        img={saladImg} 
        title="salad"
        description="Salads are refreshing and wholesome dishes made with a variety of fresh vegetables, leafy greens, and often topped with dressings, fruits, nuts, or proteins like chicken or tofu. They’re perfect for a light, nutritious meal or a flavorful side dish!"
      ></Cover>
      <MenuCategory item={salad}></MenuCategory> 
      {/* soup */}
      <Cover
        img={soupImg} 
        title="soup"
        description="Soup is a comforting and flavorful dish, often served warm and made with a delicious blend of ingredients like vegetables, meats, and spices in a savory broth. It's perfect for soothing the soul and warming you up on any day!"
      ></Cover>
      <MenuCategory item={soup}></MenuCategory> 
    </div>
  );
};

export default Menu;
