import img from "../../assets/home/chef-service.jpg";

const BistroBossSection = () => {
  return (
    <div
      className="relative bg-cover bg-center w-full h-[450px] bg-fixed"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="flex items-center justify-center h-full ">
        <div className="text-center max-w-xs md:max-w-lg p-3 md:p-8 bg-white shadow-lg rounded-md">
          <h1 className="text-3xl font-bold mb-4">BISTRO BOSS</h1>
          <p className="text-gray-700">
            Welcome to Bistro Boss, where flavors come alive and dining becomes
            an unforgettable experience. Indulge in a culinary journey crafted
            with passion, precision, and the finest ingredients. From exquisite
            appetizers to decadent desserts, every dish is a celebration of
            taste and creativity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BistroBossSection;
