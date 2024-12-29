import MenuItems from "../Shared/FoodMenu/MenuItems";

const MenuCategory = ({ item }) => {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-4 md:gap-10 my-10">
        {item.map((items) => (
          <MenuItems key={items._id} items={items}></MenuItems>
        ))}
      </div>
      <div className="flex justify-center py-5">
        <button className="border-b-4">Order Your Favourite Food</button>
      </div>
    </div>
  );
};

export default MenuCategory;
