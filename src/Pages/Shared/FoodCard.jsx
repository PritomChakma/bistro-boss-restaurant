import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const FoodCard = ({ item }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { name, recipe, image, price, _id } = item;
  const handleAddCart = (food) => {
    if (user && user.email) {
      // send item to the database
      console.log(user.email, food);
      const cartItems = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };

axios.post("http://localhost:5000/carts", cartItems)
.then(res =>{
  console.log(res.data)
  if(res.data.insertedId){
    Swal.fire({
      title: `${name} Added Successfully!`,
      icon: "success",
      draggable: true
    });
  }
})

    } else {
      toast.error("Please Login");
      navigate("/login", { state: { from: location } });
    }
  };
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
          <button
            onClick={() => handleAddCart(item)}
            className="px-4 py-2 rounded-lg bg-[#E8E8E8] text-[#BB8506] border-b-4 border-[#BB8506] hover:bg-[#BB8506] hover:text-white transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
