import { Link } from "react-router-dom";
import MenuItems from "../Shared/FoodMenu/MenuItems";

const MenuCategory = ({ item }) => {
  const {title}= item
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-4 md:gap-10 my-10">
        {item.map((items) => (
          <MenuItems key={items._id} items={items}></MenuItems>
        ))}
      </div>
      <div className="flex justify-center py-5">
        <Link to={`/foodOrder/${title}`} ><button className="btn btn-outline border-b-4 mt-4">Order Your Favourite Food</button></Link>
      </div>
    </div>
  );
};

export default MenuCategory;
