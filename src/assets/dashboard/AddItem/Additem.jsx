import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import HeadingTitle from "../../../Components/Heading/HeadingTitle";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import useAxiosSecure from "../../../Hook/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Additem = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log("Submitted Data:", data);

      // Image upload to imgbb
      const formData = new FormData();
      formData.append("image", data.image[0]);

      const res = await axiosPublic.post(image_hosting_api, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.success) {
        const menuItem = {
          name: data.recipe, // Fixed the key name for clarity
          category: data.category,
          price: parseFloat(data.price),
          image: res.data.data.display_url, // URL from imgbb response
          details: data.recipeDetails, // Added to include recipe details
        };

        // Send the menu item to the server
        const menuRes = await axiosSecure.post("/menu", menuItem);

        console.log("Server Response:", menuRes.data);

        if (menuRes.data.insertedId) {
          alert("Item successfully added!");
          reset(); // Reset the form after successful submission
        } else {
          alert("Failed to add the item!");
        }
      } else {
        alert("Image upload failed!");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An error occurred while adding the item!");
    }
  };

  return (
    <div>
      <HeadingTitle subHeading={"<---What's New--->"} heading={"Add an Item"} />

      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-10 bg-white rounded-lg shadow-md w-full max-w-3xl mx-auto"
        >
          {/* Recipe Name */}
          <div className="mb-4">
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Recipe Name
            </label>
            <input
              {...register("recipe", { required: true })}
              type="text"
              placeholder="Enter recipe name"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Category and Price */}
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            {/* Category */}
            <div className="w-full">
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                Category
              </label>
              <select
                {...register("category", { required: true })}
                className="select select-bordered w-full"
                required
              >
                <option disabled value="default">
                  Select Category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>

            {/* Price */}
            <div className="w-full">
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                Price
              </label>
              <input
                {...register("price", { required: true })}
                type="number"
                placeholder="Enter price"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>

          {/* Recipe Details */}
          <div className="mb-4">
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Recipe Details
            </label>
            <textarea
              {...register("recipeDetails", { required: true })}
              rows="5"
              placeholder="Enter recipe details"
              className="textarea textarea-bordered w-full"
              required
            ></textarea>
          </div>

          {/* File Input */}
          <div className="mb-4">
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Upload Recipe Image
            </label>
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input file-input-bordered w-full"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button type="submit" className="btn bg-[#d1a054] text-white">
              Add Item <FaUtensils />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Additem;
