import React from "react";

const FoodCard = ({ item }) => {
  const { name, recipe, image, price } = item;

  return (
    <div className="card bg-base-100 w-full sm:w-96 shadow-xl">
      <figure>
        <img src={image} alt={name} className="w-full h-56 object-cover" />
      </figure>

      <div className="card-body p-4">
        <h2 className="card-title text-lg font-bold">{name}</h2>
        <p className="text-gray-600 text-sm md:text-base">{recipe}</p>
        <p className="text-xl font-semibold text-amber-500">Price: ${price}</p>

        <div className="flex justify-center mt-4">
          <button className="px-4 py-2 rounded-lg bg-[#E8E8E8] text-[#BB8506] border-b-4 border-[#BB8506] hover:bg-[#BB8506] hover:text-white transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
