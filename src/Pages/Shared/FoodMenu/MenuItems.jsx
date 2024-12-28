const MenuItems = ({ items }) => {
  const { name, recipe, image, category, price } = items;
  return (
    <div className="flex space-x-2 items-center w-11/12 mx-auto"> 
      <img style={{borderRadius: "0 200px 200px 200px"}} src={image} alt="" className="w-[104px]" />
      <div>
        <h2 className="font-semibold">{name}</h2>
        <p>{recipe}</p>
      </div>

      <p className="text-[#BB8506]">${price}</p>
    </div>
  );
};

export default MenuItems;
