import HeadingTitle from "../../../Components/Heading/HeadingTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "../FeaturedItem/Featured.css";

const FeaturedItems = () => {
  return (
    <div className="featured-items py-7 my-20 bg-fixed bg-slate-500 bg-opacity-40">
      <HeadingTitle
        subHeading="<---Check it out--->"
        heading="FROM OUR MENU"
      ></HeadingTitle>

      <div className="md:flex justify-center items-center gap-8 pb-20 pt-10 px-5 md:px-10 lg:px-32 text-white">
        {/* Image Section */}
        <div className="flex justify-center md:w-1/2">
          <img
            className="w-full md:w-auto py-5 object-cover"
            src={featuredImg}
            alt="Featured Item"
          />
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="uppercase text-sm md:text-base">March 20, 2023</h3>
          <p className="text-sm md:text-base lg:text-lg leading-relaxed mt-4">
            WHERE CAN I GET SOME? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Error voluptate facere, deserunt dolores maiores
            quod nobis quas quasi. Eaque repellat recusandae ad laudantium
            tempore consequatur consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="mt-5 px-6 py-2 bg-white text-slate-500 uppercase text-sm rounded hover:bg-opacity-90">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItems;
