import { FaTrash } from "react-icons/fa"; // Import the trash icon
import useCart from "../../../Hook/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hook/useAxiosSecure";

const Cart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const roundedPrice = totalPrice.toFixed(2);

  // Handle delete button click
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }
        });
      }
    });
    refetch();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-6 rounded-lg shadow mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Total Orders: {cart.length}
        </h2>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Total Price: <span className="text-green-600">$ {roundedPrice}</span>
        </h2>
        <button className="btn btn-primary bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg mt-4 md:mt-0">
          Pay Now
        </button>
      </div>

      {/* Cart Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y table-auto bg-white rounded-lg shadow">
          <thead className="bg-[#EF4C53] text-white">
            <tr>
              <th className="px-6 py-3 text-sm font-semibold text-left">
                #
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-left">
                Item Image
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-left">
                Category
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-left">
                Price
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {cart.map((post, index) => (
              <tr
                key={post._id}
                className="hover:bg-gray-50 transition-colors duration-200"
              >
                <td className="px-6 py-4 text-gray-800 font-medium">
                  {index + 1} {/* Serial Number */}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    {post.image && (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded-lg border shadow-sm"
                      />
                    )}
                    <span className="font-medium text-gray-800">
                      {post.title}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-700">
                  {new Date(post.deadLine).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 text-gray-800 font-medium">
                  ${post.price}
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDelete(post._id)}
                    className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105"
                  >
                    <FaTrash />
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
